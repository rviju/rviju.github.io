import { AverageIndex, calculateDr } from '../dr-calculator';

const calcualteDrForQ12022 = (periodIndex, basicPension) =>
  calculateDr(periodIndex, basicPension, AverageIndex.Q12022);

describe('DR Calculator for retirement period before 01-Jul-1993', () => {
  const retirementPeriodIndex = 1;
  it('Should calculate DR with basic pension < 1250', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 1200)).toBe('15348.36');
  });
  it('Should calculate DR with basic pension = 1250', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 1250)).toBe('15987.87');
  });
  it('Should calculate DR with basic pension = 2000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2000)).toBe('23862.50');
  });
  it('Should calculate DR with basic pension < 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2100)).toBe('24492.47');
  });
  it('Should calculate DR with basic pension = 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2130)).toBe('24681.46');
  });
  it('Should calculate DR with basic pension > 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4000)).toBe('30750.17');
  });
});

describe('DR Calculator for retirement period Between 01-July-93 and 31-Mar-1998', () => {
  const retirementPeriodIndex = 2;

  it('Should calculate DR with basic pension < 2400', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2300)).toBe('14264.60');
  });
  it('Should calculate DR with basic pension = 2400', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2400)).toBe('14884.80');
  });
  it('Should calculate DR with basic pension = 3850', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3850)).toBe('22336.06');
  });
  it('Should calculate DR with basic pension < 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4000)).toBe('22787.92');
  });
  it('Should calculate DR with basic pension = 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4100)).toBe('23089.16');
  });
  it('Should calculate DR with basic pension > 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5000)).toBe('24524.48');
  });
});

describe('DR Calculator for retirement period Between 01-Apr-1998 and 31-Oct-2002', () => {
  const retirementPeriodIndex = 3;

  it('Should calculate DR with basic pension < 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3500)).toBe('13759.20');
  });
  it('Should calculate DR with basic pension = 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3550)).toBe('13955.76');
  });
  it('Should calculate DR with basic pension < 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5000)).toBe('18705.96');
  });
  it('Should calculate DR with basic pension = 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5650)).toBe('20835.36');
  });
  it('Should calculate DR with basic pension = 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 6010)).toBe('21542.97');
  });
  it('Should calculate DR with basic pension > 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 7000)).toBe('22515.94');
  });
});

describe('DR Calculator for retirement period Between 01-Apr-1998 and 31-Oct-2002', () => {
  const retirementPeriodIndex = 3;

  it('Should calculate DR with basic pension < 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3500)).toBe('13759.20');
  });
  it('Should calculate DR with basic pension = 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3550)).toBe('13955.76');
  });
  it('Should calculate DR with basic pension < 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5000)).toBe('18705.96');
  });
  it('Should calculate DR with basic pension = 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5650)).toBe('20835.36');
  });
  it('Should calculate DR with basic pension = 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 6010)).toBe('21542.97');
  });
  it('Should calculate DR with basic pension > 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 7000)).toBe('22515.94');
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2002 and 31-Oct-2007', () => {
  const retirementPeriodIndex = 4;

  it('Should calculate DR with basic pension = 7000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 7000)).toBe('18736.20');
  });
  it('Should calculate DR with basic pension = 10000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 10000)).toBe('26766.00');
  });
  it('Should calculate DR with basic pension = 17615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 17615)).toBe('47148.30');
  });
  it('Should calculate DR with basic pension = 18000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 18000)).toBe('48178.80');
  });
  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toBe('53532.00');
  });
  it('Should calculate DR with basic pension > 22000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 22000)).toBe('58885.20');
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2007 and 31-Oct-2012', () => {
  const retirementPeriodIndex = 5;

  it('Should calculate DR with basic pension = 10000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 10000)).toBe('20250.00');
  });
  it('Should calculate DR with basic pension = 12000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 12000)).toBe('24300.00');
  });
  it('Should calculate DR with basic pension = 17615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 17615)).toBe('35670.37');
  });
  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toBe('40500.00');
  });
  it('Should calculate DR with basic pension = 22000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 22000)).toBe('44550.00');
  });
  it('Should calculate DR with basic pension > 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toBe('50625.00');
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2012 and 31-Oct-2017', () => {
  const retirementPeriodIndex = 6;

  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toBe('18980.00');
  });
  it('Should calculate DR with basic pension = 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toBe('23725.00');
  });
  it('Should calculate DR with basic pension = 27615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 27615)).toBe('26206.63');
  });
  it('Should calculate DR with basic pension = 35000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 35000)).toBe('33215.00');
  });
  it('Should calculate DR with basic pension = 40000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 40000)).toBe('37960.00');
  });
  it('Should calculate DR with basic pension > 45000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 45000)).toBe('42705.00');
  });
});

describe('DR Calculator for retirement period On or After 01-Nov-2017', () => {
  const retirementPeriodIndex = 7;

  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toBe('6594.00');
  });
  it('Should calculate DR with basic pension = 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toBe('8242.50');
  });
  it('Should calculate DR with basic pension = 27615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 27615)).toBe('9104.66');
  });
  it('Should calculate DR with basic pension = 35000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 35000)).toBe('11539.50');
  });
  it('Should calculate DR with basic pension = 40000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 40000)).toBe('13188.00');
  });
  it('Should calculate DR with basic pension > 45000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 45000)).toBe('14836.50');
  });
});
