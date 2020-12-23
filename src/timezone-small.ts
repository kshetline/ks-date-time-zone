import { Timezone } from './timezone';

/* eslint-disable quote-props */
// -5qy 2015,2025 -z .../tzdir/usr/share/zoneinfo
// noinspection SpellCheckingInspection
export const initTimeZoneSmall = () => Timezone.defineTimeZones({ // tz database version: 2020d, years 2015-2025
  'Africa/Abidjan': '+0000 +0000 0;0/0/GMT;',
  'Africa/Addis_Ababa': '+0300 +0300 0;30/0/EAT;',
  'Africa/Algiers': '+0100 +0100 0;10/0/CET;',
  'Africa/Bangui': '+0100 +0100 0;10/0/WAT;',
  'Africa/Blantyre': '+0200 +0200 0;20/0/CAT;',
  'Africa/Cairo': '+0200 +0200 0;20/0/EET;',
  'Africa/Casablanca': '+0000 +0100 0;0/0 10/10 10/0 0/-10;101010101010101232323232323232;1O9e0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 1fA0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0',
  'Africa/Ceuta': '+0100 +0100 60;10/0/CET 20/10/CEST;1010101010101010101010;1O9d0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Africa/Johannesburg': '+0200 +0200 0;20/0/SAST;',
  'Africa/Khartoum': '+0300 +0200 0;30/0/EAT 20/0/CAT;1;1Usl0',
  'Africa/Sao_Tome': '+0000 +0000 0;0/0/GMT 10/0/WAT;10;1UQN0 2q00',
  'Africa/Windhoek': '+0200 +0200 0;20/0/CAT 10/-10/WAT;101010;1Oc00 11B0 1nX0 11B0 1nX0 11B0',
  'America/Adak': '-1000 -1000 60;-a0/0/HST -90/10/HDT;1010101010101010101010;1O100 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Anchorage': '-0900 -0900 60;-90/0/AKST -80/10/AKDT;1010101010101010101010;1O0X0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Anguilla': '-0400 -0400 0;-40/0/AST;',
  'America/Araguaina': '-0300 -0300 0;-30/0;',
  'America/Asuncion': '-0400 -0400 60;-40/0 -30/10;10101010101010101010;1PoQ0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0;2013 3 22 1 0:0 0 0,2010 10 1 1 0:0 0 60',
  'America/Atikokan': '-0500 -0500 0;-50/0/EST;',
  'America/Bahia_Banderas': '-0600 -0600 60;-60/0/CST -50/10/CDT;1010101010101010101010;1Oc80 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0;2002 10 0 1 2:0 0 0,2002 4 1 1 2:0 0 60',
  'America/Belize': '-0600 -0600 0;-60/0/CST;',
  'America/Boa_Vista': '-0400 -0400 0;-40/0;',
  'America/Bogota': '-0500 -0500 0;-50/0;',
  'America/Boise': '-0700 -0700 60;-70/0/MST -60/10/MDT;1010101010101010101010;9VJ0 1FCn0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Cambridge_Bay': '-0700 -0700 60;-70/0/MST -60/10/MDT;1010101010101010101010;1O0V0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Campo_Grande': '-0400 -0400 0;-40/0 -30/10;10101010;1Pus0 On0 1zd0 On0 1zd0 On0 1HB0 FX0',
  'America/Cancun': '-0500 -0500 0;-50/0/EST -50/10/CDT;10;19A70 EaM0',
  'America/Caracas': '-0430 -0400 0;-4u/0 -40/0;1;1QMT0',
  'America/Chicago': '-0600 -0600 60;-60/0/CST -50/10/CDT;1010101010101010101010;1O0U0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Chihuahua': '-0700 -0700 60;-70/0/MST -60/10/MDT;1010101010101010101010;1Oc90 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0;2002 10 0 1 2:0 0 0,2002 4 1 1 2:0 0 60',
  'America/Creston': '-0700 -0700 0;-70/0/MST;',
  'America/Dawson': '-0800 -0700 0;-80/0/PST -70/10/PDT -70/0/MST;101010101012;1O0W0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1z90',
  'America/Detroit': '-0500 -0500 60;-50/0/EST -40/10/EDT;1010101010101010101010;cUT0 1CDb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Ensenada': '-0800 -0800 60;-80/0/PST -70/10/PDT;1010101010101010101010;1O0W0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Fort_Nelson': '-0800 -0700 0;-80/0/PST -70/0/MST;1;1O0W0',
  'America/Fort_Wayne': '-0500 -0500 60;-50/0/EST -40/10/EDT;1010101010101010101010;1O0T0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Glace_Bay': '-0400 -0400 60;-40/0/AST -30/10/ADT;1010101010101010101010;1O0S0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Godthab': '-0300 -0300 60;-30/0 -20/10;1010101010101010101010;oXh0 1qxU0 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'America/Goose_Bay': '-0400 -0400 60;-40/0/AST -30/10/ADT;1010101010101010101010;1FPE0 9Ip0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Grand_Turk': '-0500 -0500 60;-50/0/EST -40/10/EDT -40/0/AST;121010101010101010;1O0T0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Havana': '-0500 -0500 60;-50/0/CST -40/10/CDT;1010101010101010101010;1O0R0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0;2012 11 1 1 0:0 1 0,2013 3 8 1 0:0 1 60',
  'America/Metlakatla': '-0800 -0900 60;-80/0/PST -90/0/AKST -80/10/AKDT;1212120121212121212121;1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Miquelon': '-0300 -0300 60;-30/0 -20/10;1010101010101010101010;1O0R0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'America/Noronha': '-0200 -0200 0;-20/0;',
  'America/Port-au-Prince': '-0500 -0500 60;-50/0/EST -40/10/EDT;10101010101010101010;1O0T0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2017 11 1 1 2:0 0 0,2017 3 8 1 2:0 0 60',
  'America/Punta_Arenas': '-0400 -0300 0;-40/0 -30/10 -30/0;12;1RuQ0 IL0',
  'America/Santiago': '-0400 -0400 60;-40/0 -30/10;101010101010101010;1RuQ0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0;2019 4 2 1 3:0 2 0,2019 9 2 1 4:0 2 60',
  'America/Sao_Paulo': '-0300 -0300 60;-30/0 -20/10;1010101010;-f4J0 24XX0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0',
  'America/Scoresbysund': '-0200 -0100 60;-20/0 0/10 -10/0;1212121212121212121212;rm20 1obb0 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'America/St_Johns': '-0330 -0330 60;-3u/0/NST -2u/10/NDT;1010101010101010101010;1FPDu 9Ip0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0;2007 11 1 1 2:0 0 0,2007 3 8 1 2:0 0 60',
  'Antarctica/Casey': '+0800 +1100 0;80/0 b0/0;1010101;1RWg0 3m10 1o30 14k0 1kr0 12l0 1o01',
  'Antarctica/Davis': '+0700 +0700 0;70/0;',
  'Antarctica/DumontDUrville': '+1000 +1000 0;a0/0;',
  'Antarctica/Macquarie': '+1000 +1000 60;a0/0/AEST b0/10/AEDT;1010101010101010101010;1BnO0 cM20 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0;2008 4 1 1 2:0 1 0,2001 10 1 1 2:0 1 60',
  'Antarctica/Mawson': '+0500 +0500 0;50/0;',
  'Antarctica/McMurdo': '+1200 +1200 60;c0/0/NZST d0/10/NZDT;10101010101010101010;1PlO0 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0;2008 4 1 1 2:0 1 0,2007 9 0 1 2:0 1 60',
  'Antarctica/Syowa': '+0300 +0300 0;30/0;',
  'Antarctica/Troll': '+0000 +0000 120;0/0 20/20;1010101010101010101010;1O9d0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;2004 10 0 1 1:0 2 0,2005 3 0 1 1:0 2 120',
  'Antarctica/Vostok': '+0600 +0600 0;60/0;',
  'Asia/Amman': '+0200 +0200 60;20/0/EET 30/10/EEST;1010101010101010101010;1O8m0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0;2014 10 0 6 0:0 1 0,2014 3 0 5 24:0 0 60',
  'Asia/Anadyr': '+1200 +1200 0;c0/0;',
  'Asia/Baku': '+0400 +0400 0;40/0 50/10;10;1O9c0 1o00',
  'Asia/Barnaul': '+0600 +0700 0;60/0 70/0;1;1QyI0',
  'Asia/Beirut': '+0200 +0200 60;20/0/EET 30/10/EEST;1010101010101010101010;1O9a0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0;1999 10 0 1 0:0 0 0,1993 3 0 1 0:0 0 60',
  'Asia/Brunei': '+0800 +0800 0;80/0;',
  'Asia/Calcutta': '+0530 +0530 0;5u/0/IST;',
  'Asia/Chita': '+0800 +0900 0;80/0 90/0;1;1QyG0',
  'Asia/Choibalsan': '+0800 +0800 0;80/0 90/10;1010;1O8G0 1cJ0 1cP0 1cJ0',
  'Asia/Chongqing': '+0800 +0800 0;80/0/CST;',
  'Asia/Colombo': '+0530 +0530 0;5u/0;',
  'Asia/Damascus': '+0200 +0200 60;20/0/EET 30/10/EEST;1010101010101010101010;1O8m0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0;2009 10 0 6 0:0 0 0,2012 3 0 6 0:0 0 60',
  'Asia/Dili': '+0900 +0900 0;90/0;',
  'Asia/Dubai': '+0400 +0400 0;40/0;',
  'Asia/Famagusta': '+0200 +0200 60;20/0/EET 30/10/EEST 30/0;101201010101010101010;19LW0 FJf0 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Asia/Gaza': '+0200 +0200 60;20/0/EET 30/10/EEST;1010101010101010101010;1O8K0 1nA0 1210 1qL0 WN0 1qL0 WN0 1qL0 11c0 1on0 11B0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;2020 10 24 7 1:0 0 0,2020 3 24 7 0:0 0 60',
  'Asia/Hong_Kong': '+0800 +0800 0;80/0/HKT;',
  'Asia/Hovd': '+0700 +0700 0;70/0 80/10;1010;1O8H0 1cJ0 1cP0 1cJ0',
  'Asia/Istanbul': '+0200 +0300 0;20/0/EET 30/10/EEST 30/0;1012;1LI10 3SM0 U00 15w0',
  'Asia/Jakarta': '+0700 +0700 0;70/0/WIB;',
  'Asia/Jayapura': '+0900 +0900 0;90/0/WIT;',
  'Asia/Jerusalem': '+0200 +0200 60;20/0/IST 30/10/IDT;1010101010101010101010;1O8o0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0;2013 10 0 1 2:0 0 0,2013 3 23 6 2:0 0 60',
  'Asia/Kabul': '+0430 +0430 0;4u/0;',
  'Asia/Karachi': '+0500 +0500 0;50/0/PKT;',
  'Asia/Kathmandu': '+0545 +0545 0;5J/0;',
  'Asia/Magadan': '+1000 +1100 0;a0/0 b0/0;1;1QJQ0',
  'Asia/Makassar': '+0800 +0800 0;80/0/WITA;',
  'Asia/Manila': '+0800 +0800 0;80/0/PST;',
  'Asia/Nicosia': '+0200 +0200 60;20/0/EET 30/10/EEST;1010101010101010101010;19LW0 FJf0 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Asia/Novosibirsk': '+0600 +0700 0;60/0 70/0;1;1Rmk0',
  'Asia/Pyongyang': '+0900 +0900 0;90/0/KST 8u/0/KST;10;1P4D0 6BA0',
  'Asia/Qyzylorda': '+0600 +0500 0;60/0 50/0;1;1Xei0',
  'Asia/Rangoon': '+0630 +0630 0;6u/0;',
  'Asia/Sakhalin': '+1000 +1100 0;a0/0 b0/0;1;1QyE0',
  'Asia/Seoul': '+0900 +0900 0;90/0/KST;',
  'Asia/Srednekolymsk': '+1100 +1100 0;b0/0;',
  'Asia/Tehran': '+0330 +0330 0;3u/0 4u/10;1010101010101010101010;1O6ku 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0',
  'Asia/Tokyo': '+0900 +0900 0;90/0/JST;',
  'Asia/Tomsk': '+0600 +0700 0;60/0 70/0;1;1QXU0',
  'Atlantic/Azores': '-0100 -0100 60;-10/0 0/10;1010101010101010101010;1O9d0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Atlantic/Canary': '+0000 +0000 60;0/0/WET 10/10/WEST;1010101010101010101010;oXc0 1qy10 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Atlantic/Cape_Verde': '-0100 -0100 0;-10/0;',
  'Atlantic/Faeroe': '+0000 +0000 60;0/0/WET 10/10/WEST;1010101010101010101010;1O9d0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Atlantic/Madeira': '+0000 +0000 60;0/0/WET 10/10/WEST;1010101010101010101010;xq10 1i7c0 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Australia/ACT': '+1000 +1000 60;a0/0/AEST b0/10/AEDT;10101010101010101010;1PoE0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0;2008 4 1 1 2:0 1 0,2008 10 1 1 2:0 1 60',
  'Australia/Adelaide': '+0930 +0930 60;9u/0/ACST au/10/ACDT;10101010101010101010;1PoEu 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0;2008 4 1 1 2:0 1 0,2008 10 1 1 2:0 1 60',
  'Australia/Brisbane': '+1000 +1000 0;a0/0/AEST;',
  'Australia/Broken_Hill': '+0930 +0930 60;9u/0/ACST au/10/ACDT;1010101010101010101010;1d2Cu B9e0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0;2008 4 1 1 2:0 1 0,2008 10 1 1 2:0 1 60',
  'Australia/Currie': '+1000 +1000 60;a0/0/AEST b0/10/AEDT;10101010101010101010;1PoE0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0;2008 4 1 1 2:0 1 0,2001 10 1 1 2:0 1 60',
  'Australia/Darwin': '+0930 +0930 0;9u/0/ACST;',
  'Australia/Eucla': '+0845 +0845 0;8J/0;',
  'Australia/LHI': '+1030 +1030 30;au/0 b0/u;10101010101010101010;1PoDu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu;2008 4 1 1 2:0 0 0,2008 10 1 1 2:0 0 30',
  'Australia/Perth': '+0800 +0800 0;80/0/AWST;',
  'CET': '+0100 +0100 60;10/0/CET 20/10/CEST;1010101010101010101010;1O9d0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 2:0 1 0,1981 3 0 1 2:0 1 60',
  'Chile/EasterIsland': '-0700 -0600 60;-70/0 -50/10 -60/0;12121212121212121212;tG30 1nco0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0;2019 4 2 1 3:0 2 0,2019 9 2 1 4:0 2 60',
  'EET': '+0200 +0200 60;20/0/EET 30/10/EEST;1010101010101010101010;1O9d0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Eire': '+0100 +0100 -60;10/0/IST 0/-10/GMT;10101010101010101010;1Pxd0 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0;1981 3 0 1 1:0 2 0,1996 10 0 1 1:0 2 -60',
  'Etc/GMT+10': '-1000 -1000 0;-a0/0;',
  'Etc/GMT+11': '-1100 -1100 0;-b0/0;',
  'Etc/GMT+12': '-1200 -1200 0;-c0/0;',
  'Etc/GMT+6': '-0600 -0600 0;-60/0;',
  'Etc/GMT+7': '-0700 -0700 0;-70/0;',
  'Etc/GMT+8': '-0800 -0800 0;-80/0;',
  'Etc/GMT+9': '-0900 -0900 0;-90/0;',
  'Etc/GMT-1': '+0100 +0100 0;10/0;',
  'Etc/GMT-13': '+1300 +1300 0;d0/0;',
  'Etc/GMT-14': '+1400 +1400 0;e0/0;',
  'Etc/GMT-2': '+0200 +0200 0;20/0;',
  'Etc/UCT': '+0000 +0000 0;0/0/UTC;',
  'Europe/Astrakhan': '+0300 +0400 0;30/0 40/0;1;1QyL0',
  'Europe/Belfast': '+0000 +0000 60;0/0/GMT 10/10/BST;1010101010101010101010;1O9d0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Europe/Chisinau': '+0200 +0200 60;20/0/EET 30/10/EEST;1010101010101010101010;1O9c0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1997 10 0 1 3:0 0 0,1997 3 0 1 2:0 0 60',
  'Europe/Moscow': '+0300 +0300 0;30/0/MSK;',
  'Europe/Saratov': '+0300 +0400 0;30/0 40/0;1;1Sfz0',
  'Europe/Tirane': '+0100 +0100 60;10/0/CET 20/10/CEST;1010101010101010101010;zhX0 1gfe0 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 1:0 2 0,1981 3 0 1 1:0 2 60',
  'Europe/Volgograd': '+0300 +0400 0;30/0 40/0;1;1WQL0',
  'HST': '-1000 -1000 0;-a0/0/HST;',
  'MET': '+0100 +0100 60;10/0/MET 20/10/MEST;1010101010101010101010;1O9d0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00;1996 10 0 1 2:0 1 0,1981 3 0 1 2:0 1 60',
  'NZ-CHAT': '+1245 +1245 60;cJ/0 dJ/10;10101010101010101010;1PlO0 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0;2008 4 1 1 2:45 1 0,2007 9 0 1 2:45 1 60',
  'Pacific/Apia': '-1100 +1300 60;-b0/0 e0/10 d0/0;1212121212121212121212;1Gfn0 7Ur0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0;2012 4 1 1 4:0 0 0,2012 9 0 1 3:0 0 60',
  'Pacific/Fiji': '+1200 +1200 60;c0/0 d0/10;10101010101010101010;1PzO0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 20o0 pc0 2hc0 bc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0;2015 1 12 1 3:0 0 0,2021 11 8 1 2:0 0 60',
  'Pacific/Guam': '+1000 +1000 0;a0/0/ChST;',
  'Pacific/Marquesas': '-0930 -0930 0;-9u/0;',
  'Pacific/Midway': '-1100 -1100 0;-b0/0/SST;',
  'Pacific/Norfolk': '+1130 +1100 60;bu/0 b0/0 c0/10;1212121212121;1PoCu 9Jcu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0;2008 4 1 1 2:0 1 0,2008 10 1 1 2:0 1 60',
  'Pacific/Tongatapu': '+1300 +1300 0;d0/0 e0/10;10;1S4d0 s00',
  'Africa/Accra': 'Africa/Abidjan',
  'Africa/Asmara': 'Africa/Addis_Ababa',
  'Africa/Asmera': 'Africa/Addis_Ababa',
  'Africa/Bamako': 'Africa/Abidjan',
  'Africa/Banjul': 'Africa/Abidjan',
  'Africa/Bissau': 'Africa/Abidjan',
  'Africa/Brazzaville': 'Africa/Bangui',
  'Africa/Bujumbura': 'Africa/Blantyre',
  'Africa/Conakry': 'Africa/Abidjan',
  'Africa/Dakar': 'Africa/Abidjan',
  'Africa/Dar_es_Salaam': 'Africa/Addis_Ababa',
  'Africa/Djibouti': 'Africa/Addis_Ababa',
  'Africa/Douala': 'Africa/Bangui',
  'Africa/El_Aaiun': 'Africa/Casablanca',
  'Africa/Freetown': 'Africa/Abidjan',
  'Africa/Gaborone': 'Africa/Blantyre',
  'Africa/Harare': 'Africa/Blantyre',
  'Africa/Juba': 'Africa/Addis_Ababa',
  'Africa/Kampala': 'Africa/Addis_Ababa',
  'Africa/Kigali': 'Africa/Blantyre',
  'Africa/Kinshasa': 'Africa/Bangui',
  'Africa/Lagos': 'Africa/Bangui',
  'Africa/Libreville': 'Africa/Bangui',
  'Africa/Lome': 'Africa/Abidjan',
  'Africa/Luanda': 'Africa/Bangui',
  'Africa/Lubumbashi': 'Africa/Blantyre',
  'Africa/Lusaka': 'Africa/Blantyre',
  'Africa/Malabo': 'Africa/Bangui',
  'Africa/Maputo': 'Africa/Blantyre',
  'Africa/Maseru': 'Africa/Johannesburg',
  'Africa/Mbabane': 'Africa/Johannesburg',
  'Africa/Mogadishu': 'Africa/Addis_Ababa',
  'Africa/Monrovia': 'Africa/Abidjan',
  'Africa/Nairobi': 'Africa/Addis_Ababa',
  'Africa/Ndjamena': 'Africa/Bangui',
  'Africa/Niamey': 'Africa/Bangui',
  'Africa/Nouakchott': 'Africa/Abidjan',
  'Africa/Ouagadougou': 'Africa/Abidjan',
  'Africa/Porto-Novo': 'Africa/Bangui',
  'Africa/Timbuktu': 'Africa/Abidjan',
  'Africa/Tripoli': 'Africa/Cairo',
  'Africa/Tunis': 'Africa/Algiers',
  'America/Antigua': 'America/Anguilla',
  'America/Argentina/Buenos_Aires': 'America/Araguaina',
  'America/Argentina/Catamarca': 'America/Araguaina',
  'America/Argentina/ComodRivadavia': 'America/Araguaina',
  'America/Argentina/Cordoba': 'America/Araguaina',
  'America/Argentina/Jujuy': 'America/Araguaina',
  'America/Argentina/La_Rioja': 'America/Araguaina',
  'America/Argentina/Mendoza': 'America/Araguaina',
  'America/Argentina/Rio_Gallegos': 'America/Araguaina',
  'America/Argentina/Salta': 'America/Araguaina',
  'America/Argentina/San_Juan': 'America/Araguaina',
  'America/Argentina/San_Luis': 'America/Araguaina',
  'America/Argentina/Tucuman': 'America/Araguaina',
  'America/Argentina/Ushuaia': 'America/Araguaina',
  'America/Aruba': 'America/Anguilla',
  'America/Atka': 'America/Adak',
  'America/Bahia': 'America/Araguaina',
  'America/Barbados': 'America/Anguilla',
  'America/Belem': 'America/Araguaina',
  'America/Blanc-Sablon': 'America/Anguilla',
  'America/Buenos_Aires': 'America/Araguaina',
  'America/Catamarca': 'America/Araguaina',
  'America/Cayenne': 'America/Araguaina',
  'America/Cayman': 'America/Atikokan',
  'America/Coral_Harbour': 'America/Atikokan',
  'America/Cordoba': 'America/Araguaina',
  'America/Costa_Rica': 'America/Belize',
  'America/Cuiaba': 'America/Campo_Grande',
  'America/Curacao': 'America/Anguilla',
  'America/Danmarkshavn': 'Africa/Abidjan',
  'America/Dawson_Creek': 'America/Creston',
  'America/Denver': 'America/Cambridge_Bay',
  'America/Dominica': 'America/Anguilla',
  'America/Edmonton': 'America/Cambridge_Bay',
  'America/Eirunepe': 'America/Bogota',
  'America/El_Salvador': 'America/Belize',
  'America/Fortaleza': 'America/Araguaina',
  'America/Grenada': 'America/Anguilla',
  'America/Guadeloupe': 'America/Anguilla',
  'America/Guatemala': 'America/Belize',
  'America/Guayaquil': 'America/Bogota',
  'America/Guyana': 'America/Boa_Vista',
  'America/Halifax': 'America/Glace_Bay',
  'America/Hermosillo': 'America/Creston',
  'America/Indiana/Indianapolis': 'America/Fort_Wayne',
  'America/Indiana/Knox': 'America/Chicago',
  'America/Indiana/Marengo': 'America/Fort_Wayne',
  'America/Indiana/Petersburg': 'America/Fort_Wayne',
  'America/Indiana/Tell_City': 'America/Chicago',
  'America/Indiana/Vevay': 'America/Fort_Wayne',
  'America/Indiana/Vincennes': 'America/Fort_Wayne',
  'America/Indiana/Winamac': 'America/Fort_Wayne',
  'America/Indianapolis': 'America/Fort_Wayne',
  'America/Inuvik': 'America/Cambridge_Bay',
  'America/Iqaluit': 'America/Fort_Wayne',
  'America/Jamaica': 'America/Atikokan',
  'America/Jujuy': 'America/Araguaina',
  'America/Juneau': 'America/Anchorage',
  'America/Kentucky/Louisville': 'America/Fort_Wayne',
  'America/Kentucky/Monticello': 'America/Fort_Wayne',
  'America/Knox_IN': 'America/Chicago',
  'America/Kralendijk': 'America/Anguilla',
  'America/La_Paz': 'America/Boa_Vista',
  'America/Lima': 'America/Bogota',
  'America/Los_Angeles': 'America/Ensenada',
  'America/Louisville': 'America/Fort_Wayne',
  'America/Lower_Princes': 'America/Anguilla',
  'America/Maceio': 'America/Araguaina',
  'America/Managua': 'America/Belize',
  'America/Manaus': 'America/Boa_Vista',
  'America/Marigot': 'America/Anguilla',
  'America/Martinique': 'America/Anguilla',
  'America/Matamoros': 'America/Chicago',
  'America/Mazatlan': 'America/Chihuahua',
  'America/Mendoza': 'America/Araguaina',
  'America/Menominee': 'America/Chicago',
  'America/Merida': 'America/Bahia_Banderas',
  'America/Mexico_City': 'America/Bahia_Banderas',
  'America/Moncton': 'America/Glace_Bay',
  'America/Monterrey': 'America/Bahia_Banderas',
  'America/Montevideo': 'America/Araguaina',
  'America/Montreal': 'America/Fort_Wayne',
  'America/Montserrat': 'America/Anguilla',
  'America/Nassau': 'America/Fort_Wayne',
  'America/New_York': 'America/Fort_Wayne',
  'America/Nipigon': 'America/Fort_Wayne',
  'America/Nome': 'America/Anchorage',
  'America/North_Dakota/Beulah': 'America/Chicago',
  'America/North_Dakota/Center': 'America/Chicago',
  'America/North_Dakota/New_Salem': 'America/Chicago',
  'America/Nuuk': 'America/Godthab',
  'America/Ojinaga': 'America/Cambridge_Bay',
  'America/Panama': 'America/Atikokan',
  'America/Pangnirtung': 'America/Fort_Wayne',
  'America/Paramaribo': 'America/Araguaina',
  'America/Phoenix': 'America/Creston',
  'America/Port_of_Spain': 'America/Anguilla',
  'America/Porto_Acre': 'America/Bogota',
  'America/Porto_Velho': 'America/Boa_Vista',
  'America/Puerto_Rico': 'America/Anguilla',
  'America/Rainy_River': 'America/Chicago',
  'America/Rankin_Inlet': 'America/Chicago',
  'America/Recife': 'America/Araguaina',
  'America/Regina': 'America/Belize',
  'America/Resolute': 'America/Chicago',
  'America/Rio_Branco': 'America/Bogota',
  'America/Rosario': 'America/Araguaina',
  'America/Santa_Isabel': 'America/Ensenada',
  'America/Santarem': 'America/Araguaina',
  'America/Santo_Domingo': 'America/Anguilla',
  'America/Shiprock': 'America/Cambridge_Bay',
  'America/Sitka': 'America/Anchorage',
  'America/St_Barthelemy': 'America/Anguilla',
  'America/St_Kitts': 'America/Anguilla',
  'America/St_Lucia': 'America/Anguilla',
  'America/St_Thomas': 'America/Anguilla',
  'America/St_Vincent': 'America/Anguilla',
  'America/Swift_Current': 'America/Belize',
  'America/Tegucigalpa': 'America/Belize',
  'America/Thule': 'America/Glace_Bay',
  'America/Thunder_Bay': 'America/Fort_Wayne',
  'America/Tijuana': 'America/Ensenada',
  'America/Toronto': 'America/Fort_Wayne',
  'America/Tortola': 'America/Anguilla',
  'America/Vancouver': 'America/Ensenada',
  'America/Virgin': 'America/Anguilla',
  'America/Whitehorse': 'America/Dawson',
  'America/Winnipeg': 'America/Chicago',
  'America/Yakutat': 'America/Anchorage',
  'America/Yellowknife': 'America/Cambridge_Bay',
  'Antarctica/Palmer': 'America/Punta_Arenas',
  'Antarctica/Rothera': 'America/Araguaina',
  'Antarctica/South_Pole': 'Antarctica/McMurdo',
  'Arctic/Longyearbyen': 'Africa/Ceuta',
  'Asia/Aden': 'Antarctica/Syowa',
  'Asia/Almaty': 'Antarctica/Vostok',
  'Asia/Aqtau': 'Antarctica/Mawson',
  'Asia/Aqtobe': 'Antarctica/Mawson',
  'Asia/Ashgabat': 'Antarctica/Mawson',
  'Asia/Ashkhabad': 'Antarctica/Mawson',
  'Asia/Atyrau': 'Antarctica/Mawson',
  'Asia/Baghdad': 'Antarctica/Syowa',
  'Asia/Bahrain': 'Antarctica/Syowa',
  'Asia/Bangkok': 'Antarctica/Davis',
  'Asia/Bishkek': 'Antarctica/Vostok',
  'Asia/Chungking': 'Asia/Chongqing',
  'Asia/Dacca': 'Antarctica/Vostok',
  'Asia/Dhaka': 'Antarctica/Vostok',
  'Asia/Dushanbe': 'Antarctica/Mawson',
  'Asia/Harbin': 'Asia/Chongqing',
  'Asia/Hebron': 'Asia/Gaza',
  'Asia/Ho_Chi_Minh': 'Antarctica/Davis',
  'Asia/Irkutsk': 'Asia/Brunei',
  'Asia/Kamchatka': 'Asia/Anadyr',
  'Asia/Kashgar': 'Antarctica/Vostok',
  'Asia/Katmandu': 'Asia/Kathmandu',
  'Asia/Khandyga': 'Asia/Dili',
  'Asia/Kolkata': 'Asia/Calcutta',
  'Asia/Krasnoyarsk': 'Antarctica/Davis',
  'Asia/Kuala_Lumpur': 'Asia/Brunei',
  'Asia/Kuching': 'Asia/Brunei',
  'Asia/Kuwait': 'Antarctica/Syowa',
  'Asia/Macao': 'Asia/Chongqing',
  'Asia/Macau': 'Asia/Chongqing',
  'Asia/Muscat': 'Asia/Dubai',
  'Asia/Novokuznetsk': 'Antarctica/Davis',
  'Asia/Omsk': 'Antarctica/Vostok',
  'Asia/Oral': 'Antarctica/Mawson',
  'Asia/Phnom_Penh': 'Antarctica/Davis',
  'Asia/Pontianak': 'Asia/Jakarta',
  'Asia/Qatar': 'Antarctica/Syowa',
  'Asia/Qostanay': 'Antarctica/Vostok',
  'Asia/Riyadh': 'Antarctica/Syowa',
  'Asia/Saigon': 'Antarctica/Davis',
  'Asia/Samarkand': 'Antarctica/Mawson',
  'Asia/Shanghai': 'Asia/Chongqing',
  'Asia/Singapore': 'Asia/Brunei',
  'Asia/Taipei': 'Asia/Chongqing',
  'Asia/Tashkent': 'Antarctica/Mawson',
  'Asia/Tbilisi': 'Asia/Dubai',
  'Asia/Tel_Aviv': 'Asia/Jerusalem',
  'Asia/Thimbu': 'Antarctica/Vostok',
  'Asia/Thimphu': 'Antarctica/Vostok',
  'Asia/Ujung_Pandang': 'Asia/Makassar',
  'Asia/Ulaanbaatar': 'Asia/Choibalsan',
  'Asia/Ulan_Bator': 'Asia/Choibalsan',
  'Asia/Urumqi': 'Antarctica/Vostok',
  'Asia/Ust-Nera': 'Antarctica/DumontDUrville',
  'Asia/Vientiane': 'Antarctica/Davis',
  'Asia/Vladivostok': 'Antarctica/DumontDUrville',
  'Asia/Yakutsk': 'Asia/Dili',
  'Asia/Yangon': 'Asia/Rangoon',
  'Asia/Yekaterinburg': 'Antarctica/Mawson',
  'Asia/Yerevan': 'Asia/Dubai',
  'Atlantic/Bermuda': 'America/Glace_Bay',
  'Atlantic/Faroe': 'Atlantic/Faeroe',
  'Atlantic/Jan_Mayen': 'Africa/Ceuta',
  'Atlantic/Reykjavik': 'Africa/Abidjan',
  'Atlantic/South_Georgia': 'America/Noronha',
  'Atlantic/St_Helena': 'Africa/Abidjan',
  'Atlantic/Stanley': 'America/Araguaina',
  'Australia/Canberra': 'Australia/ACT',
  'Australia/Hobart': 'Australia/Currie',
  'Australia/Lindeman': 'Australia/Brisbane',
  'Australia/Lord_Howe': 'Australia/LHI',
  'Australia/Melbourne': 'Australia/ACT',
  'Australia/NSW': 'Australia/ACT',
  'Australia/North': 'Australia/Darwin',
  'Australia/Queensland': 'Australia/Brisbane',
  'Australia/South': 'Australia/Adelaide',
  'Australia/Sydney': 'Australia/ACT',
  'Australia/Tasmania': 'Australia/Currie',
  'Australia/Victoria': 'Australia/ACT',
  'Australia/West': 'Australia/Perth',
  'Australia/Yancowinna': 'Australia/Broken_Hill',
  'Brazil/Acre': 'America/Bogota',
  'Brazil/DeNoronha': 'America/Noronha',
  'Brazil/East': 'America/Sao_Paulo',
  'Brazil/West': 'America/Boa_Vista',
  'CST6CDT': 'America/Chicago',
  'Canada/Atlantic': 'America/Glace_Bay',
  'Canada/Central': 'America/Chicago',
  'Canada/Eastern': 'America/Fort_Wayne',
  'Canada/Mountain': 'America/Cambridge_Bay',
  'Canada/Newfoundland': 'America/St_Johns',
  'Canada/Pacific': 'America/Ensenada',
  'Canada/Saskatchewan': 'America/Belize',
  'Canada/Yukon': 'America/Dawson',
  'Chile/Continental': 'America/Santiago',
  'Cuba': 'America/Havana',
  'EST': 'America/Atikokan',
  'EST5EDT': 'America/Fort_Wayne',
  'Egypt': 'Africa/Cairo',
  'Etc/GMT': 'Africa/Abidjan',
  'Etc/GMT+0': 'Africa/Abidjan',
  'Etc/GMT+1': 'Atlantic/Cape_Verde',
  'Etc/GMT+2': 'America/Noronha',
  'Etc/GMT+3': 'America/Araguaina',
  'Etc/GMT+4': 'America/Boa_Vista',
  'Etc/GMT+5': 'America/Bogota',
  'Etc/GMT-0': 'Africa/Abidjan',
  'Etc/GMT-10': 'Antarctica/DumontDUrville',
  'Etc/GMT-11': 'Asia/Srednekolymsk',
  'Etc/GMT-12': 'Asia/Anadyr',
  'Etc/GMT-3': 'Antarctica/Syowa',
  'Etc/GMT-4': 'Asia/Dubai',
  'Etc/GMT-5': 'Antarctica/Mawson',
  'Etc/GMT-6': 'Antarctica/Vostok',
  'Etc/GMT-7': 'Antarctica/Davis',
  'Etc/GMT-8': 'Asia/Brunei',
  'Etc/GMT-9': 'Asia/Dili',
  'Etc/GMT0': 'Africa/Abidjan',
  'Etc/Greenwich': 'Africa/Abidjan',
  'Etc/UTC': 'Etc/UCT',
  'Etc/Universal': 'Etc/UCT',
  'Etc/Zulu': 'Etc/UCT',
  'Europe/Amsterdam': 'Africa/Ceuta',
  'Europe/Andorra': 'Africa/Ceuta',
  'Europe/Athens': 'EET',
  'Europe/Belgrade': 'Africa/Ceuta',
  'Europe/Berlin': 'Africa/Ceuta',
  'Europe/Bratislava': 'Africa/Ceuta',
  'Europe/Brussels': 'Africa/Ceuta',
  'Europe/Bucharest': 'EET',
  'Europe/Budapest': 'Africa/Ceuta',
  'Europe/Busingen': 'Africa/Ceuta',
  'Europe/Copenhagen': 'Africa/Ceuta',
  'Europe/Dublin': 'Eire',
  'Europe/Gibraltar': 'Africa/Ceuta',
  'Europe/Guernsey': 'Europe/Belfast',
  'Europe/Helsinki': 'EET',
  'Europe/Isle_of_Man': 'Europe/Belfast',
  'Europe/Istanbul': 'Asia/Istanbul',
  'Europe/Jersey': 'Europe/Belfast',
  'Europe/Kaliningrad': 'Africa/Cairo',
  'Europe/Kiev': 'EET',
  'Europe/Kirov': 'Antarctica/Syowa',
  'Europe/Lisbon': 'Atlantic/Faeroe',
  'Europe/Ljubljana': 'Africa/Ceuta',
  'Europe/London': 'Europe/Belfast',
  'Europe/Luxembourg': 'Africa/Ceuta',
  'Europe/Madrid': 'Africa/Ceuta',
  'Europe/Malta': 'Africa/Ceuta',
  'Europe/Mariehamn': 'EET',
  'Europe/Minsk': 'Antarctica/Syowa',
  'Europe/Monaco': 'Africa/Ceuta',
  'Europe/Nicosia': 'Asia/Nicosia',
  'Europe/Oslo': 'Africa/Ceuta',
  'Europe/Paris': 'Africa/Ceuta',
  'Europe/Podgorica': 'Africa/Ceuta',
  'Europe/Prague': 'Africa/Ceuta',
  'Europe/Riga': 'EET',
  'Europe/Rome': 'Africa/Ceuta',
  'Europe/Samara': 'Asia/Dubai',
  'Europe/San_Marino': 'Africa/Ceuta',
  'Europe/Sarajevo': 'Africa/Ceuta',
  'Europe/Simferopol': 'Europe/Moscow',
  'Europe/Skopje': 'Africa/Ceuta',
  'Europe/Sofia': 'EET',
  'Europe/Stockholm': 'Africa/Ceuta',
  'Europe/Tallinn': 'EET',
  'Europe/Tiraspol': 'Europe/Chisinau',
  'Europe/Ulyanovsk': 'Europe/Astrakhan',
  'Europe/Uzhgorod': 'EET',
  'Europe/Vaduz': 'Africa/Ceuta',
  'Europe/Vatican': 'Africa/Ceuta',
  'Europe/Vienna': 'Africa/Ceuta',
  'Europe/Vilnius': 'EET',
  'Europe/Warsaw': 'Africa/Ceuta',
  'Europe/Zagreb': 'Africa/Ceuta',
  'Europe/Zaporozhye': 'EET',
  'Europe/Zurich': 'Africa/Ceuta',
  'GB': 'Europe/Belfast',
  'GB-Eire': 'Europe/Belfast',
  'GMT': 'Africa/Abidjan',
  'GMT+0': 'Africa/Abidjan',
  'GMT-0': 'Africa/Abidjan',
  'GMT0': 'Africa/Abidjan',
  'Greenwich': 'Africa/Abidjan',
  'Hongkong': 'Asia/Hong_Kong',
  'Iceland': 'Africa/Abidjan',
  'Indian/Antananarivo': 'Africa/Addis_Ababa',
  'Indian/Chagos': 'Antarctica/Vostok',
  'Indian/Christmas': 'Antarctica/Davis',
  'Indian/Cocos': 'Asia/Rangoon',
  'Indian/Comoro': 'Africa/Addis_Ababa',
  'Indian/Kerguelen': 'Antarctica/Mawson',
  'Indian/Mahe': 'Asia/Dubai',
  'Indian/Maldives': 'Antarctica/Mawson',
  'Indian/Mauritius': 'Asia/Dubai',
  'Indian/Mayotte': 'Africa/Addis_Ababa',
  'Indian/Reunion': 'Asia/Dubai',
  'Iran': 'Asia/Tehran',
  'Israel': 'Asia/Jerusalem',
  'Jamaica': 'America/Atikokan',
  'Japan': 'Asia/Tokyo',
  'Kwajalein': 'Asia/Anadyr',
  'Libya': 'Africa/Cairo',
  'MST': 'America/Creston',
  'MST7MDT': 'America/Cambridge_Bay',
  'Mexico/BajaNorte': 'America/Ensenada',
  'Mexico/BajaSur': 'America/Chihuahua',
  'Mexico/General': 'America/Bahia_Banderas',
  'NZ': 'Antarctica/McMurdo',
  'Navajo': 'America/Cambridge_Bay',
  'PRC': 'Asia/Chongqing',
  'PST8PDT': 'America/Ensenada',
  'Pacific/Auckland': 'Antarctica/McMurdo',
  'Pacific/Bougainville': 'Asia/Srednekolymsk',
  'Pacific/Chatham': 'NZ-CHAT',
  'Pacific/Chuuk': 'Antarctica/DumontDUrville',
  'Pacific/Easter': 'Chile/EasterIsland',
  'Pacific/Efate': 'Asia/Srednekolymsk',
  'Pacific/Enderbury': 'Etc/GMT-13',
  'Pacific/Fakaofo': 'Etc/GMT-13',
  'Pacific/Funafuti': 'Asia/Anadyr',
  'Pacific/Galapagos': 'Etc/GMT+6',
  'Pacific/Gambier': 'Etc/GMT+9',
  'Pacific/Guadalcanal': 'Asia/Srednekolymsk',
  'Pacific/Honolulu': 'HST',
  'Pacific/Johnston': 'HST',
  'Pacific/Kiritimati': 'Etc/GMT-14',
  'Pacific/Kosrae': 'Asia/Srednekolymsk',
  'Pacific/Kwajalein': 'Asia/Anadyr',
  'Pacific/Majuro': 'Asia/Anadyr',
  'Pacific/Nauru': 'Asia/Anadyr',
  'Pacific/Niue': 'Etc/GMT+11',
  'Pacific/Noumea': 'Asia/Srednekolymsk',
  'Pacific/Pago_Pago': 'Pacific/Midway',
  'Pacific/Palau': 'Asia/Dili',
  'Pacific/Pitcairn': 'Etc/GMT+8',
  'Pacific/Pohnpei': 'Asia/Srednekolymsk',
  'Pacific/Ponape': 'Asia/Srednekolymsk',
  'Pacific/Port_Moresby': 'Antarctica/DumontDUrville',
  'Pacific/Rarotonga': 'Etc/GMT+10',
  'Pacific/Saipan': 'Pacific/Guam',
  'Pacific/Samoa': 'Pacific/Midway',
  'Pacific/Tahiti': 'Etc/GMT+10',
  'Pacific/Tarawa': 'Asia/Anadyr',
  'Pacific/Truk': 'Antarctica/DumontDUrville',
  'Pacific/Wake': 'Asia/Anadyr',
  'Pacific/Wallis': 'Asia/Anadyr',
  'Pacific/Yap': 'Antarctica/DumontDUrville',
  'Poland': 'Africa/Ceuta',
  'Portugal': 'Atlantic/Faeroe',
  'ROC': 'Asia/Chongqing',
  'ROK': 'Asia/Seoul',
  'Singapore': 'Asia/Brunei',
  'SystemV/AST4': 'America/Anguilla',
  'SystemV/AST4ADT': 'America/Goose_Bay',
  'SystemV/CST6': 'America/Belize',
  'SystemV/CST6CDT': 'America/Chicago',
  'SystemV/EST5': 'America/Atikokan',
  'SystemV/EST5EDT': 'America/Fort_Wayne',
  'SystemV/HST10': 'HST',
  'SystemV/MST7': 'America/Creston',
  'SystemV/MST7MDT': 'America/Boise',
  'SystemV/PST8': 'Etc/GMT+8',
  'SystemV/PST8PDT': 'America/Ensenada',
  'SystemV/YST9': 'Etc/GMT+8',
  'SystemV/YST9YDT': 'America/Anchorage',
  'Turkey': 'Asia/Istanbul',
  'UCT': 'Etc/UCT',
  'US/Alaska': 'America/Anchorage',
  'US/Aleutian': 'America/Adak',
  'US/Arizona': 'America/Creston',
  'US/Central': 'America/Chicago',
  'US/East-Indiana': 'America/Fort_Wayne',
  'US/Eastern': 'America/Fort_Wayne',
  'US/Hawaii': 'HST',
  'US/Indiana-Starke': 'America/Chicago',
  'US/Michigan': 'America/Detroit',
  'US/Mountain': 'America/Cambridge_Bay',
  'US/Pacific': 'America/Ensenada',
  'US/Pacific-New': 'America/Ensenada',
  'US/Samoa': 'Pacific/Midway',
  'UTC': 'Etc/UCT',
  'Universal': 'Etc/UCT',
  'W-SU': 'Europe/Moscow',
  'WET': 'Atlantic/Faeroe',
  'Zulu': 'Etc/UCT'
});