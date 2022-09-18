const fs = require("fs").promises;
const   getTheme = require("./theme");
const   l = getTheme({ theme: "l", name: "AtomAx mode Light"});
const    lHC = getTheme({ theme: "lhc",name: "AtomAx mode Light High Contrast"});
const    lC = getTheme({theme: "lc", name: "AtomAx mode Light Colorblind"});
const  lT = getTheme({theme: "lt", name: "AtomAx mode Light Tritanopia"});
const  d = getTheme({ theme: "d", name: "AtomAx mode Dark"});
const   dD = getTheme({ theme: "dd", name: "AtomAx mode Dark Dimmed"});
const   dHC = getTheme({theme: "dhc", name: "AtomAx mode Dark High Contrast"});
const   dC = getTheme({theme: "dc", name: "AtomAx mode Dark Colorblind"});
const  dT = getTheme({theme: "dt", name: "AtomAx mode Dark Tritanopia"});
// const   S = getTheme({theme: "s", name: "AtomAx mode System Themes"});




      fs.mkdir("./themes", { recursive: true })
        .then(() => Promise.all([
          fs.writeFile("./themes/my-light.json", JSON.stringify(l, null, 2)),
          fs.writeFile("./themes/my-light_high_contrast.json", JSON.stringify(lHC, null, 2)),
          fs.writeFile("./themes/my-light_colorblind.json", JSON.stringify(lC , null, 2)),
          fs.writeFile("./themes/my-light_tritanopia.json", JSON.stringify(lT , null, 2)),
          fs.writeFile("./themes/my-dark.json", JSON.stringify(d, null, 2)),
          fs.writeFile("./themes/my-dark_dimmed.json", JSON.stringify(dD, null, 2)),
          fs.writeFile("./themes/my-dark_high_contrast.json", JSON.stringify(dHC, null, 2)),
          fs.writeFile("./themes/my-dark_colorblind.json", JSON.stringify(dC, null, 2)),
          fs.writeFile("./themes/my-dark_tritanopia.json", JSON.wstringify(dT, null, 2))
          // fs.writeFile("./themes/my-s-dark_tritanopia.json", JSON.stringify(S, null, 2)),
        ]))
        .catch(() => process.exit(1))
