import { ErrorField } from '@/components/ErrorField';
import { Frame } from '@/components/full-page-forms/FullPageForm';
import { Hint } from '@/components/Hint';
import NumberInWords from '@/components/NumberInWords';
import { Dispatch, useCallback, useState } from 'react';
import { RupeeField } from '../../../components/RupeeField';
import { createDeductionsChangedAction } from '../reducer';
import { DeductionsChangedAction, Field } from '../types';

type DeductionsFrameProps = {
  value: Field<string>;
  dispatch: Dispatch<DeductionsChangedAction>;
};

function DeductionsFrame({ value, dispatch }: DeductionsFrameProps) {
  const [showError, setShowError] = useState(false);
  const canMoveForward = useCallback(() => {
    dispatch(createDeductionsChangedAction(value.value));
    setShowError(true);
    return value.isValid;
  }, [value.isValid, value.value, dispatch]);
  return (
    <Frame canMoveForward={canMoveForward}>
      <>
        <div className="font-extrabold">
          Annual Deductions
          <Hint>
            Include 80c, medicalim, hra, loss on home prop, LTA, Interest exemption as applicable
            for old regime computation
          </Hint>
        </div>
        <RupeeField
          value={value.value}
          onChange={(value) => dispatch(createDeductionsChangedAction(value))}
        />
        <NumberInWords className="text-lg font-extralight mt-5" value={value.value}></NumberInWords>
        {value.isValid === false && showError && <ErrorField>{value.error}</ErrorField>}
      </>
    </Frame>
  );
}

export { DeductionsFrame };
