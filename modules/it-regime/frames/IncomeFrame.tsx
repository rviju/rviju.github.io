import { ErrorField } from '@/components/ErrorField';
import { Frame } from '@/components/full-page-forms/FullPageForm';
import { Hint } from '@/components/Hint';
import NumberInWords from '@/components/NumberInWords';
import { Dispatch, useCallback, useState } from 'react';
import { RupeeField } from '../../../components/RupeeField';
import { createIncomeChangedAction } from '../reducer';
import { Field, IncomeChangedAction } from '../types';

type IncomeFrameProps = {
  value: Field<string>;
  dispatch: Dispatch<IncomeChangedAction>;
};

function IncomeFrame({ value, dispatch }: IncomeFrameProps) {
  const [showError, setShowError] = useState(false);
  const canMoveForward = useCallback(() => {
    dispatch(createIncomeChangedAction(value.value));
    setShowError(true);
    return value.isValid;
  }, [value.isValid, value.value, dispatch]);
  return (
    <Frame canMoveForward={canMoveForward}>
      <>
        <div className="text-3xl font-extrabold leading-9 tracking-tight">
          Annual Income from all Sources
        </div>
        <Hint>
          Include income from all sources such as interest, rental, salaried or pension as
          applicable
        </Hint>
        <RupeeField
          value={value.value}
          onChange={(value) => dispatch(createIncomeChangedAction(value))}
        />
        <NumberInWords className="text-lg font-extralight mt-5" value={value.value}></NumberInWords>
        {value.isValid === false && showError && <ErrorField>{value.error}</ErrorField>}
      </>
    </Frame>
  );
}

export { IncomeFrame };
