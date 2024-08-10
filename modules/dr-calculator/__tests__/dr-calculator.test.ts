import { calculateDr } from '../dr-calculator';

const calcualteDrForQ12022 = (periodIndex, basicPension) => calculateDr(periodIndex, basicPension);

describe('DR Calculator for retirement period before 01-Jul-1993', () => {
  const retirementPeriodIndex = 1;
  it('Should calculate DR with basic pension < 1250', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 1200)).toMatchObject({
      dr: '17318.16',
      exGratia: 3700,
    });
  });
  it('Should calculate DR with basic pension = 1250', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 1250)).toMatchObject({
      dr: '18039.75',
      exGratia: 3800,
    });
  });
  it('Should calculate DR with basic pension = 2000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2000)).toMatchObject({
      dr: '28863.60',
      exGratia: 4950,
    });
  });
  it('Should calculate DR with basic pension < 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2100)).toMatchObject({
      dr: '30306.78',
      exGratia: 4600,
    });
  });
  it('Should calculate DR with basic pension = 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2130)).toMatchObject({
      dr: '30739.73',
      exGratia: 4700,
    });
  });
  it('Should calculate DR with basic pension > 2130', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4000)).toMatchObject({
      dr: '57727.20',
      exGratia: 6100,
    });
  });
});

describe('DR Calculator for retirement period Between 01-July-93 and 31-Mar-1998', () => {
  const retirementPeriodIndex = 2;

  it('Should calculate DR with basic pension < 2400', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2300)).toMatchObject({
      dr: '16236.85',
      exGratia: 3400,
    });
  });
  it('Should calculate DR with basic pension = 2400', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 2400)).toMatchObject({
      dr: '16942.80',
      exGratia: 3500,
    });
  });
  it('Should calculate DR with basic pension = 3850', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3850)).toMatchObject({
      dr: '27179.07',
      exGratia: 4450,
    });
  });
  it('Should calculate DR with basic pension < 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4000)).toMatchObject({
      dr: '28238.00',
      exGratia: 4100,
    });
  });
  it('Should calculate DR with basic pension = 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 4100)).toMatchObject({
      dr: '28943.95',
      exGratia: 4200,
    });
  });
  it('Should calculate DR with basic pension > 4100', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5000)).toMatchObject({
      dr: '35297.50',
      exGratia: 4500,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Apr-1998 and 31-Oct-2002', () => {
  const retirementPeriodIndex = 3;

  it('Should calculate DR with basic pension < 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3500)).toMatchObject({
      dr: '15817.20',
      exGratia: 2900,
    });
  });
  it('Should calculate DR with basic pension = 3550', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 3550)).toMatchObject({
      dr: '16043.16',
      exGratia: 3000,
    });
  });
  it('Should calculate DR with basic pension < 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5000)).toMatchObject({
      dr: '22596.00',
      exGratia: 3350,
    });
  });
  it('Should calculate DR with basic pension = 5650', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 5650)).toMatchObject({
      dr: '25533.48',
      exGratia: 3750,
    });
  });
  it('Should calculate DR with basic pension = 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 6010)).toMatchObject({
      dr: '27160.39',
      exGratia: 3400,
    });
  });
  it('Should calculate DR with basic pension > 6010', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 7000)).toMatchObject({
      dr: '31634.40',
      exGratia: 3600,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2002 and 31-Oct-2007', () => {
  const retirementPeriodIndex = 4;

  it('Should calculate DR with basic pension = 7000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 7000)).toMatchObject({
      dr: '21823.20',
      exGratia: 1900,
    });
  });
  it('Should calculate DR with basic pension = 10000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 10000)).toMatchObject({
      dr: '31176.00',
      exGratia: 2600,
    });
  });
  it('Should calculate DR with basic pension = 17615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 17615)).toMatchObject({
      dr: '54916.52',
      exGratia: 4700,
    });
  });
  it('Should calculate DR with basic pension = 18000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 18000)).toMatchObject({
      dr: '56116.80',
      exGratia: 4800,
    });
  });
  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toMatchObject({
      dr: '62352.00',
      exGratia: 5300,
    });
  });
  it('Should calculate DR with basic pension > 22000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 22000)).toMatchObject({
      dr: '68587.20',
      exGratia: 5800,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2007 and 31-Oct-2012', () => {
  const retirementPeriodIndex = 5;

  it('Should calculate DR with basic pension = 10000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 10000)).toMatchObject({
      dr: '23925.00',
      exGratia: 1600,
    });
  });
  it('Should calculate DR with basic pension = 12000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 12000)).toMatchObject({
      dr: '28710.00',
      exGratia: 1900,
    });
  });
  it('Should calculate DR with basic pension = 17615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 17615)).toMatchObject({
      dr: '42143.88',
      exGratia: 2700,
    });
  });
  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toMatchObject({
      dr: '47850.00',
      exGratia: 3100,
    });
  });
  it('Should calculate DR with basic pension = 22000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 22000)).toMatchObject({
      dr: '52635.00',
      exGratia: 3400,
    });
  });
  it('Should calculate DR with basic pension > 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toMatchObject({
      dr: '59812.50',
      exGratia: 3900,
    });
  });
});

describe('DR Calculator for retirement period Between 01-Nov-2012 and 31-Oct-2017', () => {
  const retirementPeriodIndex = 6;

  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toMatchObject({
      dr: '23880.00',
      exGratia: 1200,
    });
  });
  it('Should calculate DR with basic pension = 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toMatchObject({
      dr: '29850.00',
      exGratia: 1500,
    });
  });
  it('Should calculate DR with basic pension = 27615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 27615)).toMatchObject({
      dr: '32972.31',
      exGratia: 1700,
    });
  });
  it('Should calculate DR with basic pension = 35000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 35000)).toMatchObject({
      dr: '41790.00',
      exGratia: 2100,
    });
  });
  it('Should calculate DR with basic pension = 40000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 40000)).toMatchObject({
      dr: '47760.00',
      exGratia: 2400,
    });
  });
  it('Should calculate DR with basic pension > 45000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 45000)).toMatchObject({
      dr: '53730.00',
      exGratia: 2700,
    });
  });
});

describe('DR Calculator for retirement period On or After 01-Nov-2017', () => {
  const retirementPeriodIndex = 7;

  it('Should calculate DR with basic pension = 20000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 20000)).toMatchObject({
      dr: '10024.00',
      exGratia: 500,
    });
  });
  it('Should calculate DR with basic pension = 25000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 25000)).toMatchObject({
      dr: '12530.00',
      exGratia: 700,
    });
  });
  it('Should calculate DR with basic pension = 27615', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 27615)).toMatchObject({
      dr: '13840.63',
      exGratia: 800,
    });
  });
  it('Should calculate DR with basic pension = 35000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 35000)).toMatchObject({
      dr: '17542.00',
      exGratia: 1000,
    });
  });
  it('Should calculate DR with basic pension = 40000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 40000)).toMatchObject({
      dr: '20048.00',
      exGratia: 1100,
    });
  });
  it('Should calculate DR with basic pension > 45000', () => {
    expect(calcualteDrForQ12022(retirementPeriodIndex, 45000)).toMatchObject({
      dr: '22554.00',
      exGratia: 1200,
    });
  });
});
