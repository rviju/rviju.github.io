import { calculateDr } from '../dr-calculator';

const calcualteDrForQ12022 = (periodIndex, basicPension) => calculateDr(periodIndex, basicPension);

describe('DR Calculator for retirement period before 01-Jul-1993', () => {
  const retirementPeriodIndex = 1;
  it('Should calculate DR with basic pension < 1250', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 1200)).toMatchObject({
      dr: '17133.24',
      exGratia: 3700,
    });
  });
  it('Should calculate DR with basic pension = 1250', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 1250)).toMatchObject({
      dr: '17847.12',
      exGratia: 3800,
    });
  });
  it('Should calculate DR with basic pension = 2000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2000)).toMatchObject({
      dr: '28555.40',
      exGratia: 4950,
    });
  });
  it('Should calculate DR with basic pension < 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2100)).toMatchObject({
      dr: '29983.17',
      exGratia: 4600,
    });
  });
  it('Should calculate DR with basic pension = 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2130)).toMatchObject({
      dr: '30411.50',
      exGratia: 4700,
    });
  });
  it('Should calculate DR with basic pension > 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4000)).toMatchObject({
      dr: '57110.80',
      exGratia: 6100,
    });
  });
});

describe('DR Calculator for retirement period Between 01-July-93 and 31-Mar-1998', () => {
  const retirementPeriodIndex = 2;

  it('Should calculate DR with basic pension < 2400', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2300)).toMatchObject({
      dr: '16051.70',
      exGratia: 3400,
    });
  });
  it('Should calculate DR with basic pension = 2400', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2400)).toMatchObject({
      dr: '16749.60',
      exGratia: 3500,
    });
  });
  it('Should calculate DR with basic pension = 3850', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3850)).toMatchObject({
      dr: '26869.15',
      exGratia: 4450,
    });
  });
  it('Should calculate DR with basic pension < 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4000)).toMatchObject({
      dr: '27916.00',
      exGratia: 4100,
    });
  });
  it('Should calculate DR with basic pension = 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4100)).toMatchObject({
      dr: '28613.90',
      exGratia: 4200,
    });
  });
  it('Should calculate DR with basic pension > 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5000)).toMatchObject({
      dr: '34895.00',
      exGratia: 4500,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Apr-1998 and 31-Oct-2002', () => {
  const retirementPeriodIndex = 3;

  it('Should calculate DR with basic pension < 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3500)).toMatchObject({
      dr: '15624.00',
      exGratia: 2900,
    });
  });
  it('Should calculate DR with basic pension = 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3550)).toMatchObject({
      dr: '15847.20',
      exGratia: 3000,
    });
  });
  it('Should calculate DR with basic pension < 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5000)).toMatchObject({
      dr: '22320.00',
      exGratia: 3350,
    });
  });
  it('Should calculate DR with basic pension = 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5650)).toMatchObject({
      dr: '25221.60',
      exGratia: 3750,
    });
  });
  it('Should calculate DR with basic pension = 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 6010)).toMatchObject({
      dr: '26828.64',
      exGratia: 3400,
    });
  });
  it('Should calculate DR with basic pension > 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 7000)).toMatchObject({
      dr: '31248.00',
      exGratia: 3600,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2002 and 31-Oct-2007', () => {
  const retirementPeriodIndex = 4;

  it('Should calculate DR with basic pension = 7000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 7000)).toMatchObject({
      dr: '21533.40',
      exGratia: 1900,
    });
  });
  it('Should calculate DR with basic pension = 10000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 10000)).toMatchObject({
      dr: '30762.00',
      exGratia: 2600,
    });
  });
  it('Should calculate DR with basic pension = 17615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 17615)).toMatchObject({
      dr: '54187.26',
      exGratia: 4700,
    });
  });
  it('Should calculate DR with basic pension = 18000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 18000)).toMatchObject({
      dr: '55371.60',
      exGratia: 4800,
    });
  });
  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toMatchObject({
      dr: '61524.00',
      exGratia: 5300,
    });
  });
  it('Should calculate DR with basic pension > 22000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 22000)).toMatchObject({
      dr: '67676.40',
      exGratia: 5800,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2007 and 31-Oct-2012', () => {
  const retirementPeriodIndex = 5;

  it('Should calculate DR with basic pension = 10000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 10000)).toMatchObject({
      dr: '23580.00',
      exGratia: 1600,
    });
  });
  it('Should calculate DR with basic pension = 12000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 12000)).toMatchObject({
      dr: '28296.00',
      exGratia: 1900,
    });
  });
  it('Should calculate DR with basic pension = 17615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 17615)).toMatchObject({
      dr: '41536.17',
      exGratia: 2700,
    });
  });
  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toMatchObject({
      dr: '47160.00',
      exGratia: 3100,
    });
  });
  it('Should calculate DR with basic pension = 22000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 22000)).toMatchObject({
      dr: '51876.00',
      exGratia: 3400,
    });
  });
  it('Should calculate DR with basic pension > 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toMatchObject({
      dr: '58950.00',
      exGratia: 3900,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2012 and 31-Oct-2017', () => {
  const retirementPeriodIndex = 6;

  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toMatchObject({
      dr: '23420.00',
      exGratia: 1200,
    });
  });
  it('Should calculate DR with basic pension = 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toMatchObject({
      dr: '29275.00',
      exGratia: 1500,
    });
  });
  it('Should calculate DR with basic pension = 27615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 27615)).toMatchObject({
      dr: '32337.16',
      exGratia: 1700,
    });
  });
  it('Should calculate DR with basic pension = 35000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 35000)).toMatchObject({
      dr: '40985.00',
      exGratia: 2100,
    });
  });
  it('Should calculate DR with basic pension = 40000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 40000)).toMatchObject({
      dr: '46840.00',
      exGratia: 2400,
    });
  });
  it('Should calculate DR with basic pension > 45000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 45000)).toMatchObject({
      dr: '52695.00',
      exGratia: 2700,
    });
  });
});

describe('DR Calculator for retirement period On or After 01-Nov-2017', () => {
  const retirementPeriodIndex = 7;

  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toMatchObject({
      dr: '9702.00',
      exGratia: 500,
    });
  });
  it('Should calculate DR with basic pension = 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toMatchObject({
      dr: '12127.50',
      exGratia: 700,
    });
  });
  it('Should calculate DR with basic pension = 27615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 27615)).toMatchObject({
      dr: '13396.03',
      exGratia: 800,
    });
  });
  it('Should calculate DR with basic pension = 35000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 35000)).toMatchObject({
      dr: '16978.50',
      exGratia: 1000,
    });
  });
  it('Should calculate DR with basic pension = 40000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 40000)).toMatchObject({
      dr: '19404.00',
      exGratia: 1100,
    });
  });
  it('Should calculate DR with basic pension > 45000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 45000)).toMatchObject({
      dr: '21829.50',
      exGratia: 1200,
    });
  });
});
