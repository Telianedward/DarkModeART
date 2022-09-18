const fs = require("fs").promises;
const getTheme = require("./theme");
const getClassicTheme = require("./classic/theme");

const lightDefaultTheme = getTheme({
  theme: "light",
  name: "AtomAx mode Light Default",
});

const darkDefaultTheme = getTheme({
  theme: "dark",
  name: "AtomAx mode Dark Default",
});

const darkDimmedTheme = getTheme({
  theme: "dimmed",
  name: "AtomAx mode Dark Dimmed"
})
const lightDimmedTheme = getTheme({
  theme: "dimmedL",
  name: "AtomAx mode light Dimmed"
})
const darkHighContrastTheme = getTheme({
  theme: "hc",
  name: "AtomAx mode Dark High Contrast"
})
const lightHighContrastTheme = getTheme({
  theme: "hcL",
  name: "AtomAx mode Light High Contrast"
})

const systemTheme = getTheme({
  theme: "system",
  name: "AtomAx mode your System color"
})

// // Classic

// const lightTheme = getClassicTheme({
//   style: "light",
//   name: "GitHub Light",
// });

// const darkTheme = getClassicTheme({
//   style: "dark",
//   name: "GitHub Dark",
// });

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light-default.json", JSON.stringify(lightDefaultTheme, null, 2)),
    fs.writeFile("./themes/dark-default.json", JSON.stringify(darkDefaultTheme, null, 2)),
    fs.writeFile("./themes/dark-dimmed.json", JSON.stringify(darkDimmedTheme, null, 2)),
    fs.writeFile("./themes/light-dimmed.json", JSON.stringify(lightDimmedTheme, null, 2)),
    fs.writeFile("./themes/dark-high-contrast.json", JSON.stringify(darkHighContrastTheme, null, 2)),
    fs.writeFile("./themes/light-high-contrast.json", JSON.stringify(lightHighContrastTheme, null, 2)),
    fs.writeFile("./themes/system.json", JSON.stringify(systemTheme, null, 2)),
    // fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    // fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
