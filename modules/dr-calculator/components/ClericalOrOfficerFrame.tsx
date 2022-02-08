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
        <div className="text-3xl font-extrabold leading-9 tracking-tight pb-6">
          Your cadre at the time of retirement?
        </div>
        <div className="pb-4 pt-4">
          <label className="text-xl">
            <input
              type="radio"
              name="cadre"
              className=""
              onChange={() => dispatch(createCadreChangedAction('Clerical'))}
              checked={value === 'Clerical'}
            />{' '}
            Clerical
          </label>
        </div>
        <div className="pb-6 pt-4">
          <label className="text-xl">
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
