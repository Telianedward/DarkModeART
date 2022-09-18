const _l = require("@primer/primitives/dist/json/colors/light.json");
const  _lHC = require("@primer/primitives/dist/json/colors/light_high_contrast.json");
const  _lC = require("@primer/primitives/dist/json/colors/light_colorblind.json");
const   _lT = require("@primer/primitives/dist/json/colors/light_tritanopia.json");
const _d = require("@primer/primitives/dist/json/colors/dark.json");
const   _dD = require("@primer/primitives/dist/json/colors/dark_dimmed.json");
const _dHC  = require("@primer/primitives/dist/json/colors/dark_high_contrast.json");
const  _dC = require("@primer/primitives/dist/json/colors/dark_colorblind.json");
const _dT = require("@primer/primitives/dist/json/colors/dark_tritanopia.json");
const  _S = require("@primer/primitives/dist/json/colors/dark.json");
    //   _gC = (t) => {return t === "l"?l:(t === "lhc"?lHC:(t === "lc"?lC:(t === "lt"?lT:(t === "d"?d:(t === "dd"?dD:(t === "dhc"?dHC:(t === "dc"?dC:(t === "dt"?dT:(t === "s"?S:false)))))))))}
    //   module.exports = {_gC};

    function getColors(theme) {
        if (theme === "l") {
          return _l;
        } else if (theme === "lhc") {
          return _lHC;
        } else if (theme === "lc") {
          return _lC;
        } else if (theme === "lt") {
          return _lT;
        }else if (theme === "d") {
            return _d;
          } else if (theme === "dd") {
            return _dD;
          } else if (theme === "dhc") {
            return _dHC;
          } else if (theme === "dc") {
            return _dC;
          }else if (theme === "dt") {
            return _dT;
          } else if (theme === "s") {
            return _S;
          }
      }
      
      module.exports = {
        getColors,
      };
