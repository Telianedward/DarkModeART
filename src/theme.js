const _ch = require("chroma-js");
const { _gC } = require("./colors");

// Convert to hex
// VS Code doesn't support other formats like hsl, rgba etc.

   hex = (color)=>{
  return _ch(color).hex();
}


// Choosing colors from primer/primitives
// There are multiple ways to define what color is used:

// 1.Global variable
//    e.g."textLink.foreground" : hex(color.fg.default),
// 2.Color scale
//    e.g."textLink.foreground" : scale.blue[5],
// 3.Hex value : All themes will use this scale.Only use for exceptions
//    e.g."textLink.foreground" : "#fff",
// 4.Per theme.Useful when a certain theme needs an exception
//    e.g."textLink.foreground" : themes({ l : scale.blue[5], d : scale.blue[2], dd : scale.blue[3], hc : scale.blue[3] }),

    _gT = ({ theme, name }) => {
  const themes = (options) => options[theme], // Usage : themes({ l : "lightblue", d : "darkblue", dd : "royalblue", hc : "blue" })
        color = _gC(theme), // Usage : color.fg.default
        scale = color.scale, // Usage : scale.blue[6]
        _x_ = ["", "", "", "", "", "", "", "", "", "", ""],
        _u_ = themes({ l : `${hex(color.canvas.subtle)}`, lHC : `${hex(color.canvas.subtle)}`, lC : `${hex(color.canvas.subtle)}`, lT : `${hex(color.canvas.subtle)}`, d : `${hex(color.fg.default)}`, dd : `${hex(color.fg.default)}`, dhc : `${hex(color.fg.default)}`, dc : `${hex(color.fg.default)}`, dt : `${hex(color.fg.default)}` }),
        _s_ = themes({ l : `${hex(color.canvas.subtle)}`, lHC : `${hex(color.canvas.subtle)}`, lC : `${hex(color.canvas.subtle)}`, lT : `${hex(color.canvas.subtle)}`, d : `${hex(color.fg.default)}`, dd : `${hex(color.fg.default)}`, dhc : `${hex(color.fg.default)}`, dc : `${hex(color.fg.default)}`, dt : `${hex(color.fg.default)}`}),
        // _z_ = darkThemeMq.matches?'f1f1f3':'232323',
        _bc_ =  themes({ l : `${hex(color.canvas.subtle)}`, lHC : `${hex(color.canvas.subtle)}`, lC : `${hex(color.canvas.subtle)}`, lT : `${hex(color.canvas.subtle)}`, d : `${hex(color.fg.default)}`, dd : `${hex(color.fg.default)}`, dhc : `${hex(color.fg.default)}`, dc : `${hex(color.fg.default)}`, dt : `${hex(color.fg.default)}`}),

        _boc_ = themes({ l : `${hex(color.fg.muted)}`, lHC : `${hex(color.fg.muted)}`, lC : `${hex(color.fg.muted)}`, lT : `${hex(color.fg.muted)}`, d : `${hex(color.fg.default)}`, dd : `${hex(color.fg.default)}`, dhc : `${hex(color.fg.default)}`, dc : `${hex(color.fg.default)}`, dt : `${hex(color.fg.default)}` }),
        _fc_ = themes({ l : `${hex(color.canvas.inset)}`, lHC : `${hex(color.canvas.inset)}`, lC : `${hex(color.canvas.inset)}`, lT : `${hex(color.canvas.inset)}`, d : `${hex(color.fg.default)}`, dd : `${hex(color.fg.default)}`, dhc : `${hex(color.fg.default)}`, dc : `${hex(color.fg.default)}`, dt : `${hex(color.fg.default)}`}),
        _fuc_  = themes({ l : `${hex(color.canvas.subtle)}`, lHC : `${hex(color.canvas.subtle)}`, lC : `${hex(color.canvas.subtle)}`, lT : `${hex(color.canvas.subtle)}`, d : `${hex(color.fg.muted)}`, dd : `${hex(color.fg.muted)}`, dhc : `${hex(color.fg.muted)}`, dc : `${hex(color.fg.muted)}`, dt : `${hex(color.fg.muted)}`}),
        _a_ =  themes({ l : `${_bc_}`, lHC : `${_bc_}`, lC : `${_bc_}`, lT : `${_bc_}`, d : `${_fc_}`, dd : `${_fc_}`, dhc : `${_fc_}`, dc : `${_fc_}`, dt : `${_fc_}`}),
        _b_ =  themes({ l : `${_fc_}`, lHC : `${_fc_}`, lC : `${_fc_}`, lT : `${_fc_}`, d : `${_bc_}`, dd : `${_bc_}`, dhc : `${_bc_}`, dc : `${_bc_}`, dt : `${_bc_}`}),
        _c_ =  themes({ l : `${_fuc_}`, lHC : `${_fuc_}`, lC : `${_fuc_}`, lT : `${_fuc_}`, d : `${_boc_}`, dd : `${_boc_}`, dhc : `${_boc_}`, dc : `${_boc_}`, dt : `${_boc_}`}),
        _d_ =  themes({ l : `${_bc_}`, lHC : `${_bc_}`, lC : `${_bc_}`, lT : `${_bc_}`, d : `${_bc_}`, dd : `${_bc_}`, dhc : `${_bc_}`, dc : `${_bc_}`, dt : `${_bc_}`}),
        _e_=  themes({ l : `${_fuc_}${_x_[7]}`, lHC : `${_fuc_}${_x_[7]}`, lC : `${_fuc_}${_x_[7]}`, lT : `${_fuc_}${_x_[7]}`, d : `${_fuc_}${_x_[7]}`, dd : `${_fuc_}${_x_[7]}`, dhc : `${_fuc_}${_x_[7]}`, dc : `${_fuc_}${_x_[7]}`, dt : `${_fuc_}${_x_[7]}` }),
        _f_ =  themes({ l : `${_bc_}${_x_[7]}`, lHC : `${_bc_}${_x_[7]}`, lC : `${_bc_}${_x_[7]}`, lT : `${_bc_}${_x_[7]}`, d : `${_fc_}${_x_[7]}`, dd : `${_fc_}${_x_[7]}`, dhc : `${_fc_}${_x_[7]}`, dc : `${_fc_}${_x_[7]}`, dt : `${_fc_}${_x_[7]}` }),
        _g_=  themes({ l : `${_bc_}${_x_[3]}`, lHC : `${_bc_}${_x_[3]}`, lC : `${_bc_}${_x_[3]}`, lT : `${_bc_}${_x_[3]}`, d : `${_fc_}${_x_[3]}`, dd : `${_fc_}${_x_[3]}`, dhc : `${_fc_}${_x_[3]}`, dc : `${_fc_}${_x_[3]}`, dt : `${_fc_}${_x_[3]}`}),
        _h_ =  themes({ l : `${_bc_}${_x_[8]}`, lHC : `${_bc_}${_x_[8]}`, lC : `${_bc_}${_x_[8]}`, lT : `${_bc_}${_x_[8]}`, d : `${_fc_}${_x_[8]}`, dd : `${_fc_}${_x_[8]}`, dhc : `${_fc_}${_x_[8]}`, dc : `${_fc_}${_x_[8]}`, dt : `${_fc_}${_x_[8]}`}),
        _i_ = themes({ l :  `${_fuc_}${_x_[0]}`, lHC : `${_fuc_}${_x_[0]}`, lC : `${_fuc_}${_x_[0]}`, lT : `${_fuc_}${_x_[0]}`, d : `${_boc_}${_x_[0]}`, dd : `${_boc_}${_x_[0]}`, dhc : `${_boc_}${_x_[0]}`, dc : `${_boc_}${_x_[0]}`, dt : `${_boc_}${_x_[0]}` }),
        _j_ =  themes({ l : `${_bc_}${_x_[6]}`, lHC : `${_bc_}${_x_[6]}`, lC : `${_bc_}${_x_[6]}`, lT : `${_bc_}${_x_[6]}`, d : `${_fc_}${_x_[6]}`, dd : `${_fc_}${_x_[6]}`, dhc : `${_fc_}${_x_[6]}`, dc : `${_fc_}${_x_[6]}`, dt : `${_fc_}${_x_[6]}`}),
        _k_ =  themes({ l : `${_bc_}${_x_[4]}`, lHC : `${_bc_}${_x_[4]}`, lC : `${_bc_}${_x_[4]}`, lT : `${_bc_}${_x_[4]}`, d : `${_fc_}${_x_[4]}`, dd : `${_fc_}${_x_[4]}`, dhc : `${_fc_}${_x_[4]}`, dc : `${_fc_}${_x_[4]}`, dt : `${_fc_}${_x_[4]}`}),
        _l_  =  themes({ l : `${_bc_}${_x_[5]}`, lHC : `${_bc_}${_x_[5]}`, lC : `${_bc_}${_x_[5]}`, lT : `${_bc_}${_x_[5]}`, d : `${_fc_}${_x_[5]}`, dd : `${_fc_}${_x_[5]}`, dhc : `${_fc_}${_x_[5]}`, dc : `${_fc_}${_x_[5]}`, dt : `${_fc_}${_x_[5]}`}),
        _m_   =  themes({ l : `${_fuc_}${_x_[5]}`, lHC : `${_fuc_}${_x_[5]}`, lC : `${_fuc_}${_x_[5]}`, lT : `${_fuc_}${_x_[5]}`, d : `${_boc_}${_x_[5]}`, dd : `${_boc_}${_x_[5]}`, dhc : `${_boc_}${_x_[5]}`, dc : `${_boc_}${_x_[5]}`, dt : `${_boc_}${_x_[5]}`}),
        _n_  = themes({ l : `${_bc_}${_x_[5]}`, lHC : `${_bc_}${_x_[5]}`, lC : `${_bc_}${_x_[5]}`, lT : `${_bc_}${_x_[5]}`, d : `${_fc_}${_x_[5]}`, dd : `${_fc_}${_x_[5]}`, dhc : `${_fc_}${_x_[5]}`, dc : `${_fc_}${_x_[5]}`, dt : `${_fc_}${_x_[5]}` }),
        _o_ = themes({ l : `${_bc_}${_x_[7]}`, lHC : `${_bc_}${_x_[7]}`, lC : `${_bc_}${_x_[7]}`, lT : `${_bc_}${_x_[7]}`, d : `${_fc_}${_x_[7]}`, dd : `${_fc_}${_x_[7]}`, dhc : `${_fc_}${_x_[7]}`, dc : `${_fc_}${_x_[7]}`, dt : `${_fc_}${_x_[7]}` }),
        _p_ = themes({ l : `${_fc_}${_x_[7]}`, lHC : `${_fc_}${_x_[7]}`, lC : `${_fc_}${_x_[7]}`, lT : `${_fc_}${_x_[7]}`, d : `${_bc_}${_x_[7]}`, dd : `${_bc_}${_x_[7]}`, dhc : `${_bc_}${_x_[7]}`, dc : `${_bc_}${_x_[7]}`, dt : `${_bc_}${_x_[7]}` })
  return {
    name : name,
    colors : {
        focusBorder : hex(color.accent.emphasis),
        foreground : hex(color.fg.default),
        descriptionForeground : hex(color.fg.muted),
        errorForeground : hex(color.danger.fg),
        "activityBar.activeBackground" : _a_,
        "activityBar.activeBorder" : `${hex(color.success.muted)}${_x_[5]}`,
        "activityBar.activeFocusBorder" : _a_,
        "activityBar.background" : _b_,
        "activityBar.border" :  _c_,
        "activityBar.dropBorder" : _a_,
        "activityBar.foreground" : `${hex(color.success.muted)}${_x_[5]}`,
        "activityBar.inactiveForeground" : `${hex(color.canvas.subtle)}`,
        "activityBarBadge.background" : `${hex(color.success.muted)}${_x_[5]}`,
        "activityBarBadge.foreground" : _a_,
        
        "badge.background" : `${hex(color.accent.muted)}${_x_[7]}`,
        "badge.foreground" : _a_,
  
        "banner.background" : `${hex(color.success.muted)}${_x_[5]}`,
        "banner.foreground" : _b_,
        "banner.iconForeground" : `${hex(color.success.muted)}${_x_[5]}`,
  
        "breadcrumb.activeSelectionForeground" : _a_,
        "breadcrumb.background" : _b_,
        "breadcrumb.focusForeground" : _a_,
        "breadcrumb.foreground" : _a_,
        "breadcrumbPicker.background" :  _c_,
  
        "button.background" : `${hex(color.success.muted)}${_x_[5]}`,
        "button.border" : `${hex(color.success.muted)}${_x_[5]}`,
        "button.foreground" : _a_,
        "button.hoverBackground" : `${hex(color.success.muted)}${_x_[6]}`,
        "button.secondaryBackground" : `${hex(color.success.muted)}${_x_[5]}`,
        "button.secondaryForeground" : _a_,
        "button.secondaryHoverBackground" : `${hex(color.success.muted)}${_x_[5]}`,
        "button.separator" : _a_,
  
        "charts.blue" : `${hex(color.accent.muted)}`,
        "charts.foreground" : _a_,
        "charts.green" : `${hex(color.success.muted)}`,
        "charts.lines" : _a_,
        "charts.orange" : `${hex(color.severe.muted)}`,
        "charts.purple" : `${hex(color.success.muted)}`,
        "charts.red" : `${hex(color.danger.muted)}`,
        "charts.yellow" : `${hex(color.scale.yellow[0])}`,

  
        "checkbox.background" :  _c_,
        "checkbox.border" : _d_,
        "checkbox.foreground" : _d_,
  
        "commandCenter.activeBackground" : `${hex(color.success.muted)}${_x_[5]}`,
        "commandCenter.activeForeground" : _a_,
        "commandCenter.background" : _b_,
        "commandCenter.border" :  _c_,
        "commandCenter.foreground" : _d_,
  
        "contrastActiveBorder" :  _c_,
        "contrastBorder" :  _c_,
  
        "debugExceptionWidget.background" : _b_,
        "debugExceptionWidget.border" :  _c_,
  
        "debugTokenExpression.boolean" : _a_,
        "debugTokenExpression.error" : _a_,
        "debugTokenExpression.name" : _a_,
        "debugTokenExpression.number" : _a_,
        "debugTokenExpression.string" : _a_,
        "debugTokenExpression.value" : _a_,
  
        "debugToolBar.background" : `${hex(color.danger.muted)}`,
        "debugToolBar.border" :  _c_,
  
        "debugView.exceptionLabelBackground" : _b_,
        "debugView.exceptionLabelForeground" : _a_,
        "debugView.stateLabelBackground" : _b_,
        "debugView.stateLabelForeground" : _a_,
        "debugView.valueChangedHighlight" : _a_,
  
        "descriptionForeground" : _a_,
  
        "diffEditor.border" :  _c_,
        "diffEditor.diagonalFill" : _f_, 
        "diffEditor.insertedLineBackground" : `${hex(color.success.muted)}${_x_[5]}`,
        "diffEditor.insertedTextBackground" : `${hex(color.success.muted)}${_x_[5]}`,
        "diffEditor.insertedTextBorder" : `${hex(color.success.muted)}${_x_[5]}`,
        "diffEditor.removedLineBackground" : `${hex(color.danger.muted)}${_x_[9]}`,
        "diffEditor.removedTextBackground" : `${hex(color.danger.muted)}${_x_[7]}`,
        "diffEditor.removedTextBorder" : `${hex(color.danger.muted)}${_x_[7]}`,
        "diffEditorGutter.insertedLineBackground" : `${hex(color.success.muted)}${_x_[5]}`,
        "diffEditorGutter.removedLineBackground" : `${hex(color.danger.muted)}${_x_[9]}`,
        "diffEditorOverview.insertedForeground" : `${hex(color.success.muted)}${_x_[5]}`,
        "diffEditorOverview.removedForeground" : `${hex(color.danger.muted)}${_x_[9]}`,
  
      "disabledForeground" : `${hex(color.scale.yellow[0])}`,
  
      "dropdown.background" :  _c_,
      "dropdown.border" :  _c_,
      "dropdown.foreground" : _a_,
      "dropdown.listBackground" :  _c_,
      
      "editor.background" : _b_,
      "editor.findMatchBackground" : `${hex(color.success.muted)}${_x_[6]}`,
      "editor.findMatchBorder" : `${hex(color.success.muted)}`,
      "editor.findMatchHighlightBackground" : `${hex(color.success.muted)}${_x_[7]}`,
      "editor.findMatchHighlightBorder" : `${hex(color.success.muted)}${_x_[9]}`,
      "editor.findRangeHighlightBackground" : `${hex(color.success.muted)}${_x_[7]}`,
      "editor.findRangeHighlightBorder" : `${hex(color.success.muted)}${_x_[7]}`,
      "editor.focusedStackFrameHighlightBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "editor.foldBackground" : _e_,
      "editor.foreground" : _g_,
      "editor.hoverHighlightBackground" : `${hex(color.success.muted)}${_x_[9]}`,
      "editor.inactiveSelectionBackground" : _e_,
      "editor.inlineValuesBackground" : `${hex(color.success.muted)}`,
      "editor.inlineValuesForeground" : _a_,
      "editor.lineHighlightBackground" : `${hex(color.success.muted)}`,
      "editor.lineHighlightBorder" : _h_,
      "editor.linkedEditingBackground" : `${hex(color.scale.yellow[0])}${_x_[8]}`,
      "editor.rangeHighlightBackground" : `${hex(color.success.muted)}${_x_[7]}`,
      "editor.rangeHighlightBorder" : `${hex(color.success.muted)}${_x_[5]}`,
      "editor.selectionBackground" : _h_,
      "editor.selectionForeground" : `${hex(color.accent.muted)}`,
      "editor.selectionHighlightBackground" : `${hex(color.success.muted)}${_x_[7]}`,
      "editor.selectionHighlightBorder" :  _c_,
      "editor.snippetFinalTabstopHighlightBackground" : _b_,
      "editor.snippetFinalTabstopHighlightBorder" :  _c_,
      "editor.snippetTabstopHighlightBackground" : _b_,
      "editor.snippetTabstopHighlightBorder" :  _c_,
      "editor.stackFrameHighlightBackground" : _d_,
      "editor.symbolHighlightBackground" : `${hex(color.done.emphasis)}${_x_[5]}`,
      "editor.symbolHighlightBorder" : `${hex(color.done.emphasis)}${_x_[4]}`,
      "editor.wordHighlightBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "editor.wordHighlightBorder" : _e_,
      "editor.wordHighlightStrongBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "editor.wordHighlightStrongBorder" : _e_,
      "editorBracketHighlight.foreground1" : `${hex(color.sponsors.muted)}`,
      "editorBracketHighlight.foreground2" : `${hex(color.scale.blue[0])}`,
      "editorBracketHighlight.foreground3" : `${hex(color.sponsors.muted)}`,
      "editorBracketHighlight.foreground4" : `${hex(color.scale.blue[0])}`,
      "editorBracketHighlight.foreground5" : `${hex(color.scale.yellow[0])}`,
      "editorBracketHighlight.foreground6":`${hex(color.success.muted)}`,
      "editorBracketHighlight.unexpectedBracket.foreground" : `${hex(color.sponsors.muted)}`,
      "editorBracketMatch.background" : _c_,
      "editorBracketMatch.border" : _c_,
      "editorBracketPairGuide.activeBackground1" : `${hex(color.sponsors.muted)}${_x_[7]}`,
      "editorBracketPairGuide.activeBackground2" : `${hex(color.scale.blue[0])}${_x_[5]}`,
      "editorBracketPairGuide.activeBackground3" : `${hex(color.sponsors.muted)}${_x_[7]}`,
      "editorBracketPairGuide.activeBackground4" : `${hex(color.scale.blue[0])}${_x_[7]}`,
      "editorBracketPairGuide.activeBackground5" :  `${hex(color.scale.yellow[0])}${_x_[7]}`,
      "editorBracketPairGuide.activeBackground6" : `${hex(color.success.muted)}${_x_[7]}`,
      "editorBracketPairGuide.background1" :  `${hex(color.sponsors.muted)}${_x_[7]}`,
      "editorBracketPairGuide.background2" : `${hex(color.scale.blue[0])}${_x_[5]}`,
      "editorBracketPairGuide.background3" : `${hex(color.sponsors.muted)}${_x_[7]}`,
      "editorBracketPairGuide.background4" : `${hex(color.scale.blue[0])}${_x_[7]}`,
      "editorBracketPairGuide.background5" :  `${hex(color.scale.yellow[0])}${_x_[7]}`,
      "editorBracketPairGuide.background6" : `${hex(color.success.muted)}${_x_[7]}`,
      "editorCodeLens.foreground" : _a_,
      "editorCommentsWidget.rangeActiveBackground" :  _c_,
      "editorCommentsWidget.rangeActiveBorder" :  _c_,
      "editorCommentsWidget.rangeBackground" : `${hex(color.success.muted)}`,
      "editorCommentsWidget.rangeBorder" :  _c_,
      "editorCommentsWidget.resolvedBorder" : _a_,
      "editorCommentsWidget.unresolvedBorder" : _a_,
      "editorCursor.background" :  _c_,
      "editorCursor.foreground" : `${hex(color.success.muted)}`,
      "editorError.background" : `${hex(color.danger.muted)}${_x_[7]}`,
      "editorError.border" : `${hex(color.danger.muted)}`,
      "editorError.foreground" : `${hex(color.danger.muted)}${_x_[7]}`,
      "editorGhostText.background" : `${hex(color.success.muted)}`,
      "editorGhostText.border" : `${hex(color.success.muted)}${_x_[5]}`,
      "editorGhostText.foreground" : `${hex(color.scale.blue[0])}`,
      "editorGroup.border" :  _c_,
      "editorGroup.dropBackground" : `${hex(color.success.muted)}${_x_[8]}`,
      "editorGroup.dropIntoPromptBackground" : _b_,
      "editorGroup.dropIntoPromptBorder" :  _c_,
      "editorGroup.dropIntoPromptForeground" : _a_,
      "editorGroup.emptyBackground" : _b_,
      "editorGroup.focusedEmptyBorder" :  _c_,
      "editorGroupHeader.border" :  _c_,
      "editorGroupHeader.noTabsBackground" : _b_,
      "editorGroupHeader.tabsBackground" : _b_,
      "editorGroupHeader.tabsBorder" :  _c_,
      "editorGutter.addedBackground" : `${hex(color.scale.blue[0])}`,
      "editorGutter.background" : _b_,
      "editorGutter.commentRangeForeground" : _a_,
      "editorGutter.deletedBackground" : `${hex(color.danger.muted)}`,
      "editorGutter.foldingControlForeground" : _a_,
      "editorGutter.modifiedBackground" : `${hex(color.success.muted)}`,
      "editorHint.border" : `${hex(color.success.muted)}`,
      "editorHint.foreground" : _a_,
      "editorHoverWidget.background" :  _c_,
      "editorHoverWidget.border" :  _c_,
      "editorHoverWidget.foreground" : _a_,
      "editorHoverWidget.highlightForeground" : `${hex(color.success.muted)}`,
      "editorHoverWidget.statusBarBackground" : `${hex(color.danger.muted)}${_x_[9]}`,
      "editorIndentGuide.activeBackground" : `${hex(color.danger.muted)}${_x_[9]}`,
      "editorIndentGuide.background" : _i_,
      "editorInfo.background" : _b_,
      "editorInfo.border" :  `${hex(color.scale.blue[0])}${_x_[5]}`,
      "editorInfo.foreground" : `${hex(color.scale.blue[0])}`,
      "editorInlayHint.background" :  _c_,
      "editorInlayHint.foreground" : _a_,
      "editorInlayHint.parameterBackground" :  _c_,
      "editorInlayHint.parameterForeground" : `${hex(color.scale.blue[0])}`,
      "editorInlayHint.typeBackground" :  _c_,
      "editorInlayHint.typeForeground" : `${hex(color.scale.blue[0])}`,
      "editorLightBulb.foreground" : `${hex(color.scale.yellow[0])}`,
      "editorLightBulbAutoFix.foreground" : `${hex(color.success.muted)}${_x_[5]}`,
      "editorLineNumber.activeForeground" : `${hex(color.success.muted)}`,
      "editorLineNumber.foreground" : _f_,
      "editorLink.activeForeground" :  `${hex(color.scale.blue[0])}`,
      "editorMarkerNavigation.background" : _b_,
      "editorMarkerNavigationError.background" : `${hex(color.danger.muted)}${_x_[5]}`,
      "editorMarkerNavigationError.headerBackground" : `${hex(color.danger.muted)}`,
      "editorMarkerNavigationInfo.background" : `${hex(color.scale.blue[0])}`,
      "editorMarkerNavigationInfo.headerBackground" : _b_,
      "editorMarkerNavigationWarning.background" : `${hex(color.severe.muted)}${_x_[5]}`,
      "editorMarkerNavigationWarning.headerBackground" : `${hex(color.severe.muted)}${_x_[5]}`,
      "editorOverviewRuler.addedForeground" : `${hex(color.scale.blue[0])}`,
      "editorOverviewRuler.background" :  _c_,
      "editorOverviewRuler.border" : `${hex(color.success.muted)}`,
      "editorOverviewRuler.bracketMatchForeground" : `${hex(color.done.muted )}${_x_[5]}`,
      "editorOverviewRuler.commonContentForeground" : _a_,
      "editorOverviewRuler.currentContentForeground" : `${hex(color.success.muted)}${_x_[5]}`,
      "editorOverviewRuler.deletedForeground" : `${hex(color.scale.yellow[0])}${_x_[5]}`,
      "editorOverviewRuler.errorForeground" : `${hex(color.danger.muted)}${_x_[5]}`,
      "editorOverviewRuler.findMatchForeground" : `${hex(color.success.muted)}`,
      "editorOverviewRuler.incomingContentForeground" : _a_,
      "editorOverviewRuler.infoForeground" : `${hex(color.scale.blue[0])}${_x_[5]}`,
      "editorOverviewRuler.modifiedForeground" : `${hex(color.success.muted)}${_x_[5]}`,
      "editorOverviewRuler.rangeHighlightForeground" : `${hex(color.success.muted)}${_x_[8]}`,
      "editorOverviewRuler.selectionHighlightForeground" : `${hex(color.success.muted)}${_x_[5]}`,
      "editorOverviewRuler.warningForeground" : `${hex(color.severe.muted)}${_x_[5]}`,
      "editorOverviewRuler.wordHighlightForeground" : `${hex(color.success.muted)}${_x_[5]}`,
      "editorOverviewRuler.wordHighlightStrongForeground" : `${hex(color.success.muted)}${_x_[5]}`,
      "editorPane.background" : `${hex(color.success.muted)}`,
      "editorRuler.foreground" :  `${hex(color.success.muted)}${_x_[5]}`,
      "editorStickyScroll.background" :  _c_,
      "editorStickyScrollHover.background" : _b_,
      "editorSuggestWidget.background" :  _c_,
      "editorSuggestWidget.border" :  _c_,
      "editorSuggestWidget.focusHighlightForeground" : _a_,
      "editorSuggestWidget.foreground" : _a_,
      "editorSuggestWidget.highlightForeground" : _a_,
      "editorSuggestWidget.selectedBackground" :  _c_,
      "editorSuggestWidget.selectedForeground" : _a_,
      "editorSuggestWidget.selectedIconForeground" : _a_,
      "editorSuggestWidgetStatus.foreground" : `${hex(color.scale.blue[0])}`,
      "editorUnicodeHighlight.background" : `${hex(color.success.muted)}${_x_[5]}`,
      "editorUnicodeHighlight.border" : `${hex(color.success.muted)}${_x_[5]}`,
      "editorUnnecessaryCode.border" :  _c_,
      "editorUnnecessaryCode._x_" : `${hex(color.danger.muted)}${_x_[3]}`,
      "editorWarning.background" : `${hex(color.severe.muted)}${_x_[0]}`, 
      "editorWarning.border" : `${hex(color.severe.muted)}${_x_[8]}`,
      "editorWarning.foreground" : `${hex(color.danger.muted)}`,
      "editorWhitespace.foreground" : `${hex(color.sponsors.muted)}`,
      "editorWidget.background" : _b_,
      "editorWidget.border" :  _c_,
      "editorWidget.foreground" : _d_,
      "editorWidget.resizeBorder" : `${hex(color.success.muted)}`,
  
  
      "errorForeground" : `${hex(color.danger.muted)}`,
  
      "extensionBadge.remoteBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "extensionBadge.remoteForeground" : _a_,
  
      "extensionButton.prominentBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "extensionButton.prominentForeground" : _a_,
      "extensionButton.prominentHoverBackground" : `${hex(color.success.muted)}${_x_[6]}`,
  
      "extensionIcon.preReleaseForeground" : `${hex(color.severe.muted)}`,
      "extensionIcon.sponsorForeground" : `${hex(color.done.muted )}`,
      "extensionIcon.starForeground" : `${hex(color.scale.yellow[0])}`,
      "extensionIcon.verifiedForeground" : `${hex(color.scale.blue[0])}`,
  
      "focusBorder" :  _c_,
      "foreground" : _d_,
  
      "gitDecoration.addedResourceForeground" : `${hex(color.success.muted)}`,
      "gitDecoration.conflictingResourceForeground" : `${hex(color.severe.muted)}`,
      "gitDecoration.deletedResourceForeground" : `${hex(color.danger.muted)}`,
      "gitDecoration.ignoredResourceForeground" : `${hex(color.severe.muted)}${_x_[5]}`,
      "gitDecoration.modifiedResourceForeground" : `${hex(color.scale.blue[0])}`,
      "gitDecoration.renamedResourceForeground" : _a_,
      "gitDecoration.stageDeletedResourceForeground" : `${hex(color.scale.blue[0])}${_x_[5]}`,
      "gitDecoration.stageModifiedResourceForeground" : `${hex(color.success.muted)}`,
      "gitDecoration.submoduleResourceForeground" :  _c_,
      "gitDecoration.untrackedResourceForeground" : _d_,
  
      "icon.foreground" : _a_,
  
      "input.background" : _b_,
      "input.border" :  _c_,
      "input.foreground":_j_,
      "input.placeholderForeground":_j_,
      "inputOption.activeBackground" : _e_,
      "inputOption.activeBorder" : _e_,
      "inputOption.activeForeground" : _k_,
      "inputOption.hoverBackground":_j_,
      "inputValidation.errorBackground" : `${hex(color.danger.muted)}`,
      "inputValidation.errorBorder" : `${hex(color.danger.muted)}`,
      "inputValidation.errorForeground" : `${hex(color.danger.muted)}`,
      "inputValidation.infoBackground" : `${hex(color.danger.muted)}${_x_[5]}`,
      "inputValidation.infoBorder" :  _c_,
      "inputValidation.infoForeground" : _a_,
      "inputValidation.warningBackground" : `${hex(color.scale.blue[0])}${_x_[5]}`,
      "inputValidation.warningBorder" : `${hex(color.danger.muted)}${_x_[5]}`,
      "inputValidation.warningForeground" : `${hex(color.danger.muted)}${_x_[5]}`,
  
      "keybindingLabel.border" :  _c_,
      "keybindingLabel.bottomBorder" : `${hex(color.success.muted)}`,
      "keybindingLabel.foreground" : `${hex(color.success.muted)}${_x_[5]}`,
  
      "keybindingTable.headerBackground" : _b_,
      "keybindingTable.rowsBackground" :  _c_,
  
      "list.activeSelectionBackground" :  _c_,
      "list.activeSelectionForeground" : _a_,
      "list.activeSelectionIconForeground" : `${hex(color.success.muted)}`,
      "list.deemphasizedForeground" : `${hex(color.scale.yellow[0])}`,
      "list.dropBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "list.errorForeground" : `${hex(color.danger.muted)}${_x_[4]}`,
      "list.filterMatchBackground" : `${hex(color.success.muted)}${_x_[9]}`,
      "list.filterMatchBorder" : `${hex(color.success.muted)}`,
      "list.focusAndSelectionOutline" : `${hex(color.success.muted)}${_x_[5]}`,
      "list.focusBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "list.focusForeground" : _a_,
      "list.focusHighlightForeground" : `${hex(color.success.muted)}${_x_[5]}`,
      "list.focusOutline" : `${hex(color.success.muted)}${_x_[5]}`,
      "list.highlightForeground" : _a_,
      "list.hoverBackground" : `${hex(color.success.muted)}${_x_[8]}`,
      "list.hoverForeground" : _a_,
      "list.inactiveFocusBackground" : `${hex(color.success.muted)}${_x_[9]}`,
      "list.inactiveFocusOutline" : `${hex(color.success.muted)}${_x_[9]}`,
      "list.inactiveSelectionBackground" : `${hex(color.success.muted)}${_x_[3]}`,
      "list.inactiveSelectionForeground" : _a_,
      "list.inactiveSelectionIconForeground" : `${hex(color.success.muted)}`,
      "list.invalidItemForeground" : `${hex(color.danger.muted)}${_x_[4]}`,
      "list.warningForeground" : `${hex(color.severe.muted)}`,
      "listFilterWidget.background" : `${hex(color.scale.blue[0])}`,
      "listFilterWidget.noMatchesOutline" : _l_,
      "listFilterWidget.outline" : `${hex(color.scale.blue[0])}${_x_[5]}`,
      "listFilterWidget.shadow" :  _c_,
  
      "menu.background" : _b_,
      "menu.border" :  _c_,
      "menu.foreground" : _a_,
      "menu.selectionBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "menu.selectionBorder" : `${hex(color.success.muted)}${_x_[5]}`,
      "menu.selectionForeground" : _a_,
      "menu.separatorBackground" :  _c_,
      
      "menubar.selectionBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "menubar.selectionBorder" : `${hex(color.success.muted)}`,
      "menubar.selectionForeground" : _a_,
  
      "merge.border" :  _c_,
      "merge.commonContentBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "merge.commonHeaderBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "merge.currentContentBackground" : `${hex(color.danger.muted)}${_x_[6]}`,
      "merge.currentHeaderBackground" : `${hex(color.danger.muted)}${_x_[8]}`,
      "merge.incomingContentBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "merge.incomingHeaderBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "mergeEditor.change.background" : _b_,
      "mergeEditor.change.word.background" : _b_,
      "mergeEditor.conflict.handled.minimapOverViewRuler" : `${hex(color.success.muted)}${_x_[5]}`,
      "mergeEditor.conflict.handledFocused.border" :  _c_,
      "mergeEditor.conflict.handledUnfocused.border" : `${hex(color.success.muted)}${_x_[5]}`,
      "mergeEditor.conflict.unhandled.minimapOverViewRuler" : `${hex(color.scale.blue[0])}`,
      "mergeEditor.conflict.unhandledFocused.border" : `${hex(color.scale.yellow[0])}${_x_[5]}`,
      "mergeEditor.conflict.unhandledUnfocused.border" :  _c_,
      "mergeEditor.conflictingLines.background" : `${hex(color.danger.muted)}${_x_[3]}`,
  
      "minimap.background" :  _c_,
      "minimap.errorHighlight" : `${hex(color.danger.muted)}`,
      "minimap.findMatchHighlight" : `${hex(color.success.muted)}${_x_[5]}`,
      "minimap.foregroundOpacity" : _k_,
      "minimap.selectionHighlight" : _d_,
      "minimap.selectionOccurrenceHighlight" : `${hex(color.success.muted)}${_x_[8]}`,
      "minimap.warningHighlight" : `${hex(color.danger.muted)}`,
      "minimapGutter.addedBackground" : `${hex(color.scale.blue[0])}${_x_[7]}`,
      "minimapGutter.deletedBackground" : `${hex(color.danger.muted)}`,
      "minimapGutter.modifiedBackground" : `${hex(color.scale.blue[0])}`,
      "minimapSlider.activeBackground" : _f_,
      "minimapSlider.background" : `${hex(color.success.muted)}${_x_[7]}`,
      "minimapSlider.hoverBackground" : `${hex(color.success.muted)}${_x_[5]}`,
  
      "notificationCenter.border" :  _c_,
      "notificationCenterHeader.background" : _b_,
      "notificationCenterHeader.foreground" : _a_,
  
      "notificationLink.foreground" : `${hex(color.scale.blue[0])}`,
  
      "notificationToast.border" :  _c_,
  
      "notifications.background" : _b_,
      "notifications.border" :  _c_,
      "notifications.foreground" : _d_,
      "notificationsErrorIcon.foreground" : `${hex(color.danger.muted)}${_x_[5]}`,
      "notificationsInfoIcon.foreground" : `${hex(color.scale.blue[0])}`,
      "notificationsWarningIcon.foreground" : `${hex(color.scale.blue[0])}`,
  
      "panel.background" : _b_,
      "panel.border" :  _c_,
      "panel.dropBorder" : _a_,
      "panelInput.border" : `${hex(color.scale.blue[0])}`,
      "panelSection.border" : `${hex(color.danger.muted)}`,
      "panelSection.dropBackground" :  _b_,
      "panelSectionHeader.background" : _b_,
      "panelSectionHeader.border" :  _c_,
      "panelSectionHeader.foreground" : _a_,
      "panelTitle.activeBorder" : `${hex(color.success.muted)}${_x_[5]}`,
      "panelTitle.activeForeground" : _a_,
      "panelTitle.inactiveForeground" : _d_,
  
      "peekView.border" : `${hex(color.scale.yellow[0])}${_x_[7]}`,
      "peekViewEditor.background" : _b_,
      "peekViewEditor.matchHighlightBackground" :  `${hex(color.success.muted)}${_x_[4]}`,
      "peekViewEditor.matchHighlightBorder" :  `${hex(color.success.muted)}${_x_[4]}`,
      "peekViewEditorGutter.background" : _b_,
      "peekViewResult.background" : _b_,
      "peekViewResult.fileForeground" : _d_,
      "peekViewResult.lineForeground" : _a_,
      "peekViewResult.matchHighlightBackground" :  `${hex(color.success.muted)}${_x_[4]}`,
      "peekViewResult.selectionBackground" :  `${hex(color.success.muted)}${_x_[4]}`,
      "peekViewResult.selectionForeground" : `${hex(color.success.muted)}`,
      "peekViewTitle.background" : `${hex(color.success.muted)}${_x_[5]}`,
      "peekViewTitleDescription.foreground" : `${hex(color.danger.muted)}`,
      "peekViewTitleLabel.foreground" : `${hex(color.success.muted)}${_x_[5]}`,
  
      "pickerGroup.border" : `${hex(color.success.muted)}${_x_[5]}`,
      "pickerGroup.foreground" : _a_,
  
      "ports.iconRunningProcessForeground" : `${hex(color.danger.muted)}`,
  
      "problemsErrorIcon.foreground" :  `${hex(color.success.muted)}${_x_[4]}`,
  
      "problemsInfoIcon.foreground" : `${hex(color.scale.blue[0])}${_x_[5]}`,
  
      "problemsWarningIcon.foreground" : `${hex(color.severe.muted)}${_x_[5]}`,
  
      "progressBar.background" : `${hex(color.success.muted)}`,
  
      "quickInput.background" : _b_,
      "quickInput.foreground" : _a_,
      "quickInputList.focusBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "quickInputList.focusForeground" : _a_,
      "quickInputList.focusIconForeground" : `${hex(color.success.muted)}${_x_[5]}`,
      "quickInputTitle.background" : _d_,
  
      "sash.hoverBorder" : `${hex(color.success.muted)}${_x_[5]}`,
  
      "scm.providerBorder" :  _c_,
  
      "scrollbar.shadow" :  _c_,
  
      "scrollbarSlider.activeBackground" :  _c_,
      "scrollbarSlider.background" : `${hex(color.success.muted)}${_x_[5]}`,
      "scrollbarSlider.hoverBackground" : _d_,
  
      "searchEditor.findMatchBackground" : _c_,
      "searchEditor.findMatchBorder" : `${hex(color.success.muted)}`,
      "searchEditor.textInputBorder" :  _c_,
  
      "selection.background" : `${hex(color.success.muted)}${_x_[5]}`,
  
      "sideBar.background" : _b_,
      "sideBar.border" :  _c_,
      "sideBar.dropBackground" : _m_,
      "sideBar.foreground" : _k_,
      "sideBarSectionHeader.background" :  _c_,
      "sideBarSectionHeader.border" :  _c_,
      "sideBarSectionHeader.foreground" : _d_,
      "sideBarTitle.foreground" : _d_,
  
      "sideBySideEditor.horizontalBorder" : `${hex(color.success.muted)}`,
      "sideBySideEditor.verticalBorder" : `${hex(color.success.muted)}`,
  
      "statusBar.background" :  _c_,
      "statusBar.border" :  _c_,
      "statusBar.debuggingBackground" : `${hex(color.danger.muted)}${_x_[6]}`,
      "statusBar.debuggingBorder" : `${hex(color.done.muted )}`,
      "statusBar.debuggingForeground" : _a_,
      "statusBar.focusBorder" :  _c_,
      "statusBar.foreground" : _f_,
      "statusBar.noFolderBackground" : `${hex(color.severe.muted)}${_x_[5]}`,
      "statusBar.noFolderBorder" : `${hex(color.severe.muted)}${_x_[5]}`,
      "statusBar.noFolderForeground" : _a_,
      "statusBarItem.activeBackground" : _b_,
      "statusBarItem.compactHoverBackground" : _b_,
      "statusBarItem.errorBackground" : `${hex(color.danger.muted)}${_x_[5]}`,
      "statusBarItem.errorForeground" : `${hex(color.danger.muted)}${_x_[5]}`,
      "statusBarItem.focusBorder" :  _c_,
      "statusBarItem.hoverBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "statusBarItem.prominentBackground" : _b_,
      "statusBarItem.prominentForeground" : `${hex(color.success.muted)}`,
      "statusBarItem.remoteBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "statusBarItem.remoteForeground" : _a_,
      "statusBarItem.settingsProfilesBackground" : _b_,
      "statusBarItem.settingsProfilesForeground" : _a_,
      "statusBarItem.warningBackground" : `${hex(color.scale.blue[0])}${_x_[5]}`,
      "statusBarItem.warningForeground" : `${hex(color.scale.blue[0])}${_x_[5]}`,
  
      "symbolIcon.arrayForeground" : `${hex(color.scale.blue[0])}`,
      "symbolIcon.booleanForeground":`${hex(color.done.muted)}`,
      "symbolIcon.classForeground" : `${hex(color.success.muted)}`,
      "symbolIcon.colorForeground" : `${hex(color.success.muted)}`,
      "symbolIcon.constantForeground" : "#ffc803",
      "symbolIcon.constructorForeground" : "#02fffb",
      "symbolIcon.enumeratorForeground" : "#48bc6f",
      "symbolIcon.enumeratorMemberForeground" : `${hex(color.success.muted)}`,
      "symbolIcon.eventForeground" : "#ff00d9",
      "symbolIcon.fieldForeground" : `${hex(color.danger.muted)}`,
      "symbolIcon.fileForeground" : "#0d00ff",
      "symbolIcon.folderForeground" : `${hex(color.success.muted)}${_x_[5]}`,
      "symbolIcon.functionForeground" : "#a403e4",
      "symbolIcon.interfaceForeground" : "#fc0050",
      "symbolIcon.keyForeground" : "#00fc48",
      "symbolIcon.keywordForeground" : "#ffd501",
      "symbolIcon.methodForeground" : "#ff00ae",
      "symbolIcon.moduleForeground" : "#03922e",
      "symbolIcon.namespaceForeground" : "#f6f202",
      "symbolIcon.nullForeground" : "#323232",
      "symbolIcon.numberForeground" : "#f89604",
      "symbolIcon.objectForeground" : "#99ff00",
      "symbolIcon.operatorForeground" : "#5555e8",
      "symbolIcon.packageForeground" : "#dc00a9",
      "symbolIcon.propertyForeground" : _a_,
      "symbolIcon.referenceForeground" : "#03f7ff",
      "symbolIcon.snippetForeground" : "#a4a4a7",
      "symbolIcon.stringForeground" : "#b0b0d7",
      "symbolIcon.structForeground" : "#1f1f49",
      "symbolIcon.textForeground" : "#8ead02",
      "symbolIcon.typeParameterForeground" : "#6cc30f",
      "symbolIcon.unitForeground" : "#1cea7f",
      "symbolIcon.variableForeground" : "#fcbb06",
  
      "tab.activeBackground" : _b_,
      "tab.activeBorder" : `${hex(color.success.muted)}${_x_[5]}`,
      "tab.activeBorderTop" : `${hex(color.success.muted)}${_x_[5]}`,
      "tab.activeForeground" : _d_,
      "tab.activeModifiedBorder" : `${hex(color.success.muted)}${_x_[5]}`,
      "tab.border" :  _c_,
      "tab.hoverBackground" :  _c_,
      "tab.hoverBorder" : `${hex(color.success.muted)}${_x_[5]}`,
      "tab.hoverForeground" : _a_,
      "tab.inactiveBackground" : _b_,
      "tab.inactiveForeground" : _k_,
      "tab.inactiveModifiedBorder" : `${hex(color.success.muted)}${_x_[5]}`,
      "tab.lastPinnedBorder" :  _c_,
      "tab.unfocusedActiveBackground" : _b_,
      "tab.unfocusedActiveBorder" : `${hex(color.success.muted)}${_x_[5]}`,
      "tab.unfocusedActiveBorderTop" : `${hex(color.success.muted)}${_x_[5]}`,
      "tab.unfocusedActiveForeground" : `${hex(color.success.muted)}${_x_[5]}`,
      "tab.unfocusedActiveModifiedBorder" : `${hex(color.danger.muted)}`,
      "tab.unfocusedHoverBackground" :  _c_,
      "tab.unfocusedHoverBorder" : `${hex(color.success.muted)}${_x_[5]}`,
      "tab.unfocusedHoverForeground" : _a_,
      "tab.unfocusedInactiveBackground" : _b_,
      "tab.unfocusedInactiveForeground" : _k_,
      "tab.unfocusedInactiveModifiedBorder" : `${hex(color.danger.muted)}`,
  
      "terminal.foreground" : hex(color.fg.muted),
      'terminal.ansiBlack' : hex(color.ansi.black),
      'terminal.ansiRed' : hex(color.ansi.red),
      'terminal.ansiGreen' : hex(color.ansi.green),
      'terminal.ansiYellow' : hex(color.ansi.yellow),
      'terminal.ansiBlue' : hex(color.ansi.blue),
      'terminal.ansiMagenta' : hex(color.ansi.magenta),
      'terminal.ansiCyan' : hex(color.ansi.cyan),
      'terminal.ansiWhite' : hex(color.ansi.white),
      'terminal.ansiBrightBlack' : hex(color.ansi.blackBright),
      'terminal.ansiBrightRed' : hex(color.ansi.redBright),
      'terminal.ansiBrightGreen' : hex(color.ansi.greenBright),
      'terminal.ansiBrightYellow' : hex(color.ansi.yellowBright),
      'terminal.ansiBrightBlue' : hex(color.ansi.blueBright),
      'terminal.ansiBrightMagenta' : hex(color.ansi.magentaBright),
      'terminal.ansiBrightCyan' : hex(color.ansi.cyanBright),
      'terminal.ansiBrightWhite' : hex(color.ansi.whiteBright),


      "terminal.background" : _b_,
      "terminal.border" :  _c_,
      "terminal.dropBackground" : `${hex(color.scale.yellow[0])}${_x_[5]}`,
      "terminal.findMatchBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "terminal.findMatchBorder" : `${hex(color.success.muted)}`,
      "terminal.findMatchHighlightBackground" : `${hex(color.scale.yellow[0])}${_x_[3]}`,
      "terminal.findMatchHighlightBorder" :  `${hex(color.scale.yellow[0])}${_x_[3]}`,
      "terminal.inactiveSelectionBackground" :  `${hex(color.scale.yellow[0])}${_x_[3]}`,
      "terminal.selectionBackground" : `${hex(color.success.muted)}${_x_[5]}`,
      "terminal.selectionForeground" :  _n_,
      "terminal.tab.activeBorder" : `${hex(color.success.muted)}`,
      "terminalCommandDecoration.defaultBackground" : `${hex(color.success.muted)}`,
      "terminalCommandDecoration.errorBackground" : `${hex(color.danger.muted)}`,
      "terminalCommandDecoration.successBackground" : _b_,
      "terminalCursor.background" : `${hex(color.danger.muted)}`,
      "terminalCursor.foreground" : _a_,
      "terminalOverviewRuler.cursorForeground" : `${hex(color.success.muted)}`,
      "terminalOverviewRuler.findMatchForeground" : `${hex(color.success.muted)}`,
  
      "testing.iconErrored" : `${hex(color.danger.muted)}`,
      "testing.iconFailed" : `${hex(color.danger.muted)}`,
      "testing.iconPassed" : `${hex(color.success.muted)}`,
      "testing.iconQueued" : `${hex(color.scale.yellow[0])}`,
      "testing.iconSkipped":`${hex(color.severe.muted)}`,
      "testing.iconUnset" : `${hex(color.severe.muted)}`,
      "testing.message.error.decorationForeground" : `${hex(color.danger.muted)}`,
      "testing.message.error.lineBackground" : `${hex(color.danger.muted)}${_x_[5]}`,
      "testing.message.info.decorationForeground" : `${hex(color.scale.blue[0])}${_x_[5]}`,
      "testing.message.info.lineBackground" : `${hex(color.scale.blue[0])}`,
      "testing.peekBorder" : _b_,
      "testing.peekHeaderBackground" : `${hex(color.danger.muted)}`,
      "testing.runAction" : `${hex(color.scale.blue[0])}`,
  
      "textBlockQuote.background" : `${hex(color.success.muted)}`,
      "textBlockQuote.border" :  _o_,
  
      "textCodeBlock.background" : _o_,
  
      "textLink.activeForeground" : `${hex(color.scale.blue[0])}`,
      "textLink.foreground" : `${hex(color.scale.blue[0])}`,
  
      "textPreformat.foreground" : _a_,
  
      "textSeparator.foreground" : _a_,
  
      "titleBar.activeBackground" : _b_,
      "titleBar.activeForeground":_f_,
      "titleBar.border" : `${hex(color.scale.blue[0])}${_x_[5]}`,
      "titleBar.inactiveBackground" : _b_,
      "titleBar.inactiveForeground" : _k_,
  
      "toolbar.activeBackground" :  _p_,
      "toolbar.hoverBackground" : _b_,
      "toolbar.hoverOutline" :  _c_,
  
      "tree.indentGuidesStroke" : `${hex(color.success.muted)}${_x_[5]}`,
      "tree.tableColumnsBorder" :  _c_,
      "tree.tableOddRowsBackground" :  _c_,
  
      "walkThrough.embeddedEditorBackground" :  _c_,
  
      "welcomePage.background" : _b_,
      "welcomePage.progress.background" :  _c_,
      "welcomePage.progress.foreground" : `${hex(color.success.muted)}`,
      "welcomePage.tileBackground" :  _c_,
      "welcomePage.tileHoverBackground" : _b_,
      "welcomePage.tileShadow" :  _c_,
      
      "widget.shadow" :  _c_,
      "window.activeBorder" : _a_,
      "window.inactiveBorder" : _a_,
      //   "debugConsole.errorForeground" : `${hex(color.danger.muted)}`,
      //   "debugConsole.infoForeground" : `${hex(color.scale.blue[0])}`,
      // "debugConsole.sourceForeground" : _d_,
      // "debugConsole.warningForeground" : `${hex(color.danger.muted)}`,
      // "debugConsoleInputIcon.foreground" : _d_, 
      // "debugIcon.breakpointCurrentStackframeForeground" : `${hex(color.scale.yellow[1])}`,
      //   "debugIcon.breakpointDisabledForeground" : "#848484",
      //"debugIcon.breakpointForeground" : "#e51400",
      //"debugIcon.breakpointStackframeForeground" : "#89d185",
      //"debugIcon.breakpointUnverifiedForeground" : "#848484",
      //"debugIcon.continueForeground" : "#75beff",
      //"debugIcon.disconnectForeground" : "#f48771",
      //"debugIcon.pauseForeground" : "#75beff",
      //"debugIcon.restartForeground" : "#89d185",
      //"debugIcon.startForeground" : "#89d185",
      //"debugIcon.stepBackForeground" : "#75beff",
      //"debugIcon.stepIntoForeground" : "#75beff",
      //"debugIcon.stepOutForeground" : "#75beff",
      //"debugIcon.stepOverForeground" : "#75beff",
      //"debugIcon.stopForeground" : "#f48771",
      //"editorActiveLineNumber.foreground" : "#c6c6c6",
      //"interactive.activeCodeBorder" : `${hex(color.scale.yellow[0])}${_x_[7]}`,
      //"interactive.inactiveCodeBorder" : `${hex(color.success.muted)}${_x_[3]}`,
      //"issues.closed" : "#cb2431",
      //"issues.newIssueDecoration" : "#ffffff48",
      //"issues.open" : "#22863a",
      //"keybindingLabel.background" : "#8080802b",
      //"notebook.cellBorderColor" : `${hex(color.success.muted)}${_x_[3]}`,
      //"notebook.cellEditorBackground" : _b_,
      //"notebook.cellInsertionIndicator" :  _c_,
      //"notebook.cellStatusBarItemHoverBackground" : "#ffffff26",
      //"notebook.cellToolbarSeparator" : "#80808059",
      //"notebook.editorBackground" : `${hex(color.success.muted)}`,
      //"notebook.focusedCellBorder" :  _c_,
      //"notebook.focusedEditorBorder" :  _c_,
      //"notebook.inactiveFocusedCellBorder" : `${hex(color.success.muted)}${_x_[3]}`,
      //"notebook.selectedCellBackground" : `${hex(color.success.muted)}${_x_[3]}`,
      //"notebook.selectedCellBorder" : `${hex(color.success.muted)}${_x_[3]}`,
      //"notebook.symbolHighlightBackground" : "#ffffff0b",
      //"notebookScrollbarSlider.activeBackground" :  _c_,
      //"notebookScrollbarSlider.background" : `${hex(color.success.muted)}${_x_[5]}`,
      //"notebookScrollbarSlider.hoverBackground" : _d_,
      //"notebookStatusErrorIcon.foreground" : `${hex(color.danger.muted)}`,
      //"notebookStatusRunningIcon.foreground" : _d_,
      //"notebookStatusSuccessIcon.foreground" : "#89d185",
      //"pullRequests.notification" : `${hex(color.scale.blue[0])}`,
      //"settings.checkboxBackground" :  _c_,
      //"settings.checkboxBorder" : _d_,
      //"settings.checkboxForeground" : _d_,
      //"settings.dropdownBackground" :  _c_,
      //"settings.dropdownBorder" :  _c_,
      //"settings.dropdownForeground" : _a_,
      //"settings.dropdownListBorder" :  _c_,
      //"settings.focusedRowBackground" : `${hex(color.success.muted)}${_x_[9]}`,
      //"settings.focusedRowBorder" : "#ffffff1f",
      //"settings.headerBorder" :  _c_,
      //"settings.headerForeground" : "#e7e7e7",
      //"settings.modifiedItemIndicator" : "#0c7d9d",
      //"settings.numberInputBackground" : _b_,
      //"settings.numberInputBorder" :  _c_,
      //"settings.numberInputForeground":_j_,
      //"settings.rowHoverBackground" : `${hex(color.success.muted)}${_x_[9]}`,
      //"settings.sashBorder" :  _c_,
      //"settings.textInputBackground" : _b_,
      //"settings.textInputBorder" :  _c_,
      //"settings.textInputForeground":_j_,
      //"statusBarItem.prominentHoverBackground" : "#0000004d",
      //"notebook.cellHoverBackground" : null,
      //"notebook.focusedCellBackground" : null,
      //"notebook.inactiveSelectedCellBorder" : null,
      //"notebook.outputContainerBackgroundColor" : null,
      //"notebook.outputContainerBorderColor" : null,
      //"quickInput.list.focusBackground" : null


    },
    semanticHighlighting : true,
    "tokenColors" : [
      {
        "scope" : [
          "comment",
          "punctuation.definition.comment",
          "string.comment"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.muted)}`
        }
      },
      {
        "scope" : [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        "settings" : {
          "foreground" : `${hex(color.severe.emphasis)}`
        }
      },
      {
        "scope" : [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.default)}`
        }
      },
      {
        "scope" : "entity.name.function",
        "settings" : {
          "foreground" : `${hex(color.done.fg)}`
        }
      },
      {
        "scope" : [
          "entity.name.tag",
          "support.class.component"
        ],
        "settings" : {
          "foreground" : `${hex(color.open.fg)}`
        }
      },
      {
        "scope" : "keyword",
        "settings" : {
          "foreground" :  `${hex(color.closed.emphasis)}`
        }
      },
      {
        "scope" : [
          "storage",
          "storage.type"
        ],
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`
        }
      },
      {
        "scope" : [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java"
        ],
        "settings" : {
          "foreground" : `${hex(color.severe.emphasis)}`
        }
      },
      {
        "scope" : [
          "string",
          "string punctuation.section.embedded source"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`
        }
      },
      {
        "scope" : "support",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : "meta.property-name",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : "variable",
        "settings" : {
          "foreground" : `${hex(color.severe.emphasis)}`
        }
      },
      {
        "scope" : "variable.other",
        "settings" : {
          "foreground" : `${hex(color.severe.emphasis)}`
        }
      },
      {
        "scope" : "invalid.broken",
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`,
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "invalid.deprecated",
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`,
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "invalid.illegal",
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`,
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "invalid.unimplemented",
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`,
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "carriage-return",
        "settings" : {
          "foreground" : `${hex(color.closed.fg)}`,
          "background" : `${hex(color.closed.emphasis)}`,
          "fontStyle" : "italic underline"
        }
      },
      {
        "scope" : "message.error",
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`
        }
      },
      {
        "scope" : "string variable",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : [
          "source.regexp",
          "string.regexp"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`
        }
      },
      {
        "scope" : [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`
        }
      },
      {
        "scope" : "string.regexp constant.character.escape",
        "settings" : {
          "foreground" : `${hex(color.open.emphasis)}`,
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "support.constant",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : "support.variable",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : "support.type.property-name.json",
        "settings" : {
          "foreground" : `${hex(color.open.emphasis)}`
        }
      },
      {
        "scope" : "meta.module-reference",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : "punctuation.definition.list.begin.markdown",
        "settings" : {
          "foreground" : `${hex(color.severe.emphasis)}`
        }
      },
      {
        "scope" : [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`,
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "markup.quote",
        "settings" : {
          "foreground" : `${hex(color.open.emphasis)}`
        }
      },
      {
        "scope" : "markup.italic",
        "settings" : {
          "foreground" : `${hex(color.severe.emphasis)}`,
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "markup.bold",
        "settings" : {
          "foreground" : `${hex(color.severe.emphasis)}`,
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : [
          "markup.underline"
        ],
        "settings" : {
          "fontStyle" : "underline"
        }
      },
      {
        "scope" : [
          "markup.strikethrough"
        ],
        "settings" : {
          "fontStyle" : "strikethrough"
        }
      },
      {
        "scope" : "markup.inline.raw",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`,
          "background" : `${hex(color.closed.emphasis)}`
        }
      },
      {
        "scope" : [
          "punctuation.section.embedded"
        ],
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`
        }
      },
      {
        "scope" : [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        "settings" : {
          "foreground" : `${hex(color.open.emphasis)}`,
          "background" : `${hex(color.open.fg)}`
        }
      },
      {
        "scope" : [
          "markup.changed",
          "punctuation.definition.changed"
        ],
        "settings" : {
          "foreground" : `${hex(color.severe.emphasis)}`,
          "background" : `${hex(color.severe.fg)}`
        }
      },
      {
        "scope" : [
          "markup.ignored",
          "markup.untracked"
        ],
        "settings" : {
          "foreground" : `${hex(color.neutral.emphasis)}`,
          "background" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : "meta.diff.range",
        "settings" : {
          "foreground" : `${hex(color.done.fg)}`,
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "meta.diff.header",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : "meta.separator",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`,
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "meta.output",
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote"
        ],
        "settings" : {
          "foreground" : `${hex(color.neutral.emphasisPlus)}`
        }
      },
      {
        "scope" : "brackethighlighter.unmatched",
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`
        }
      },
      {
        "scope" : [
          "constant.other.reference.link",
          "string.other.link"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`,
          "fontStyle" : "underline"
        }
      },
      {
        "scope" : [
          "constant.language",
          "constant.numeric"
        ],
        "settings" : {
          "foreground" : `${hex(color.closed.emphasis)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "support.type.property-name"
        ],
        "settings" : {
          "foreground" : `${hex(color.done.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string"
        ],
        "settings" : {
          "foreground" : `${hex(color.done.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string.regexp",
          "constant.character.escape"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.default)}`
        }
      },
      {
        "scope" : [
          "string"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.default)}`
        }
      },
      {
        "scope" : [
          "keyword"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : [
          "support.type.property-name"
        ],
        "settings" : {
          "foreground" : `${hex(color.success.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "entity.name.function"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php",
          "punctuation.definition.parameters.end"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "entity.name.type"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.yellow[0])}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "meta.embedded"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`
        }
      },
      {
        "scope" : [
          "support.function"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.blue[0])}`
        }
      },
      {
        "scope" : [
          "storage.type"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`
        }
      },
      {
        "scope" : [
          "storage.modifier"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.pink[6])}`
        }
      },
      {
        "scope" : [
          "variable"
        ],
        "settings" : {
          "foreground" : `${hex(color.success.fg)}`
        }
      },
      {
        "scope" : [
          "variable.other.readwrite.js"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`
        }
      },
      {
        "scope" : [
          "variable",
          "keyword.control"
        ],
        "settings" : {
          "foreground" : `${hex(color.done.fg)}`
        }
      },
      {
        "scope" : [
          "variable.language"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.muted)}`
        }
      },
      {
        "scope" : [
          "variable"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.emphasis)}`
        }
      },
      {
        "scope" : [
          "keyword.operator"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.blue[3])}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "keyword.operator"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.default)}`
        }
      },
      {
        "scope" : [
          "support.class"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.yellow[0])}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "keyword"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "comment"
        ],
        "settings" : {
          "foreground" : `${hex(color.neutral.emphasis)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.separator.key-value.html"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.tag"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.end.json.comments",
          "punctuation.definition.string.begin.json.comments",
          "punctuation.definition.string.end.js",
          "punctuation.definition.string.begin.js"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.support.type.property-name.begin.json.comments",
          "punctuation.support.type.property-name.end.json.comments"
        ],
        "settings" : {
          "foreground" : `${hex(color.success.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.html",
          "punctuation.definition.string.end.html"
        ],
        "settings" : {
          "foreground" : `${hex(color.success.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "source.sql.embedded.php"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.sql",
          "punctuation.definition.string.end.sql",
          "punctuation.separator.dictionary.key-value.json.comments"
        ],
        "settings" : {
          "foreground" : `${hex(color.success.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "keyword.other.DML.sql",
          "source.sql.embedded.php",
          "string.quoted.single.sql.php",
          "string.quoted.single.php"
        ],
        "settings" : {
          "foreground" : `${hex(color.severe.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string.quoted.other.backtick.sql"
        ],
        "settings" : {
          "foreground" : `${hex(color.severe.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "variable.other.property.js",
          "entity.name.function.member"
        ],
        "settings" : {
          "foreground" : `${hex(color.severe.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.template.begin.js",
          "punctuation.definition.string.template.end.js"
        ],
        "settings" : {
          "foreground" : `${hex(color.severe.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string.quoted.double.html",
          "string.quoted.single.js",
          "string.quoted.double.js",
          "string.template.js"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.muted)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "text.html.php"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.muted)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "variable.other.constant",
          "variable.other.constant.object.js",
          "punctuation.definition.template-expression.begin.js"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.yellow[0])}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.separator.comma.js",
          "punctuation.separator.dictionary.pair.json.comments"
        ],
        "settings" : {
          "foreground" : `${hex(color.success.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.php",
          "punctuation.definition.string.end.php"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`,
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.accessor.js"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.default)}`
        }
      },
      {
        "scope" : [
          "punctuation.accessor.js"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.default)}`
        }
      },
      {
        "scope" : [
          "support.type.property-name.json"
        ],
        "settings" : {
          "foreground" : `${hex(color.done.fg)}`
        }
      },
      {
        "scope" : [
          "variable.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.done.fg)}`
        }
      },
      {
        "scope" : [
          "variable.argument.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.yellow[0])}`
        }
      },
      {
        "scope" : [
          "constant.other.color.rgb-value",
          "support.constant.property-value"
        ],
        "settings" : {
          "foreground" : `${hex(color.severe.fg)}`
        }
      },
      {
        "scope" : [
          "punctuation.separator.list.comma.css",
          "punctuation.separator.key-value.css",
          "punctuation.terminator.rule.css",
          "meta.function.calc.css",
          "keyword.operator.arithmetic.css",
          "punctuation.definition.entity.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.success.fg)}`
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.css",
          "punctuation.definition.string.end.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`
        }
      },
      {
        "scope" : [
          "string.quoted.single.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.fg.muted)}`
        }
      },
      {
        "scope" : [
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
        "settings" : {
          "foreground" : `${hex(color.scale.yellow[0])}`
        }
      },
      {
        "scope" : [
          "constant.numeric.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.severe.fg)}`
        }
      },
      {
        "scope" : [
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`
        }
      },
      {
        "scope" : [
          "entity.name.tag.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.yellow[0])}`
        }
      },
      {
        "scope" : [
          "support.type.property-name.css",
          "entity.other.keyframe-offset.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`
        }
      },
      {
        "scope" : [
          "support.constant.vendored.property-value.css",
          "support.constant.font-name.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`
        }
      },
      {
        "scope" : [
          "entity.other.attribute-name.pseudo-element.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`
        }
      },
      {
        "scope" : [
          "support.type.property-name.media.css",
          "support.constant.media.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.done.fg)}`
        }
      },
      {
        "scope" : [
          "keyword.operator.logical.only.media.css",
          "keyword.operator.logical.and.media.css",
          "string.quoted.double.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.success.fg)}`
        }
      },
      {
        "scope" : [
          "entity.other.attribute-name.id.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.blue[0])}`
        }
      },
      {
        "scope" : [
          "support.function.transform.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.scale.blue[0])}`
        }
      },
      {
        "scope" : [
          "entity.other.keyframe-offset.percentage.css"
        ],
        "settings" : {
          "foreground" : `${hex(color.sponsors.fg)}`
        }
      },
      {
        "scope" : "token.info-token",
        "settings" : {
          "foreground" : `${hex(color.accent.fg)}`
        }
      },
      {
        "scope" : "token.warn-token",
        "settings" : {
          "foreground" : `${hex(color.attention.fg)}`
        }
      },
      {
        "scope" : "token.error-token",
        "settings" : {
          "foreground" : `${hex(color.danger.emphasis)}`
        }
      },
      {
        "scope" : "token.debug-token",
        "settings" : {
          "foreground" : `${hex(color.done.fg)}`
        }
      }
    ]
  };
}

module.exports = _gT;
