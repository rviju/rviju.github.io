import { AverageIndex, calculateDr } from '../dr-calculator';

const calcualteDrForQ12022 = (periodIndex, basicPension) =>
  calculateDr(periodIndex, basicPension, AverageIndex.current);

describe('DR Calculator for retirement period before 01-Jul-1993', () => {
  const retirementPeriodIndex = 1;
  it('Should calculate DR with basic pension < 1250', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 1200)).toStrictEqual({
      dr: '17133.24',
      exGratia: 3700,
    });
  });
  it('Should calculate DR with basic pension = 1250', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 1250)).toStrictEqual({
      dr: '17847.12',
      exGratia: 3800,
    });
  });
  it('Should calculate DR with basic pension = 2000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2000)).toStrictEqual({
      dr: '28555.40',
      exGratia: 4950,
    });
  });
  it('Should calculate DR with basic pension < 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2100)).toStrictEqual({
      dr: '29983.17',
      exGratia: 4600,
    });
  });
  it('Should calculate DR with basic pension = 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2130)).toStrictEqual({
      dr: '30411.50',
      exGratia: 4700,
    });
  });
  it('Should calculate DR with basic pension > 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4000)).toStrictEqual({
      dr: '57110.80',
      exGratia: 6100,
    });
  });
});

describe('DR Calculator for retirement period Between 01-July-93 and 31-Mar-1998', () => {
  const retirementPeriodIndex = 2;

  it('Should calculate DR with basic pension < 2400', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2300)).toStrictEqual({
      dr: '16051.70',
      exGratia: 3400,
    });
  });
  it('Should calculate DR with basic pension = 2400', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2400)).toStrictEqual({
      dr: '16749.60',
      exGratia: 3500,
    });
  });
  it('Should calculate DR with basic pension = 3850', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3850)).toStrictEqual({
      dr: '26869.15',
      exGratia: 4450,
    });
  });
  it('Should calculate DR with basic pension < 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4000)).toStrictEqual({
      dr: '27916.00',
      exGratia: 4100,
    });
  });
  it('Should calculate DR with basic pension = 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4100)).toStrictEqual({
      dr: '28613.90',
      exGratia: 4200,
    });
  });
  it('Should calculate DR with basic pension > 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5000)).toStrictEqual({
      dr: '34895.00',
      exGratia: 4500,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Apr-1998 and 31-Oct-2002', () => {
  const retirementPeriodIndex = 3;

  it('Should calculate DR with basic pension < 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3500)).toStrictEqual({
      dr: '15624.00',
      exGratia: 3800,
    });
  });
  it('Should calculate DR with basic pension = 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3550)).toStrictEqual({
      dr: '15847.20',
      exGratia: 3900,
    });
  });
  it('Should calculate DR with basic pension < 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5000)).toStrictEqual({
      dr: '22320.00',
      exGratia: 4550,
    });
  });
  it('Should calculate DR with basic pension = 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5650)).toStrictEqual({
      dr: '25221.60',
      exGratia: 5050,
    });
  });
  it('Should calculate DR with basic pension = 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 6010)).toStrictEqual({
      dr: '26828.64',
      exGratia: 4800,
    });
  });
  it('Should calculate DR with basic pension > 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 7000)).toStrictEqual({
      dr: '31248.00',
      exGratia: 5100,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2002 and 31-Oct-2007', () => {
  const retirementPeriodIndex = 4;

  it('Should calculate DR with basic pension = 7000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 7000)).toStrictEqual({
      dr: '21533.40',
      exGratia: 1900,
    });
  });
  it('Should calculate DR with basic pension = 10000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 10000)).toStrictEqual({
      dr: '30762.00',
      exGratia: 260,
    });
  });
  it('Should calculate DR with basic pension = 17615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 17615)).toStrictEqual({
      dr: '54187.26',
      exGratia: 4700,
    });
  });
  it('Should calculate DR with basic pension = 18000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 18000)).toStrictEqual({
      dr: '55371.60',
      exGratia: 4800,
    });
  });
  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toStrictEqual({
      dr: '61524.00',
      exGratia: 5300,
    });
  });
  it('Should calculate DR with basic pension > 22000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 22000)).toStrictEqual({
      dr: '67676.40',
      exGratia: 5800,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2007 and 31-Oct-2012', () => {
  const retirementPeriodIndex = 5;

  it('Should calculate DR with basic pension = 10000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 10000)).toStrictEqual({
      dr: '23580.00',
      exGratia: 1600,
    });
  });
  it('Should calculate DR with basic pension = 12000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 12000)).toStrictEqual({
      dr: '28296.00',
      exGratia: 1900,
    });
  });
  it('Should calculate DR with basic pension = 17615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 17615)).toStrictEqual({
      dr: '41536.17',
      exGratia: 2700,
    });
  });
  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toStrictEqual({
      dr: '47160.00',
      exGratia: 3100,
    });
  });
  it('Should calculate DR with basic pension = 22000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 22000)).toStrictEqual({
      dr: '51876.00',
      exGratia: 3400,
    });
  });
  it('Should calculate DR with basic pension > 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toStrictEqual({
      dr: '58950.00',
      exGratia: 3900,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2012 and 31-Oct-2017', () => {
  const retirementPeriodIndex = 6;

  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toStrictEqual({
      dr: '23420.00',
      exGratia: 1200,
    });
  });
  it('Should calculate DR with basic pension = 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toStrictEqual({
      dr: '29275.00',
      exGratia: 1500,
    });
  });
  it('Should calculate DR with basic pension = 27615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 27615)).toStrictEqual({
      dr: '32337.16',
      exGratia: 1700,
    });
  });
  it('Should calculate DR with basic pension = 35000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 35000)).toStrictEqual({
      dr: '40985.00',
      exGratia: 2100,
    });
  });
  it('Should calculate DR with basic pension = 40000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 40000)).toStrictEqual({
      dr: '46840.00',
      exGratia: 2400,
    });
  });
  it('Should calculate DR with basic pension > 45000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 45000)).toStrictEqual({
      dr: '52695.00',
      exGratia: 2700,
    });
  });
});

describe('DR Calculator for retirement period On or After 01-Nov-2017', () => {
  const retirementPeriodIndex = 7;

  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toStrictEqual({
      dr: '9702.00',
      exGratia: 500,
    });
  });
  it('Should calculate DR with basic pension = 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toStrictEqual({
      dr: '12127.50',
      exGratia: 700,
    });
  });
  it('Should calculate DR with basic pension = 27615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 27615)).toStrictEqual({
      dr: '13396.03',
      exGratia: 800,
    });
  });
  it('Should calculate DR with basic pension = 35000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 35000)).toStrictEqual({
      dr: '16978.50',
      exGratia: 1000,
    });
  });
  it('Should calculate DR with basic pension = 40000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 40000)).toStrictEqual({
      dr: '19404.00',
      exGratia: 1100,
    });
  });
  it('Should calculate DR with basic pension > 45000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 45000)).toStrictEqual({
      dr: '21829.50',
      exGratia: 1200,
    });
  });
});
