import { ErrorField } from '@/components/ErrorField';
import { Frame } from '@/components/full-page-forms/FullPageForm';
import NumberInWords from '@/components/NumberInWords';
import { RupeeField } from '@/components/RupeeField';
import { Dispatch, useCallback, useState } from 'react';
import { createCommutationChangedAction } from '../reducer';
import { CommutationChangedAction, Field } from '../types';

type CommutationsFrameProps = {
  value: Field<string>;
  dispatch: Dispatch<CommutationChangedAction>;
};

function CommutationsFrame({ value, dispatch }: CommutationsFrameProps) {
  const [showError, setShowError] = useState(false);
  const canMoveForward = useCallback(() => {
    dispatch(createCommutationChangedAction(value.value));
    setShowError(true);
    return value.isValid;
  }, [value.isValid, value.value, dispatch]);
  return (
    <Frame canMoveForward={canMoveForward}>
      <>
        <div className="font-extrabold">Commutation Portion</div>
        <RupeeField
          value={value.value}
          onChange={(value) => dispatch(createCommutationChangedAction(value))}
        />
        <NumberInWords className="text-lg font-extralight mt-5" value={value.value}></NumberInWords>
        {value.isValid === false && showError && <ErrorField>{value.error}</ErrorField>}
      </>
    </Frame>
  );
}

export { CommutationsFrame };
