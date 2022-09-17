const chroma = require("chroma-js");
const { getColors } = require("./colors");

// Convert to hex
// VS Code doesn't support other formats like hsl, rgba etc.

function hex(color) {
  return chroma(color).hex();
}

// Choosing colors from primer/primitives
// There are multiple ways to define what color is used:

// 1. Global variable
//    e.g. "textLink.foreground": hex(color.fg.default),
// 2. Color scale
//    e.g. "textLink.foreground": scale.blue[5],
// 3. Hex value: All themes will use this scale. Only use for exceptions
//    e.g. "textLink.foreground": "#fff",
// 4. Per theme. Useful when a certain theme needs an exception
//    e.g. "textLink.foreground": themes({ light: scale.blue[5], dark: scale.blue[2], dimmed: scale.blue[3], hc: scale.blue[3] }),

function getTheme({ theme, name }) {
  const themes = (options) => options[theme], // Usage: themes({ light: "lightblue", dark: "darkblue", dimmed: "royalblue", hc: "blue" })
  color = getColors(theme), // Usage: color.fg.default
  scale = color.scale, // Usage: scale.blue[6]
  darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)"),
  backgroundColor = "171717",
  backgroundOnColor = "232323",
  foregroundColor = "fbfbfd",
  foregroundUnderColor = "f1f1f3",
  systemBackground = darkThemeMq.matches?'171717':'fbfbfd',
  systemONBackground = darkThemeMq.matches?'232323':'f1f1f3',
  systemForeground = darkThemeMq.matches?'fbfbfd':'171717',
  systemUnderForeground = darkThemeMq.matches?'f1f1f3':'232323',
  opacity = ["00", "a1", "33", "4d", "66", "80", "99", "b3", "cd", "e6", ""]


  
return {
name: name,
colors: {
  focusBorder          : hex(color.accent.emphasis),
  foreground           : hex(color.fg.default),
  descriptionForeground: hex(color.fg.muted),
  errorForeground      : hex(color.danger.fg),


  "activityBar.activeBackground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      
 

        "activityBar.activeBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
        "activityBar.activeBorder": `#${hex(color.success.muted)}${opacity[5]}`,
        "activityBar.activeFocusBorder": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "activityBar.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
        "activityBar.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
        "activityBar.dropBorder": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "activityBar.foreground": `#${hex(color.success.muted)}${opacity[5]}`,
        "activityBar.inactiveForeground": `#${hex(color.canvas.subtle)}`,
        "activityBarBadge.background": `#${hex(color.success.muted)}${opacity[5]}`,
        "activityBarBadge.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        
        "badge.background": `#${hex(color.accent.muted)}${opacity[7]}`,
        "badge.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
        "banner.background": `#${hex(color.success.muted)}${opacity[5]}`,
        "banner.foreground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
        "banner.iconForeground": `#${hex(color.success.muted)}${opacity[5]}`,
  
        "breadcrumb.activeSelectionForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "breadcrumb.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
        "breadcrumb.focusForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "breadcrumb.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "breadcrumbPicker.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
        "button.background": `#${hex(color.success.muted)}${opacity[5]}`,
        "button.border": `#${hex(color.success.muted)}${opacity[5]}`,
        "button.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "button.hoverBackground": `#${hex(color.success.muted)}${opacity[6]}`,
        "button.secondaryBackground": `#${hex(color.success.muted)}${opacity[5]}`,
        "button.secondaryForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "button.secondaryHoverBackground": `#${hex(color.success.muted)}${opacity[5]}`,
        "button.separator": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
        "charts.blue": `#${hex(color.accent.muted)}`,
        "charts.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "charts.green": `#${hex(color.success.muted)}`,
        "charts.lines": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "charts.orange": `#${hex(color.severe.muted)}`,
        "charts.purple": `#${hex(color.success.muted)}`,
        "charts.red": `#${hex(color.danger.muted)}`,
        "charts.yellow": `#${hex(color.scale.yellow[0])}`,

  
        "checkbox.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
        "checkbox.border": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
        "checkbox.foreground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
  
        "commandCenter.activeBackground": `#${hex(color.success.muted)}${opacity[5]}`,
        "commandCenter.activeForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "commandCenter.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
        "commandCenter.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
        "commandCenter.foreground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
  
        "contrastActiveBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
        "contrastBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
        "debugExceptionWidget.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
        "debugExceptionWidget.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
        "debugTokenExpression.boolean": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "debugTokenExpression.error": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "debugTokenExpression.name": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "debugTokenExpression.number": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "debugTokenExpression.string": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "debugTokenExpression.value": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
        "debugToolBar.background": `#${hex(color.danger.muted)}`,
        "debugToolBar.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
        "debugView.exceptionLabelBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
        "debugView.exceptionLabelForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "debugView.stateLabelBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
        "debugView.stateLabelForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
        "debugView.valueChangedHighlight": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
        "descriptionForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
        "diffEditor.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
        "diffEditor.diagonalFill": `${themes({ light: `#${backgroundColor}${opacity[7]}`, dark: `#${foregroundColor}${opacity[7]}`, dimmed: `#${backgroundColor}${opacity[8]}`, hc: `#${foregroundColor}${opacity[8]}`, system: `#${systemForeground}${opacity[7]}` })}}`, 
        "diffEditor.insertedLineBackground": `#${hex(color.success.muted)}${opacity[5]}`,
        "diffEditor.insertedTextBackground": `#${hex(color.success.muted)}${opacity[5]}`,
        "diffEditor.insertedTextBorder": `#${hex(color.success.muted)}${opacity[5]}`,
        "diffEditor.removedLineBackground": `#${hex(color.danger.muted)}${opacity[9]}`,
        "diffEditor.removedTextBackground": `#${hex(color.danger.muted)}${opacity[7]}`,
        "diffEditor.removedTextBorder": `#${hex(color.danger.muted)}${opacity[7]}`,
        "diffEditorGutter.insertedLineBackground": `#${hex(color.success.muted)}${opacity[5]}`,
        "diffEditorGutter.removedLineBackground": `#${hex(color.danger.muted)}${opacity[9]}`,
        "diffEditorOverview.insertedForeground": `#${hex(color.success.muted)}${opacity[5]}`,
        "diffEditorOverview.removedForeground": `#${hex(color.danger.muted)}${opacity[9]}`,
  
      "disabledForeground": `#${hex(color.scale.yellow[0])}`,
  
      "dropdown.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "dropdown.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "dropdown.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "dropdown.listBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      
      "editor.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editor.findMatchBackground": `#${hex(color.success.muted)}${opacity[6]}`,
      "editor.findMatchBorder": `#${hex(color.success.muted)}`,
      "editor.findMatchHighlightBackground": `#${hex(color.success.muted)}${opacity[7]}`,
      "editor.findMatchHighlightBorder": `#${hex(color.success.muted)}${opacity[9]}`,
      "editor.findRangeHighlightBackground": `#${hex(color.success.muted)}${opacity[7]}`,
      "editor.findRangeHighlightBorder": `#${hex(color.success.muted)}${opacity[7]}`,
      "editor.focusedStackFrameHighlightBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "editor.foldBackground": themes({ light: `#${foregroundUnderColor}${opacity[7]}`, dark: `#${backgroundOnColor}${opacity[7]}`, dimmed: `#${foregroundUnderColor}${opacity[6]}`, hc: `#${backgroundOnColor}${opacity[6]}`, system: `#${systemONBackground}${opacity[7]}` }),
      "editor.foreground": `${themes({ light: `#${backgroundColor}${opacity[3]}`, dark: `#${foregroundColor}${opacity[3]}`, dimmed: `#${backgroundColor}${opacity[4]}`, hc: `#${foregroundColor}${opacity[4]}`, system: `#${systemForeground}${opacity[3]}` })}}`,
      "editor.hoverHighlightBackground": `#${hex(color.success.muted)}${opacity[9]}`,
      "editor.inactiveSelectionBackground": themes({ light: `#${foregroundUnderColor}${opacity[7]}`, dark: `#${backgroundOnColor}${opacity[7]}`, dimmed: `#${foregroundUnderColor}${opacity[6]}`, hc: `#${backgroundOnColor}${opacity[6]}`, system: `#${systemONBackground}${opacity[7]}` }),
      "editor.inlineValuesBackground": `#${hex(color.success.muted)}`,
      "editor.inlineValuesForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editor.lineHighlightBackground": `#${hex(color.success.muted)}`,
      "editor.lineHighlightBorder": `${themes({ light: `#${backgroundColor}${opacity[8]}`, dark: `#${foregroundColor}${opacity[8]}`, dimmed: `#${backgroundColor}${opacity[9]}`, hc: `#${foregroundColor}${opacity[9]}`, system: `#${systemForeground}${opacity[8]}` })}}`,
      "editor.linkedEditingBackground": `#${hex(color.scale.yellow[0])}${opacity[8]}`,
      "editor.rangeHighlightBackground": `#${hex(color.success.muted)}${opacity[7]}`,
      "editor.rangeHighlightBorder": `#${hex(color.success.muted)}${opacity[5]}`,
      "editor.selectionBackground": `${themes({ light: `#${backgroundColor}${opacity[8]}`, dark: `#${foregroundColor}${opacity[8]}`, dimmed: `#${backgroundColor}${opacity[9]}`, hc: `#${foregroundColor}${opacity[9]}`, system: `#${systemForeground}${opacity[8]}` })}}`,
      "editor.selectionForeground": `#${hex(color.accent.muted)}`,
      "editor.selectionHighlightBackground": `#${hex(color.success.muted)}${opacity[7]}`,
      "editor.selectionHighlightBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editor.snippetFinalTabstopHighlightBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editor.snippetFinalTabstopHighlightBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editor.snippetTabstopHighlightBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editor.snippetTabstopHighlightBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editor.stackFrameHighlightBackground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      "editor.symbolHighlightBackground": `#${hex(color.done.emphasis)}}${opacity[5]}`,
      "editor.symbolHighlightBorder": `#${hex(color.done.emphasis)}}${opacity[4]}`,
      "editor.wordHighlightBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "editor.wordHighlightBorder": themes({ light: `#${foregroundUnderColor}${opacity[7]}`, dark: `#${backgroundOnColor}${opacity[7]}`, dimmed: `#${foregroundUnderColor}${opacity[6]}`, hc: `#${backgroundOnColor}${opacity[6]}`, system: `#${systemONBackground}${opacity[7]}` }),
      "editor.wordHighlightStrongBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "editor.wordHighlightStrongBorder": themes({ light: `#${foregroundUnderColor}${opacity[7]}`, dark: `#${backgroundOnColor}${opacity[7]}`, dimmed: `#${foregroundUnderColor}${opacity[6]}`, hc: `#${backgroundOnColor}${opacity[6]}`, system: `#${systemONBackground}${opacity[7]}` }),
      "editorBracketHighlight.foreground1": `#${hex(color.sponsors.muted)}}`,
      "editorBracketHighlight.foreground2": `#${hex(color.scale.blue[0])}}`,
      "editorBracketHighlight.foreground3": `#${hex(color.sponsors.muted)}}${opacity[10]}`,
      "editorBracketHighlight.foreground4": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorBracketHighlight.foreground5": `#${hex(color.scale.yellow[0])}${opacity[10]}`,
      "editorBracketHighlight.foreground6":`#${hex(color.success.muted)}${opacity[10]}`,
      "editorBracketHighlight.unexpectedBracket.foreground": `#${hex(color.sponsors.muted)}}`,
      "editorBracketMatch.background": themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorBracketMatch.border": themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorBracketPairGuide.activeBackground1": `#${hex(color.sponsors.muted)}}${opacity[7]}`,
      "editorBracketPairGuide.activeBackground2": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "editorBracketPairGuide.activeBackground3": `#${hex(color.sponsors.muted)}}${opacity[7]}`,
      "editorBracketPairGuide.activeBackground4": `#${hex(color.scale.blue[0])}}${opacity[7]}`,
      "editorBracketPairGuide.activeBackground5":  `#${hex(color.scale.yellow[0])}}${opacity[7]}`,
      "editorBracketPairGuide.activeBackground6": `#${hex(color.success.muted)}${opacity[7]}`,
      "editorBracketPairGuide.background1":  `#${hex(color.sponsors.muted)}}${opacity[7]}`,
      "editorBracketPairGuide.background2": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "editorBracketPairGuide.background3": `#${hex(color.sponsors.muted)}}${opacity[7]}`,
      "editorBracketPairGuide.background4": `#${hex(color.scale.blue[0])}}${opacity[7]}`,
      "editorBracketPairGuide.background5":  `#${hex(color.scale.yellow[0])}}${opacity[7]}`,
      "editorBracketPairGuide.background6": `#${hex(color.success.muted)}${opacity[7]}`,
      "editorCodeLens.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorCommentsWidget.rangeActiveBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorCommentsWidget.rangeActiveBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorCommentsWidget.rangeBackground": `#${hex(color.success.muted)}`,
      "editorCommentsWidget.rangeBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorCommentsWidget.resolvedBorder": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorCommentsWidget.unresolvedBorder": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorCursor.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorCursor.foreground": `#${hex(color.success.muted)}`,
      "editorError.background": `#${hex(color.danger.muted)}${opacity[7]}`,
      "editorError.border": `#${hex(color.danger.muted)}`,
      "editorError.foreground": `#${hex(color.danger.muted)}${opacity[7]}`,
      "editorGhostText.background": `#${hex(color.success.muted)}`,
      "editorGhostText.border": `#${hex(color.success.muted)}${opacity[5]}`,
      "editorGhostText.foreground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorGroup.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorGroup.dropBackground": `#${hex(color.success.muted)}${opacity[8]}`,
      "editorGroup.dropIntoPromptBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorGroup.dropIntoPromptBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorGroup.dropIntoPromptForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorGroup.emptyBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorGroup.focusedEmptyBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorGroupHeader.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorGroupHeader.noTabsBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorGroupHeader.tabsBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorGroupHeader.tabsBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorGutter.addedBackground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorGutter.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorGutter.commentRangeForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorGutter.deletedBackground": `#${hex(color.danger.muted)}`,
      "editorGutter.foldingControlForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorGutter.modifiedBackground": `#${hex(color.success.muted)}`,
      "editorHint.border": `#${hex(color.success.muted)}`,
      "editorHint.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorHoverWidget.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorHoverWidget.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorHoverWidget.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorHoverWidget.highlightForeground": `#${hex(color.success.muted)}`,
      "editorHoverWidget.statusBarBackground": `#${hex(color.danger.muted)}${opacity[9]}`,
      "editorIndentGuide.activeBackground": `#${hex(color.danger.muted)}${opacity[9]}`,
      "editorIndentGuide.background":  themes({ light: `#${foregroundUnderColor}${opacity[0]}`, dark: `#${backgroundOnColor}${opacity[0]}`, dimmed: `#${foregroundUnderColor}${opacity[0]}`, hc: `#${backgroundOnColor}${opacity[0]}`, system: `#${systemONBackground}${opacity[0]}` }),
      "editorInfo.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorInfo.border":  `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "editorInfo.foreground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorInlayHint.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorInlayHint.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorInlayHint.parameterBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorInlayHint.parameterForeground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorInlayHint.typeBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorInlayHint.typeForeground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorLightBulb.foreground": `#${hex(color.scale.yellow[0])}}${opacity[10]}`,
      "editorLightBulbAutoFix.foreground": `#${hex(color.success.muted)}${opacity[5]}`,
      "editorLineNumber.activeForeground": `#${hex(color.success.muted)}`,
      "editorLineNumber.foreground": `${themes({ light: `#${backgroundColor}${opacity[7]}`, dark: `#${foregroundColor}${opacity[7]}`, dimmed: `#${backgroundColor}${opacity[8]}`, hc: `#${foregroundColor}${opacity[8]}`, system: `#${systemForeground}${opacity[7]}` })}}`,
      "editorLink.activeForeground":  `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorMarkerNavigation.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorMarkerNavigationError.background": `#${hex(color.danger.muted)}${opacity[5]}`,
      "editorMarkerNavigationError.headerBackground": `#${hex(color.danger.muted)}${opacity[10]}`,
      "editorMarkerNavigationInfo.background": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorMarkerNavigationInfo.headerBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorMarkerNavigationWarning.background": `#${hex(color.severe.muted)}${opacity[5]}`,
      "editorMarkerNavigationWarning.headerBackground": `#${hex(color.severe.muted)}${opacity[5]}`,
      "editorOverviewRuler.addedForeground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorOverviewRuler.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorOverviewRuler.border": `#${hex(color.success.muted)}`,
      "editorOverviewRuler.bracketMatchForeground": `#${hex(color.done.muted )}${opacity[5]}`,
      "editorOverviewRuler.commonContentForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorOverviewRuler.currentContentForeground": `#${hex(color.success.muted)}${opacity[5]}`,
      "editorOverviewRuler.deletedForeground": `#${hex(color.scale.yellow[0])}}${opacity[5]}`,
      "editorOverviewRuler.errorForeground": `#${hex(color.danger.muted)}${opacity[5]}`,
      "editorOverviewRuler.findMatchForeground": `#${hex(color.success.muted)}`,
      "editorOverviewRuler.incomingContentForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorOverviewRuler.infoForeground": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "editorOverviewRuler.modifiedForeground": `#${hex(color.success.muted)}${opacity[5]}`,
      "editorOverviewRuler.rangeHighlightForeground": `#${hex(color.success.muted)}${opacity[8]}`,
      "editorOverviewRuler.selectionHighlightForeground": `#${hex(color.success.muted)}${opacity[5]}`,
      "editorOverviewRuler.warningForeground": `#${hex(color.severe.muted)}${opacity[5]}`,
      "editorOverviewRuler.wordHighlightForeground": `#${hex(color.success.muted)}${opacity[5]}`,
      "editorOverviewRuler.wordHighlightStrongForeground": `#${hex(color.success.muted)}${opacity[5]}`,
      "editorPane.background": `#${hex(color.success.muted)}`,
      "editorRuler.foreground":  `#${hex(color.success.muted)}${opacity[5]}`,
      "editorStickyScroll.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorStickyScrollHover.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorSuggestWidget.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorSuggestWidget.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorSuggestWidget.focusHighlightForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorSuggestWidget.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorSuggestWidget.highlightForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorSuggestWidget.selectedBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorSuggestWidget.selectedForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorSuggestWidget.selectedIconForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "editorSuggestWidgetStatus.foreground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "editorUnicodeHighlight.background": `#${hex(color.success.muted)}${opacity[5]}`,
      "editorUnicodeHighlight.border": `#${hex(color.success.muted)}${opacity[5]}`,
      "editorUnnecessaryCode.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorUnnecessaryCode.opacity": `#${hex(color.danger.muted)}${opacity[3]}`,
      "editorWarning.background": `#${hex(color.severe.muted)}${opacity[0]}`, 
      "editorWarning.border": `#${hex(color.severe.muted)}${opacity[8]}`,
      "editorWarning.foreground": `#${hex(color.danger.muted)}`,
      "editorWhitespace.foreground": `#${hex(color.sponsors.muted)}}${opacity[10]}`,
      "editorWidget.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "editorWidget.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "editorWidget.foreground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      "editorWidget.resizeBorder": `#${hex(color.success.muted)}`,
  
  
      "errorForeground": `#${hex(color.danger.muted)}`,
  
      "extensionBadge.remoteBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "extensionBadge.remoteForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
      "extensionButton.prominentBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "extensionButton.prominentForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "extensionButton.prominentHoverBackground": `#${hex(color.success.muted)}${opacity[6]}`,
  
      "extensionIcon.preReleaseForeground": `#${hex(color.severe.muted)}${opacity[10]}`,
      "extensionIcon.sponsorForeground": `#${hex(color.done.muted )}${opacity[10]}`,
      "extensionIcon.starForeground": `#${hex(color.scale.yellow[0])}}${opacity[10]}`,
      "extensionIcon.verifiedForeground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
  
      "focusBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "foreground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
  
      "gitDecoration.addedResourceForeground": `#${hex(color.success.muted)}`,
      "gitDecoration.conflictingResourceForeground": `#${hex(color.severe.muted)}${opacity[10]}`,
      "gitDecoration.deletedResourceForeground": `#${hex(color.danger.muted)}`,
      "gitDecoration.ignoredResourceForeground": `#${hex(color.severe.muted)}${opacity[5]}`,
      "gitDecoration.modifiedResourceForeground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "gitDecoration.renamedResourceForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "gitDecoration.stageDeletedResourceForeground": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "gitDecoration.stageModifiedResourceForeground": `#${hex(color.success.muted)}${opacity[10]}`,
      "gitDecoration.submoduleResourceForeground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "gitDecoration.untrackedResourceForeground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
  
      "icon.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
      "input.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "input.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "input.foreground":`${themes({ light: `#${backgroundColor}${opacity[6]}`, dark: `#${foregroundColor}${opacity[6]}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}${opacity[6]}` })}}`,
      "input.placeholderForeground":`${themes({ light: `#${backgroundColor}${opacity[6]}`, dark: `#${foregroundColor}${opacity[6]}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}${opacity[6]}` })}}`,
      "inputOption.activeBackground": themes({ light: `#${foregroundUnderColor}${opacity[7]}`, dark: `#${backgroundOnColor}${opacity[7]}`, dimmed: `#${foregroundUnderColor}${opacity[6]}`, hc: `#${backgroundOnColor}${opacity[6]}`, system: `#${systemONBackground}${opacity[7]}` }),
      "inputOption.activeBorder": themes({ light: `#${foregroundUnderColor}${opacity[7]}`, dark: `#${backgroundOnColor}${opacity[7]}`, dimmed: `#${foregroundUnderColor}${opacity[6]}`, hc: `#${backgroundOnColor}${opacity[6]}`, system: `#${systemONBackground}${opacity[7]}` }),
      "inputOption.activeForeground": `${themes({ light: `#${backgroundColor}${opacity[4]}`, dark: `#${foregroundColor}${opacity[4]}`, dimmed: `#${backgroundColor}${opacity[5]}`, hc: `#${foregroundColor}${opacity[5]}`, system: `#${systemForeground}${opacity[4]}` })}}`,
      "inputOption.hoverBackground":`${themes({ light: `#${backgroundColor}${opacity[6]}`, dark: `#${foregroundColor}${opacity[6]}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}${opacity[6]}` })}}`,
      "inputValidation.errorBackground": `#${hex(color.danger.muted)}`,
      "inputValidation.errorBorder": `#${hex(color.danger.muted)}`,
      "inputValidation.errorForeground": `#${hex(color.danger.muted)}`,
      "inputValidation.infoBackground": `#${hex(color.danger.muted)}${opacity[5]}`,
      "inputValidation.infoBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "inputValidation.infoForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "inputValidation.warningBackground": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "inputValidation.warningBorder": `#${hex(color.danger.muted)}${opacity[5]}`,
      "inputValidation.warningForeground": `#${hex(color.danger.muted)}${opacity[5]}`,
  
      "keybindingLabel.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "keybindingLabel.bottomBorder": `#${hex(color.success.muted)}`,
      "keybindingLabel.foreground": `#${hex(color.success.muted)}${opacity[5]}`,
  
      "keybindingTable.headerBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "keybindingTable.rowsBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
      "list.activeSelectionBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "list.activeSelectionForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "list.activeSelectionIconForeground": `#${hex(color.success.muted)}`,
      "list.deemphasizedForeground": `#${hex(color.scale.yellow[0])}}${opacity[10]}`,
      "list.dropBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "list.errorForeground": `#${hex(color.danger.muted)}${opacity[4]}`,
      "list.filterMatchBackground": `#${hex(color.success.muted)}${opacity[9]}`,
      "list.filterMatchBorder": `#${hex(color.success.muted)}`,
      "list.focusAndSelectionOutline": `#${hex(color.success.muted)}${opacity[5]}`,
      "list.focusBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "list.focusForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "list.focusHighlightForeground": `#${hex(color.success.muted)}${opacity[5]}`,
      "list.focusOutline": `#${hex(color.success.muted)}${opacity[5]}`,
      "list.highlightForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "list.hoverBackground": `#${hex(color.success.muted)}${opacity[8]}`,
      "list.hoverForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "list.inactiveFocusBackground": `#${hex(color.success.muted)}${opacity[9]}`,
      "list.inactiveFocusOutline": `#${hex(color.success.muted)}${opacity[9]}`,
      "list.inactiveSelectionBackground": `#${hex(color.success.muted)}${opacity[3]}`,
      "list.inactiveSelectionForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "list.inactiveSelectionIconForeground": `#${hex(color.success.muted)}`,
      "list.invalidItemForeground": `#${hex(color.danger.muted)}${opacity[4]}`,
      "list.warningForeground": `#${hex(color.severe.muted)}${opacity[10]}`,
      "listFilterWidget.background": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "listFilterWidget.noMatchesOutline": themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[5]}`, hc: `#${foregroundColor}${opacity[5]}`, system: `#${systemForeground}${opacity[5]}` }),
      "listFilterWidget.outline": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "listFilterWidget.shadow":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
      "menu.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "menu.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "menu.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "menu.selectionBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "menu.selectionBorder": `#${hex(color.success.muted)}${opacity[5]}`,
      "menu.selectionForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "menu.separatorBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      
      "menubar.selectionBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "menubar.selectionBorder": `#${hex(color.success.muted)}${opacity[10]}`,
      "menubar.selectionForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
      "merge.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "merge.commonContentBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "merge.commonHeaderBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "merge.currentContentBackground": `#${hex(color.danger.muted)}${opacity[6]}`,
      "merge.currentHeaderBackground": `#${hex(color.danger.muted)}${opacity[8]}`,
      "merge.incomingContentBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "merge.incomingHeaderBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "mergeEditor.change.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "mergeEditor.change.word.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "mergeEditor.conflict.handled.minimapOverViewRuler": `#${hex(color.success.muted)}${opacity[5]}`,
      "mergeEditor.conflict.handledFocused.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "mergeEditor.conflict.handledUnfocused.border": `#${hex(color.success.muted)}${opacity[5]}`,
      "mergeEditor.conflict.unhandled.minimapOverViewRuler": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "mergeEditor.conflict.unhandledFocused.border": `#${hex(color.scale.yellow[0])}}${opacity[5]}`,
      "mergeEditor.conflict.unhandledUnfocused.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "mergeEditor.conflictingLines.background": `#${hex(color.danger.muted)}${opacity[3]}`,
  
      "minimap.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "minimap.errorHighlight": `#${hex(color.danger.muted)}`,
      "minimap.findMatchHighlight": `#${hex(color.success.muted)}${opacity[5]}`,
      "minimap.foregroundOpacity": `${themes({ light: `#${backgroundColor}${opacity[4]}`, dark: `#${foregroundColor}${opacity[4]}`, dimmed: `#${backgroundColor}${opacity[5]}`, hc: `#${foregroundColor}${opacity[5]}`, system: `#${systemForeground}${opacity[4]}` })}}`,
      "minimap.selectionHighlight": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      "minimap.selectionOccurrenceHighlight": `#${hex(color.success.muted)}${opacity[8]}`,
      "minimap.warningHighlight": `#${hex(color.danger.muted)}`,
      "minimapGutter.addedBackground": `#${hex(color.scale.blue[0])}}${opacity[7]}`,
      "minimapGutter.deletedBackground": `#${hex(color.danger.muted)}`,
      "minimapGutter.modifiedBackground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "minimapSlider.activeBackground": `${themes({ light: `#${backgroundColor}${opacity[7]}`, dark: `#${foregroundColor}${opacity[7]}`, dimmed: `#${backgroundColor}${opacity[8]}`, hc: `#${foregroundColor}${opacity[8]}`, system: `#${systemForeground}${opacity[7]}` })}}`,
      "minimapSlider.background": `#${hex(color.success.muted)}${opacity[7]}`,
      "minimapSlider.hoverBackground": `#${hex(color.success.muted)}${opacity[5]}`,
  
      "notificationCenter.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "notificationCenterHeader.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "notificationCenterHeader.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
      "notificationLink.foreground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
  
      "notificationToast.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
      "notifications.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "notifications.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "notifications.foreground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      "notificationsErrorIcon.foreground": `#${hex(color.danger.muted)}${opacity[5]}`,
      "notificationsInfoIcon.foreground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "notificationsWarningIcon.foreground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
  
      "panel.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "panel.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "panel.dropBorder": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "panelInput.border": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "panelSection.border": `#${hex(color.danger.muted)}`,
      "panelSection.dropBackground":  themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "panelSectionHeader.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "panelSectionHeader.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "panelSectionHeader.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "panelTitle.activeBorder": `#${hex(color.success.muted)}${opacity[5]}`,
      "panelTitle.activeForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "panelTitle.inactiveForeground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
  
      "peekView.border": `#${hex(color.scale.yellow[0])}}${opacity[7]}`,
      "peekViewEditor.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "peekViewEditor.matchHighlightBackground":  `#${hex(color.success.muted)}${opacity[4]}`,
      "peekViewEditor.matchHighlightBorder":  `#${hex(color.success.muted)}${opacity[4]}`,
      "peekViewEditorGutter.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "peekViewResult.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "peekViewResult.fileForeground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      "peekViewResult.lineForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "peekViewResult.matchHighlightBackground":  `#${hex(color.success.muted)}${opacity[4]}`,
      "peekViewResult.selectionBackground":  `#${hex(color.success.muted)}${opacity[4]}`,
      "peekViewResult.selectionForeground": `#${hex(color.success.muted)}`,
      "peekViewTitle.background": `#${hex(color.success.muted)}${opacity[5]}`,
      "peekViewTitleDescription.foreground": `#${hex(color.danger.muted)}`,
      "peekViewTitleLabel.foreground": `#${hex(color.success.muted)}${opacity[5]}`,
  
      "pickerGroup.border": `#${hex(color.success.muted)}${opacity[5]}`,
      "pickerGroup.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
      "ports.iconRunningProcessForeground": `#${hex(color.danger.muted)}`,
  
      "problemsErrorIcon.foreground":  `#${hex(color.success.muted)}${opacity[4]}`,
  
      "problemsInfoIcon.foreground": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
  
      "problemsWarningIcon.foreground": `#${hex(color.severe.muted)}${opacity[5]}`,
  
      "progressBar.background": `#${hex(color.success.muted)}${opacity[10]}`,
  
      "quickInput.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "quickInput.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "quickInputList.focusBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "quickInputList.focusForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "quickInputList.focusIconForeground": `#${hex(color.success.muted)}${opacity[5]}`,
      "quickInputTitle.background": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
  
      "sash.hoverBorder": `#${hex(color.success.muted)}${opacity[5]}`,
  
      "scm.providerBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
      "scrollbar.shadow":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
      "scrollbarSlider.activeBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "scrollbarSlider.background": `#${hex(color.success.muted)}${opacity[5]}`,
      "scrollbarSlider.hoverBackground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
  
      "searchEditor.findMatchBackground": themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "searchEditor.findMatchBorder": `#${hex(color.success.muted)}`,
      "searchEditor.textInputBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
      "selection.background": `#${hex(color.success.muted)}${opacity[5]}`,
  
      "sideBar.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "sideBar.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "sideBar.dropBackground": themes({ light: `#${foregroundUnderColor}${opacity[5]}`, dark: `#${backgroundOnColor}${opacity[5]}`, dimmed: `#${foregroundUnderColor}${opacity[4]}`, hc: `#${backgroundOnColor}${opacity[4]}`, system: `#${systemONBackground}${opacity[5]}` }),
      "sideBar.foreground": `${themes({ light: `#${backgroundColor}${opacity[4]}`, dark: `#${foregroundColor}${opacity[4]}`, dimmed: `#${backgroundColor}${opacity[5]}`, hc: `#${foregroundColor}${opacity[5]}`, system: `#${systemForeground}${opacity[4]}` })}}`,
      "sideBarSectionHeader.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "sideBarSectionHeader.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "sideBarSectionHeader.foreground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      "sideBarTitle.foreground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
  
      "sideBySideEditor.horizontalBorder": `#${hex(color.success.muted)}`,
      "sideBySideEditor.verticalBorder": `#${hex(color.success.muted)}`,
  
      "statusBar.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "statusBar.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "statusBar.debuggingBackground": `#${hex(color.danger.muted)}${opacity[6]}`,
      "statusBar.debuggingBorder": `#${hex(color.done.muted )}${opacity[10]}`,
      "statusBar.debuggingForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "statusBar.focusBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "statusBar.foreground": `${themes({ light: `#${backgroundColor}${opacity[7]}`, dark: `#${foregroundColor}${opacity[7]}`, dimmed: `#${backgroundColor}${opacity[8]}`, hc: `#${foregroundColor}${opacity[8]}`, system: `#${systemForeground}${opacity[7]}` })}}`,
      "statusBar.noFolderBackground": `#${hex(color.severe.muted)}${opacity[5]}`,
      "statusBar.noFolderBorder": `#${hex(color.severe.muted)}${opacity[5]}`,
      "statusBar.noFolderForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "statusBarItem.activeBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "statusBarItem.compactHoverBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "statusBarItem.errorBackground": `#${hex(color.danger.muted)}${opacity[5]}`,
      "statusBarItem.errorForeground": `#${hex(color.danger.muted)}${opacity[5]}`,
      "statusBarItem.focusBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "statusBarItem.hoverBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "statusBarItem.prominentBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "statusBarItem.prominentForeground": `#${hex(color.success.muted)}`,
      "statusBarItem.remoteBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "statusBarItem.remoteForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "statusBarItem.settingsProfilesBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "statusBarItem.settingsProfilesForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "statusBarItem.warningBackground": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "statusBarItem.warningForeground": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
  
      "symbolIcon.arrayForeground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "symbolIcon.booleanForeground":`#${hex(color.done.muted)}}${opacity[10]}`,
      "symbolIcon.classForeground": `#${hex(color.success.muted)}`,
      "symbolIcon.colorForeground": `#${hex(color.success.muted)}`,
      "symbolIcon.constantForeground": "#ffc803",
      "symbolIcon.constructorForeground": "#02fffb",
      "symbolIcon.enumeratorForeground": "#48bc6f",
      "symbolIcon.enumeratorMemberForeground": `#${hex(color.success.muted)}`,
      "symbolIcon.eventForeground": "#ff00d9",
      "symbolIcon.fieldForeground": `#${hex(color.danger.muted)}`,
      "symbolIcon.fileForeground": "#0d00ff",
      "symbolIcon.folderForeground": `#${hex(color.success.muted)}${opacity[5]}`,
      "symbolIcon.functionForeground": "#a403e4",
      "symbolIcon.interfaceForeground": "#fc0050",
      "symbolIcon.keyForeground": "#00fc48",
      "symbolIcon.keywordForeground": "#ffd501",
      "symbolIcon.methodForeground": "#ff00ae",
      "symbolIcon.moduleForeground": "#03922e",
      "symbolIcon.namespaceForeground": "#f6f202",
      "symbolIcon.nullForeground": "#323232",
      "symbolIcon.numberForeground": "#f89604",
      "symbolIcon.objectForeground": "#99ff00",
      "symbolIcon.operatorForeground": "#5555e8",
      "symbolIcon.packageForeground": "#dc00a9",
      "symbolIcon.propertyForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "symbolIcon.referenceForeground": "#03f7ff",
      "symbolIcon.snippetForeground": "#a4a4a7",
      "symbolIcon.stringForeground": "#b0b0d7",
      "symbolIcon.structForeground": "#1f1f49",
      "symbolIcon.textForeground": "#8ead02",
      "symbolIcon.typeParameterForeground": "#6cc30f",
      "symbolIcon.unitForeground": "#1cea7f",
      "symbolIcon.variableForeground": "#fcbb06",
  
      "tab.activeBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "tab.activeBorder": `#${hex(color.success.muted)}${opacity[5]}`,
      "tab.activeBorderTop": `#${hex(color.success.muted)}${opacity[5]}`,
      "tab.activeForeground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      "tab.activeModifiedBorder": `#${hex(color.success.muted)}${opacity[5]}`,
      "tab.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "tab.hoverBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "tab.hoverBorder": `#${hex(color.success.muted)}${opacity[5]}`,
      "tab.hoverForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "tab.inactiveBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "tab.inactiveForeground": `${themes({ light: `#${backgroundColor}${opacity[4]}`, dark: `#${foregroundColor}${opacity[4]}`, dimmed: `#${backgroundColor}${opacity[5]}`, hc: `#${foregroundColor}${opacity[5]}`, system: `#${systemForeground}${opacity[4]}` })}}`,
      "tab.inactiveModifiedBorder": `#${hex(color.success.muted)}${opacity[5]}`,
      "tab.lastPinnedBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "tab.unfocusedActiveBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "tab.unfocusedActiveBorder": `#${hex(color.success.muted)}${opacity[5]}`,
      "tab.unfocusedActiveBorderTop": `#${hex(color.success.muted)}${opacity[5]}`,
      "tab.unfocusedActiveForeground": `#${hex(color.success.muted)}${opacity[5]}`,
      "tab.unfocusedActiveModifiedBorder": `#${hex(color.danger.muted)}`,
      "tab.unfocusedHoverBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "tab.unfocusedHoverBorder": `#${hex(color.success.muted)}${opacity[5]}`,
      "tab.unfocusedHoverForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "tab.unfocusedInactiveBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "tab.unfocusedInactiveForeground": `${themes({ light: `#${backgroundColor}${opacity[4]}`, dark: `#${foregroundColor}${opacity[4]}`, dimmed: `#${backgroundColor}${opacity[5]}`, hc: `#${foregroundColor}${opacity[5]}`, system: `#${systemForeground}${opacity[4]}` })}}`,
      "tab.unfocusedInactiveModifiedBorder": `#${hex(color.danger.muted)}`,
  
      "terminal.foreground": hex(color.fg.muted),
      'terminal.ansiBlack': hex(color.ansi.black),
      'terminal.ansiRed': hex(color.ansi.red),
      'terminal.ansiGreen': hex(color.ansi.green),
      'terminal.ansiYellow': hex(color.ansi.yellow),
      'terminal.ansiBlue': hex(color.ansi.blue),
      'terminal.ansiMagenta': hex(color.ansi.magenta),
      'terminal.ansiCyan': hex(color.ansi.cyan),
      'terminal.ansiWhite': hex(color.ansi.white),
      'terminal.ansiBrightBlack': hex(color.ansi.blackBright),
      'terminal.ansiBrightRed': hex(color.ansi.redBright),
      'terminal.ansiBrightGreen': hex(color.ansi.greenBright),
      'terminal.ansiBrightYellow': hex(color.ansi.yellowBright),
      'terminal.ansiBrightBlue': hex(color.ansi.blueBright),
      'terminal.ansiBrightMagenta': hex(color.ansi.magentaBright),
      'terminal.ansiBrightCyan': hex(color.ansi.cyanBright),
      'terminal.ansiBrightWhite': hex(color.ansi.whiteBright),


      "terminal.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "terminal.border":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "terminal.dropBackground": `#${hex(color.scale.yellow[0])}}${opacity[5]}`,
      "terminal.findMatchBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "terminal.findMatchBorder": `#${hex(color.success.muted)}`,
      "terminal.findMatchHighlightBackground": `#${hex(color.scale.yellow[0])}}${opacity[3]}`,
      "terminal.findMatchHighlightBorder":  `#${hex(color.scale.yellow[0])}}${opacity[3]}`,
      "terminal.inactiveSelectionBackground":  `#${hex(color.scale.yellow[0])}}${opacity[3]}`,
      "terminal.selectionBackground": `#${hex(color.success.muted)}${opacity[5]}`,
      "terminal.selectionForeground":  themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[4]}`, hc: `#${foregroundColor}${opacity[4]}`, system: `#${systemForeground}${opacity[5]}` }),
      "terminal.tab.activeBorder": `#${hex(color.success.muted)}`,
      "terminalCommandDecoration.defaultBackground": `#${hex(color.success.muted)}`,
      "terminalCommandDecoration.errorBackground": `#${hex(color.danger.muted)}`,
      "terminalCommandDecoration.successBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "terminalCursor.background": `#${hex(color.danger.muted)}`,
      "terminalCursor.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "terminalOverviewRuler.cursorForeground": `#${hex(color.success.muted)}`,
      "terminalOverviewRuler.findMatchForeground": `#${hex(color.success.muted)}`,
  
      "testing.iconErrored": `#${hex(color.danger.muted)}`,
      "testing.iconFailed": `#${hex(color.danger.muted)}`,
      "testing.iconPassed": `#${hex(color.success.muted)}`,
      "testing.iconQueued": `#${hex(color.scale.yellow[0])}}${opacity[10]}`,
      "testing.iconSkipped":`#${hex(color.severe.muted)}${opacity[10]}`,
      "testing.iconUnset": `#${hex(color.severe.muted)}${opacity[10]}`,
      "testing.message.error.decorationForeground": `#${hex(color.danger.muted)}`,
      "testing.message.error.lineBackground": `#${hex(color.danger.muted)}${opacity[5]}`,
      "testing.message.info.decorationForeground": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "testing.message.info.lineBackground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "testing.peekBorder": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "testing.peekHeaderBackground": `#${hex(color.danger.muted)}`,
      "testing.runAction": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
  
      "textBlockQuote.background": `#${hex(color.success.muted)}`,
      "textBlockQuote.border":  themes({ light: `#${foregroundColor}${opacity[7]}`, dark: `#${backgroundColor}${opacity[7]}`, dimmed: `#${foregroundColor}${opacity[6]}`, hc: `#${backgroundColor}${opacity[6]}`, system: `#${systemBackground}${opacity[7]}` }),
  
      "textCodeBlock.background": themes({ light: `#${foregroundColor}${opacity[7]}`, dark: `#${backgroundColor}${opacity[7]}`, dimmed: `#${foregroundColor}${opacity[6]}`, hc: `#${backgroundColor}${opacity[6]}`, system: `#${systemBackground}${opacity[7]}` }),
  
      "textLink.activeForeground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      "textLink.foreground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
  
      "textPreformat.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
      "textSeparator.foreground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
  
      "titleBar.activeBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "titleBar.activeForeground":`${themes({ light: `#${backgroundColor}${opacity[7]}`, dark: `#${foregroundColor}${opacity[7]}`, dimmed: `#${backgroundColor}${opacity[8]}`, hc: `#${foregroundColor}${opacity[8]}`, system: `#${systemForeground}${opacity[7]}` })}}`,
      "titleBar.border": `#${hex(color.scale.blue[0])}}${opacity[5]}`,
      "titleBar.inactiveBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "titleBar.inactiveForeground": `${themes({ light: `#${backgroundColor}${opacity[4]}`, dark: `#${foregroundColor}${opacity[4]}`, dimmed: `#${backgroundColor}${opacity[5]}`, hc: `#${foregroundColor}${opacity[5]}`, system: `#${systemForeground}${opacity[4]}` })}}`,
  
      "toolbar.activeBackground":  themes({ light: `#${foregroundUnderColor}${opacity[3]}`, dark: `#${backgroundOnColor}${opacity[3]}`, dimmed: `#${foregroundUnderColor}${opacity[2]}`, hc: `#${backgroundOnColor}${opacity[2]}`, system: `#${systemONBackground}${opacity[3]}` }),
      "toolbar.hoverBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "toolbar.hoverOutline":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
      "tree.indentGuidesStroke": `#${hex(color.success.muted)}${opacity[5]}`,
      "tree.tableColumnsBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "tree.tableOddRowsBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
      "walkThrough.embeddedEditorBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
  
      "welcomePage.background": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "welcomePage.progress.background":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "welcomePage.progress.foreground": `#${hex(color.success.muted)}${opacity[10]}`,
      "welcomePage.tileBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "welcomePage.tileHoverBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      "welcomePage.tileShadow":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      
      "widget.shadow":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      "window.activeBorder": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      "window.inactiveBorder": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      //"debugConsole.errorForeground": `#${hex(color.danger.muted)}`,
      //"debugConsole.infoForeground": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      //"debugConsole.sourceForeground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      //"debugConsole.warningForeground": `#${hex(color.danger.muted)}`,
      //"debugConsoleInputIcon.foreground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      //"debugIcon.breakpointCurrentStackframeForeground": "#ffcc00",
      //"debugIcon.breakpointDisabledForeground": "#848484",
      //"debugIcon.breakpointForeground": "#e51400",
      //"debugIcon.breakpointStackframeForeground": "#89d185",
      //"debugIcon.breakpointUnverifiedForeground": "#848484",
      //"debugIcon.continueForeground": "#75beff",
      //"debugIcon.disconnectForeground": "#f48771",
      //"debugIcon.pauseForeground": "#75beff",
      //"debugIcon.restartForeground": "#89d185",
      //"debugIcon.startForeground": "#89d185",
      //"debugIcon.stepBackForeground": "#75beff",
      //"debugIcon.stepIntoForeground": "#75beff",
      //"debugIcon.stepOutForeground": "#75beff",
      //"debugIcon.stepOverForeground": "#75beff",
      //"debugIcon.stopForeground": "#f48771",
      //"editorActiveLineNumber.foreground": "#c6c6c6",
      //"interactive.activeCodeBorder": `#${hex(color.scale.yellow[0])}}${opacity[7]}`,
      //"interactive.inactiveCodeBorder": `#${hex(color.success.muted)}${opacity[3]}`,
      //"issues.closed": "#cb2431",
      //"issues.newIssueDecoration": "#ffffff48",
      //"issues.open": "#22863a",
      //"keybindingLabel.background": "#8080802b",
      //"notebook.cellBorderColor": `#${hex(color.success.muted)}${opacity[3]}`,
      //"notebook.cellEditorBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      //"notebook.cellInsertionIndicator":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"notebook.cellStatusBarItemHoverBackground": "#ffffff26",
      //"notebook.cellToolbarSeparator": "#80808059",
      //"notebook.editorBackground": `#${hex(color.success.muted)}`,
      //"notebook.focusedCellBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"notebook.focusedEditorBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"notebook.inactiveFocusedCellBorder": `#${hex(color.success.muted)}${opacity[3]}`,
      //"notebook.selectedCellBackground": `#${hex(color.success.muted)}${opacity[3]}`,
      //"notebook.selectedCellBorder": `#${hex(color.success.muted)}${opacity[3]}`,
      //"notebook.symbolHighlightBackground": "#ffffff0b",
      //"notebookScrollbarSlider.activeBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"notebookScrollbarSlider.background": `#${hex(color.success.muted)}${opacity[5]}`,
      //"notebookScrollbarSlider.hoverBackground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      //"notebookStatusErrorIcon.foreground": `#${hex(color.danger.muted)}`,
      //"notebookStatusRunningIcon.foreground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      //"notebookStatusSuccessIcon.foreground": "#89d185",
      //"pullRequests.notification": `#${hex(color.scale.blue[0])}}${opacity[10]}`,
      //"settings.checkboxBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"settings.checkboxBorder": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      //"settings.checkboxForeground": `${themes({ light: `#${backgroundColor}${opacity[5]}`, dark: `#${foregroundColor}${opacity[5]}`, dimmed: `#${backgroundColor}${opacity[6]}`, hc: `#${foregroundColor}${opacity[6]}`, system: `#${systemForeground}${opacity[5]}` })}}`,
      //"settings.dropdownBackground":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"settings.dropdownBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"settings.dropdownForeground": themes({ light: `#${backgroundColor}`, dark: `#${foregroundColor}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}` }),
      //"settings.dropdownListBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"settings.focusedRowBackground": `#${hex(color.success.muted)}${opacity[9]}`,
      //"settings.focusedRowBorder": "#ffffff1f",
      //"settings.headerBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"settings.headerForeground": "#e7e7e7",
      //"settings.modifiedItemIndicator": "#0c7d9d",
      //"settings.numberInputBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      //"settings.numberInputBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"settings.numberInputForeground":`${themes({ light: `#${backgroundColor}${opacity[6]}`, dark: `#${foregroundColor}${opacity[6]}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}${opacity[6]}` })}}`,
      //"settings.rowHoverBackground": `#${hex(color.success.muted)}${opacity[9]}`,
      //"settings.sashBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"settings.textInputBackground": themes({ light: `#${foregroundColor}`, dark: `#${backgroundColor}`, dimmed: `#${foregroundColor}${opacity[7]}`, hc: `#${backgroundColor}${opacity[7]}`, system: `#${systemBackground}` }),
      //"settings.textInputBorder":  themes({ light: `#${foregroundUnderColor}`, dark: `#${backgroundOnColor}`, dimmed: `#${foregroundUnderColor}${opacity[7]}`, hc: `#${backgroundOnColor}${opacity[7]}`, system: `#${systemONBackground}` }),
      //"settings.textInputForeground":`${themes({ light: `#${backgroundColor}${opacity[6]}`, dark: `#${foregroundColor}${opacity[6]}`, dimmed: `#${backgroundColor}${opacity[7]}`, hc: `#${foregroundColor}${opacity[7]}`, system: `#${systemForeground}${opacity[6]}` })}}`,
      //"statusBarItem.prominentHoverBackground": "#0000004d",
      //"notebook.cellHoverBackground": null,
      //"notebook.focusedCellBackground": null,
      //"notebook.inactiveSelectedCellBorder": null,
      //"notebook.outputContainerBackgroundColor": null,
      //"notebook.outputContainerBorderColor": null,
      //"quickInput.list.focusBackground": null


    },
    semanticHighlighting: true,
    "tokenColors": [
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.comment"
        ],
        "settings": {
          "foreground": "#768390"
        }
      },
      {
        "scope": [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity"
        ],
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        "settings": {
          "foreground": "#F69D50"
        }
      },
      {
        "scope": [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        "settings": {
          "foreground": "#ADBAC7"
        }
      },
      {
        "scope": "entity.name.function",
        "settings": {
          "foreground": "#DCBDFB"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        "settings": {
          "foreground": "#8DDB8C"
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": "#F47067"
        }
      },
      {
        "scope": [
          "storage",
          "storage.type"
        ],
        "settings": {
          "foreground": "#F47067"
        }
      },
      {
        "scope": [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java"
        ],
        "settings": {
          "foreground": "#ADBAC7"
        }
      },
      {
        "scope": [
          "string",
          "string punctuation.section.embedded source"
        ],
        "settings": {
          "foreground": "#96D0FF"
        }
      },
      {
        "scope": "support",
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": "meta.property-name",
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": "variable",
        "settings": {
          "foreground": "#F69D50"
        }
      },
      {
        "scope": "variable.other",
        "settings": {
          "foreground": "#ADBAC7"
        }
      },
      {
        "scope": "invalid.broken",
        "settings": {
          "foreground": "#FF938A",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "invalid.deprecated",
        "settings": {
          "foreground": "#FF938A",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "invalid.illegal",
        "settings": {
          "foreground": "#FF938A",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "invalid.unimplemented",
        "settings": {
          "foreground": "#FF938A",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "carriage-return",
        "settings": {
          "foreground": "#CDD9E5",
          "background": "#F47067",
          "fontStyle": "italic underline"
        }
      },
      {
        "scope": "message.error",
        "settings": {
          "foreground": "#FF938A"
        }
      },
      {
        "scope": "string variable",
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": [
          "source.regexp",
          "string.regexp"
        ],
        "settings": {
          "foreground": "#96D0FF"
        }
      },
      {
        "scope": [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition"
        ],
        "settings": {
          "foreground": "#96D0FF"
        }
      },
      {
        "scope": "string.regexp constant.character.escape",
        "settings": {
          "foreground": "#8DDB8C",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "support.constant",
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": "support.variable",
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": "support.type.property-name.json",
        "settings": {
          "foreground": "#8DDB8C"
        }
      },
      {
        "scope": "meta.module-reference",
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": "#F69D50"
        }
      },
      {
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "foreground": "#6CB6FF",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "markup.quote",
        "settings": {
          "foreground": "#8DDB8C"
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "foreground": "#ADBAC7",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "foreground": "#ADBAC7",
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "markup.strikethrough"
        ],
        "settings": {
          "fontStyle": "strikethrough"
        }
      },
      {
        "scope": "markup.inline.raw",
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        "settings": {
          "foreground": "#FF938A",
          "background": "#5D0F12"
        }
      },
      {
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#F47067"
        }
      },
      {
        "scope": [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        "settings": {
          "foreground": "#8DDB8C",
          "background": "#113417"
        }
      },
      {
        "scope": [
          "markup.changed",
          "punctuation.definition.changed"
        ],
        "settings": {
          "foreground": "#F69D50",
          "background": "#682D0F"
        }
      },
      {
        "scope": [
          "markup.ignored",
          "markup.untracked"
        ],
        "settings": {
          "foreground": "#2D333B",
          "background": "#6CB6FF"
        }
      },
      {
        "scope": "meta.diff.range",
        "settings": {
          "foreground": "#DCBDFB",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "meta.diff.header",
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": "meta.separator",
        "settings": {
          "foreground": "#6CB6FF",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "meta.output",
        "settings": {
          "foreground": "#6CB6FF"
        }
      },
      {
        "scope": [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote"
        ],
        "settings": {
          "foreground": "#768390"
        }
      },
      {
        "scope": "brackethighlighter.unmatched",
        "settings": {
          "foreground": "#FF938A"
        }
      },
      {
        "scope": [
          "constant.other.reference.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#96D0FF",
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "constant.language",
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#FD5555",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "foreground": "#9586F1DB",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "string"
        ],
        "settings": {
          "foreground": "#7D60A4F7",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "string.regexp",
          "constant.character.escape"
        ],
        "settings": {
          "foreground": "#FBFBFD8B"
        }
      },
      {
        "scope": [
          "string"
        ],
        "settings": {
          "foreground": "#FBFBFD"
        }
      },
      {
        "scope": [
          "keyword"
        ],
        "settings": {
          "foreground": "#636BDF"
        }
      },
      {
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "foreground": "#00C69E",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#95BFF7",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php",
          "punctuation.definition.parameters.end"
        ],
        "settings": {
          "foreground": "#FF06AC",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#FFFB04",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "meta.embedded"
        ],
        "settings": {
          "foreground": "#FF06AC"
        }
      },
      {
        "scope": [
          "support.function"
        ],
        "settings": {
          "foreground": "#88F6EBC2"
        }
      },
      {
        "scope": [
          "storage.type"
        ],
        "settings": {
          "foreground": "#90A8F6"
        }
      },
      {
        "scope": [
          "storage.modifier"
        ],
        "settings": {
          "foreground": "#9E34A2"
        }
      },
      {
        "scope": [
          "variable"
        ],
        "settings": {
          "foreground": "#3BDE00"
        }
      },
      {
        "scope": [
          "variable.other.readwrite.js"
        ],
        "settings": {
          "foreground": "#FF00AA"
        }
      },
      {
        "scope": [
          "variable",
          "keyword.control"
        ],
        "settings": {
          "foreground": "#A200FF"
        }
      },
      {
        "scope": [
          "variable.language"
        ],
        "settings": {
          "foreground": "#9CA0AFE4"
        }
      },
      {
        "scope": [
          "variable"
        ],
        "settings": {
          "foreground": "#5D7AC7"
        }
      },
      {
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#727C9F",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#FAFAFA"
        }
      },
      {
        "scope": [
          "support.class"
        ],
        "settings": {
          "foreground": "#F7FF04FE",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "keyword"
        ],
        "settings": {
          "foreground": "#C201BC",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "comment"
        ],
        "settings": {
          "foreground": "#4B4B4B",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.separator.key-value.html"
        ],
        "settings": {
          "foreground": "#FF0095",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": "#FF0095",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.string.end.json.comments",
          "punctuation.definition.string.begin.json.comments",
          "punctuation.definition.string.end.js",
          "punctuation.definition.string.begin.js"
        ],
        "settings": {
          "foreground": "#F200FF",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.support.type.property-name.begin.json.comments",
          "punctuation.support.type.property-name.end.json.comments"
        ],
        "settings": {
          "foreground": "#027B32",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.string.begin.html",
          "punctuation.definition.string.end.html"
        ],
        "settings": {
          "foreground": "#027B32",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.sql.embedded.php"
        ],
        "settings": {
          "foreground": "#E100FF",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.string.begin.sql",
          "punctuation.definition.string.end.sql",
          "punctuation.separator.dictionary.key-value.json.comments"
        ],
        "settings": {
          "foreground": "#00FF1E",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "keyword.other.DML.sql",
          "source.sql.embedded.php",
          "string.quoted.single.sql.php",
          "string.quoted.single.php"
        ],
        "settings": {
          "foreground": "#FF7700",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "string.quoted.other.backtick.sql"
        ],
        "settings": {
          "foreground": "#FF7700",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "variable.other.property.js",
          "entity.name.function.member"
        ],
        "settings": {
          "foreground": "#FF7700",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.string.template.begin.js",
          "punctuation.definition.string.template.end.js"
        ],
        "settings": {
          "foreground": "#FF7700",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "string.quoted.double.html",
          "string.quoted.single.js",
          "string.quoted.double.js",
          "string.template.js"
        ],
        "settings": {
          "foreground": "#A8A8A8",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "text.html.php"
        ],
        "settings": {
          "foreground": "#FBFBFDDB",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "variable.other.constant",
          "variable.other.constant.object.js",
          "punctuation.definition.template-expression.begin.js"
        ],
        "settings": {
          "foreground": "#FAFA03",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.separator.comma.js",
          "punctuation.separator.dictionary.pair.json.comments"
        ],
        "settings": {
          "foreground": "#03FA03",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.string.begin.php",
          "punctuation.definition.string.end.php"
        ],
        "settings": {
          "foreground": "#FF03FF",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.accessor.js"
        ],
        "settings": {
          "foreground": "#FBFBFD"
        }
      },
      {
        "scope": [
          "punctuation.accessor.js"
        ],
        "settings": {
          "foreground": "#FBFBFD"
        }
      },
      {
        "scope": [
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#9586F1DB"
        }
      },
      {
        "scope": [
          "variable.css"
        ],
        "settings": {
          "foreground": "#9586F1DB"
        }
      },
      {
        "scope": [
          "variable.argument.css"
        ],
        "settings": {
          "foreground": "#DDFF02"
        }
      },
      {
        "scope": [
          "constant.other.color.rgb-value",
          "support.constant.property-value"
        ],
        "settings": {
          "foreground": "#FF7700"
        }
      },
      {
        "scope": [
          "punctuation.separator.list.comma.css",
          "punctuation.separator.key-value.css",
          "punctuation.terminator.rule.css",
          "meta.function.calc.css",
          "keyword.operator.arithmetic.css",
          "punctuation.definition.entity.css"
        ],
        "settings": {
          "foreground": "#03FA03"
        }
      },
      {
        "scope": [
          "punctuation.definition.string.begin.css",
          "punctuation.definition.string.end.css"
        ],
        "settings": {
          "foreground": "#FF06AC"
        }
      },
      {
        "scope": [
          "string.quoted.single.css"
        ],
        "settings": {
          "foreground": "#9CA0AFE4"
        }
      },
      {
        "scope": [
          "constant.numeric.css",
          "keyword.other.unit.px.css",
          "keyword.other.unit.rem.css",
          "keyword.other.unit.em.css",
          "keyword.other.unit.deg.css",
          "keyword.other.unit.ms.css",
          "keyword.other.unit.vw.css",
          "keyword.other.unit.vh.css",
          "keyword.other.unit",
          "keyword.other.unit.s.css"
        ],
        "settings": {
          "foreground": "#F7FF04FE"
        }
      },
      {
        "scope": [
          "constant.numeric.css"
        ],
        "settings": {
          "foreground": "#FF7700"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings": {
          "foreground": "#95BFF7"
        }
      },
      {
        "scope": [
          "entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#F7FF04FE"
        }
      },
      {
        "scope": [
          "support.type.property-name.css",
          "entity.other.keyframe-offset.css"
        ],
        "settings": {
          "foreground": "#9CDCFE"
        }
      },
      {
        "scope": [
          "support.constant.vendored.property-value.css",
          "support.constant.font-name.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings": {
          "foreground": "#FF00AA"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element.css"
        ],
        "settings": {
          "foreground": "#3E68C9"
        }
      },
      {
        "scope": [
          "support.type.property-name.media.css",
          "support.constant.media.css"
        ],
        "settings": {
          "foreground": "#A200FF"
        }
      },
      {
        "scope": [
          "keyword.operator.logical.only.media.css",
          "keyword.operator.logical.and.media.css",
          "string.quoted.double.css"
        ],
        "settings": {
          "foreground": "#027B32"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.id.css"
        ],
        "settings": {
          "foreground": "#00FFF7"
        }
      },
      {
        "scope": [
          "support.function.transform.css"
        ],
        "settings": {
          "foreground": "#00EAFF"
        }
      },
      {
        "scope": [
          "entity.other.keyframe-offset.percentage.css"
        ],
        "settings": {
          "foreground": "#FF00D9"
        }
      },
      {
        "scope": "token.info-token",
        "settings": {
          "foreground": "#6796E6"
        }
      },
      {
        "scope": "token.warn-token",
        "settings": {
          "foreground": "#CD9731"
        }
      },
      {
        "scope": "token.error-token",
        "settings": {
          "foreground": "#F44747"
        }
      },
      {
        "scope": "token.debug-token",
        "settings": {
          "foreground": "#B267E6"
        }
      }
    ]
  };
}

module.exports = getTheme;
