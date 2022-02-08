import { Frame } from '@/components/full-page-forms/FullPageForm';
import { Dispatch } from 'react';
import { createAgeChangedAction } from '../reducer';
import { AgeChangedAction } from '../types';

type AgeFrameProps = {
  value: number;
  options: string[];
  dispatch: Dispatch<AgeChangedAction>;
};

function AgeFrame({ value, dispatch, options }: AgeFrameProps) {
  return (
    <Frame>
      <>
        <label className="text-3xl font-extrabold leading-9 tracking-tight">
          Your Age?
          <select
            className="w-full text-black"
            value={value}
            onChange={(ev) => dispatch(createAgeChangedAction(parseInt(ev.target.value, 10)))}
          >
            {options.map((option, index) => (
              <option key={option} value={index + 1}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </>
    </Frame>
  );
}

export { AgeFrame };
