import React, { ReactNode, useCallback, useEffect, useState } from 'react';

type Position = 'active' | 'prev' | 'next';
function getStyles(state: Position) {
  switch (state) {
    case 'active':
      return { transform: 'translateY(0)' };
    case 'prev':
      return { transform: 'translateY(-200vh)' };
    case 'next':
      return { transform: 'translateY(200vh)' };
  }
}

const FrameInternal: React.FC<{
  state: Position;
  onPrevClicked?: () => void;
  onNextClicked?: () => void;
}> = ({ state, onPrevClicked, onNextClicked, children }) => {
  const styles = getStyles(state);

  const callBackRef = useCallback(
    (node) => {
      state === 'active' && node && node.querySelector('input')?.focus();
    },
    [state]
  );

  return (
    <li
      ref={callBackRef}
      style={styles}
      className={'absolute transition-transform ease-in-out p-10 w-full left-0'}
    >
      {children}
      <div className="flex justify-between">
        {onPrevClicked ? (
          <button
            type="button"
            className="rounded-3xl px-6 py-3 mt-6 w-fit bg-cyan-500 text-sm"
            onClick={onPrevClicked}
          >
            Previous
          </button>
        ) : (
          <span></span>
        )}
        {onNextClicked && (
          <button
            type="button"
            className="rounded-3xl px-6 py-3 mt-6 w-fit bg-cyan-500 text-sm"
            onClick={onNextClicked}
          >
            Next
          </button>
        )}
      </div>
    </li>
  );
};

export const Frame: React.FC = ({ children }) => {
  return <>{children}</>;
};

function FullPageForm({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const childrenCount = React.Children.count(children);
  const moveNext = useCallback(
    () => setIndex((index) => (index + 1 < childrenCount ? index + 1 : index)),
    [childrenCount]
  );
  const movePrevious = useCallback(() => setIndex((index) => (index > 0 ? index - 1 : 0)), []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex flex-col items-center
                 justify-start text-black bg-white dark:bg-gray-900 dark:text-white"
    >
      <div className="py-5 flex flex-row w-full justify-end">
        <button
          type="button"
          className="w-8 h-8 py-1 mr-4 rounded"
          aria-label="Toggle Menu"
          onClick={() => onClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-cyan-600 dark:text-cyan-500"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <form
          autoComplete="off"
          autoCorrect="off"
          className="text-4xl"
          onKeyDown={(ev) => ev.key === 'Enter' && moveNext()}
        >
          <ol className="list-none">
            {React.Children.map(children, (child, cIndex) => {
              if (!React.isValidElement(child) || cIndex < index - 1 || cIndex > index + 1) {
                return null;
              }

              return (
                <FrameInternal
                  onPrevClicked={cIndex !== 0 ? movePrevious : null}
                  onNextClicked={cIndex + 1 !== childrenCount ? moveNext : null}
                  state={cIndex === index ? 'active' : cIndex === index - 1 ? 'prev' : 'next'}
                >
                  {child}
                </FrameInternal>
              );
            })}
          </ol>
        </form>
      </div>
    </div>
  );
}

export default FullPageForm;
