const fs = require("fs").promises;
const   _gT = require("./theme");
const   l = _gT({ theme: "l", name: "AtomAx mode Light"});
const    lHC = _gT({ theme: "lhc",name: "AtomAx mode Light High Contrast"});
const    lC = _gT({theme: "lc", name: "AtomAx mode Light Colorblind"});
const  lT = _gT({theme: "lt", name: "AtomAx mode Light Tritanopia"});
const  d = _gT({ theme: "d", name: "AtomAx mode Dark"});
const   dD = _gT({ theme: "dd", name: "AtomAx mode Dark Dimmed"});
const   dHC = _gT({theme: "dhc", name: "AtomAx mode Dark High Contrast"});
const   dC = _gT({theme: "dc", name: "AtomAx mode Dark Colorblind"});
const  dT = _gT({theme: "dt", name: "AtomAx mode Dark Tritanopia"});
const   S = _gT({theme: "s", name: "AtomAx mode System Themes"});




      fs.mkdir("./themes", { recursive: true })
        .then(() => Promise.all([
          fs.writeFile("./themes/light.json", JSON.stringify(l, null, 2)),
          fs.writeFile("./themes/light_high_contrast.json", JSON.stringify(lHC, null, 2)),
          fs.writeFile("./themes/light_colorblind.json", JSON.stringify(lC , null, 2)),
          fs.writeFile("./themes/light_tritanopia.json", JSON.stringify(lT , null, 2)),
          fs.writeFile("./themes/dark.json", JSON.stringify(d, null, 2)),
          fs.writeFile("./themes/dark_dimmed.json", JSON.stringify(dD, null, 2)),
          fs.writeFile("./themes/dark_high_contrast.json", JSON.stringify(dHC, null, 2)),
          fs.writeFile("./themes/dark_colorblind.json", JSON.stringify(dC, null, 2)),
          fs.writeFile("./themes/dark_tritanopia.json", JSON.stringify(dT, null, 2)),
          fs.writeFile("./themes/dark.json", JSON.stringify(S, null, 2)),
        ]))
        .catch(() => process.exit(1))
