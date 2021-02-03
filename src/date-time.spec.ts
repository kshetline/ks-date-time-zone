import { expect } from 'chai';
import { SUNDAY } from './calendar';
import { DateTime, DateTimeField } from './date-time';
import { Timezone } from './timezone';
import { initTimezoneLarge, initTimezoneLargeAlt, initTimezoneSmall } from './index';

describe('DateTime', () => {
  initTimezoneSmall();
  initTimezoneLarge();
  initTimezoneLargeAlt();

  beforeEach(() => {
    Timezone.defineTimezones({
      'America/Chicago': '-055036 -0600 60;-5O.A/0/LMT -60/0/CST -50/10/CDT -50/0/EST -50/10/CWT -50/10/CPT;121212121212121212121212121212121212131212121212145121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121;-3tFG0 1nEe0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60;92e5;US',
      'America/Juneau': '+1502 -0900 60;f2/0/LMT -8W/0/LMT -80/0/PST -70/10/PWT -70/10/PPT -70/10/PDT -80/10/YDT -90/0/YST -90/0/AKST -80/10/AKDT;1234252525252525252525252526252525789898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898;-48PP2 1jVM0 1EX12 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60;33e3;US',
      'America/New_York': '-045602 -0500 60;-4U.2/0/LMT -50/0/EST -40/10/EDT -40/10/EWT -40/10/EPT;121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121;-3tFH0 1nEe0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60;21e6;US',
      'Europe/Dublin': '-0025 +0100 -60;-p/0/LMT -p.l/0/DMT y.D/10/IST 0/0/GMT 10/10/BST 10/10/IST 10/0/IST 0/-10/GMT;123434343434353535353535353535353535353535353535353535353535353535353535353535353535353535353567676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676;-3BHbz 1ra20.l Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 1EJ0 7jD0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0;1981 3 0 1 1:0 2 0,1996 10 0 1 1:0 2 -60;12e5;IE',
      'Pacific/Apia': '+123304 +1300 60;cx.4/0/LMT -bq.U/0/LMT -bu/0 -b0/0 -a0/10 e0/10 d0/0;12343456565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656;-38Fox.4 J1A0 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0;2012 4 1 1 4:0 0 0,2012 9 0 1 3:0 0 60;37e3;WS'
    });
    DateTime.setDefaultLocale('en-us');
    DateTime.setDefaultTimezone('America/New_York');
  });

  it('should properly create Datetime instances', () => {
    expect(new DateTime('2021-11-07T01:23-04:00').timezone.zoneName).to.equal('UT-04:00');
    expect(() => new DateTime({ y: 1900.7 })).to.throw('y must be an integer value');
    expect(new DateTime('2021-07-04T12:34 Europe/Dublin', 'America/Chicago').toString()).to.equal('DateTime<2021-07-04T06:34:00.000 -05:00§>');
    expect(new DateTime().locale).to.equal('en-us');

    const dt = new DateTime();

    dt.locale = 'fr';
    expect(dt.locale).to.equal('fr');
  });

  it('should skip an hour starting Daylight Saving Time', () => {
    const zone = Timezone.getTimezone('America/New_York');
    const time = new DateTime({ y: 2018, m: 3, d: 11, hrs: 1, min: 59, sec: 59 }, zone);

    expect(time.wallTime.utcOffset).to.equal(-5 * 3600);
    expect(zone.getDisplayName(time.utcTimeMillis)).to.equal('EST');
    time.add(DateTimeField.SECOND, 1);
    expect(time.wallTime.utcOffset).to.equal(-4 * 3600);
    expect(zone.getDisplayName(time.utcTimeMillis)).to.equal('EDT');
    expect(time.wallTime.hrs).to.equal(3);
    time.add(DateTimeField.SECOND, -1);
    expect(time.wallTime.hrs).to.equal(1);
    expect(time.getSecondsInDay()).to.equal(82800);
    expect(time.getMinutesInDay()).to.equal(1380);
  });

  it('should turn back an hour ending Daylight Saving Time', () => {
    const zone = Timezone.getTimezone('America/New_York');
    const time = new DateTime({ y: 2018, m: 11, d: 4, hrs: 1, min: 59, sec: 59, occurrence: 1 }, zone);

    expect(time.wallTime.utcOffset).to.equal(-4 * 3600);
    expect(zone.getDisplayName(time.utcTimeMillis)).to.equal('EDT');
    time.add(DateTimeField.SECOND, 1);
    expect(time.wallTime.utcOffset).to.equal(-5 * 3600);
    expect(zone.getDisplayName(time.utcTimeMillis)).to.equal('EST');
    expect(time.wallTime.hrs).to.equal(1);
    expect(time.wallTime.occurrence).to.equal(2);
    time.add(DateTimeField.SECOND, -1);
    expect(time.wallTime.hrs).to.equal(1);
    expect(time.wallTime.occurrence).to.equal(1);
    expect(time.getSecondsInDay()).to.equal(90000);
    expect(time.getMinutesInDay()).to.equal(1500);
  });

  it('should end Daylight Saving Time correctly on a future computed date', () => {
    const zone = Timezone.getTimezone('America/New_York');
    const time = new DateTime({ y: 2100, m: 11, d: 7, hrs: 1, min: 59, sec: 59, occurrence: 1 }, zone);

    expect(time.wallTime.utcOffset).to.equal(-4 * 3600);
    expect(zone.getDisplayName(time.utcTimeMillis)).to.equal('EDT');
    time.add(DateTimeField.SECOND, 1);
    expect(time.wallTime.utcOffset).to.equal(-5 * 3600);
    expect(zone.getDisplayName(time.utcTimeMillis)).to.equal('EST');
    expect(time.wallTime.hrs).to.equal(1);
    expect(time.wallTime.occurrence).to.equal(2);
    time.add(DateTimeField.SECOND, -1);
    expect(time.wallTime.hrs).to.equal(1);
    expect(time.wallTime.occurrence).to.equal(1);
  });

  it('should handle missing day in Pacific/Apia, December 2011', () => {
    const zone = Timezone.getTimezone('Pacific/Apia');
    const time = new DateTime({ y: 2011, m: 12, d: 1, hrs: 0, min: 0, sec: 0 }, zone);

    expect(time.getSecondsInDay(2011, 12, 30)).to.equal(0);
    const calendar = time.getCalendarMonth(2011, 12, SUNDAY);
    expect(calendar[32].d).to.equal(29);
    expect(calendar[33].d).to.equal(-30);
    expect(calendar[34].d).to.equal(31);
  });

  it('should handle 48-hour day in America/Juneau, October 1867', () => {
    const zone = Timezone.getTimezone('America/Juneau');
    const time = new DateTime({ y: 1867, m: 10, d: 18, hrs: 0, min: 0, sec: 0, occurrence: 1 }, zone);

    expect(time.getSecondsInDay()).to.equal(172800);
    expect(time.getMinutesInDay()).to.equal(2880);
    expect(time.wallTime.utcOffset).to.equal(54120);
    time.add(DateTimeField.HOUR, 24);
    expect(time.wallTime.utcOffset).to.equal(-32280);
    expect(time.wallTime.d).to.equal(18);
    expect(time.wallTime.hrs).to.equal(0);
    expect(time.wallTime.occurrence).to.equal(2);
  });

  it('should handle negative Daylight Saving Time', () => {
    const zone = Timezone.getTimezone('Europe/Dublin');
    const time = new DateTime({ y: 2017, m: 12, d: 1, hrs: 0, min: 0, sec: 0 }, zone);

    expect(time.wallTime.dstOffset).to.equal(-3600);
    time.add(DateTimeField.MONTH, 6);
    expect(time.wallTime.dstOffset).to.equal(0);
  });

  it('should handle non-whole-minute UTC offsets', () => {
    const zone = Timezone.getTimezone('Pacific/Apia');
    const time = new DateTime({ y: 1892, m: 1, d: 1, hrs: 0, min: 0, sec: 0 }, zone);

    expect(time.wallTime.utcOffset).to.equal(45184);
    expect(zone.getFormattedOffset(time.utcTimeMillis)).to.equal('+12:33:04');
    time.add(DateTimeField.YEAR, 1);
    expect(time.wallTime.utcOffset).to.equal(-41216);
    expect(zone.getFormattedOffset(time.utcTimeMillis)).to.equal('-11:26:56');
    time.add(DateTimeField.YEAR, 20);
    expect(time.wallTime.utcOffset).to.equal(-41400);
    expect(zone.getFormattedOffset(time.utcTimeMillis)).to.equal('-11:30');

    const time2 = new DateTime({ y: 1900, m: 1, d: 1, hrs: 0, min: 0, sec: 0 }, Timezone.UT_ZONE);
    const time3 = new DateTime(time2.utcTimeMillis, zone);

    expect(time3.wallTime.y).to.equal(1899);
    expect(time3.wallTime.m).to.equal(12);
    expect(time3.wallTime.d).to.equal(31);
    expect(time3.wallTime.hrs).to.equal(12);
    expect(time3.wallTime.min).to.equal(33);
    expect(time3.wallTime.sec).to.equal(4);
  });

  it('should correctly add/subtract DateTime fields', () => {
    expect(new DateTime('2300-05-05T04:08:10.909').add(DateTimeField.MILLI, -1001).toIsoString(23))
      .to.equal('2300-05-05T04:08:09.908');
    expect(new DateTime('2020-11-29 23:24:35').add(DateTimeField.SECOND, 30).toIsoString(19))
      .to.equal('2020-11-29T23:25:05');
    expect(new DateTime('1884-02-03 22:53').add(DateTimeField.MINUTE, 14).toIsoString(16))
      .to.equal('1884-02-03T23:07');
    expect(new DateTime('1884-02-03 22:53').subtract(DateTimeField.HOUR, 25).toIsoString(16))
      .to.equal('1884-02-02T21:53');
    expect(new DateTime('2021-03-14T01:23-05:00', 'America/New_York').add(DateTimeField.HOUR, 1).toIsoString())
      .to.equal('2021-03-14T03:23:00.000-04:00'); // DST start
    expect(new DateTime('2021-11-07T01:23-04:00', 'America/New_York').add(DateTimeField.HOUR, 1).toIsoString())
      .to.equal('2021-11-07T01:23:00.000-05:00'); // DST end
    expect(new DateTime('2021-11-07T01:23-04:00', 'America/New_York').add(DateTimeField.HOUR, 26).toIsoString())
      .to.equal('2021-11-08T02:23:00.000-05:00'); // DST end
    expect(new DateTime('2020-02-28').add(DateTimeField.DAY, 1).toIsoString(10)).to.equal('2020-02-29');
    expect(new DateTime('2019-02-28').add(DateTimeField.DAY, 1).toIsoString(10)).to.equal('2019-03-01');
    expect(new DateTime('1582-10-20').add(DateTimeField.DAY, -6).toIsoString(10)).to.equal('1582-10-04');
    expect(new DateTime('1582-10-20').subtract(DateTimeField.DAY, 7).toIsoString(10)).to.equal('1582-10-03');
    expect(new DateTime('1582-10-04').add(DateTimeField.DAY, 1).toIsoString(10)).to.equal('1582-10-15');
    expect(new DateTime('1582-10-04').add(DateTimeField.DAY, 2).toIsoString(10)).to.equal('1582-10-16');
    expect(new DateTime('2021-02-28').add(DateTimeField.WEEK, -3).toIsoString(10)).to.equal('2021-02-07');
    expect(new DateTime('1970-08-01').add(DateTimeField.MONTH, 5).toIsoString(10)).to.equal('1971-01-01');
    expect(new DateTime('1970-03-31').add(DateTimeField.MONTH, -1).toIsoString(10)).to.equal('1970-02-28');
    expect(new DateTime('1972-02-29').add(DateTimeField.YEAR, 50).toIsoString(10)).to.equal('2022-02-28');
    expect(() => new DateTime('04:05').add(DateTimeField.WEEK, 1)).to.throw('WEEK cannot be used with a dateless time value');
  });

  it('should correctly roll DateTime fields', () => {
    expect(new DateTime('2300-05-05T04:08:10.909').roll(DateTimeField.MILLI, -1001).toIsoString(23))
      .to.equal('2300-05-05T04:08:10.908');
    expect(new DateTime('2020-11-29 23:24:35').roll(DateTimeField.SECOND, 30).toIsoString(19))
      .to.equal('2020-11-29T23:24:05');
    expect(new DateTime('1884-02-03 22:53').roll(DateTimeField.MINUTE, 14).toIsoString(16))
      .to.equal('1884-02-03T22:07');
    expect(new DateTime('1884-02-03 22:53').roll(DateTimeField.HOUR, -25).toIsoString(16))
      .to.equal('1884-02-03T21:53');
    expect(new DateTime('2021-03-14T01:23', 'America/New_York').roll(DateTimeField.HOUR, 1).toIsoString())
      .to.equal('2021-03-14T03:23:00.000-04:00'); // DST start
    expect(new DateTime('2021-11-07T01:23-04:00', 'America/New_York').roll(DateTimeField.HOUR, 1).toIsoString())
      .to.equal('2021-11-07T01:23:00.000-05:00'); // DST end
    expect(new DateTime('2021-11-07T01:23-04:00', 'America/New_York').roll(DateTimeField.HOUR, 26).toIsoString())
      .to.equal('2021-11-07T01:23:00.000-05:00'); // DST end
    expect(new DateTime('1995-08-03 22:53').roll(DateTimeField.AM_PM, 1).toIsoString(16))
      .to.equal('1995-08-03T10:53');
    expect(new DateTime('2021-11-07T01:23-04:00', 'America/New_York').roll(DateTimeField.AM_PM, 1).toIsoString(16))
      .to.equal('2021-11-07T13:23');
    expect(new DateTime('2021-11-07T01:23-05:00', 'America/New_York').roll(DateTimeField.AM_PM, 1).toIsoString(16))
      .to.equal('2021-11-07T13:23');
    expect(new DateTime('2021-11-07T13:23', 'America/New_York').roll(DateTimeField.AM_PM, 1).toIsoString())
      .to.equal('2021-11-07T01:23:00.000-04:00');
    expect(new DateTime('2020-02-28').roll(DateTimeField.DAY, 1).toIsoString(10)).to.equal('2020-02-29');
    expect(new DateTime('2019-02-28').roll(DateTimeField.DAY, 1).toIsoString(10)).to.equal('2019-02-01');
    expect(new DateTime('1582-10-20').roll(DateTimeField.DAY, -6).toIsoString(10)).to.equal('1582-10-04');
    expect(new DateTime('1582-10-20').roll(DateTimeField.DAY, -7).toIsoString(10)).to.equal('1582-10-04');
    expect(new DateTime('1582-10-04').roll(DateTimeField.DAY, 1).toIsoString(10)).to.equal('1582-10-15');
    expect(new DateTime('1582-10-04').roll(DateTimeField.DAY, 2).toIsoString(10)).to.equal('1582-10-15');
    expect(new DateTime('2021-02-28').roll(DateTimeField.DAY_OF_WEEK, 3).toIsoString(10)).to.equal('2021-02-24');
    expect(new DateTime('2021-03-03').roll(DateTimeField.DAY_OF_WEEK, 5).toIsoString(10)).to.equal('2021-03-01');
    expect(new DateTime('2020-08-20').roll(DateTimeField.DAY_OF_WEEK_LOCALE, -4).toIsoString(10)).to.equal('2020-08-16');
    expect(new DateTime('2021-01-01').roll(DateTimeField.DAY_OF_YEAR, -5).toIsoString(10)).to.equal('2021-12-27');
    expect(new DateTime('2021-02-28').roll(DateTimeField.WEEK, -13).toIsoString(10)).to.equal('2021-11-28');
    expect(new DateTime('2021-02-28').roll(DateTimeField.WEEK, 2).toIsoString(10)).to.equal('2021-03-14');
    expect(new DateTime('2021-02-28').roll(DateTimeField.WEEK_LOCALE, 2).toIsoString(10)).to.equal('2021-03-14');
    expect(new DateTime('1970-08-01').roll(DateTimeField.MONTH, 5).toIsoString(10)).to.equal('1970-01-01');
    expect(new DateTime('1970-03-31').roll(DateTimeField.MONTH, -1).toIsoString(10)).to.equal('1970-02-28');
    expect(new DateTime('-9999-01-01').roll(DateTimeField.YEAR, -1, -9999, 9999).toIsoString(10)).to.equal('9999-01-01');
    expect(new DateTime('2099-01-01').roll(DateTimeField.YEAR, 1).toIsoString(10)).to.equal('1900-01-01');
    expect(new DateTime('1970-03-31').roll(DateTimeField.YEAR_WEEK, -1).toIsoString(10)).to.equal('1969-04-01');
    expect(new DateTime('1970-03-31').roll(DateTimeField.YEAR_WEEK_LOCALE, -1).toIsoString(10)).to.equal('1969-04-01');
    expect(new DateTime('1970-03-31').roll(DateTimeField.ERA, 1).toIsoString(11)).to.equal('-1969-03-31');
    expect(() => new DateTime('04:05').roll(DateTimeField.WEEK, 1)).to.throw('WEEK cannot be used with a dateless time value');
  });

  it('should correctly set DateTime fields', () => {
    expect(new DateTime('2300-05-05T04:08:10.909').set(DateTimeField.MILLI, 123).toIsoString(23))
      .to.equal('2300-05-05T04:08:10.123');
    expect(() => new DateTime().set(DateTimeField.MILLI, -7)).to.throw('MILLI (-7) must be in the range [0, 999]');
    expect(new DateTime('2020-11-29 23:24:35').set(DateTimeField.SECOND, 30).toIsoString(19))
      .to.equal('2020-11-29T23:24:30');
    expect(() => new DateTime().set(DateTimeField.SECOND, 63)).to.throw('SECOND (63) must be in the range [0, 59]');
    expect(new DateTime('1884-02-03 22:14').set(DateTimeField.MINUTE, 14).toIsoString(16))
      .to.equal('1884-02-03T22:14');
    expect(() => new DateTime().set(DateTimeField.MINUTE, 77)).to.throw('MINUTE (77) must be in the range [0, 59]');
    expect(new DateTime('1884-02-03 22:53').set(DateTimeField.HOUR_12, 8).toIsoString(16))
      .to.equal('1884-02-03T20:53');
    expect(() => new DateTime().set(DateTimeField.HOUR_12, 19)).to.throw('HOUR_12 (19) must be in the range [1, 12]');
    expect(new DateTime('1884-02-03 22:53').set(DateTimeField.HOUR, 21).toIsoString(16))
      .to.equal('1884-02-03T21:53');
    expect(() => new DateTime().set(DateTimeField.HOUR, 24)).to.throw('HOUR (24) must be in the range [0, 23]');
    expect(new DateTime('7070-06-07').set(DateTimeField.DAY, 12).toIsoString(10)).to.equal('7070-06-12');
    expect(new DateTime('7070-02-01').set(DateTimeField.DAY, 29, true).toIsoString(10)).to.equal('7070-03-01');
    expect(() => new DateTime('7070-02-01').set(DateTimeField.DAY, 29)).to.throw('DAY (29) must be in the range [1, 28]');
    expect(() => new DateTime('1582-10-20').set(DateTimeField.DAY, 7)).to.throw('7 is an invalid date in the month 10/1582');
    expect(new DateTime('1582-10-20').set(DateTimeField.DAY, 7, true).toIsoString(10)).to.equal('1582-10-15');
    expect(new DateTime('2021-01-04').set(DateTimeField.DAY_OF_WEEK, 0, true).toIsoString(10)).to.equal('2021-01-03');
    expect(new DateTime('1930-07-04').set(DateTimeField.DAY_OF_YEAR, 32).toIsoString(10)).to.equal('1930-02-01');
    expect(new DateTime('2021-02-01').set(DateTimeField.WEEK, 1)
      .set(DateTimeField.DAY_OF_WEEK, 1).format('GGGG-[W]WW-E')).to.equal('2021-W01-1');
    expect(new DateTime('2021-02-01').set(DateTimeField.WEEK, 0, true)
      .set(DateTimeField.DAY_OF_WEEK, 1).format('GGGG-[W]WW-E')).to.equal('2020-W53-1');
    expect(() => new DateTime('2021-02-01').set(DateTimeField.WEEK, 0)).to.throw('WEEK (0) must be in the range [1, 52]');
    expect(new DateTime('2021-02-01').set(DateTimeField.WEEK_LOCALE, 1)
      .set(DateTimeField.DAY_OF_WEEK, 1).toIsoString(10)).to.equal('2020-12-28');
    expect(new DateTime('2021-02-01').set(DateTimeField.WEEK_LOCALE, 0, true)
      .set(DateTimeField.DAY_OF_WEEK, 3).toIsoString(10)).to.equal('2020-12-23');
    expect(new DateTime('1433-11-11').set(DateTimeField.MONTH, 2).toIsoString(10)).to.equal('1433-02-11');
    expect(new DateTime('1433-11-30').set(DateTimeField.MONTH, 2).toIsoString(10)).to.equal('1433-02-28');
    expect(new DateTime('1433-11-30').set(DateTimeField.MONTH, 0, true).toIsoString(10)).to.equal('1432-12-30');
    expect(() => new DateTime('1433-11-30').set(DateTimeField.MONTH, 0)).to.throw('MONTH (0) must be in the range [1, 12]');
    expect(new DateTime('-9999-01-01').set(DateTimeField.YEAR, -1).toIsoString(11)).to.equal('-0001-01-01');
    expect(new DateTime('2099-01-01').set(DateTimeField.YEAR, 1).toIsoString(10)).to.equal('0001-01-01');
    expect(new DateTime('1970-W20-5').set(DateTimeField.YEAR_WEEK, 1850).format('GGGG-[W]WW-E')).to.equal('1850-W20-5');
    expect(new DateTime('1970-w03-3').set(DateTimeField.YEAR_WEEK_LOCALE, 2).format('gggg-[w]ww-e')).to.equal('0002-w03-3');
    expect(new DateTime('1970-03-31').set(DateTimeField.ERA, 0).toIsoString(11)).to.equal('-1969-03-31');
    expect(() => new DateTime('04:05').set(DateTimeField.WEEK, 1)).to.throw('WEEK cannot be used with a dateless time value');
  });

  it('should correctly report week numbers', () => {
    expect(new DateTime('2020-12-28').wallTime).to.include({ yw: 2020, w: 53, dw: 1 });
    expect(new DateTime('2021-01-05').wallTime).to.include({ yw: 2021, w:  1, dw: 2 });
    expect(new DateTime('2021-W06-4').wallTime).to.include({ yw: 2021, w:  6, dw: 4 });
    expect(new DateTime('2021-W06-4').wallTime).to.include({ ywl: 2021, wl: 7, dwl: 5 });
    expect(new DateTime('2021-w06-4').wallTime).to.include({ ywl: 2021, wl: 6, dwl: 4 });
    expect(new DateTime('2021-033').wallTime).to.include({ yw: 2021, w: 5, dw: 2 });
  });

  it('should correctly handle defaults settings', () => {
    expect(DateTime.getDefaultLocale()).to.equal('en-us');
    DateTime.setDefaultLocale('es');
    expect(DateTime.getDefaultLocale()).to.equal('es');
    expect(new DateTime('2021-01-04').format('dddd')).to.equal('lunes');
    DateTime.setDefaultLocale('en-us');
    DateTime.setDefaultTimezone('America/Chicago');
    expect(DateTime.getDefaultTimezone().zoneName).to.equal('America/Chicago');
    expect(new DateTime('2021-01-04T03:00').wallTime.utcOffset).to.equal(-21600);
    DateTime.setDefaultTimezone('UT');
    expect(new DateTime('2021-01-04T03:00').wallTime.utcOffset).to.equal(0);
  });

  it('should correctly handle astronomical time conversions', () => {
    expect(DateTime.julianDay(0)).to.equal(2440587.5);
    expect(DateTime.julianDay(432000000)).to.equal(2440592.5);
    expect(DateTime.millisFromJulianDay(2459219.5)).to.equal(1609804800000);
    expect(DateTime.julianDay_SGC(2021, 1, 5, 0, 0, 0)).to.equal(2459219.5);
  });

  it('should lock DateTime instances to make them immutable', () => {
    const d = new DateTime(null, 'UT');

    d.utcTimeMillis = 0;
    expect(d.wallTime.y).to.equal(1970);
    expect(() => d.lock().utcTimeMillis = 1).to.throw('This DateTime instance is locked and immutable');
  });

  it('should correctly perform DateTime comparisons', () => {
    const dt = new DateTime('2021-03-04T05:06:07.888');
    const dt2 = new DateTime('1969-07-12T20:17');

    expect(dt.isAfter('2021-03-04T05:06:07.887')).to.be.true;
    expect(dt.isAfter('2021-03-04T05:06:07.887', DateTimeField.SECOND)).to.be.false;
    expect(dt.isSameOrAfter('2021-03-04T05:06:07.887', DateTimeField.SECOND)).to.be.true;
    expect(() => dt.isAfter('05:06:07.887')).to.throw('Mismatched DateTime types DATETIME/DATELESS');
    expect(dt.isBefore('2021-03-04T05:06:07.887')).to.be.false;
    expect(dt.isBefore('2021-03-04T05:06:07.887', DateTimeField.SECOND)).to.be.false;
    expect(dt.isSameOrBefore('2021-03-04T05:06:07.887', DateTimeField.SECOND)).to.be.true;
    expect(dt.isSame('2021-03-04T05:06:07.887', DateTimeField.SECOND)).to.be.true;
    expect(dt2.isAfter('1969-07-12', DateTimeField.MINUTE)).to.be.true;
    expect(dt2.isAfter('1969-07-12', DateTimeField.HOUR)).to.be.true;
    expect(dt2.isAfter('1969-07-12', DateTimeField.DAY)).to.be.false;
    expect(dt2.isAfter('1969-07-11', DateTimeField.DAY)).to.be.true;
    expect(dt2.isSame('1969-07-01', DateTimeField.MONTH)).to.be.true;
    expect(dt2.isBefore('1969-07-01', DateTimeField.MONTH)).to.be.false;
    expect(dt2.isBefore('1969-08-01', DateTimeField.MONTH)).to.be.true;
    expect(dt2.isBefore('1969-08-01', DateTimeField.YEAR)).to.be.false;
    expect(dt2.isBefore('1970-08-01', DateTimeField.YEAR)).to.be.true;
    expect(new DateTime().isAfter('1776-06-04')).to.be.true;
    expect(new DateTime().isBetween('1776-06-04', '9999-12-31')).to.be.true;
    expect(new DateTime().isBetween('1776-06-04', '1809-02-12')).to.be.false;
    expect(new DateTime().isBetween('9976-06-04', '9999-12-31')).to.be.false;
    expect(DateTime.isDateTime(dt)).to.be.true;
    expect(DateTime.isDateTime({})).to.be.false;
  });

  it('should correctly handle various utility functions', () => {
    expect(new DateTime('2021-07-04 UTC').utcOffsetSeconds).to.equal(0);
    expect(new DateTime('2021-01-04 America/New_York').utcOffsetMinutes).to.equal(-300);
    expect(new DateTime('2021-07-04 America/New_York').utcOffsetSeconds).to.equal(-14400);
    expect(() => new DateTime('2021-01-04 Atlantis/Xanadu')).to.throw('Bad timezone: Atlantis/Xanadu');
    expect(() => new DateTime('2021-01-04', 'Atlantis/Xanadu')).to.throw('Bad timezone: Atlantis/Xanadu');
    expect(new DateTime('2021-01-04 Europe/Dublin').utcOffsetSeconds).to.equal(0);
    expect(new DateTime('2021-07-04 Europe/Dublin').utcOffsetSeconds).to.equal(3600);
    expect(new DateTime('2021-01-04 Europe/Dublin').utcOffsetMinutes).to.equal(0);
    expect(new DateTime('2021-07-04 Europe/Dublin').utcOffsetMinutes).to.equal(60);
    expect(new DateTime('2021-07-04 UTC').dstOffsetSeconds).to.equal(0);
    expect(new DateTime('2021-01-04 America/New_York').dstOffsetMinutes).to.equal(0);
    expect(new DateTime('2021-07-04 America/New_York').dstOffsetMinutes).to.equal(60);
    expect(new DateTime('2021-01-04 Europe/Dublin').dstOffsetMinutes).to.equal(-60);
    expect(new DateTime('2021-01-04 Europe/Dublin').isDST()).to.be.true;
    expect(new DateTime('2021-07-04 Europe/Dublin').isDST()).to.be.false;
    expect(new DateTime('2021-01-04 America/New_York').getTimezoneDisplayName()).to.equal('EST');
    expect(new DateTime('2021-07-04 America/New_York').getTimezoneDisplayName()).to.equal('EDT');
    expect(new DateTime('05:06').toHoursAndMinutesString()).to.equal('05:06');
    expect(new DateTime('2021-01-04 05:06 America/New_York').toHoursAndMinutesString()).to.equal('05:06');
    expect(new DateTime('2021-01-04 05:06 America/New_York').toHoursAndMinutesString(true)).to.equal('05:06');
    expect(new DateTime('2021-07-04 05:06 America/New_York').toHoursAndMinutesString()).to.equal('05:06');
    expect(new DateTime('2021-07-04 05:06 America/New_York').toHoursAndMinutesString(true)).to.equal('05:06§');
    expect(new DateTime('2021-07-04 05:06 America/New_York').toYMDhmString()).to.equal('2021-07-04 05:06§');
    expect(new DateTime().computeUtcMillisFromWallTime({ y: 1970, m: 1, d: 1, utcOffset: 0 })).to.equal(0);
    expect(new DateTime().computeUtcMillisFromWallTime({ y: 1970, m: 1, d: 1 })).to.equal(18000000);
    expect(new DateTime().isLeapYear(1900)).to.be.false;
    expect(new DateTime().isLeapYear(1904)).to.be.true;
    expect(new DateTime().isLeapYear(2000)).to.be.true;
    expect(new DateTime().isLeapYear(2003)).to.be.false;
    expect(new DateTime('2023-12-31').isLeapYear()).to.be.false;
    expect(new DateTime('2024-12-31').isLeapYear()).to.be.true;
    expect(() => new DateTime().tz('foo')).to.throw('Bad timezone: foo');
    expect(new DateTime().tz('EST').timezone.zoneName).to.equal('America/New_York');
  });
});
