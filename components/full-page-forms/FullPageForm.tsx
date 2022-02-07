import React, {
  FunctionComponentElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import css from './FullPageForm.module.css';

type Position = 'active' | 'prev' | 'next';

type FrameInternalProps = {
  state: Position;
  onPrevClicked?: () => void;
  onNextClicked?: () => void;
};

type FrameContextValue = FrameInternalProps;

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

const FrameInternal: React.FC<FrameInternalProps> = ({
  state,
  onPrevClicked,
  onNextClicked,
  children,
}) => {
  const styles = getStyles(state);

  const callBackRef = useCallback(
    (node) => {
      state === 'active' && node && node.querySelector('input')?.focus();
    },
    [state]
  );

  return (
    <li ref={callBackRef} style={styles} className={`${css['frame']}`}>
      {children}
      <div className={`${css['action-bar']}`}>
        {onPrevClicked ? (
          <button
            type="button"
            className={`${css['action-button']} primary-button`}
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
            className={`${css['action-button']} primary-button`}
            onClick={onNextClicked}
          >
            Next
          </button>
        )}
      </div>
    </li>
  );
};

const FullPageFormContext = React.createContext<FrameContextValue>({
  state: 'active',
});

const useFullPageForm = () => useContext(FullPageFormContext);

export const Frame: React.FC<{ canMoveForward?: () => boolean }> = ({
  canMoveForward: canMoveNext = () => true,
  children,
}) => {
  const { state, onNextClicked: moveNext, onPrevClicked: movePrevious } = useFullPageForm();
  return (
    <FrameInternal
      onNextClicked={() => canMoveNext() && moveNext()}
      onPrevClicked={movePrevious}
      state={state}
    >
      {children}
    </FrameInternal>
  );
};

Frame.displayName = 'Frame';

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      className={`${css['close-button']}`}
      aria-label="Toggle Menu"
      onClick={() => onClose()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`${css['fill-current-color']}`}
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

const FullPageForm: React.FC<{
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  children: FunctionComponentElement<{ canMoveNext: () => boolean }>[];
  className?: string;
}> = ({ title, onClose, onSubmit, children, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const childrenCount = React.Children.count(children);
  const moveNext = useCallback(() => {
    if (index + 1 === childrenCount) {
      onSubmit();
    }
    setIndex((index) => {
      if (index + 1 < childrenCount) {
        return index + 1;
      } else {
        return index;
      }
    });
  }, [childrenCount, index, onSubmit]);
  const movePrevious = useCallback(() => setIndex((index) => (index > 0 ? index - 1 : 0)), []);

  return (
    <div className={`${css['full-page-form-container']} ${className}`}>
      <div className={`${css['full-page-form']}`}>
        <div className={`${css['close-button-container']}`}>
          <CloseButton onClose={onClose} />
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <form
            autoComplete="off"
            autoCorrect="off"
            onKeyDown={(ev) => ev.key === 'Enter' && moveNext()}
          >
            <ol className={`${css['list-style']}`}>
              {React.Children.map(children, (child, cIndex) => {
                if (!React.isValidElement(child) || cIndex < index - 1 || cIndex > index + 1) {
                  return null;
                }

                return (
                  <FullPageFormContext.Provider
                    value={{
                      onPrevClicked: cIndex !== 0 ? movePrevious : null,
                      onNextClicked: moveNext,
                      state: cIndex === index ? 'active' : cIndex === index - 1 ? 'prev' : 'next',
                    }}
                  >
                    {child}
                  </FullPageFormContext.Provider>
                );
              })}
            </ol>
          </form>
        </div>
      </div>
    </div>
  );
};

FullPageForm.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type.displayName !== Frame.displayName) {
        error = new Error(
          '`' +
            componentName +
            '` children should be of type `Frame`. It was ' +
            child.type.displayName
        );
      }
    });
    return error;
  },
};

export default FullPageForm;
