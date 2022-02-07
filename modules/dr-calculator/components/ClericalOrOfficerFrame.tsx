import { Frame } from '@/components/full-page-forms/FullPageForm';
import { Dispatch } from 'react';
import { createCadreChangedAction } from '../reducer';
import { Cadre, CadreChangedAction } from '../types';

function ClericalOrOfficerFrame({
  value,
  dispatch,
}: {
  value: Cadre;
  dispatch: Dispatch<CadreChangedAction>;
}) {
  return (
    <Frame>
      <>
        <div className="font-extrabold">Your cadre at the time of retirement?</div>
        <div className="m-5">
          <label>
            <input
              type="radio"
              name="cadre"
              className="p-3"
              onChange={() => dispatch(createCadreChangedAction('Clerical'))}
              checked={value === 'Clerical'}
            />{' '}
            Clerical
          </label>
        </div>
        <div className="m-5">
          <label>
            <input
              type="radio"
              name="cadre"
              className="p-3"
              onChange={() => dispatch(createCadreChangedAction('Officer'))}
              checked={value === 'Officer'}
            />{' '}
            Officer
          </label>
        </div>
      </>
    </Frame>
  );
}

export { ClericalOrOfficerFrame };
