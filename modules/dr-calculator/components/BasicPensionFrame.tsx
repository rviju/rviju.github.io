import { ErrorField } from '@/components/ErrorField';
import { Frame } from '@/components/full-page-forms/FullPageForm';
import NumberInWords from '@/components/NumberInWords';
import { RupeeField } from '@/components/RupeeField';
import { Dispatch, useCallback, useState } from 'react';
import { createBasicPensionChangedAction } from '../reducer';
import { BasicPensionChangedAction, Field } from '../types';

type BasicPensionFrameProps = {
  value: Field<string>;
  dispatch: Dispatch<BasicPensionChangedAction>;
};

function BasicPensionFrame({ value, dispatch }: BasicPensionFrameProps) {
  const [showError, setShowError] = useState(false);
  const canMoveForward = useCallback(() => {
    dispatch(createBasicPensionChangedAction(value.value));
    setShowError(true);
    return value.isValid;
  }, [value.isValid, value.value, dispatch]);
  return (
    <Frame canMoveForward={canMoveForward}>
      <>
        <div className="text-3xl font-extrabold leading-9 tracking-tight">Basic Pension</div>
        <RupeeField
          value={value.value}
          onChange={(value) => dispatch(createBasicPensionChangedAction(value))}
        />
        <NumberInWords className="text-lg font-extralight mt-5" value={value.value}></NumberInWords>
        {value.isValid === false && showError && <ErrorField>{value.error}</ErrorField>}
      </>
    </Frame>
  );
}

export { BasicPensionFrame };
