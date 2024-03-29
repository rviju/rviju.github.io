import { Frame } from '@/components/full-page-forms/FullPageForm';
import { Dispatch } from 'react';
import { createRetirementYearChangedAction } from '../reducer';
import { RetirementYearChangedAction } from '../types';

type RetirementYearFrameProps = {
  value: number;
  dispatch: Dispatch<RetirementYearChangedAction>;
  options: string[];
};

function RetirementYearFrame({ value, dispatch, options }: RetirementYearFrameProps) {
  return (
    <Frame>
      <>
        <label className="text-3xl font-extrabold leading-9 tracking-tight">
          Retirement Year?
          <select
            className="w-full text-black mt-5"
            value={value}
            onChange={(ev) =>
              dispatch(createRetirementYearChangedAction(parseInt(ev.target.value, 10)))
            }
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

export { RetirementYearFrame };
