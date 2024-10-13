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

type TaxSection =
  | {
      taxComputed: true;
      taxUnderOldRegime: number;
      taxUnderNewRegime: number;
    }
  | { taxComputed: false };

export type ItRegimeFormState = {
  income: Field<string>;
  deductions: Field<string>;
  ageIndex: number;
  taxComputations: TaxSection;
  ageOptions: ["Below 60 years", "60 to 80 years", "Above 80 years"];
  year: yearType;
};

export type IncomeChangedAction = {
  type: "income_changed";
  payload: string;
};

export type DeductionsChangedAction = {
  type: "deductions_changed";
  payload: string;
};

export type AgeChangedAction = {
  type: "age_changed";
  payload: { ageIndex: number };
};

export type ResetAction = {
  type: "reset";
};

export type ItRegimeActionPayLoad =
  | IncomeChangedAction
  | DeductionsChangedAction
  | AgeChangedAction
  | ResetAction;

export type yearType = "2021_2022" | "2022_2023" | "2023_2024" | "2024_2025";
