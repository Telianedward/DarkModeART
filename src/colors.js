const l = require("@primer/primitives/dist/json/colors/light.json"),
      lHC = require("@primer/primitives/dist/json/colors/light_high_contrast.json"),
      lC = require("@primer/primitives/dist/json/colors/light_colorblind.json"),
      lT = require("@primer/primitives/dist/json/colors/light_tritanopia.json"),
      d = require("@primer/primitives/dist/json/colors/dark.json"),
      dD = require("@primer/primitives/dist/json/colors/dark_dimmed.json"),
      dHC  = require("@primer/primitives/dist/json/colors/dark_high_contrast.json"),
      dC = require("@primer/primitives/dist/json/colors/dark_colorblind.json"),
      dT = require("@primer/primitives/dist/json/colors/dark_tritanopia.json"),
      S = require("@primer/primitives/dist/json/colors/dark.json")
      _gC = (t) => {return t === "l"?l:(t === "lhc"?lHC:(t === "lc"?lC:(t === "lt"?lT:(t === "d"?d:(t === "dd"?dD:(t === "dhc"?dHC:(t === "dc"?dC:(t === "dt"?dT:(t === "s"?S:false)))))))))}
      module.exports = {_gC};

