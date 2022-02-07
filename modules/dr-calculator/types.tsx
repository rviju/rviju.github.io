export interface DrTableRowType {
  dateIndex: number;
  upTo: number;
  baseIndex: number;
  factor: number;
}

export type FieldValidation =
  | {
      isValid: true;
    }
  | {
      isValid: false;
      error: string;
    };

export type Field<T> = {
  value: T;
} & FieldValidation;

export type Cadre = 'Clerical' | 'Officer';
export type DrCalculatorFormState = {
  basicPension: Field<string>;
  retirementYearIndex: number;
  commutation: Field<string>;
  dearnessRelief?: number;
  grossPension?: number;
  netPension?: number;
  netIncreaseInDr?: number;
  yearOptions: Array<string>;
  cadre: Cadre;
  drCalculated: boolean;
};

export type BasicPensionChangedAction = {
  type: 'basic_pension_changed';
  payload: string;
};

export type CommutationChangedAction = {
  type: 'commutation_changed';
  payload: string;
};

export type RetirementYearChangedAction = {
  type: 'retirement_year_changed';
  payload: { retirementYearIndex: number };
};

export type CadreChangedAction = {
  type: 'cadre_changed';
  payload: Cadre;
};

export type ResetAction = {
  type: 'reset';
};

export type DrActionPayLoad =
  | BasicPensionChangedAction
  | CommutationChangedAction
  | RetirementYearChangedAction
  | CadreChangedAction
  | ResetAction;
