// ==========================================================
// F4IOW · MISSION DASHBOARD CONFIG
// Jean-Maurice Mwayembe · F4IOW
// Colmar · France · Locator JN38QB · DMR ID 2080708
// ==========================================================

var disableSetup = false;

var topBarCenterText = "F4IOW · COLMAR · JN38QB · DX ELITE STATION";

var layout_cols = 4;
var layout_rows = 3;

var aURL = [
  ["2196F3", "QRZ", "https://qrz.com/db/F4IOW", 1, "L"],
  ["ff9100", "WIDGET", "https://mwayembe-eng.github.io/f4iow-widget/", 1, "L"],
  ["0dd1a7", "PSK", "https://pskreporter.info/pskmap.html", 1, "L"],
  ["8b5cf6", "DX", "https://www.dxsummit.fi/", 1, "L"],
  ["50e3a4", "SOLAR", "https://www.solarham.net/", 1, "R"],
  ["1496ff", "AMSAT", "https://www.amsat.org/status/", 1, "R"],
  ["ff5470", "ISS", "https://spotthestation.nasa.gov/tracking_map.cfm", 1, "R"],
  ["add10d", "F4IOW", "https://mwayembe-eng.github.io/", 1, "R"]
];

var aRSS = [
  ["https://www.amsat.org/feed/", 60],
  ["https://daily.hamweekly.com/atom.xml", 60]
];

var aIMG = [
  ["F4IOW · MAIN WIDGET", "iframe|https://mwayembe-eng.github.io/f4iow-widget/"],
  ["QRZ · F4IOW", "iframe|https://qrz.com/db/F4IOW"],
  ["PSK REPORTER", "iframe|https://pskreporter.info/pskmap.html"],
  ["DX SUMMIT", "iframe|https://www.dxsummit.fi/"],
  ["SOLARHAM", "iframe|https://www.solarham.net/"],
  ["AMSAT STATUS", "iframe|https://www.amsat.org/status/"],
  ["ISS TRACKING", "iframe|https://spotthestation.nasa.gov/tracking_map.cfm"],
  ["WEB SDR", "iframe|http://websdr.org/"],
  ["F4IOW · COLMAR", "https://i.imgur.com/AxKTDj3.jpeg"],
  ["F4IOW · SHACK", "https://i.imgur.com/WsEPy55.jpeg"],
  ["F4IOW · STATION", "https://i.imgur.com/PWoxcA3.jpeg"],
  ["F4IOW · OPERATOR", "https://i.imgur.com/eDCSMwo.jpeg"]
];

var tileDelay = [
  30000, 30000, 30000, 30000,
  30000, 30000, 30000, 30000,
  30000, 30000, 30000, 30000
];
