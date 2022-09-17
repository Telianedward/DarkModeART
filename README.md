# DarkModeART

## направляющие для пары

![Запись экрана 2022-09-17 в 15 07 22](https://user-images.githubusercontent.com/63866043/190856188-5be6c7f0-b4ac-43c5-a00c-75a275637959.gif)

для включения направляющих в Visual Studio Code добавте эти строки в свой [settings.json](https://code.visualstudio.com/docs/getstarted/settings)
```json
  // Определяет, включена ли раскраска пары скобок или нет. Используйте `workbench.colorCustomizations`, чтобы переопределить цвета подсветки скобок.
  "editor.bracketPairColorization.enabled": true,
  // Определяет, имеет ли каждый тип скобок собственный независимый пул цветов..
  "editor.bracketPairColorization.independentColorPoolPerBracketType": false,
```



## направляющие для пары скобок



![Запись экрана 2022-09-17 в 15 11 12](https://user-images.githubusercontent.com/63866043/190856236-961ea600-a6bc-4d17-9829-bcbe346b51e1.gif);


для включения направляющих в Visual Studio Code добавте эти строки в свой [settings.json](https://code.visualstudio.com/docs/getstarted/settings)

```json
/ Определяет, включены ли направляющие пар скобок или нет.
  // - true: Включает направляющие пары скобок.
  // - активно: Включает направляющие пары скобок только для активной пары скобок.
  // - false: Отключает направляющие пары скобок.
  "editor.guides.bracketPairs": "active",
// Определяет, включены ли направляющие пар горизонтальных скобок или нет.
  // - true: Включает горизонтальные направляющие в дополнение к вертикальным направляющим пар кронштейнов.
  // - active: Включает горизонтальные направляющие только для активной пары кронштейнов.
  // - false: Отключает направляющие пары горизонтальных скобок.
  "editor.guides.bracketPairsHorizontal": "active",
  // Управляет тем, должна ли выделяться активная пара квадратных скобок в редакторе.
  "editor.guides.highlightActiveBracketPair": true,
// Определяет, включены ли направляющие пар горизонтальных скобок или нет.
  // - true: Включает горизонтальные направляющие в дополнение к вертикальным направляющим пар кронштейнов.
  // - активно: Включает горизонтальные направляющие только для активной пары кронштейнов.
  // - false: Отключает направляющие пары горизонтальных скобок
```
## пример вида темы в .php 
![gif1](https://user-images.githubusercontent.com/63866043/190834191-4e243bc8-737b-488f-be6a-cafae61d6f57.gif)
## пример вида темы в .css 
![gif2](https://user-images.githubusercontent.com/63866043/190834262-2aeeb5a5-fa08-40db-ab6f-7d82b426ff24.gif)
## пример вида темы в .html
![gif6](https://user-images.githubusercontent.com/63866043/190834606-41597c33-2490-4c4c-aaf9-922de807d2d0.gif)
## пример вида темы в .php( sql | html| php )
![gif3](https://user-images.githubusercontent.com/63866043/190834374-4d7227da-bcfc-43be-93ab-cea99ff194c9.gif)
## пример вида темы в js
![gif4](https://user-images.githubusercontent.com/63866043/190834393-30d86014-f32b-49a3-bffe-bb3520a1c69b.gif)
## пример вида темы в react .ts итд 
![Запись экрана 2022-09-17 в 15 32 13](https://user-images.githubusercontent.com/63866043/190857061-043a9470-6fc5-4f04-8437-f15e548a5ce9.gif)

## Для тех кто любит держать руку на пульсе и делать все сам. 

В Visual Studio Code добавте эти строки в свой [settings.json](https://code.visualstudio.com/docs/getstarted/settings) и делайте как вам нравится) Удачи =)


```json 

  // Controls whether the editor shows CodeLens.
  "diffEditor.codeLens": false,
  // When enabled, the diff editor ignores changes in leading or trailing whitespace.
  "diffEditor.ignoreTrimWhitespace": true,
  // Timeout in milliseconds after which diff computation is cancelled. Use 0 for no timeout.
  "diffEditor.maxComputationTime": 5000,
  // Controls whether the diff editor shows +/- indicators for added/removed changes.
  "diffEditor.renderIndicators": true,
  // When enabled, the diff editor shows arrows in its glyph margin to revert changes.
  "diffEditor.renderMarginRevertIcon": true,
  // Controls whether the diff editor shows the diff side by side or inline.
  "diffEditor.renderSideBySide": true,
  //  - off: Lines will never wrap.
  //  - on: Lines will wrap at the viewport width.
  //  - inherit: Lines will wrap according to the `editor.wordWrap` setting.
  "diffEditor.wordWrap": "inherit",
  // Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`; `) can be a commit character that accepts a suggestion and types that character.
  "editor.acceptSuggestionOnCommitCharacter": true,
  // Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.
  //  - on
  //  - smart: Only accept a suggestion with `Enter` when it makes a textual change.
  //  - off
  "editor.acceptSuggestionOnEnter": "on",
  // Controls whether the editor should run in a mode where it is optimized for screen readers. Setting to on will disable word wrapping.
  //  - auto: The editor will use platform APIs to detect when a Screen Reader is attached.
  //  - on: The editor will be permanently optimized for usage with a Screen Reader. Word wrapping will be disabled.
  //  - off: The editor will never be optimized for usage with a Screen Reader.
  "editor.accessibilitySupport": "auto",
  // Controls whether the editor should automatically close brackets after the user adds an opening bracket.
  //  - always
  //  - languageDefined: Use language configurations to determine when to autoclose brackets.
  //  - beforeWhitespace: Autoclose brackets only when the cursor is to the left of whitespace.
  //  - never
  "editor.autoClosingBrackets": "languageDefined",
  // Controls whether the editor should remove adjacent closing quotes or brackets when deleting.
  //  - always
  //  - auto: Remove adjacent closing quotes or brackets only if they were automatically inserted.
  //  - never
  "editor.autoClosingDelete": "auto",
  // Controls whether the editor should type over closing quotes or brackets.
  //  - always
  //  - auto: Type over closing quotes or brackets only if they were automatically inserted.
  //  - never
  "editor.autoClosingOvertype": "auto",
  // Controls whether the editor should automatically close quotes after the user adds an opening quote.
  //  - always
  //  - languageDefined: Use language configurations to determine when to autoclose quotes.
  //  - beforeWhitespace: Autoclose quotes only when the cursor is to the left of whitespace.
  //  - never
  "editor.autoClosingQuotes": "languageDefined",
  // Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.
  //  - none: The editor will not insert indentation automatically.
  //  - keep: The editor will keep the current line's indentation.
  //  - brackets: The editor will keep the current line's indentation and honor language defined brackets.
  //  - advanced: The editor will keep the current line's indentation, honor language defined brackets and invoke special onEnterRules defined by languages.
  //  - full: The editor will keep the current line's indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages.
  "editor.autoIndent": "full",
  // Controls whether the editor should automatically surround selections when typing quotes or brackets.
  //  - languageDefined: Use language configurations to determine when to automatically surround selections.
  //  - quotes: Surround with quotes but not brackets.
  //  - brackets: Surround with brackets but not quotes.
  //  - never
  "editor.autoSurround": "languageDefined",
  // Controls whether bracket pair colorization is enabled or not. Use `workbench.colorCustomizations` to override the bracket highlight colors.
  "editor.bracketPairColorization.enabled": true,
  // Определяет, имеет ли каждый тип скобок собственный независимый пул цветов..
  "editor.bracketPairColorization.independentColorPoolPerBracketType": false,
  // Code action kinds to be run on save.
  "editor.codeActionsOnSave": {
  
  
  },
  // Controls whether the editor shows CodeLens.
  "editor.codeLens": true,
  // Controls the font family for CodeLens.
  "editor.codeLensFontFamily": "",
  // Controls the font size in pixels for CodeLens. When set to `0`, 90% of `editor.fontSize` is used.
  "editor.codeLensFontSize": 0,
  // Controls whether the editor should render the inline color decorators and color picker.
  "editor.colorDecorators": true,
  // Enable that the selection with the mouse and keys is doing column selection.
  "editor.columnSelection": false,
  // Controls if empty lines should be ignored with toggle, add or remove actions for line comments.
  "editor.comments.ignoreEmptyLines": true,
  // Controls whether a space character is inserted when commenting.
  "editor.comments.insertSpace": true,
  // Controls whether syntax highlighting should be copied into the clipboard.
  "editor.copyWithSyntaxHighlighting": true,
  // Control the cursor animation style.
  "editor.cursorBlinking": "blink",
  // Controls whether the smooth caret animation should be enabled.
  "editor.cursorSmoothCaretAnimation": false,
  // Controls the cursor style.
  "editor.cursorStyle": "line",
  // Controls the minimal number of visible leading and trailing lines surrounding the cursor. Known as 'scrollOff' or 'scrollOffset' in some other editors.
  "editor.cursorSurroundingLines": 0,
  // Controls when `cursorSurroundingLines` should be enforced.
  //  - default: `cursorSurroundingLines` is enforced only when triggered via the keyboard or API.
  //  - all: `cursorSurroundingLines` is enforced always.
  "editor.cursorSurroundingLinesStyle": "default",
  // Controls the width of the cursor when `editor.cursorStyle` is set to `line`.
  "editor.cursorWidth": 0,
  // Enabling this will show the code action menu with group headers, if the custom code action menu is enabled.
  "editor.customCodeActionMenu.showHeaders": true,
  // Defines a default formatter which takes precedence over all other formatter settings. Must be the identifier of an extension contributing a formatter.
  "editor.defaultFormatter": null,
  // Controls whether the Go to Definition mouse gesture always opens the peek widget.
  "editor.definitionLinkOpensInPeek": false,
  // Controls whether `editor.tabSize#` and `#editor.insertSpaces` will be automatically detected when a file is opened based on the file contents.
  "editor.detectIndentation": true,
  // Controls whether the editor should allow moving selections via drag and drop.
  "editor.dragAndDrop": true,
  // Controls whether you can drag and drop a file into a text editor by holding down `shift` (instead of opening the file in an editor).
  "editor.dropIntoEditor.enabled": true,
  // Controls whether copying without a selection copies the current line.
  "editor.emptySelectionClipboard": true,
  // Scrolling speed multiplier when pressing `Alt`.
  "editor.fastScrollSensitivity": 5,
  // Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.
  "editor.find.addExtraSpaceOnTop": true,
  // Controls the condition for turning on Find in Selection automatically.
  //  - never: Never turn on Find in Selection automatically (default).
  //  - always: Always turn on Find in Selection automatically.
  //  - multiline: Turn on Find in Selection automatically when multiple lines of content are selected.
  "editor.find.autoFindInSelection": "never",
  // Controls whether the cursor should jump to find matches while typing.
  "editor.find.cursorMoveOnType": true,
  // Controls whether the Find Widget should read or modify the shared find clipboard on macOS.
  "editor.find.globalFindClipboard": false,
  // Controls whether the search automatically restarts from the beginning (or the end) when no further matches can be found.
  "editor.find.loop": true,
  // Controls whether the search string in the Find Widget is seeded from the editor selection.
  //  - never: Never seed search string from the editor selection.
  //  - always: Always seed search string from the editor selection, including word at cursor position.
  //  - selection: Only seed search string from the editor selection.
  "editor.find.seedSearchStringFromSelection": "always",
  // Controls whether the editor has code folding enabled.
  "editor.folding": true,
  // Controls whether the editor should highlight folded ranges.
  "editor.foldingHighlight": true,
  // Controls whether the editor automatically collapses import ranges.
  "editor.foldingImportsByDefault": false,
  // Controls the strategy for computing folding ranges.
  //  - auto: Use a language-specific folding strategy if available, else the indentation-based one.
  //  - indentation: Use the indentation-based folding strategy.
  "editor.foldingStrategy": "auto",
  // Controls the font family.
  "editor.fontFamily": "Consolas, 'Courier New', monospace",
  // Configures font ligatures or font features. Can be either a boolean to enable/disable ligatures or a string for the value of the CSS 'font-feature-settings' property.
  "editor.fontLigatures": false,
  // Controls the font size in pixels.
  "editor.fontSize": 14,
  // Controls the font weight. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.
  "editor.fontWeight": "normal",
  // Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.
  "editor.formatOnPaste": false,
  // Format a file on save. A formatter must be available, the file must not be saved after delay, and the editor must not be shutting down.
  "editor.formatOnSave": false,
  // Controls if format on save formats the whole file or only modifications. Only applies when `editor.formatOnSave` is enabled.
  //  - file: Format the whole file.
  //  - modifications: Format modifications (requires source control).
  //  - modificationsIfAvailable: Will attempt to format modifications only (requires source control). If source control can't be used, then the whole file will be formatted.
  "editor.formatOnSaveMode": "file",
  // Controls whether the editor should automatically format the line after typing.
  "editor.formatOnType": false,
  // Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.
  "editor.glyphMargin": true,
  // Alternative command id that is being executed when the result of 'Go to Declaration' is the current location.
  "editor.gotoLocation.alternativeDeclarationCommand": "editor.action.goToReferences",
  // Alternative command id that is being executed when the result of 'Go to Definition' is the current location.
  "editor.gotoLocation.alternativeDefinitionCommand": "editor.action.goToReferences",
  // Alternative command id that is being executed when the result of 'Go to Implementation' is the current location.
  "editor.gotoLocation.alternativeImplementationCommand": "",
  // Alternative command id that is being executed when the result of 'Go to Reference' is the current location.
  "editor.gotoLocation.alternativeReferenceCommand": "",
  // Alternative command id that is being executed when the result of 'Go to Type Definition' is the current location.
  "editor.gotoLocation.alternativeTypeDefinitionCommand": "editor.action.goToReferences",
  // Controls the behavior the 'Go to Declaration'-command when multiple target locations exist.
  //  - peek: Show peek view of the results (default)
  //  - gotoAndPeek: Go to the primary result and show a peek view
  //  - goto: Go to the primary result and enable peek-less navigation to others
  "editor.gotoLocation.multipleDeclarations": "peek",
  // Controls the behavior the 'Go to Definition'-command when multiple target locations exist.
  //  - peek: Show peek view of the results (default)
  //  - gotoAndPeek: Go to the primary result and show a peek view
  //  - goto: Go to the primary result and enable peek-less navigation to others
  "editor.gotoLocation.multipleDefinitions": "peek",
  // Controls the behavior the 'Go to Implementations'-command when multiple target locations exist.
  //  - peek: Show peek view of the results (default)
  //  - gotoAndPeek: Go to the primary result and show a peek view
  //  - goto: Go to the primary result and enable peek-less navigation to others
  "editor.gotoLocation.multipleImplementations": "peek",
  // Controls the behavior the 'Go to References'-command when multiple target locations exist.
  //  - peek: Show peek view of the results (default)
  //  - gotoAndPeek: Go to the primary result and show a peek view
  //  - goto: Go to the primary result and enable peek-less navigation to others
  "editor.gotoLocation.multipleReferences": "peek",
  // Controls the behavior the 'Go to Type Definition'-command when multiple target locations exist.
  //  - peek: Show peek view of the results (default)
  //  - gotoAndPeek: Go to the primary result and show a peek view
  //  - goto: Go to the primary result and enable peek-less navigation to others
  "editor.gotoLocation.multipleTypeDefinitions": "peek",
 // Определяет, включены ли направляющие пар скобок или нет.
  // - true: Включает направляющие пары скобок.
  // - активно: Включает направляющие пары скобок только для активной пары скобок.
  // - false: Отключает направляющие пары скобок.
  "editor.guides.bracketPairs": "active",
// Определяет, включены ли направляющие пар горизонтальных скобок или нет.
  // - true: Включает горизонтальные направляющие в дополнение к вертикальным направляющим пар кронштейнов.
  // - active: Включает горизонтальные направляющие только для активной пары кронштейнов.
  // - false: Отключает направляющие пары горизонтальных скобок.
  "editor.guides.bracketPairsHorizontal": "active",
  // Управляет тем, должна ли выделяться активная пара квадратных скобок в редакторе.
  "editor.guides.highlightActiveBracketPair": true,
// Определяет, включены ли направляющие пар горизонтальных скобок или нет.
  // - true: Включает горизонтальные направляющие в дополнение к вертикальным направляющим пар кронштейнов.
  // - активно: Включает горизонтальные направляющие только для активной пары кронштейнов.
  // - false: Отключает направляющие пары горизонтальных скобок
  "editor.guides.highlightActiveIndentation": true,
  // Controls whether the editor should render indent guides.
  "editor.guides.indentation": true,
  // Controls whether the cursor should be hidden in the overview ruler.
  "editor.hideCursorInOverviewRuler": false,
  // Prefer showing hovers above the line, if there's space.
  "editor.hover.above": true,
  // Controls the delay in milliseconds after which the hover is shown.
  "editor.hover.delay": 300,
  // Controls whether the hover is shown.
  "editor.hover.enabled": true,
  // Controls whether the hover should remain visible when mouse is moved over it.
  "editor.hover.sticky": true,
  // Enables the inlay hints in the editor.
  //  - on: Inlay hints are enabled
  //  - onUnlessPressed: Inlay hints are showing by default and hide when holding Ctrl+Alt
  //  - offUnlessPressed: Inlay hints are hidden by default and show when holding Ctrl+Alt
  //  - off: Inlay hints are disabled
  "editor.inlayHints.enabled": "on",
  // Controls font family of inlay hints in the editor. When set to empty, the `editor.fontFamily` is used.
  "editor.inlayHints.fontFamily": "",
  // Controls font size of inlay hints in the editor. As default the `editor.fontSize` is used when the configured value is less than `5` or greater than the editor font size.
  "editor.inlayHints.fontSize": 0,
  // Enables the padding around the inlay hints in the editor.
  "editor.inlayHints.padding": true,
  // Controls whether to automatically show inline suggestions in the editor.
  "editor.inlineSuggest.enabled": true,
  // Insert spaces when pressing `Tab`. This setting is overridden based on the file contents when `editor.detectIndentation` is on.
  "editor.insertSpaces": true,
  // Defines the bracket symbols that increase or decrease the indentation.
  "editor.language.brackets": null,
  // Defines the bracket pairs that are colorized by their nesting level if bracket pair colorization is enabled.
  "editor.language.colorizedBracketPairs": null,
  // Controls the letter spacing in pixels.
  "editor.letterSpacing": 0,
  // Enables the code action lightbulb in the editor.
  "editor.lightbulb.enabled": true,
  // Controls the line height.
  //  - Use 0 to automatically compute the line height from the font size.
  //  - Values between 0 and 8 will be used as a multiplier with the font size.
  //  - Values greater than or equal to 8 will be used as effective values.
  "editor.lineHeight": 0,
  // Controls the display of line numbers.
  //  - off: Line numbers are not rendered.
  //  - on: Line numbers are rendered as absolute number.
  //  - relative: Line numbers are rendered as distance in lines to cursor position.
  //  - interval: Line numbers are rendered every 10 lines.
  "editor.lineNumbers": "on",
  // Controls whether the editor has linked editing enabled. Depending on the language, related symbols, e.g. HTML tags, are updated while editing.
  "editor.linkedEditing": false,
  // Controls whether the editor should detect links and make them clickable.
  "editor.links": true,
  // Highlight matching brackets.
  "editor.matchBrackets": "always",
  // Определяет, скрыта ли мини-карта автоматически.
  "editor.minimap.autohide": false,
  // Controls whether the minimap is shown.
  "editor.minimap.enabled": true,
  // Ограничивает ширину мини-карты, чтобы количество отображаемых столбцов не превышало определенное количество.
  "editor.minimap.maxColumn": 120,
  // Масштаб содержимого, нарисованного на мини-карте: 1, 2 или 3.
  "editor.minimap.scale": 1,
  // Определяет, когда отображается ползунок мини-карты
  "editor.minimap.showSlider": "mouseover",
  // Определяет, с какой стороны будет отображаться мини-карта.
  "editor.minimap.side": "right",
  // Управляет размером миникарты.
  // - proportional: миникарта имеет тот же размер, что и содержимое редактора (и может прокручиваться).
  // - fill: Миникарта будет растягиваться или сжиматься по мере необходимости, чтобы заполнить высоту редактора (без прокрутки).
  // - fill: миникарта будет уменьшаться по мере необходимости, чтобы никогда не быть больше, чем редактор (без прокрутки).
  "editor.minimap.size": "proportional",
  //Множитель, используемый для параметров deltaX и deltaY событий прокрутки колесика мыши.
  "editor.mouseWheelScrollSensitivity": 1,
  // Изменение размера шрифта в редакторе при нажатой клавише CTRL и движении колесика мыши.
  "editor.mouseWheelZoom": false,
  //Модификатор, который будет использоваться для добавления нескольких курсоров с помощью мыши. Жесты мыши «Перейти к определению» и «Открыть ссылку» будут адаптированы таким образом, чтобы не конфликтовать с модификатором мультикурсора.
  // - ctrlCmd: сопоставляется с «Control» в Windows и Linux и с «Command» в macOS.
  // - alt: сопоставляется с «Alt» в Windows и Linux и с «Option» в macOS.
  "editor.multiCursorModifier": "alt",
  // Управляет вставкой, когда количество строк вставляемого текста совпадает с количеством строк курсора.
  // - распространение: каждый курсор вставляет одну строку текста.
  // - полный: каждый курсор вставляет полный текст.
  "editor.multiCursorPaste": "spread",
  // Определяет, должен ли редактор выделять вхождения семантических символов.
  "editor.occurrencesHighlight": true,
  // Controls whether a border should be drawn around the overview ruler.
  "editor.overviewRulerBorder": true,
  // Controls the amount of space between the bottom edge of the editor and the last line.
  "editor.padding.bottom": 0,
  // Controls the amount of space between the top edge of the editor and the first line.
  "editor.padding.top": 0,
  // Controls whether the parameter hints menu cycles or closes when reaching the end of the list.
  "editor.parameterHints.cycle": true,
  // Enables a pop-up that shows parameter documentation and type information as you type.
  "editor.parameterHints.enabled": true,
  // Controls whether to focus the inline editor or the tree in the peek widget.
  //  - tree: Focus the tree when opening peek
  //  - editor: Focus the editor when opening peek
  "editor.peekWidgetDefaultFocus": "tree",
  // Controls whether suggestions should automatically show up while typing.
  "editor.quickSuggestions": {
    "other": "on",
    "comments": "off",
    "strings": "off"
  },
  // Controls the delay in milliseconds after which quick suggestions will show up.
  "editor.quickSuggestionsDelay": 10,
  // Enable/disable the ability to preview changes before renaming
  "editor.rename.enablePreview": true,
  // Controls whether the editor should render control characters.
  "editor.renderControlCharacters": true,
  // Render last line number when the file ends with a newline.
  "editor.renderFinalNewline": true,
  // Controls how the editor should render the current line highlight.
  //  - none
  //  - gutter
  //  - line
  //  - all: Highlights both the gutter and the current line.
  "editor.renderLineHighlight": "line",
  // Controls if the editor should render the current line highlight only when the editor is focused.
  "editor.renderLineHighlightOnlyWhenFocus": false,
  // Controls how the editor should render whitespace characters.
  //  - none
  //  - boundary: Render whitespace characters except for single spaces between words.
  //  - selection: Render whitespace characters only on selected text.
  //  - trailing: Render only trailing whitespace characters.
  //  - all
  "editor.renderWhitespace": "selection",
  // Controls whether selections should have rounded corners.
  "editor.roundedSelection": true,
  // Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.
  "editor.rulers": [],
  // Controls the visibility of the horizontal scrollbar.
  //  - auto: The horizontal scrollbar will be visible only when necessary.
  //  - visible: The horizontal scrollbar will always be visible.
  //  - hidden: The horizontal scrollbar will always be hidden.
  "editor.scrollbar.horizontal": "auto",
  // The height of the horizontal scrollbar.
  "editor.scrollbar.horizontalScrollbarSize": 12,
  // Controls whether clicks scroll by page or jump to click position.
  "editor.scrollbar.scrollByPage": false,
  // Controls the visibility of the vertical scrollbar.
  //  - auto: The vertical scrollbar will be visible only when necessary.
  //  - visible: The vertical scrollbar will always be visible.
  //  - hidden: The vertical scrollbar will always be hidden.
  "editor.scrollbar.vertical": "auto",
  // The width of the vertical scrollbar.
  "editor.scrollbar.verticalScrollbarSize": 14,
  // Controls the number of extra characters beyond which the editor will scroll horizontally.
  "editor.scrollBeyondLastColumn": 4,
  // Controls whether the editor will scroll beyond the last line.
  "editor.scrollBeyondLastLine": true,
  // Controls whether the Linux primary clipboard should be supported.
  "editor.selectionClipboard": true,
  // Scroll only along the predominant axis when scrolling both vertically and horizontally at the same time. Prevents horizontal drift when scrolling vertically on a trackpad.
  "editor.scrollPredominantAxis": true,
  // Controls whether the editor should highlight matches similar to the selection.
  "editor.selectionHighlight": true,
  // Controls whether the semanticHighlighting is shown for the languages that support it.
  //  - true: Semantic highlighting enabled for all color themes.
  //  - false: Semantic highlighting disabled for all color themes.
  //  - configuredByTheme: Semantic highlighting is configured by the current color theme's `semanticHighlighting` setting.
  "editor.semanticHighlighting.enabled": "configuredByTheme",
  // Overrides editor semantic token color and styles from the currently selected color theme.
  "editor.semanticTokenColorCustomizations": {
    "enabled": true
  },
  // Controls strikethrough deprecated variables.
  "editor.showDeprecated": true,
  // Controls when the folding controls on the gutter are shown.
  //  - always: Always show the folding controls.
  //  - never: Never show the folding controls and reduce the gutter size.
  //  - mouseover: Only show the folding controls when the mouse is over the gutter.
  "editor.showFoldingControls": "mouseover",
  // Controls fading out of unused code.
  "editor.showUnused": true,
  // Whether leading and trailing whitespace should always be selected.
  "editor.smartSelect.selectLeadingAndTrailingWhitespace": true,
  // Controls whether the editor will scroll using an animation.
  "editor.smoothScrolling": false,
  // Controls if surround-with-snippets or file template snippets show as Code Actions.
  "editor.snippets.codeActions.enabled": true,
  // Controls whether snippets are shown with other suggestions and how they are sorted.
  //  - top: Show snippet suggestions on top of other suggestions.
  //  - bottom: Show snippet suggestions below other suggestions.
  //  - inline: Show snippets suggestions with other suggestions.
  //  - none: Do not show snippet suggestions.
  "editor.snippetSuggestions": "inline",
  // Keep peek editors open even when double clicking their content or when hitting `Escape`.
  "editor.stablePeek": false,
  // Shows the nested current scopes during the scroll at the top of the editor.
  "editor.stickyScroll.enabled": true,
  // Defines the maximum number of sticky lines to show.
  "editor.stickyScroll.maxLineCount": 5,
  // Emulate selection behavior of tab characters when using spaces for indentation. Selection will stick to tab stops.
  "editor.stickyTabStops": false,
  // Controls whether filtering and sorting suggestions accounts for small typos.
  "editor.suggest.filterGraceful": true,
  // Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.
  //  - insert: Insert suggestion without overwriting text right of the cursor.
  //  - replace: Insert suggestion and overwrite text right of the cursor.
  "editor.suggest.insertMode": "insert",
  // Controls whether sorting favors words that appear close to the cursor.
  "editor.suggest.localityBonus": false,
  // When enabled IntelliSense filtering requires that the first character matches on a word start. For example, `c` on `Console` or `WebContext` but not on `description`.
  "editor.suggest.matchOnWordStartOnly": false,
  // Controls whether to preview the suggestion outcome in the editor.
  "editor.suggest.preview": false,
  // Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `editor.suggestSelection`).
  "editor.suggest.shareSuggestSelections": false,
  // When enabled IntelliSense shows `class`-suggestions.
  "editor.suggest.showClasses": true,
  // When enabled IntelliSense shows `color`-suggestions.
  "editor.suggest.showColors": true,
  // When enabled IntelliSense shows `constant`-suggestions.
  "editor.suggest.showConstants": true,
  // When enabled IntelliSense shows `constructor`-suggestions.
  "editor.suggest.showConstructors": true,
  // When enabled IntelliSense shows `customcolor`-suggestions.
  "editor.suggest.showCustomcolors": true,
  // When enabled IntelliSense shows `deprecated`-suggestions.
  "editor.suggest.showDeprecated": true,
  // When enabled IntelliSense shows `enumMember`-suggestions.
  "editor.suggest.showEnumMembers": true,
  // When enabled IntelliSense shows `enum`-suggestions.
  "editor.suggest.showEnums": true,
  // When enabled IntelliSense shows `event`-suggestions.
  "editor.suggest.showEvents": true,
  // When enabled IntelliSense shows `field`-suggestions.
  "editor.suggest.showFields": true,
  // When enabled IntelliSense shows `file`-suggestions.
  "editor.suggest.showFiles": true,
  // When enabled IntelliSense shows `folder`-suggestions.
  "editor.suggest.showFolders": true,
  // When enabled IntelliSense shows `function`-suggestions.
  "editor.suggest.showFunctions": true,
  // Controls whether to show or hide icons in suggestions.
  "editor.suggest.showIcons": true,
  // Controls whether suggest details show inline with the label or only in the details widget.
  "editor.suggest.showInlineDetails": true,
  // When enabled IntelliSense shows `interface`-suggestions.
  "editor.suggest.showInterfaces": true,
  // When enabled IntelliSense shows `issues`-suggestions.
  "editor.suggest.showIssues": true,
  // When enabled IntelliSense shows `keyword`-suggestions.
  "editor.suggest.showKeywords": true,
  // When enabled IntelliSense shows `method`-suggestions.
  "editor.suggest.showMethods": true,
  // When enabled IntelliSense shows `module`-suggestions.
  "editor.suggest.showModules": true,
  // When enabled IntelliSense shows `operator`-suggestions.
  "editor.suggest.showOperators": true,
  // When enabled IntelliSense shows `property`-suggestions.
  "editor.suggest.showProperties": true,
  // When enabled IntelliSense shows `reference`-suggestions.
  "editor.suggest.showReferences": true,
  // When enabled IntelliSense shows `snippet`-suggestions.
  "editor.suggest.showSnippets": true,
  // Controls the visibility of the status bar at the bottom of the suggest widget.
  "editor.suggest.showStatusBar": false,
  // When enabled IntelliSense shows `struct`-suggestions.
  "editor.suggest.showStructs": true,
  // When enabled IntelliSense shows `typeParameter`-suggestions.
  "editor.suggest.showTypeParameters": true,
  // When enabled IntelliSense shows `unit`-suggestions.
  "editor.suggest.showUnits": true,
  // When enabled IntelliSense shows `user`-suggestions.
  "editor.suggest.showUsers": true,
  // When enabled IntelliSense shows `value`-suggestions.
  "editor.suggest.showValues": true,
  // When enabled IntelliSense shows `variable`-suggestions.
  "editor.suggest.showVariables": true,
  // When enabled IntelliSense shows `text`-suggestions.
  "editor.suggest.showWords": true,
  // Controls whether an active snippet prevents quick suggestions.
  "editor.suggest.snippetsPreventQuickSuggestions": true,
  // Font size for the suggest widget. When set to `0`, the value of `editor.fontSize` is used.
  "editor.suggestFontSize": 0,
  // Line height for the suggest widget. When set to `0`, the value of `editor.lineHeight` is used. The minimum value is 8.
  "editor.suggestLineHeight": 0,
  // Controls whether suggestions should automatically show up when typing trigger characters.
  "editor.suggestOnTriggerCharacters": true,
  // Controls how suggestions are pre-selected when showing the suggest list.
  //  - first: Always select the first suggestion.
  //  - recentlyUsed: Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently.
  //  - recentlyUsedByPrefix: Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`.
  "editor.suggestSelection": "first",
  // Enables tab completions.
  //  - on: Tab complete will insert the best matching suggestion when pressing tab.
  //  - off: Disable tab completions.
  //  - onlySnippets: Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled.
  "editor.tabCompletion": "off",
  // The number of spaces a tab is equal to. This setting is overridden based on the file contents when `editor.detectIndentation` is on.
  "editor.tabSize": 4,
  // ! Remove trailing auto inserted whitespace.
  "editor.trimAutoWhitespace": true,
  // ? Controls whether clicking on the empty content after a folded line will unfold the line.
  "editor.unfoldOnClickAfterEndOfLine": false,
  // Defines allowed characters that are not being highlighted.
  "editor.unicodeHighlight.allowedCharacters": {},
  // Unicode characters that are common in allowed locales are not being highlighted.
  "editor.unicodeHighlight.allowedLocales": {
    "_os": true,
    "_vscode": true
  },
  // Controls whether characters are highlighted that can be confused with basic ASCII characters, except those that are common in the current user locale.
  "editor.unicodeHighlight.ambiguousCharacters": true,
  // Controls whether characters in comments should also be subject to Unicode highlighting.
  "editor.unicodeHighlight.includeComments": "inUntrustedWorkspace",
  // Controls whether characters in strings should also be subject to Unicode highlighting.
  "editor.unicodeHighlight.includeStrings": true,
  // Controls whether characters that just reserve space or have no width at all are highlighted.
  "editor.unicodeHighlight.invisibleCharacters": true,
  // Controls whether all non-basic ASCII characters are highlighted. Only characters between U+0020 and U+007E, tab, line-feed and carriage-return are considered basic ASCII.
  "editor.unicodeHighlight.nonBasicASCII": "inUntrustedWorkspace",
  // Remove unusual line terminators that might cause problems.
  //  - auto: Unusual line terminators are automatically removed.
  //  - off: Unusual line terminators are ignored.
  //  - prompt: Unusual line terminators prompt to be removed.
  "editor.unusualLineTerminators": "prompt",
  // Inserting and deleting whitespace follows tab stops.
  "editor.useTabStops": true,
  // Controls whether completions should be computed based on words in the document.
  "editor.wordBasedSuggestions": true,
  // Controls from which documents word based completions are computed.
  //  - currentDocument: Only suggest words from the active document.
  //  - matchingDocuments: Suggest words from all open documents of the same language.
  //  - allDocuments: Suggest words from all open documents.
  "editor.wordBasedSuggestionsMode": "matchingDocuments",
  // Characters that will be used as word separators when doing word related navigations or operations.
  "editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",
  // Controls how lines should wrap.
  //  - off: Lines will never wrap.
  //  - on: Lines will wrap at the viewport width.
  //  - wordWrapColumn: Lines will wrap at `editor.wordWrapColumn`.
  //  - bounded: Lines will wrap at the minimum of viewport and `editor.wordWrapColumn`.
  "editor.wordWrap": "on",
  // Controls the wrapping column of the editor when `editor.wordWrap` is `wordWrapColumn` or `bounded`.
  "editor.wordWrapColumn": 80,
  // Controls the indentation of wrapped lines.
  //  - none: No indentation. Wrapped lines begin at column 1.
  //  - same: Wrapped lines get the same indentation as the parent.
  //  - indent: Wrapped lines get +1 indentation toward the parent.
  //  - deepIndent: Wrapped lines get +2 indentation toward the parent.
  "editor.wrappingIndent": "same",
  // Controls the algorithm that computes wrapping points.
  //  - simple: Assumes that all characters are of the same width. This is a fast algorithm that works correctly for monospace fonts and certain scripts (like Latin characters) where glyphs are of equal width.
  //  - advanced: Delegates wrapping points computation to the browser. This is a slow algorithm, that might cause freezes for large files, but it works correctly in all cases.
  "editor.wrappingStrategy": "simple",
  // SCM
  // Controls whether inline actions are always visible in the Source Control view.
  "scm.alwaysShowActions": false,
  // Controls whether repositories should always be visible in the Source Control view.
  "scm.alwaysShowRepositories": false,
  // Controls whether the Source Control view should automatically reveal and select files when opening them.
  "scm.autoReveal": true,
  // Controls the count badge on the Source Control icon on the Activity Bar.
  //  - all: Show the sum of all Source Control Provider count badges.
  //  - focused: Show the count badge of the focused Source Control Provider.
  //  - off: Disable the Source Control count badge.
  "scm.countBadge": "all",
  // Controls the default Source Control repository view mode.
  //  - tree: Show the repository changes as a tree.
  //  - list: Show the repository changes as a list.
  "scm.defaultViewMode": "list",
  // Controls the default Source Control repository changes sort order when viewed as a list.
  //  - name: Sort the repository changes by file name.
  //  - path: Sort the repository changes by path.
  //  - status: Sort the repository changes by Source Control status.
  "scm.defaultViewSortKey": "path",
  // Управляет оформлением различий в редакторе.
  // - all: Показать декорации diff во всех доступных локациях.
  // - желоб: Показать декорации diff только в желобе редактора.
  // - обзор: Показать украшения diff только в обзорной линейке.
  // - миникарта: Показать украшения diff только на миникарте.
  // - нет: не показывать декорации diff
  "scm.diffDecorations": "all",
  // Controls the behavior of Source Control diff gutter decorations.
  //  - diff: Show the inline diff peek view on click.
  //  - none: Do nothing.
  "scm.diffDecorationsGutterAction": "diff",
  // Controls whether a pattern is used for the diff decorations in gutter.
  "scm.diffDecorationsGutterPattern": {
    "added": false,
    "modified": true
  },
  // Controls the visibility of the Source Control diff decorator in the gutter.
  //  - always: Show the diff decorator in the gutter at all times.
  //  - hover: Show the diff decorator in the gutter only on hover.
  "scm.diffDecorationsGutterVisibility": "always",
  // Controls the width(px) of diff decorations in gutter (added & modified).
  "scm.diffDecorationsGutterWidth": 3,
  // Controls whether leading and trailing whitespace is ignored in Source Control diff gutter decorations.
  //  - true: Ignore leading and trailing whitespace.
  //  - false: Do not ignore leading and trailing whitespace.
  //  - inherit: Inherit from `diffEditor.ignoreTrimWhitespace`.
  "scm.diffDecorationsIgnoreTrimWhitespace": "false",
  // Controls the font for the input message. Use `default` for the workbench user interface font family, `editor` for the `editor.fontFamily`'s value, or a custom font family.
  "scm.inputFontFamily": "default",
  // Controls the font size for the input message in pixels.
  "scm.inputFontSize": 13,
  // Controls the count badges on Source Control Provider headers. These headers only appear when there is more than one provider.
  //  - hidden: Hide Source Control Provider count badges.
  //  - auto: Only show count badge for Source Control Provider when non-zero.
  //  - visible: Show Source Control Provider count badges.
  "scm.providerCountBadge": "hidden",
  // Controls the sort order of the repositories in the source control repositories view.
  //  - discovery time: Repositories in the Source Control Repositories view are sorted by discovery time. Repositories in the Source Control view are sorted in the order that they were selected.
  //  - name: Repositories in the Source Control Repositories and Source Control views are sorted by repository name.
  //  - path: Repositories in the Source Control Repositories and Source Control views are sorted by repository path.
  "scm.repositories.sortOrder": "discovery time",
  // Controls how many repositories are visible in the Source Control Repositories section. Set to `0` to be able to manually resize the view.
  "scm.repositories.visible": 10,
  // Controls whether an action button can be shown in the Source Control view.
  "scm.showActionButton": true,
  // Security
  // Controls when the restricted mode banner is shown.
  //  - always: Show the banner every time an untrusted workspace is open.
  //  - untilDismissed: Show the banner when an untrusted workspace is opened until dismissed.
  //  - never: Do not show the banner when an untrusted workspace is open.
  "security.workspace.trust.banner": "untilDismissed",
  // Controls whether or not the empty window is trusted by default within VS Code. When used with `security.workspace.trust.untrustedFiles`, you can enable the full functionality of VS Code without prompting in an empty window.
  "security.workspace.trust.emptyWindow": true,
  // Controls whether or not Workspace Trust is enabled within VS Code.
  "security.workspace.trust.enabled": true,
  // Controls when the startup prompt to trust a workspace is shown.
  //  - always: Ask for trust every time an untrusted workspace is opened.
  //  - once: Ask for trust the first time an untrusted workspace is opened.
  //  - never: Do not ask for trust when an untrusted workspace is opened.
  "security.workspace.trust.startupPrompt": "once",
  // Controls how to handle opening untrusted files in a trusted workspace. This setting also applies to opening files in an empty window which is trusted via `security.workspace.trust.emptyWindow`.
  //  - prompt: Ask how to handle untrusted files for each workspace. Once untrusted files are introduced to a trusted workspace, you will not be prompted again.
  //  - open: Always allow untrusted files to be introduced to a trusted workspace without prompting.
  //  - newWindow: Always open untrusted files in a separate window in restricted mode without prompting.
  "security.workspace.trust.untrustedFiles": "prompt",
  // Workbench
  // Controls the behavior of clicking an activity bar icon in the workbench. 1
  //  - toggle: Hide the side bar if the clicked item is already visible.
  //  - focus: Focus side bar if the clicked item is already visible.
  "workbench.activityBar.iconClickBehavior": "toggle",
  // Controls the visibility of the activity bar in the workbench.
  "workbench.activityBar.visible": true,
  // Overrides editor syntax colors and font style from the currently selected color theme.
  // Overrides colors from the currently selected color theme.
  "editor.tokenColorCustomizations": {

   "textMateRules": [
     {
       "name": "Other",
       "scope": [
         "constant.language",
         "constant.numeric"
       ],
       "settings": {
         "foreground": "#fd5555",
         "fontStyle": ""
       }
     },
     {
       "name": "numbers",
       "scope": [
         "support.type.property-name"
       ],
       "settings": {
         "foreground": "#9586f1db",
         "fontStyle": ""
       }
     },
     {
       "name": "strings",
       "scope": [
         "string"
       ],
       "settings": {
         "foreground": "#7d60a4f7",
         "fontStyle": ""
       }
     },
     {
       "name": "String",
       "scope": [
         "string.regexp",
         "constant.character.escape"
       ],
       "settings": {
         "foreground": "#fbfbfd8b"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "String",
       "scope": [
         "string"
       ],
       "settings": {
         "foreground": "#fbfbfd"
       }
     },
     {
       "name": "String",
       "scope": [
         "keyword"
       ],
       "settings": {
         "foreground": "#636bdf"
       }
     },
     {
       "name": "types",
       // "scope": ["support.type.property-name"],
       "settings": {
         "foreground": "#1583a1",
         "fontStyle": ""
       }
     },
     {
       "name": "variable",
       "scope": [
         "support.type.property-name"
       ],
       "settings": {
         "foreground": "#00c69e",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "entity.name.function"
       ],
       "settings": {
         "foreground": "#95bff7",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.section.embedded.begin.php",
         "punctuation.section.embedded.end.php",
         "punctuation.definition.parameters.end"
       ],
       "settings": {
         "foreground": "#ff06ac",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "entity.name.type"
       ],
       "settings": {
         "foreground": "#fffb04",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "meta.embedded"
       ],
       "settings": {
         "foreground": "#ff06ac"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "Other",
       "scope": [
         "support.function"
       ],
       "settings": {
         "foreground": "#88f6ebc2"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "Other",
       "scope": [
         "storage.type"
       ],
       "settings": {
         "foreground": "#90a8f6"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "Other",
       "scope": [
         "storage.modifier"
       ],
       "settings": {
         "foreground": "#9e34a2"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "Other",
       "scope": [
         "variable"
       ],
       "settings": {
         "foreground": "#3bde00"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "Other",
       "scope": [
         "variable.other.readwrite.js"
       ],
       "settings": {
         "foreground": "#ff00aa"
       }
     },
     {
       "name": "Other",
       "scope": [
         "variable",
         "keyword.control"
       ],
       "settings": {
         "foreground": "#a200ff"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "Other",
       "scope": [
         "variable.language"
       ],
       "settings": {
         "foreground": "#9ca0afe4"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "Other",
       "scope": [
         "variable"
       ],
       "settings": {
         "foreground": "#5d7ac7"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "Comment",
       "scope": [
         "keyword.operator"
       ],
       "settings": {
         "foreground": "#727c9f",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "keyword.operator"
       ],
       "settings": {
         "foreground": "#fafafa"
         // "fontStyle": "bold"
       }
     },
     {
       "name": "Comment",
       "scope": [
         "support.class"
       ],
       "settings": {
         "foreground": "#f7ff04fe",
         "fontStyle": ""
       }
     },
     {
       "name": "Comment",
       "scope": [
         "keyword"
       ],
       "settings": {
         "foreground": "#c201bc",
         "fontStyle": ""
       }
     },
     {
       "name": "comments",
       "scope": [
         "comment"
       ],
       "settings": {
         "foreground": "#4b4b4b",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.separator.key-value.html"
       ],
       "settings": {
         "foreground": "#ff0095",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.definition.tag"
       ],
       "settings": {
         "foreground": "#ff0095",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.definition.string.end.json.comments",
         "punctuation.definition.string.begin.json.comments",
         "punctuation.definition.string.end.js",
         "punctuation.definition.string.begin.js"
       ],
       "settings": {
         "foreground": "#f200ff",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.support.type.property-name.begin.json.comments",
         "punctuation.support.type.property-name.end.json.comments"
       ],
       "settings": {
         "foreground": "#027b32",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.definition.string.begin.html",
         "punctuation.definition.string.end.html"
       ],
       "settings": {
         "foreground": "#027b32",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "source.sql.embedded.php"
       ],
       "settings": {
         "foreground": "#e100ff",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.definition.string.begin.sql",
         "punctuation.definition.string.end.sql",
         "punctuation.separator.dictionary.key-value.json.comments"
       ],
       "settings": {
         "foreground": "#00ff1e",
         "fontStyle": ""
       }
     },
     {
       "name": "String",
       "scope": [
         "keyword.other.DML.sql",
         "source.sql.embedded.php",
         "string.quoted.single.sql.php",
         "string.quoted.single.php"
       ],
       "settings": {
         "foreground": "#ff7700",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "string.quoted.other.backtick.sql"
       ],
       "settings": {
         "foreground": "#ff7700",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "variable.other.property.js",
         "entity.name.function.member"
       ],
       "settings": {
         "foreground": "#ff7700",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.definition.string.template.begin.js",
         "punctuation.definition.string.template.end.js"
       ],
       "settings": {
         "foreground": "#ff7700",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "string.quoted.double.html",
         "string.quoted.single.js",
         "string.quoted.double.js",
         "string.template.js"
       ],
       "settings": {
         "foreground": "#a8a8a8",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "text.html.php"
       ],
       "settings": {
         "foreground": "#fbfbfddb",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "variable.other.constant",
         "variable.other.constant.object.js",
         "punctuation.definition.template-expression.begin.js"
       ],
       "settings": {
         "foreground": "#fafa03",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.separator.comma.js",
         "punctuation.separator.dictionary.pair.json.comments"
       ],
       "settings": {
         "foreground": "#03fa03",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.definition.string.begin.php",
         "punctuation.definition.string.end.php"
       ],
       "settings": {
         "foreground": "#ff03ff",
         "fontStyle": ""
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.accessor.js"
       ],
       "settings": {
         "foreground": "#fbfbfd"
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.accessor.js"
       ],
       "settings": {
         "foreground": "#fbfbfd"
       }
     },
     {
       "name": "String",
       "scope": [
         "support.type.property-name.json"
       ],
       "settings": {
         "foreground": "#9586f1db"
       }
     },
     {
       "name": "Other",
       "scope": [
         "variable.css"
       ],
       "settings": {
         "foreground": "#9586f1db"
       }
     },
     {
       "name": "Other",
       "scope": [
         "variable.argument.css"
       ],
       "settings": {
         "foreground": "#ddff02"
       }
     },
     {
       "name": "Other",
       "scope": [
         "constant.other.color.rgb-value","support.constant.property-value",
       ],
       "settings": {
         "foreground": "#FF7700"
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.separator.list.comma.css","punctuation.separator.key-value.css","punctuation.terminator.rule.css","meta.function.calc.css","keyword.operator.arithmetic.css","punctuation.definition.entity.css"
       ],
       "settings": {
         "foreground": "#03FA03"
       }
     },
     {
       "name": "Other",
       "scope": [
         "punctuation.definition.string.begin.css","punctuation.definition.string.end.css"
       ],
       "settings": {
         "foreground": "#FF06AC"
       }
     },
     {
       "name": "Other",
       "scope": [
         "string.quoted.single.css"
       ],
       "settings": {
         "foreground": "#9CA0AFE4"
       }
     },
     {
       "name": "Other",
       "scope": [
         "constant.numeric.css","keyword.other.unit.px.css","keyword.other.unit.rem.css","keyword.other.unit.em.css","keyword.other.unit.deg.css","keyword.other.unit.ms.css","keyword.other.unit.vw.css","keyword.other.unit.vh.css","keyword.other.unit","keyword.other.unit.s.css"
       ],
       "settings": {
         "foreground": "#F7FF04FE"
       }
     },
     {
       "name": "Other",
       "scope": [
         "constant.numeric.css"
       ],
       "settings": {
         "foreground": "#FF7700"
       }
     },
     {
       "name": "Other",
       "scope": [
         "entity.other.attribute-name.pseudo-class.css","entity.other.attribute-name.class.css"
       ],
       "settings": {
         "foreground": "#95BFF7"
       }
     },
     {
       "name": "Other",
       "scope": [
         "entity.name.tag.css"
       ],
       "settings": {
         "foreground": "#F7FF04FE"
       }
     },
     {
       "name": "Other",
       "scope": [
         "support.type.property-name.css","entity.other.keyframe-offset.css"
       ],
       "settings": {
         "foreground": "#9CDCFE"
       }
     },
     {
      "name": "Other",
      "scope": [
        "support.constant.vendored.property-value.css","support.constant.font-name.css","entity.other.attribute-name.class.css"
      ],
      "settings": {
        "foreground": "#ff00aa"
      }
    },
    {
      "name": "Other",
      "scope": [
        "entity.other.attribute-name.pseudo-element.css"
      ],
      "settings": {
        "foreground": "#3e68c9"
      }
    },
    {
      "name": "Other",
      "scope": [
        "support.type.property-name.media.css","support.constant.media.css"
      ],
      "settings": {
        "foreground": "#A200FF"
      }
    },
    {
      "name": "Other",
      "scope": [
        "keyword.operator.logical.only.media.css","keyword.operator.logical.and.media.css","string.quoted.double.css"
      ],
      "settings": {
        "foreground": "#027b32"
      }
    },
    {
      "name": "Other",
      "scope": [
        "entity.other.attribute-name.id.css"
      ],
      "settings": {
        "foreground": "#00fff7"
      }
    },
  { 
      "name": "Other",
      "scope": [
        "support.function.transform.css"
      ],
      "settings": {
        "foreground": "#00eaff"
      }
    },
    { 
        "name": "Other",
        "scope": [
          "entity.other.keyframe-offset.percentage.css"
        ],
        "settings": {
          "foreground": "#ff00d9"
        }
      }
    
     
   
    //  {
    //    "name": "Other",
    //    "scope": [
    //      "constant.numeric.css"
    //    ],
    //    "settings": {
    //      "foreground": "#03FA03"
    //    }
    //  }
   ]
 },
 // Переопределяет цвета из выбранной цветовой темы.
 "workbench.colorCustomizations": {
    "contrastActiveBorder": "#232323", //,дополнительная граница вокруг активных элементов, чтобы отделить их от других для большей контрастности.
    "contrastBorder": "#232323", //дополнительная граница вокруг элементов, чтобы отделить их от других для большей контрастности.
    "focusBorder": "#232323", //общий цвет границы для сфокусированных элементов. Этот цвет используется только в том случае, если он не переопределен компонентом.
    "foreground": "#fbfbfd7d", // Общий цвет переднего плана. Этот цвет используется только в том случае, если он не переопределен компонентом.
    "disabledForeground": "#ddff02", //Общий передний план для отключенных элементов. Этот цвет используется только в том случае, если он не переопределен компонентом.
    "widget.shadow": "#232323", // Теневой цвет виджетов, таких как Find/Replace внутри редактора.
    "selection.background": "#027b3250", // цвет фона выделенных текстов на рабочей панели (для полей ввода или текстовых областей не применяется к выделенным фрагментам в редакторе и терминале).
    "descriptionForeground": "#fbfbfd", // цвет переднего плана для текста описания, предоставляющего дополнительную информацию, например для метки.
    "errorForeground": "#00beb8", // общий цвет переднего плана для сообщений об ошибках (этот цвет используется только в том случае, если он не переопределен компонентом).
    "icon.foreground": "#fbfbfd", // цвет по умолчанию для значков на рабочем столе.
    "sash.hoverBorder": "#027b3279", //цвет границы наведения для перетаскиваемых створок.
    "window.activeBorder": "#fbfbfd", // цвет границы для активного (сфокусированного) окна.
    "window.inactiveBorder": "#fbfbfd", //цвет границы для неактивных (несфокусированных) окон.
    "textBlockQuote.background": "#027b32", // цвет фона для блоковых кавычек в тексте.
    "textBlockQuote.border": "#232323b4", // цвет границы для кавычек блоков в тексте.
    "textCodeBlock.background": "#171717b4", // цвет фона для блоков кода в тексте.
    "textLink.activeForeground": "#3e68c9", // цвет переднего плана для ссылок в тексте при нажатии и наведении указателя мыши.
    "textLink.foreground": "#3e68c9", // цвет переднего плана для ссылок в тексте.
    "textPreformat.foreground": "#fbfbfd", // цвет переднего плана для предварительно отформатированных текстовых сегментов.
    "textSeparator.foreground": "#fbfbfd", // цвет для разделителей текста.
    "toolbar.hoverBackground": "#171717", // фон панели инструментов при наведении указателя мыши на действия
    "toolbar.hoverOutline": "#232323", // структура панели инструментов при наведении указателя мыши на действия
    "toolbar.activeBackground": "#23232350", // фон панели инструментов при наведении указателя мыши на действия
    "button.background": "#027b3287", // цвет фона кнопки.
    "button.foreground": "#fbfbfd", // Цвет кнопки переднего плана.
    "button.border": "#027b3287", // цвет границы кнопки.
    "button.separator": "#fbfbfd", // Цвет разделителя кнопок.
    "button.hoverBackground": "#027b3258", // цвет фона кнопки при наведении указателя мыши.
    "button.secondaryForeground": "#fbfbfd", // Цвет переднего плана дополнительной кнопки.
    "button.secondaryBackground": "#027b327e", // цвет фона дополнительной кнопки.
    "button.secondaryHoverBackground": "#027b3287", // цвет фона дополнительной кнопки при наведении.
    "checkbox.background": "#232323", // Цвет фона виджета флажка.
    "checkbox.foreground": "#fbfbfd7e", // Цвет переднего плана виджета флажка.
    "checkbox.border": "#fbfbfd7e", // Цвет границы виджета флажка.
    "dropdown.background": "#232323", // Раскрывающийся фон.
    "dropdown.listBackground": "#232323", // фон раскрывающегося списка.
    "dropdown.border": "#232323", // граница раскрывающегося списка.
    "dropdown.foreground": "#fbfbfd", // Раскрывающийся передний план.
    "input.background": "#171717", // фон поля ввода.
    "input.border": "#232323", // граница поля ввода.
    "input.foreground": "#fbfbfda5", // Поле ввода переднего плана.
    "input.placeholderForeground": "#fbfbfda5", // цвет поля ввода переднего плана для замещающего текста.
    "inputOption.activeBackground": "#474747a5", // цвет фона активированных параметров в полях ввода.
    "inputOption.activeBorder": "#232323a5", // цвет границы активированных параметров в полях ввода.
    "inputOption.activeForeground": "#fbfbfd65", // цвет переднего плана активированных параметров в полях ввода.
    "inputOption.hoverBackground": "#fbfbfda5", // цвет фона активированных параметров в полях ввода.
    "inputValidation.errorBackground": "#be0000", // цвет фона проверки ввода для серьезности ошибки.
    "inputValidation.errorForeground": "#be0000", // ввод проверки цвета переднего плана для серьезности ошибки.
    "inputValidation.errorBorder": "#be0000", // цвет границы проверки ввода для серьезности ошибки.
    "inputValidation.infoBackground": "#be00008b", // цвет фона проверки ввода для серьезности информации.
    "inputValidation.infoForeground": "#fbfbfd", // цвет переднего плана проверки ввода для серьезности информации.
    "inputValidation.infoBorder": "#232323", // цвет границы проверки ввода для серьезности информации.
    "inputValidation.warningBackground": "#3e68c983", // цвет фона проверки ввода для предупреждения об информации.
    "inputValidation.warningForeground": "#be000074", // ввод проверки цвета переднего плана для серьезности предупреждения.
    "inputValidation.warningBorder": "#be000084", // Цвет границы проверки  ввода для серьезности предупреждения.
    "scrollbar.shadow": "#232323", // тень ползунка полосы прокрутки, указывающая, что представление прокручено.
    "scrollbarSlider.activeBackground": "#232323", // цвет фона ползунка полосы прокрутки при нажатии.
    "scrollbarSlider.background": "#027b325c", // цвет фона ползунка полосы прокрутки.
    "scrollbarSlider.hoverBackground": "#fbfbfd82", // цвет фона ползунка полосы прокрутки при наведении.
    "badge.foreground": "#fbfbfd", // Цвет значка переднего плана.
    "badge.background": "#027b32a6", // цвет фона индикатора событий.
    "progressBar.background": "#00eaff", // цвет фона индикатора выполнения, отображаемый для длительных операций.
    "list.activeSelectionBackground": "#232323", // цвет фона List/Tree для выбранного элемента, когда список/дерево активны.
    "list.activeSelectionForeground": "#fbfbfd", // цвет переднего плана "list/Tree для выбранного элемента, когда список/дерево активны.
    "list.activeSelectionIconForeground": "#027b32", // цвет переднего плана значка списка/дерева для выбранного элемента, когда список/дерево активны. Активный список/дерево имеет фокус клавиатуры, неактивный — нет.
    "list.dropBackground": "#067a0042", // перетаскивание фона списка/дерева при перемещении элементов с помощью мыши.
    "list.focusBackground": "#027b3287", // цвет фона списка/дерева для сфокусированного элемента, когда список/дерево активны.
    "list.focusForeground": "#fbfbfd", // цвет переднего плана "list/Tree для фокусируемого элемента, когда список/дерево активны. Активный список/дерево имеет фокус клавиатуры, неактивный — нет.
    "list.focusHighlightForeground": "#027b3275", // Цвет переднего плана списка/дерева для выделения матча на активно сфокусированных элементах при поиске внутри списка/дерева.
    "list.focusOutline": "#027b3287", // цвет контура списка/дерева для сфокусированного элемента, когда список/дерево активны. Активный список/дерево имеет фокус клавиатуры, неактивный — нет.
    "list.focusAndSelectionOutline": "#027b3280", // цвет контура списка/дерева для сфокусированного элемента, когда список/дерево активны и выбраны. Активный список/дерево имеет фокус клавиатуры, неактивный — нет.
    "list.highlightForeground": "#fbfbfd", // Список/Дерево цвет переднего плана выделенных элементов матча при поиске внутри списка/дерева.
    "list.hoverBackground": "#027b3243", // фон списка/дерева при наведении указателя мыши на элементы.
    "list.hoverForeground": "#fbfbfd", // список/дерево переднего плана при наведении указателя мыши на элементы.
    "list.inactiveSelectionBackground": "#0483023f", // цвет фона списка/дерева для выбранного элемента, когда список/дерево неактивны.
    "list.inactiveSelectionForeground": "#fbfbfd", // цвет переднего плана "list/Tree для выбранного элемента, когда список/дерево неактивны. Активный список/дерево имеет фокус клавиатуры, неактивный — нет.
    "list.inactiveSelectionIconForeground": "#027b32", // цвет переднего плана значка списка/дерева для выбранного элемента, когда список/дерево неактивны. Активный список/дерево имеет фокус клавиатуры, неактивный — нет.
    "list.inactiveFocusBackground": "#027b321e", // цвет фона списка для фокусированного элемента, когда список неактивен. Активный список имеет фокус клавиатуры, неактивный — нет. В настоящее время поддерживается только в списках.
    "list.inactiveFocusOutline": "#027b321e", // цвет контура списка/дерева для сфокусированного элемента, когда список/дерево неактивны. Активный список/дерево имеет фокус клавиатуры, неактивный — нет.
    "list.invalidItemForeground": "#be0000ae", // цвет переднего плана "list/Tree для недопустимых элементов, например неразрешенного корня в проводнике.
    "list.errorForeground": "#be0000ae", // цвет переднего плана элементов списка, содержащих ошибки.
    "list.warningForeground": "#ff8801", // цвет переднего плана элементов списка, содержащих предупреждения.
    "listFilterWidget.background": "#3e68c9", // Цвет фона "list/Tree Filter типизированного текста при поиске внутри списка/дерева
    "listFilterWidget.outline": "#3e68c97c", // цвет контура типизированного текста виджета "list/Tree Filter при поиске внутри списка/дерева.
    "listFilterWidget.noMatchesOutline": "#6a6066", // цвет структуры виджета "Список/Древовидный фильтр", когда при поиске внутри списка/дерева не найдено совпадения набранного текста.
    "listFilterWidget.shadow": "#232323", // Цвет тени виджета фильтра типов в списках и дереве
    "list.filterMatchBackground": "#027b3228", // цвет фона отфильтрованных совпадений в списках и деревьях.
    "list.filterMatchBorder": "#027b32", // цвет границ отфильтрованных совпадений в списках и деревьях.
    "list.deemphasizedForeground": "#ffcc01", // цвет переднего плана List/Tree для элементов, которые имеют ослабление.
    "tree.indentGuidesStroke": "#027b3287", // цвет обводки виджета дерева для направляющих отступов.
    "tree.tableColumnsBorder": "#fcfdfb", // цвет обводки дерева для направляющих отступов.
    "tree.tableOddRowsBackground": "#232323", // цвет фона для нечетных строк таблицы.
    "activityBar.background": "#171717", // цвет фона панели действий.
    "activityBar.dropBorder": "#fbfbfd", // перетаскивание цвета обратной связи для элементов панели действий. Панель активности отображается слева или справа и позволяет переключаться между видами боковой панели.
    "activityBar.foreground": "#027b3287", // цвет переднего плана панели активности (например, используется для значков).
    "activityBar.inactiveForeground": "#494949", // цвет переднего плана элемента панели действий, когда он неактивен.
    "activityBar.border": "#232323", // цвет границы панели действий с боковой панелью.
    "activityBarBadge.background": "#027b3286",//событий уведомления об активности.
    "activityBarBadge.foreground": "#ffffff", // цвет индикатора событий с уведомлением о действиях.
    "activityBar.activeBorder": "#027b3287", // активный цвет границы индикатора активности.
    "activityBar.activeBackground": "#171717", // необязательный цвет фона панели активности для активного элемента.
    "activityBar.activeFocusBorder": "#fdfbfd", // цвет границы фокуса панели активности для активного элемента.
    "sideBar.background": "#171717",
    "sideBar.foreground": "#fbfbfd93", // Боковая панель цвет переднего плана. Боковая панель — это контейнер для таких представлений, как Explorer и Search.
    "sideBar.border": "#232323", // цвет границы боковой панели на стороне, разделяющей редактор.
    "sideBar.dropBackground": "#2323237f", // перетаскивание цвета обратной связи для разделов боковой панели. Цвет должен иметь прозрачность, чтобы секции боковой панели все еще могли просвечивать.
    "sideBarTitle.foreground": "#fbfbfd70", // Цвет переднего плана заголовка боковой панели.
    "sideBarSectionHeader.background": "#232323", // цвет фона заголовка раздела боковой панели.
    "sideBarSectionHeader.foreground": "#fbfbfd70", // Цвет переднего плана заголовка раздела боковой панели.
    "sideBarSectionHeader.border": "#232323", // цвет границы заголовка раздела боковой панели.
    "minimap.findMatchHighlight": "#027b327a", // Выделение цвета для совпадений из поиска в файлах.
    "minimap.selectionHighlight": "#027b32", // цвет подсветки для выделенного редактора.
    "minimap.errorHighlight": "#be0000", // выделите цвет для ошибок в редакторе.
    "minimap.warningHighlight": "#be0000", // выделите цвет для предупреждений в редакторе.
    "minimap.background": "#232323", // цвет фона мини-карты.
    "minimap.selectionOccurrenceHighlight": "#027b3240", // цвет маркера мини-карты для повторяющихся выделений редактора.
    "minimap.foregroundOpacity": "#fbfbfdba", // Непрозрачность элементов переднего плана, отображаемых в мини-карте. Например, "#000000c0" будет отображать элементы с непрозрачностью 75%.
    "minimapSlider.background": "#027b323a", // Цвет фона слайдера мини-карты.
    "minimapSlider.hoverBackground": "#027b3287", // цвет фона слайдера Minimap при наведении.
    "minimapSlider.activeBackground": "#fbfbfd46", // цвет фона слайдера Minimap при нажатии на него.
    "minimapGutter.addedBackground": "#0a0ac2b4", // Цвет желоба Minimap для добавления контента.
    "minimapGutter.modifiedBackground": "#009ff5", // цвет желоба minimap для измененного содержимого.
    "minimapGutter.deletedBackground": "#be0000", // Цвет желоба Minimap для удаленного контента.
    "editorGroup.border": "#232323", // цвет для отделения нескольких групп редакторов друг от друга.
    "editorGroup.dropBackground": "#027b3247", // цвет фона при перетаскивании редакторов.
    "editorGroupHeader.noTabsBackground": "#171717", // цвет фона заголовка заголовка группы редакторов при отключении вкладок (установите "workbench.editor.showTabs"": "#fbfbfd",// false).
    "editorGroupHeader.tabsBackground": "#171717", // цвет фона контейнера Tabs.
    "editorGroupHeader.tabsBorder": "#232323", // цвет границы под элементом управления вкладок редактора, когда вкладки включены.
    "editorGroupHeader.border": "#232323", // цвет границы между заголовком группы редакторов и редактором (под хлебными крошками, если он включен).
    "editorGroup.emptyBackground": "#171717", // цвет фона пустой группы редакторов.
    "editorGroup.focusedEmptyBorder": "#232323", // цвет границы пустой группы редакторов, которая сфокусирована.
    "editorGroup.dropIntoPromptForeground": "#fbfbfd", // цвет переднего плана текста, отображаемый над редакторами при перетаскивании файлов. Этот текст информирует пользователя о том, что он может удерживать shift, чтобы перейти в редактор.
    "editorGroup.dropIntoPromptBackground": "#171717", // цвет фона текста, отображаемый над редакторами при перетаскивании файлов. Этот текст информирует пользователя о том, что он может удерживать shift, чтобы перейти в редактор.
    "editorGroup.dropIntoPromptBorder": "#232323", // цвет границы текста, отображаемый над редакторами при перетаскивании файлов. Этот текст информирует пользователя о том, что он может удерживать shift, чтобы перейти в редактор.
    "tab.activeBackground": "#171717", // цвет фона активной вкладки в активной группе.
    "tab.unfocusedActiveBackground": "#171717", // активный цвет фона вкладки в неактивной группе редактора.
    "tab.activeForeground": "#fbfbfd6c", // активный цвет переднего плана вкладки в активной группе.
    "tab.border": "#232323", // граница, отделяющая вкладки друг от друга.
    "tab.activeBorder": "#027b327b", // нижняя граница активной вкладки.
    "tab.unfocusedActiveBorder": "#027b3287", // нижняя граница активной вкладки в неактивной группе редакторов.
    "tab.activeBorderTop": "#027b3287", // верхняя граница активной вкладки.
    "tab.unfocusedActiveBorderTop": "#027b3287", // верхняя граница для активной вкладки в неактивной группе редактора
    "tab.lastPinnedBorder": "#232323", // граница справа от последнего закрепленного редактора, отделяющаяся от незакрепленных редакторов.
    "tab.inactiveBackground": "#171717", // цвет фона неактивной вкладки.
    "tab.unfocusedInactiveBackground": "#171717", // неактивный цвет фона вкладки в нецеленаправленной группе
    "tab.inactiveForeground": "#fbfbfda4", // неактивный цвет переднего плана вкладки в активной группе.
    "tab.unfocusedActiveForeground": "#027b3287", // активный цвет переднего плана вкладки в неактивной группе редактора.
    "tab.unfocusedInactiveForeground": "#fbfbfda4", // неактивный цвет переднего плана вкладки в неактивной группе редактора.
    "tab.hoverBackground": "#232323", // цвет фона табуляции при наведении курсора
    "tab.unfocusedHoverBackground": "#232323", // цвет фона табуляции в несфокусированной группе при наведении указателя мыши
    "tab.hoverForeground": "#fbfbfd", // цвет табуляции переднего плана при наведении курсора
    "tab.unfocusedHoverForeground": "#fbfbfd", // цвет табуляции переднего плана в нецеленаправленной группе при наведении курсора
    "tab.hoverBorder": "#027b327b", // граница для выделения вкладок при наведении курсора
    "tab.unfocusedHoverBorder": "#027b327b", // граница для выделения вкладок в несфокусированной группе при наведении курсора
    "tab.activeModifiedBorder": "#027b327b", // граница в верхней части измененных (грязных) активных вкладок в активной группе.
    "tab.inactiveModifiedBorder": "#027b327b", // граница в верхней части измененных (грязных) неактивных вкладок в активной группе.
    "tab.unfocusedActiveModifiedBorder": "#be0000", // граница   поверх измененных (грязных) активных вкладок в несфокусированной группе.
    "tab.unfocusedInactiveModifiedBorder": "#be0000", // граница в верхней части измененных (грязных) неактивных вкладок в нецеленаправленной группе.
    "editorPane.background": "#027b32", // цвет фона панели редактора, видимый в левой и правой части макета центрированного редактора.
    "sideBySideEditor.horizontalBorder": "#027b32", // цвет для отделения двух редакторов друг от друга при отображении бок о бок в группе редакторов сверху вниз.
    "sideBySideEditor.verticalBorder": "#027b32", // цвет для отделения двух редакторов друг от друга при отображении бок о бок в группе редакторов слева направо.
    "editor.background": "#171717", // Цвет фона редактора.
    "editor.foreground": "#FBFBFDa3", // цвет переднего плана редактора по умолчанию.
    "editorLineNumber.foreground": "#fbfbfd48", // Цвет номеров строк редактора.
    "editorLineNumber.activeForeground": "#027b32", // цвет номера активной строки редактора.
    "editorCursor.background": "#232323", // цвет фона курсора редактора. Позволяет настраивать цвет символа, перекрываемого блочным курсором.
    "editorCursor.foreground": "#027b32", // Цвет курсора редактора.
    "editor.selectionBackground": "#fbfbfd15", // Цвет выделенного редактора.
    "editor.selectionForeground": "#3e68c9", // цвет выделенного текста для высокой контрастности.
    "editor.inactiveSelectionBackground": "#2323237e", // цвет выделенной области в неактивном редакторе. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editor.selectionHighlightBackground": "#53c80a29", // цвет для областей с тем же содержимым, что и выделенный. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editor.selectionHighlightBorder": "#232323", // цвет границы для областей с тем же содержимым, что и выделенный фрагмент.
    "editor.wordHighlightBackground": "#027b3287", // цвет фона символа во время доступа на чтение, например при чтении переменной. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editor.wordHighlightBorder": "#2323236f", // цвет границы символа во время доступа на чтение, например при чтении переменной.
    "editor.wordHighlightStrongBackground": "#027b327a", // цвет фона символа во время доступа на запись, например при записи в переменную. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editor.wordHighlightStrongBorder": "#2323236f", // цвет границы символа во время доступа на запись, например при записи в переменную.
    "editor.findMatchBackground": "#027b3259", // цвет текущего соответствия поиска.
    "editor.findMatchHighlightBackground": "#027b3238", // Цвет других совпадений поиска. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editor.findRangeHighlightBackground": "#027b323a", // Раскрасьте диапазон, ограничивающий поиск (включите «Найти в выделении» в виджете «Найти»). Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editor.findMatchBorder": "#055b045c", // цвет границы текущего соответствия поиска.
    "editor.findMatchHighlightBorder": "#027b321e", // цвет границы других совпадений поиска.
    "editor.findRangeHighlightBorder": "#027b3244", // цвет границы диапазона, ограничивающий поиск (включите «Найти в выделении» в виджете «Найти»).
    "searchEditor.findMatchBackground": "#93939359", // Цвет результатов редактора.
    "searchEditor.findMatchBorder": "#027b32", // цвет границы результатов редактора.
    "searchEditor.textInputBorder": "#232323", // граница текстового поля ввода редактора поиска.
    "editor.hoverHighlightBackground": "#00ffc82b", // выделите под словом, для которого отображается наведение указателя мыши. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editor.lineHighlightBackground": "#00ff3715", // цвет фона для выделения строки в положении курсора.
    "editor.lineHighlightBorder": "#fbfbfd1b", // цвет фона для границы вокруг линии в положении курсора.
    "editorUnicodeHighlight.border": "#027b3287", // цвет границы, используемый для выделения символов Юникода.
    "editorUnicodeHighlight.background": "#027b3287", // цвет фона, используемый для выделения символов Юникода.
    "editorLink.activeForeground": "#3e68c9", // Цвет активных ссылок.
    "editor.rangeHighlightBackground": "#027b323a", // цвет фона выделенных диапазонов, используемый функциями быстрого открытия, символа в файле и поиска. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editor.rangeHighlightBorder": "#027b3287", // цвет фона границы вокруг выделенных диапазонов.
    "editor.symbolHighlightBackground": "#4800ff70", // Цвет фона выделенного символа. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editor.symbolHighlightBorder": "#4800ffac", // цвет фона границы вокруг выделенных символов.
    "editorWhitespace.foreground": "#e200e6", // цвет символов пробелов в редакторе.
    "editorIndentGuide.background": "#232323", // Цвет направляющих отступов редактора.
    "editorIndentGuide.activeBackground": "#ff00dd13", // цвет руководства по отступам активного редактора.
    "editorInlayHint.background": "#232323", // цвет фона встроенных подсказок.
    "editorInlayHint.foreground": "#FBFBFD", // Цвет переднего плана встроенных подсказок.
    "editorInlayHint.typeForeground": "#04ffe2", // цвет переднего плана встроенных подсказок для типов
    "editorInlayHint.typeBackground": "#232323", // цвет фона встроенных подсказок для типов
    "editorInlayHint.parameterForeground": "#018796", // цвет переднего плана встроенных подсказок для параметров
    "editorInlayHint.parameterBackground": "#232323", // Цвет фона встроенных подсказок для параметров.
    "editorRuler.foreground": "#02660467", // Цвет линеек редактора.
    "editor.linkedEditingBackground": "#e6ff013f", // цвет фона, когда редак
    "editorCodeLens.foreground": "#fbfbfd", // цвет переднего плана редактора CodeLens.
    "editorLightBulb.foreground": "#f2ff03", // цвет, используемый для значка действий лампочки.
    "editorLightBulbAutoFix.foreground": "#027b3287", // цвет, используемый для значка действий автоматического исправления лампочки.
    "editorBracketMatch.background": "#444444", // Цвет фона за соответствующими скобками.
    "editorBracketMatch.border": "#444444", // Цвет для соответствующих полей скобок.
    "editorBracketHighlight.foreground1": "#fd01f9", // Цвет скобок переднего плана (1). Требуется включение раскрашивания пары кронштейнов.
    "editorBracketHighlight.foreground2": "#006eff", // Цвет переднего плана скобок (2). Требуется включение раскрашивания пары кронштейнов.
    "editorBracketHighlight.foreground3": "#ff0000", // Цвет скобок переднего плана (3). Требуется включение раскрашивания пары кронштейнов.
    "editorBracketHighlight.foreground4": "#01eaff", // Цвет переднего плана скобок (4). Требуется включение раскрашивания пары кронштейнов.
    "editorBracketHighlight.foreground5": "#e6fb01", // Цвет скобок переднего плана (5). Требуется включение раскрашивания пары кронштейнов.
    "editorBracketHighlight.foreground6": "#23fd01", // Цвет скобок переднего плана (6). Требуется включение раскрашивания пары кронштейнов.
    "editorBracketHighlight.unexpectedBracket.foreground": "#05e8fc", // Цвет переднего плана 
    "editorBracketPairGuide.activeBackground1": "#fd01f9a7", // Цвет фона активных направляющих пары скобок (1). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.activeBackground2": "#006effa7", // Цвет фона активных направляющих пары скобок (2). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.activeBackground3": "#ff0000a7", // Цвет фона активных направляющих пары скобок (3). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.activeBackground4": "#01eaffa7", // Цвет фона активных направляющих пары скобок (4). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.activeBackground5": "#e6fb01a7", // Цвет фона активных направляющих пары скобок (5). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.activeBackground6": "#23fd01a7", // Цвет фона активных направляющих пары скобок (6). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.background1": "#fd01f9a7", // Цвет фона направляющих неактивных пар скобок (1). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.background2": "#006effa7", // Цвет фона неактивных направляющих пары скобок (2). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.background3": "#ff0000a7", // Цвет фона неактивных направляющих пары скобок (3). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.background4": "#01eaffa7", // Цвет фона неактивных направляющих пары скобок (4). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.background5": "#e6fb01a7", // Цвет фона направляющих неактивных пар скобок (5). Требует включения направляющих пары кронштейнов.
    "editorBracketPairGuide.background6": "#23fd01a7", // Цвет фона направляющих неактивных пар скобок (6). Требует включения направляющих пары кронштейнов.
    "editor.foldBackground": "#23232370", // цвет фона для сложенных диапазонов. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorOverviewRuler.background": "#232323", // цвет фона линейки обзора редактора. Используется только тогда, когда мини-карта включена и размещена в правой части редактора.
    "editorOverviewRuler.border": "#027b32", // цвет границы обзорной линейки.
    "editorOverviewRuler.findMatchForeground": "#027b32", // Обзор цвета маркера линейки для поиска совпадений. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorOverviewRuler.rangeHighlightForeground": "#027b324a", // обзор цвета маркера линейки для выделенных диапазонов, например функций быстрого открытия, символа в файле и поиска. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorOverviewRuler.selectionHighlightForeground": "#027b3287", // Обзор цвета маркера линейки для выделенных выделений. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorOverviewRuler.wordHighlightForeground": "#027b3287", // обзор цвета маркера линейки для выделений символов. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorOverviewRuler.wordHighlightStrongForeground": "#027b3287", // обзор цвета маркера линейки для выделения символов доступа на запись. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorOverviewRuler.modifiedForeground": "#15ee018c", // Обзор цвета маркера линейки для измененного содержимого.
    "editorOverviewRuler.addedForeground": "#3e68c9", // Обзор цвета маркера линейки для добавленного содержимого.
    "editorOverviewRuler.deletedForeground": "#f7ff028c", // обзор цвета маркера линейки для удаленного содержимого.
    "editorOverviewRuler.errorForeground": "#be00008c", // Обзор цвета маркера линейки для ошибок.
    "editorOverviewRuler.warningForeground": "#ff73008c", // обзор цвета маркера линейки для предупреждений.
    "editorOverviewRuler.infoForeground": "#3e68c98c", // обзор цвета маркера линейки для информации.
    "editorOverviewRuler.bracketMatchForeground": "#9500ff8c", // Обзор цвета маркера линейки для сопоставления скобок.
    "editorError.foreground": "#be000056", // Цвет переднего плана ошибок в редакторе.
    "editorError.border": "#be0000", // цвет границы полей ошибок в редакторе.
    "editorError.background": "#be000040", // Цвет фона текста ошибки в редакторе. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorWarning.foreground": "#be0000", // Цвет переднего плана предупреждающих волнистых  редакторе.
    "editorWarning.border": "#ff770037", // цвет границы предупреждающих полей в редакторе.
    "editorWarning.background": "#ff770000", // Цвет фона текста предупреждения в редакторе. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorInfo.foreground": "#3e68c9", // Цвет переднего плана информации закипает в редакторе.
    "editorInfo.border": "#0a059483", // Цвет границы информационных полей в редакторе.
    "editorInfo.background": "#17171700", // Цвет фона информационного текста в редакторе. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorHint.foreground": "#fbfbfd", // Передний план цвет подсказок в редакторе.
    "editorHint.border": "#027b32", // Цвет границы полей подсказок в редакторе.
    "problemsErrorIcon.foreground": "#ff00000f", // цвет, используемый для значка ошибки проблемы.
    "problemsWarningIcon.foreground": "#ff73008c", // цвет, используемый для значка предупреждения о проблемах.
    "problemsInfoIcon.foreground": "#3e68c98c", // цвет, используемый для значка сведений о проблемах.
    "editorUnnecessaryCode.border": "#232323", // цвет границы ненужного (неиспользуемого) исходного кода в редакторе.
    "editorUnnecessaryCode.opacity": "#be000093", // Непрозрачность ненужного (неиспользуемого) исходного кода в редакторе. Например, "#000000c0" отобразит код с непрозрачностью 75%. Для тем с высокой контрастностью используйте цвет "editorUnnecessaryCode.border", чтобы подчеркнуть ненужный код, а не выцветать.
    "editorGutter.background": "#171717", // Цвет фона желоба редактора. Желоб содержит поля глифов и номера строк.
    "editorGutter.modifiedBackground": "#027b32", // редактор цвета фона желоба для измененных линий.
    "editorGutter.addedBackground": "#3e68c9", // Редактор цвета фона желоба для добавляемых линий.
    "editorGutter.deletedBackground": "#be0000", // Редактор цвета фона желоба для удаленных строк.
    "editorGutter.commentRangeForeground": "#878787", // Редактор цвета оформления желоба для комментирования диапазонов.
    "editorGutter.foldingControlForeground": "#fbfbfd", // Цвет элемента управления складыванием в желобе редактора.
    "editorCommentsWidget.resolvedBorder": "#fbfbfd", // цвет границ и стрелка для разрешенных комментариев.
    "editorCommentsWidget.unresolvedBorder": "#fbfbfd", // цвет границ и стрелка для неразрешенных комментариев.
    "editorCommentsWidget.rangeBackground": "#027b32", // цвет фона для диапазонов комментариев.
    "editorCommentsWidget.rangeBorder": "#232323", // цвет границы для диапазонов комментариев.
       "editorCommentsWidget.rangeActiveBackground": "#232323",// цвет фона для выбранного в данный момент или наведенного диапазона комментариев.
     "editorCommentsWidget.rangeActiveBorder": "#232323",// цвет границы для выбранного в данный момент или наведенного диапазона комментариев.
    "diffEditor.insertedTextBackground": "#027b3287", // цвет фона для вставленного текста. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "diffEditor.insertedTextBorder": "#027b3287", // цвет контура для вставленного текста.
    "diffEditor.removedTextBackground": "#be00004c", // цвет фона для удаленного текста. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "diffEditor.removedTextBorder": "#be00004c", // цвет контура для удаляемого текста.
    "diffEditor.border": "#232323", // цвет границы между двумя текстовыми редакторами.
    "diffEditor.diagonalFill": "#fbfbfd46", // Цвет диагональной заливки редактора diff. Диагональная заливка используется в параллельных видах различий.
    "diffEditor.insertedLineBackground": "#027b3287", // цвет фона для вставленных строк. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "diffEditor.removedLineBackground": "#be00001c", // цвет фона для удаленных линий. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "diffEditorGutter.insertedLineBackground": "#027b3287", // цвет фона для поля, в которое были вставлены строки.
    "diffEditorGutter.removedLineBackground": "#be00001c", // цвет фона для поля, на котором были удалены линии.
    "diffEditorOverview.insertedForeground": "#027b3287", // обзор diff линейки переднего плана для вставленного содержимого.
    "diffEditorOverview.removedForeground": "#be00001c", // обзор diff линейки переднего плана для удаленного содержимого.
    "editorWidget.foreground": "#fbfbfd72", // цвет переднего плана виджетов редактора, например find/replace.
    "editorWidget.background": "#171717", // цвет фона виджетов редактора, таких как Find/Replace.
    "editorWidget.border": "#232323", // цвет границы виджета редактора, если виджет не содержит границы или не определяет свой собственный цвет границы.
    "editorWidget.resizeBorder": "#027b32", // цвет границы панели изменения размера виджетов редактора. Цвет используется только в том случае, если виджет выбирает границу изменения размера и если цвет не переопределяется виджетом.
    "editorSuggestWidget.background": "#232323", // Цвет фона виджета предложения.
    "editorSuggestWidget.border": "#232323", // цвет границы виджета предложения.
    "editorSuggestWidget.foreground": "#fbfbfd", // цвет переднего плана виджета предложения.
    "editorSuggestWidget.focusHighlightForeground": "#fbfbfd", // Цвет соответствия выделяется в виджете «Предложить» при фокусировке элемента.
    "editorSuggestWidget.highlightForeground": "#fbfbfd", // Цвет основных моментов матча в виджете предложения.
    "editorSuggestWidget.selectedBackground": "#232323", // цвет фона выбранной записи в виджете предложения.
    "editorSuggestWidget.selectedForeground": "#fbfbfd", // цвет переднего плана выбранной записи в виджете «Предложить».
    "editorSuggestWidget.selectedIconForeground": "#fbfbfd", // цвет значка переднего плана выбранной записи в виджете «Предложить».
    "editorSuggestWidgetStatus.foreground": "#3e68c9", // цвет переднего плана состояния предлагаемого виджета.
    "editorHoverWidget.foreground": "#fbfbfd", // цвет переднего плана редактора наведения.
    "editorHoverWidget.background": "#232323", // Цвет фона наведения редактора.
    "editorHoverWidget.border": "#232323", // Цвет границы наведения редактора.
    "editorHoverWidget.highlightForeground": "#027b32", // цвет переднего плана активного элемента в подсказке параметра.
    "editorHoverWidget.statusBarBackground": "#be00000e", // цвет фона строки состояния наведения редактора.
    "editorGhostText.border": "#027b3287", // цвет границы призрачного текста, отображаемого встроенными поставщиками завершения и предварительным просмотром предложений.
    "editorGhostText.background": "#027b32", // Цвет фона призрачного текста в редакторе.
    "editorGhostText.foreground": "#02eafb", // цвет переднего плана призрачного текста, отображаемого встроенными поставщиками завершения и предварительным просмотром предложений.
    "editorStickyScroll.background": "#232323", // Редактор липкой прокрутки цвета фона
    "editorStickyScrollHover.background": "#171717", // Редактор липкой прокрутки на наведении цвета фона
    "debugExceptionWidget.background": "#171717", // цвет фона виджета исключения.
    "debugExceptionWidget.border": "#232323", // цвет границы виджета исключения.
    "editorMarkerNavigation.background": "#171717", // Редактор маркера навигации виджет фона.
    "editorMarkerNavigationError.background": "#be000086", // Редактор маркера навигации виджет ошибки цвета.
    "editorMarkerNavigationWarning.background": "#8840018f", // Редактор маркера навигации виджет предупреждения цвета.
    "editorMarkerNavigationInfo.background": "#010a807f", // Редактор маркера навигации виджет информации цвет.
    "editorMarkerNavigationError.headerBackground": "#be00009d", // Редактор маркера навигации виджет ошибка заголовка фона.
    "editorMarkerNavigationWarning.headerBackground": "#8840018f", // Редактор маркера навигации виджет предупреждение заголовка фона.
    "editorMarkerNavigationInfo.headerBackground": "#171717", // Редактор маркера навигации виджет информации о заголовке фона.
    "peekView.border": "#eeff00a9", // цвет границ и стрелки представления обзора.
    "peekViewEditor.background": "#171717", // цвет фона редактора просмотра.
    "peekViewEditorGutter.background": "#171717", // цвет фона желоба в редакторе просмотра.
    "peekViewEditor.matchHighlightBackground": "#003e0564", // сопоставление цвета подсветки в редакторе просмотра.
    "peekViewEditor.matchHighlightBorder": "#003e0564", // сопоставление цвета границы подсветки в редакторе просмотра.
    "peekViewResult.background": "#171717", // цвет фона списка результатов просмотра.
    "peekViewResult.fileForeground": "#fbfbfd8f", // цвет переднего плана для узлов файлов в списке результатов просмотра.
    "peekViewResult.lineForeground": "#fbfbfd", // цвет переднего плана для узлов линий в списке результатов просмотра.
    "peekViewResult.matchHighlightBackground": "#003e0564", // соответствие цвета подсветки в списке результатов просмотра.
    "peekViewResult.selectionBackground": "#003e0564", // цвет фона выбранной записи в списке результатов просмотра.
    "peekViewResult.selectionForeground": "#027b32", // цвет переднего плана выбранной записи в списке результатов просмотра.
    "peekViewTitle.background": "#027b3287", // цвет фона области заголовка просмотра.
    "peekViewTitleDescription.foreground": "#be0000", // цвет сведений о заголовке представления просмотра.
    "peekViewTitleLabel.foreground": "#027b3287", // цвет заголовка просмотра.
    "merge.currentHeaderBackground": "#be000029", // текущий фон заголовка во встроенных конфликтах слияния. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "merge.currentContentBackground": "#be000061", // фон текущего содержимого во встроенных конфликтах слияния. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "merge.incomingHeaderBackground": "#027b3287", // фон входящего заголовка во встроенных конфликтах слияния. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "merge.incomingContentBackground": "#027b3287", // фон входящего содержимого во встроенных конфликтах слияния. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "merge.border": "#232323", // цвет границы в заголовках и разделитель во встроенных конфликтах слияния.
    "merge.commonContentBackground": "#027b326f", // общий фон содержимого предка во встроенных конфликтах слияний. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "merge.commonHeaderBackground": "#027b3287", // общий фон заголовка предка во встроенных конфликтах слияний. Цвет не должен быть непрозрачным, чтобы не скрывать подстилающие украшения.
    "editorOverviewRuler.currentContentForeground": "#027b3287", // текущий обзор линейки переднего плана для конфликтов встроенного слияния.
    "editorOverviewRuler.incomingContentForeground": "#fbfbfd", // передний план линейки входящего обзора для конфликтов встроенного слияния.
    "editorOverviewRuler.commonContentForeground": "#fbfbfd", // передний план линейки общего обзора предков для конфликтов встроенного слияния.
    "mergeEditor.change.background": "#171717", // цвет фона для изменений.
    "mergeEditor.change.word.background": "#171717", // изменяется цвет фона для слов.
    "mergeEditor.conflict.unhandledUnfocused.border": "#232323", // цвет границы необработанных несфокусированных конфликтов.
    "mergeEditor.conflict.unhandledFocused.border": "#efe70381", // цвет границы необработанных сфокусированных конфликтов.
    "mergeEditor.conflict.handledUnfocused.border": "#027b3287", // цвет границы обрабатываемых нецеленаправленных конфликтов.
    "mergeEditor.conflict.handledFocused.border": "#232323", // цвет границы обрабатываемых конфликтов фокуса.
    "mergeEditor.conflict.handled.minimapOverViewRuler": "#027b3287", // цвет переднего плана для изменений входных данных 1.
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": "#3e68c9", // цвет переднего плана для изменений входных данных 1.
    "mergeEditor.conflictingLines.background": "#be0000a8", // фон текста "Конфликтующие строки".
    "panel.background": "#171717", // цвет фона панели.
    "panel.border": "#232323", // цвет границы панели для отделения панели от редактора.
    "panel.dropBorder": "#fbfbfd", // перетаскивание цвета обратной связи для заголовков панелей. Панели отображаются под областью редактора и содержат такие виды, как вывод и встроенный терминал.
    "panelTitle.activeBorder": "#027b3287", // цвет границы для заголовка активной панели.
    "panelTitle.activeForeground": "#fbfbfd", // цвет заголовка для активной панели.
    "panelTitle.inactiveForeground": "#fbfbfd80", // цвет заголовка для неактивной панели.
    "panelInput.border": "#3e68c9", // граница поля ввода для входных данных на панели.
    "panelSection.border": "#be0000", // цвет границы секции панели, используемый при горизонтальном расположении нескольких представлений на панели. Панели отображаются под областью редактора и содержат такие виды, как вывод и встроенный терминал.
    "panelSection.dropBackground": "#ece8e8", // перетаскивание цвета обратной связи для разделов панели. Цвет должен иметь прозрачность, чтобы секции панели могли еще просвечивать. Панели отображаются под областью редактора и содержат такие виды, как вывод и встроенный терминал.
    "panelSectionHeader.background": "#171717", // цвет фона заголовка раздела панели. Панели отображаются под областью редактора и содержат такие виды, как вывод и встроенный терминал.
    "panelSectionHeader.foreground": "#fbfbfd", // цвет переднего плана заголовка раздела панели. Панели отображаются под областью редактора и содержат такие виды, как вывод и встроенный терминал.
    "panelSectionHeader.border": "#232323", // цвет границы заголовка раздела панели, используемый при вертикальном расположении нескольких представлений на панели. Панели отображаются под областью редактора и содержат такие виды, как вывод и встроенный терминал.
    "statusBar.background": "#232323", // стандартный цвет фона строки состояния.
    "statusBar.foreground": "#fbfbfd54", // цвет переднего плана строки состояния.
    "statusBar.border": "#232323", // цвет границы строки состояния, разделяющий строку состояния и редактор.
    "statusBar.debuggingBackground": "#be000064", // цвет фона строки состояния при отладке программы.
    "statusBar.debuggingForeground": "#fbfbfd", // цвет переднего плана строки состояния при отладке программы.
    "statusBar.debuggingBorder": "#9000ff71", // цвет границы строки состояния, разделяющий строку состояния и редактор при отладке программы.
    "statusBar.noFolderForeground": "#fbfbfd", // цвет строки состояния переднего плана, когда папка не открыта.
    "statusBar.noFolderBackground": "#ff6a0050", // цвет фона строки состояния, когда папка не открыта.
    "statusBar.noFolderBorder": "#ff6a0050", // цвет границы строки состояния, разделяющий строку состояния и редактор, когда папка не открыта.
    "statusBarItem.activeBackground": "#171717", // цвет фона элемента строки состояния при щелчке.
    "statusBarItem.hoverBackground": "#027b3287", // цвет фона элемента строки состояния при наведении указателя мыши.
    "statusBarItem.prominentForeground": "#027b32", //состояния заметных элементов цвета переднего плана.
    "statusBarItem.prominentBackground": "#171717", // строка состояния заметных элементов цвета фона.
    // "statusBarItem.prominentHoverBackground": "#171717",// строка состояния заметных элементов цвета фона при наведении курсора.
    "statusBarItem.remoteBackground": "#027b3287", // цвет фона для удаленного индикатора в строке состояния.
    // "statusBarItem.remoteForeground": "#fbfbfd",// цвет переднего плана для удаленного индикатора в строке состояния.
    "statusBarItem.errorBackground": "#be00006f", // цвет фона элементов ошибки строки состояния. Элементы ошибок выделяются из других записей строки состояния для указания условий ошибки.
    "statusBarItem.errorForeground": "#be000086", // элементы ошибки строки состояния цвета переднего плана. Элементы ошибок выделяются из других записей строки состояния для указания условий ошибки.
    "statusBarItem.warningBackground": "#fba40196", // цвет фона предупреждающих элементов строки состояния. Предупреждающие элементы выделяются из других записей строки состояния, указывая на предупреждающие условия. Строка состояния отображается в нижней части окна.
    "statusBarItem.warningForeground": "#3e68c97c", //элементы строки состояния цвет переднего плана. Предупреждающие элементы выделяются из других записей строки состояния, указывая на предупреждающие условия. Строка состояния отображается в нижней части окна.
    "statusBarItem.compactHoverBackground": "#171717", // цвет фона элемента строки состояния при наведении указателя мыши на элемент, содержащий два наведения. Строка состояния отображается в нижней части окна.
    "statusBarItem.focusBorder": "#232323", // цвет границы элемента строки состояния при фокусировке на навигации с помощью клавиатуры. Строка состояния отображается в нижней части окна.
    "statusBarItem.settingsProfilesForeground": "#fbfbfd", // цвет переднего плана для записи профиля настроек в строке состояния.
    "statusBarItem.settingsProfilesBackground": "#171717", // цвет фона для записи профиля настроек в строке состояния.
    "statusBar.focusBorder": "#232323", // цвет границы строки состояния при фокусировке на навигации с клавиатуры. Строка состояния отображается в нижней части окна.
    "titleBar.activeBackground": "#171717", // фон строки заголовка, когда окно активно.
    "titleBar.activeForeground": "#fbfbfd4b", // строка заголовка переднего плана, когда окно активно.
    "titleBar.inactiveBackground": "#171717", // фон строки заголовка, когда окно неактивно.
    "titleBar.inactiveForeground": "#fbfbfd6f", // строка заголовка переднего плана, когда окно неактивно.
    "titleBar.border": "#3e68c979", // цвет границы строки заголовка.
    "menubar.selectionForeground": "#fbfbfd", // цвет переднего плана выбранного пункта меню в строке меню.
    "menubar.selectionBackground": "#027b3287", // цвет фона выбранного пункта меню в строке меню.
    "menubar.selectionBorder": "#058309a8", // цвет границы выбранного пункта меню в строке меню.
    "menu.foreground": "#fbfbfd", // Цвет переднего плана пунктов меню.
    "menu.background": "#171717", // Цвет фона элементов меню.
    "menu.selectionForeground": "#fbfbfd", // Цвет переднего плана выбранного пункта меню в меню.
    "menu.selectionBackground": "#027b3287", // цвет фона выбранного пункта меню в меню.
    "menu.selectionBorder": "#027b3287", // цвет границы выбранного пункта меню в меню.
    "menu.separatorBackground": "#232323", // Цвет элемента меню разделителя в меню.
    "menu.border": "#232323", // цвет границ меню.
    "commandCenter.foreground": "#fbfbfd6b", // цвет переднего плана командного центра
    "commandCenter.activeForeground": "#fbfbfd", // активный цвет переднего плана командного центра
    "commandCenter.background": "#171717", // цвет фона командного центра
    "commandCenter.activeBackground": "#027b3287", // активный цвет фона командного центра
    "commandCenter.border": "#232323", // цвет границы командного центра
    "notificationCenter.border": "#232323", // цвет границы центра уведомлений.
    "notificationCenterHeader.foreground": "#fbfbfd", // цвет переднего плана заголовка Центра уведомлений.
    "notificationCenterHeader.background": "#171717", // цвет фона заголовка Центра уведомлений.
    "notificationToast.border": "#232323", // цвет границы всплывающего уведомления.
    "notifications.foreground": "#fbfbfd86", // цвет переднего плана уведомления.
    "notifications.background": "#171717", // цвет фона уведомлений.
    "notifications.border": "#232323", // цвет границы уведомления, отделяющийся от других уведомлений в Центре уведомлений.
    "notificationLink.foreground": "#3e68c9", // цвет переднего плана ссылок уведомлений.
    "notificationsErrorIcon.foreground": "#be00007c", // цвет, используемый для значка ошибки уведомления.
    "notificationsWarningIcon.foreground": "#3e68c97e", // цвет, используемый для значка предупреждения об уведомлении.
    "notificationsInfoIcon.foreground": "#3e68c9", // цвет, используемый для значка сведений об уведомлении.
    "banner.background": "#027b3287", // цвет фона баннера.
    "banner.foreground": "#171717", // Цвет переднего плана баннера.
    "banner.iconForeground": "#027b3287", // цвет значка перед текстом баннера.
    "extensionButton.prominentForeground": "#fbfbfd", // вид расширения, цвет кнопки переднего плана (например, кнопка Установить).
    "extensionButton.prominentBackground": "#027b3287", // цвет фона кнопки представления расширения.
    "extensionButton.prominentHoverBackground": "#027b3257", // вид расширения кнопки фона наведения цвета.
    "extensionBadge.remoteBackground": "#027b3287", // цвет фона для индикатора событий удаленного управления в представлении расширений.
    "extensionBadge.remoteForeground": "#fbfbfd", // цвет переднего плана для индикатора событий удаленного управления в представлении расширений.
    "extensionIcon.starForeground": "#ffe600", // цвет значка для рейтингов расширений.
    "extensionIcon.verifiedForeground": "#3e68c9", // цвет значка для расширения проверенного издателя.
    "extensionIcon.preReleaseForeground": "#ff9203", // цвет значка для предварительного выпуска расширения.
    "gitDecoration.addedResourceForeground": "#027b32", // Цвет для добавленных ресурсов Git. Используется для подписей файлов и просмотра SCM.
    "gitDecoration.modifiedResourceForeground": "#3e68c9", // цвет для измененных ресурсов Git. Используется для подписей файлов и просмотра SCM.
    "gitDecoration.deletedResourceForeground": "#be0000", // цвет для удаленных ресурсов Git. Используется для подписей файлов и просмотра SCM.
    "gitDecoration.renamedResourceForeground": "#fbfbfd", // цвет для переименованных или скопированных ресурсов Git. Используется для подписей файлов и просмотра SCM.
    "gitDecoration.stageModifiedResourceForeground": "#018403", // Цвет для постановочных модификаций git декораций. Используется для подписей файлов и просмотра SCM.
    "gitDecoration.stageDeletedResourceForeground": "#3e68c9", // Цвет для поэтапных удалений git декораций. Используется для подписей файлов и просмотра SCM.
    "gitDecoration.untrackedResourceForeground": "#fbfbfd89", // цвет для неотслеживаемых ресурсов Git. Используется для подписей файлов и просмотра SCM.
    "gitDecoration.ignoredResourceForeground": "#9f4500", // цвет для игнорируемых ресурсов Git. Используется для подписей файлов и просмотра SCM.
    "gitDecoration.conflictingResourceForeground": "#fe8301", // цвет для конфликтующих ресурсов Git. Используется для подписей файлов и просмотра SCM.
    "gitDecoration.submoduleResourceForeground": "#232323", // цвет для ресурсов подмодуля.
    "extensionIcon.sponsorForeground": "#7700ff", // Цвет значка для спонсора расширения.
    "pickerGroup.border": "#027b3287", // цвет быстрого выбора (быстрое открытие) для группировки границ.
    "pickerGroup.foreground": "#fbfbfd", // цвет быстрого выбора (быстрое открытие) для группировки меток.
    "quickInput.background": "#171717", // быстрый ввод цвета фона. Виджет быстрого ввода — это контейнер для представлений, таких как палитра цветовой темы.
    "quickInput.foreground": "#fbfbfd", // быстрый ввод цвета переднего плана. Виджет быстрого ввода — это контейнер для представлений, таких как палитра цветовой темы.
    "quickInputList.focusBackground": "#027b3287", // быстрый выбор цвета фона для фокусированного элемента.
    "quickInputList.focusForeground": "#fbfdfb", // быстрое выделение цвета переднего плана для сфокусированного элемента.
    "quickInputList.focusIconForeground": "#027b3287", // цвет значка переднего плана быстрого выбора для сфокусированного элемента.
    "quickInputTitle.background": "#fbfbfd84", // цвет фона заголовка при быстром выборе. Виджет быстрого выбора — это контейнер для средств выбора, таких как палитра команд.
    "keybindingLabel.foreground": "#027b3287", // Keybinding label foreground color. Метка привязки клавиш используется для представления сочетания клавиш.
    "keybindingLabel.border": "#232323", // цвет границы метки ключа. Метка привязки клавиш используется для представления сочетания клавиш.
    "keybindingLabel.bottomBorder": "#027b32", // Keybinding label border bottom color. Метка привязки клавиш используется для представления сочетания клавиш.
    "keybindingTable.headerBackground": "#171717", // цвет фона для заголовка таблицы сочетаний клавиш.
    "keybindingTable.rowsBackground": "#232323", // цвет фона для таблицы сочетаний клавиш, чередующих строки.
    "terminal.background": "#171717", // фон окна просмотра интегрированного терминала.
    "terminal.border": "#232323", // цвет границы, разделяющей разделенные панели внутри терминала. По умолчанию используется значение panel.border.
    "terminal.foreground": "#fbfbfd81", // цвет переднего плана интегрированного терминала по умолчанию.
    "terminal.ansiBlack": "#33c76e", // 'Черный' цвет ANSI в терминале.
    "terminal.ansiBlue": "#346ec5", // 'Синий' цвет ANSI в терминале.
    "terminal.ansiBrightBlack": "#665C54", // цвет ANSI 'BrightBlack' в терминале.
    "terminal.ansiBrightBlue": "#004cff", // 'BrightBlue' ЦВЕТ ANSI в терминале.
    "terminal.ansiBrightCyan": "#0099ff", // 'BrightCyan' ANSI цвет в терминале.
    "terminal.ansiBrightGreen": "#44ff00", // 'ЯркоЗеленый' цвет ANSI в терминале.
    "terminal.ansiBrightMagenta": "#FF00FF", // 'BrightMagenta' ЦВЕТ ANSI в терминале.
    "terminal.ansiBrightRed": "#ff0000", // 'Ярко-красный' цвет ANSI в терминале.
    "terminal.ansiBrightWhite": "#ffffff", // 'BrightWhite' ЦВЕТ ANSI в терминале.
    "terminal.ansiBrightYellow": "#eaff00", // 'BrightYellow' ANSI цвет в терминале.
    "terminal.ansiCyan": "#3e68c9", // 'Голубой' цвет ANSI в терминале.
    "terminal.ansiGreen": "#027b32", // 'Зеленый' цвет ANSI в терминале.
    "terminal.ansiMagenta": "#9c309c", // 'Пурпурный' цвет ANSI в терминале.
    "terminal.ansiRed": "#be0000", // 'Красный' цвет ANSI в терминале.
    "terminal.ansiWhite": "#fbfbfd", // 'Белый' цвет ANSI в терминале.
    "terminal.ansiYellow": "#fffb00", // 'Желтый' цвет ANSI в терминале.
    "terminal.selectionBackground": "#027b3210", // выбор цвета фона терминала.
    "terminal.selectionForeground": "#ffffff", // выбор цвета переднего плана терминала. Если значение равно null, передний план выделения будет сохранен и будет применен параметр минимального коэффициента контрастности.
    "terminal.inactiveSelectionBackground": "#23232350", // выделенный цвет фона терминала, когда он не имеет фокуса.
    "terminal.findMatchBackground": "#027b3251", // Цвет текущего соответствия поиска в терминале. Цвет не должен быть непрозрачным, чтобы не скрывать основное содержимое терминала.
    "terminal.findMatchBorder": "#027b3255", // цвет границы текущего соответствия поиска в терминале.
    "terminal.findMatchHighlightBackground": "#fef1002e", // Цвет других совпадений поиска в терминале. Цвет не должен быть непрозрачным, чтобы не скрывать основное содержимое терминала.
    "terminal.findMatchHighlightBorder": "#fef10025", // цвет границы других поисковых совпадений в терминале.
    "terminalCursor.background": "#ff0000", // цвет фона курсора терминала. Позволяет настраивать цвет символа, перекрываемого блочным курсором.
    "terminalCursor.foreground": "#fbfbfd", // цвет переднего плана курсора терминала.
    "terminal.dropBackground": "#dffc005e", // цвет фона при перетаскивании поверх терминалов. Цвет должен иметь прозрачность, чтобы содержимое терминала все еще могло просвечивать.
    "terminal.tab.activeBorder": "#027b32", // граница на боковой стороне вкладки терминала на панели. По умолчанию используется tab.activeBorder.
    "terminalCommandDecoration.defaultBackground": "#fbfbfd6e", // цвет фона оформления команды терминала по умолчанию.
    "terminalCommandDecoration.successBackground": "#027b326e", // цвет фона оформления команд терминала для успешных команд.
    "terminalCommandDecoration.errorBackground": "#be00006e", // цвет фона оформления команд терминала для команд ошибок.
    "terminalOverviewRuler.cursorForeground": "#027b3258", // цвет курсора линейки обзора.
    "terminalOverviewRuler.findMatchForeground": "#027b3229", // Обзор цвета маркера линейки для поиска совпадений в терминале.
    "debugToolBar.background": "#171717", // отладочный цвет фона панели инструментов.
    "debugToolBar.border": "#232323", // отладочный цвет границы панели инструментов.
    "editor.stackFrameHighlightBackground": "#fbfbfd73", // цвет фона подсветки верхнего кадра стека в редакторе.
    "editor.focusedStackFrameHighlightBackground": "#027b3287", // цвет фона выделенного кадра фокусированного стека в редакторе.
    "editor.inlineValuesForeground": "#fbfbfd", // цвет для текста встроенного значения отладки.
    "editor.inlineValuesBackground": "#027b3269", // цвет фона встроенного значения отладки.
    "debugView.exceptionLabelForeground": "#fbfbfd", // цвет переднего плана для метки, отображаемой в представлении CALL STACK, когда отладчик прерывается при исключении
    "debugView.exceptionLabelBackground": "#171717", // цвет фона для метки, отображаемой в представлении CALL STACK при разрыве отладчика исключения
    "debugView.stateLabelForeground": "#fbfbfd", // цвет переднего плана для метки в представлении CALL STACK, показывающий состояние текущего сеанса или потока
    "debugView.stateLabelBackground": "#171717", // цвет фона для метки в представлении CALL STACK, показывающий состояние текущего сеанса или потока
    "debugView.valueChangedHighlight": "#fbfbfd", // цвет, используемый для выделения изменений значений в отладочных представлениях (т.е. в представлении Переменные)
    "debugTokenExpression.name": "#fbfbfd", // цвет переднего плана для имен маркеров, отображаемых в представлениях отладки (например, в представлении «Переменные» или «Контрольные значения»)
    "debugTokenExpression.value": "#fbfbfd", // цвет переднего плана для значений маркеров, отображаемых в представлениях отладки
    "debugTokenExpression.string": "#fbfbfd", // цвет переднего плана для строк в представлениях отладки
    "debugTokenExpression.boolean": "#fbfbfd", // цвет переднего плана для логических значений в отладочных представлениях
    "debugTokenExpression.number": "#fbfbfd", // цвет переднего плана для чисел в отладочных представлениях
    "debugTokenExpression.error": "#be0000", // цвет переднего плана для ошибок выражений в представлениях отладки
    "testing.iconFailed": "#be00005d", // цвет значка 'failed' в обозревателе тестов.
    "testing.iconErrored": "#be00005d", // цвет значка "Ошибка" в проводнике тестов.
    "testing.iconPassed": "#027b325d", // цвет значка "пройдено" в обозревателе тестов.
    "testing.runAction": "#028dff", // Цвет для значков 'run' в редакторе.
    "testing.iconQueued": "#ffea00", // цвет значка "В очереди" в обозревателе тестов.
    "testing.iconUnset": "#ff9501", // цвет значка 'Unset' в проводнике тестов.
    "testing.iconSkipped": "#ffa600", // цвет значка "Пропущено" в проводнике тестов.
    "testing.peekBorder": "#171717", // Цвет границ и стрелки просмотра.
    "testing.peekHeaderBackground": "#be0000", // цвет границ и стрелки представления обзора.
    "testing.message.error.decorationForeground": "#be0000", // Цвет текста тестовых сообщений об ошибках, отображаемых в редакторе.
    "testing.message.error.lineBackground": "#be00007e", // цвет поля рядом с сообщениями об ошибках, отображаемыми в редакторе.
    "testing.message.info.decorationForeground": "#3e68c98f", // Цвет текста тестовых информационных сообщений, отображаемых в редакторе.
    "testing.message.info.lineBackground": "#3e68c9", // цвет полей рядом с информационными сообщениями, отображаемыми в редакторе.
    "welcomePage.background": "#171717", // цвет фона для страницы приветствия.
    "welcomePage.progress.background": "#232323", // цвет переднего плана для индикаторов выполнения страницы приветствия.
    "welcomePage.progress.foreground": "#01590f91", // цвет фона для индикаторов выполнения страницы приветствия.
    "welcomePage.tileBackground": "#232323", // цвет фона для плиток на странице Начало работы.
    "welcomePage.tileHoverBackground": "#171717", // наведите указатель мыши на цвет фона для плиток в разделе Приступая к работе.
    "welcomePage.tileShadow": "#232323", // цвет тени для кнопок категорий пошагового руководства страницы приветствия.
    "walkThrough.embeddedEditorBackground": "#232323", // цвет фона для встроенных редакторов интерактивной игровой площадки.

    /// ###############
    "scm.providerBorder": "#232323", // граница разделителя поставщика SCM.
    "breadcrumb.foreground": "#fbfbfd", // Цвет хлебных сухарей.
    "breadcrumb.background": "#171717", // Цвет фона элементов панировочной сухари.
    "breadcrumb.focusForeground": "#fbfbfd", // цвет сфокусированных хлебных сухарей.
    "breadcrumb.activeSelectionForeground": "#fbfbfd", // цвет выбранных элементов панировочной сухари.
    "breadcrumbPicker.background": "#232323", // Цвет фона средства выбора элементов навигационной сухари.
    "editor.snippetTabstopHighlightBackground": "#171717", // выделение цвета фона вкладки фрагмента.
    "editor.snippetTabstopHighlightBorder": "#232323", // выделение цвета границы табуляции фрагмента.
    "editor.snippetFinalTabstopHighlightBackground": "#171717", // выделение цвета фона последней вкладки фрагмента.
    "editor.snippetFinalTabstopHighlightBorder": "#232323", // выделите цвет границы последней вкладки фрагмента.
    "symbolIcon.arrayForeground": "#3e68c9", // цвет переднего плана для символов массива.
    "symbolIcon.booleanForeground": "#7a00fc", // цвет переднего плана для логических символов.
    "symbolIcon.classForeground": "#027b32", // цвет переднего плана для символов класса.
    "symbolIcon.colorForeground": "#027b32", // Цвет переднего плана для цветовых символов.
    "symbolIcon.constantForeground": "#ffc803", // цвет переднего плана для константных символов.
    "symbolIcon.constructorForeground": "#02fffb", // цвет переднего плана для символов конструктора.
    "symbolIcon.enumeratorForeground": "#48bc6f", // цвет переднего плана для символов перечислителя.
    "symbolIcon.enumeratorMemberForeground": "#027b32", // цвет переднего плана для символов членов перечислителя.
    "symbolIcon.eventForeground": "#ff00d9", // цвет переднего плана для символов событий.
    "symbolIcon.fieldForeground": "#be0000", // цвет переднего плана для символов полей.
    "symbolIcon.fileForeground": "#3e68c9", // цвет переднего плана для символов файлов.
    "symbolIcon.folderForeground": "#027b3287", // цвет переднего плана для символов папок.
    "symbolIcon.functionForeground": "#a403e4", // цвет переднего плана для символов функций.
    "symbolIcon.interfaceForeground": "#fc0050", // цвет переднего плана для символов интерфейса.
    "symbolIcon.keyForeground": "#00fc48", // цвет переднего плана для ключевых символов.
    "symbolIcon.keywordForeground": "#ffd501", // цвет переднего плана для символов ключевых слов.
    "symbolIcon.methodForeground": "#ff00ae", // цвет переднего плана для символов метода.
    "symbolIcon.moduleForeground": "#03922e", // цвет переднего плана для символов модуля.
    "symbolIcon.namespaceForeground": "#f6f202", // цвет переднего плана для символов пространства имен.
    "symbolIcon.nullForeground": "#323232", // цвет переднего плана для пустых символов.
    "symbolIcon.numberForeground": "#f89604", // цвет переднего плана для числовых символов.
    "symbolIcon.objectForeground": "#99ff00", // цвет переднего плана для символов объекта.
    "symbolIcon.operatorForeground": "#5555e8", // цвет переднего плана для символов оператора.
    "symbolIcon.packageForeground": "#dc00a9", // цвет переднего плана для символов пакета.
    "symbolIcon.propertyForeground": "#fbfbfd", // цвет переднего плана для символов свойств.
    "symbolIcon.referenceForeground": "#03f7ff", // цвет переднего плана для эталонных символов.
    "symbolIcon.snippetForeground": "#a4a4a7", // цвет переднего плана для символов фрагмента.
    "symbolIcon.stringForeground": "#b0b0d7", // цвет переднего плана для строковых символов.
    "symbolIcon.structForeground": "#1f1f49", // Цвет переднего плана для символов структуры.
    "symbolIcon.textForeground": "#8ead02", // цвет переднего плана для текстовых символов.
    "symbolIcon.typeParameterForeground": "#6cc30f", // цвет переднего плана для символов параметров типа.
    "symbolIcon.unitForeground": "#1cea7f", // цвет переднего плана для символов объектов.
    "symbolIcon.variableForeground": "#fcbb06", // цвет переднего плана для переменных символов.
//######

    //  "debugIcon.breakpointForeground": "#fbfbfd",// цвет значка для точек останова.
    //    "debugIcon.breakpointDisabledForeground": "#fbfbfd",// цвет значка для отключенных точек останова.
    //    "debugIcon.breakpointUnverifiedForeground": "#fbfbfd",// цвет значка для непроверенных точек останова.
    // "debugIcon.breakpointCurrentStackframeForeground": "#fbfbfd",// цвет значка для текущего фрейма стека точек останова.
    // "debugIcon.breakpointStackframeForeground": "#fbfbfd",// цвет значка для всех фреймов стека точек останова.
    // "debugIcon.startForeground": "#fbfbfd",// значок панели инструментов отладки для начала отладки.
    // "debugIcon.pauseForeground": "#fbfbfd",// значок панели инструментов отладки для паузы.
    // "debugIcon.stopForeground": "#fbfbfd",// значок панели инструментов отладки для остановки.
    // "debugIcon.disconnectForeground": "#fbfbfd",// значок панели инструментов отладки для отключения.
    // "debugIcon.restartForeground": "#fbfbfd",// значок панели инструментов отладки для перезапуска.
    // "debugIcon.stepOverForeground": "#fbfbfd",// значок панели инструментов отладки для перехода.
    // "debugIcon.stepIntoForeground": "#fbfbfd",// значок панели инструментов отладки для пошагового ввода.
    // "debugIcon.stepOutForeground": "#fbfbfd",// значок панели инструментов отладки для перехода.
    // "debugIcon.continueForeground": "#fbfbfd",// значок панели инструментов отладки для продолжения.
    // "debugIcon.stepBackForeground": "#fbfbfd",// значок панели инструментов отладки для шага назад.
    // "debugConsole.infoForeground": "#fbfbfd",// цвет переднего плана для информационных сообщений в консоли отладки REPL.
    // "debugConsole.warningForeground": "#fbfbfd",// цвет переднего плана для предупреждающих сообщений в консоли отладки REPL.
    // "debugConsole.errorForeground": "#fdfbfb",// цвет переднего плана для сообщений об ошибках в консоли отладки REPL.
    // "debugConsole.sourceForeground": "#fbfbfd",// цвет переднего плана для имен исходных файлов в консоли отладки REPL.
    // "debugConsoleInputIcon.foreground": "#fbfbfd",// цвет переднего плана для значка маркера ввода консоли отладки.
    // "notebook.editorBackground": "#171717",// цвет фона ноутбука.
    // "notebook.cellBorderColor": "#fbfbfd",// цвет границы для ячеек записной книжки.
    // "notebook.cellHoverBackground": "#171717",// цвет фона ячейки при наведении указателя мыши.
    // "notebook.cellInsertionIndicator": "#fbfbfd",// цвет индикатора вставки ячейки записной книжки.
    // "notebook.cellStatusBarItemHoverBackground": "#171717",// цвет фона элементов строки состояния ячейки записной книжки.
    // "notebook.cellToolbarSeparator": "#fbfbfd",// цвет разделителя на нижней панели инструментов ячейки
    // "notebook.cellEditorBackground": "#171717",// цвет фона редактора ячеек записной книжки
    // "notebook.focusedCellBackground": "#171717",// цвет фона ячейки при фокусировке ячейки.
    // "notebook.focusedCellBorder": "#fbfbfd",// цвет границ индикатора фокусировки ячейки при фокусировке ячейки.
    // "notebook.focusedEditorBorder": "#fbfbfd",// цвет границы редактора ячейки записной книжки.
    // "notebook.inactiveFocusedCellBorder": "#fbfbfd",// цвет верхней и нижней границы ячейки, когда ячейка сфокусирована, а основной фокус находится за пределами редактора.
    // "notebook.inactiveSelectedCellBorder": "#fbfbfd",// цвет границ ячейки при выделении нескольких ячеек.
    // "notebook.outputContainerBackgroundColor": "#fbfbfd",// Цвет фона контейнера вывода записной книжки.
    // "notebook.outputContainerBorderColor": "#fbfbfd",// цвет границы контейнера вывода записной книжки.
    // "notebook.selectedCellBackground": "#171717",// цвет фона ячейки при выделении ячейки.
    // "notebook.selectedCellBorder": "#fbfbfd",// цвет верхней и нижней границ ячейки, когда ячейка выделена, но не сфокусирована.
    // "notebook.symbolHighlightBackground": "#171717",// Цвет фона выделенной ячейки
    // "notebookScrollbarSlider.activeBackground": "#171717",// Цвет фона ползунка полосы прокрутки ноутбука при нажатии на него.
    // "notebookScrollbarSlider.background": "#171717",// Цвет фона ползунка полосы прокрутки ноутбука.
    // "notebookScrollbarSlider.hoverBackground": "#171717",// Цвет фона ползунка полосы прокрутки ноутбука при наведении.
    // "notebookStatusErrorIcon.foreground": "#fbfbfd",// цвет значка ошибки ячеек записной книжки в строке состояния ячейки.
    // "notebookStatusRunningIcon.foreground": "#fbfbfd",// цвет значка выполнения ячеек записной книжки в строке состояния ячейки.
    // "notebookStatusSuccessIcon.foreground": "#fbfbfd",// цвет значка успеха ячеек записной книжки в строке состояния ячейки.
    "charts.foreground": "#fbfbfd", // контрастный цвет для текста на диаграммах.
     "charts.lines": "#fbfbfd",// Цвет для линий на графиках.
    "charts.red": "#be0000", // цвет для красных элементов на графиках.
    "charts.blue": "#3e68c9", // Цвет для синих элементов в диаграммах.
    "charts.yellow": "#fff700", // Цвет для желтых элементов на графиках.
    "charts.orange": "#ff6b02", // Цвет для оранжевых элементов в диаграммах.
    "charts.green": "#027b32", // цвет для зеленых элементов в диаграммах.
    "charts.purple": "#8800ff", // Цвет фиолетовых элементов в диаграммах.
    "ports.iconRunningProcessForeground": "#be0000"// цвет значка порта, с которым связан выполняющийся процесс.
  },
  // Specifies the color theme used in the workbench.
  // "workbench.colorTheme": "Default Dark+",
  //"workbench.colorTheme": "Atom One Dark",
  // Controls the number of recently used commands to keep in history for the command palette. Set to 0 to disable command history.
  "workbench.commandPalette.history": 50,
  // Controls whether the last typed input to the command palette should be restored when opening it the next time.
  "workbench.commandPalette.preserveInput": false,
  // If an editor matching one of the listed types is opened as the first in an editor group and more than one group is open, the group is automatically locked. Locked groups will only be used for opening editors when explicitly chosen by user gesture (e.g. drag and drop), but not by default. Consequently the active editor in a locked group is less likely to be replaced accidentally with a different editor.
  "workbench.editor.autoLockGroups": {
    "default": false,
    "vscode-interactive-input": false,
    "interactive": false,
    "workbench.editorinputs.searchEditorInput": false,
    "imagePreview.previewEditor": false,
    "vscode.markdown.preview.editor": false,
    "jsProfileVisualizer.cpuprofile.table": false,
    "jsProfileVisualizer.heapprofile.table": false,
    "terminalEditor": true,
    "jupyter-notebook": false,
    "mainThreadWebview-markdown.preview": false
  },
  // Controls if the centered layout should automatically resize to maximum width when more than one group is open. Once only one group is open it will resize back to the original centered width.
  "workbench.editor.centeredLayoutAutoResize": true,
  // Controls the behavior of empty editor groups when the last tab in the group is closed. When enabled, empty groups will automatically close. When disabled, empty groups will remain part of the grid.
  "workbench.editor.closeEmptyGroups": true,
  // Controls whether editors showing a file that was opened during the session should close automatically when getting deleted or renamed by some other process. Disabling this will keep the editor open  on such an event. Note that deleting from within the application will always close the editor and that editors with unsaved changes will never close to preserve your data.
  "workbench.editor.closeOnFileDelete": false,
  // Controls whether editor file decorations should use badges.
  "workbench.editor.decorations.badges": true,
  // Controls whether editor file decorations should use colors.
  "workbench.editor.decorations.colors": true,
  // The default editor for files detected as binary. If undefined, the user will be presented with a picker.
  "workbench.editor.defaultBinaryEditor": "",
  // Controls whether opened editors show as preview editors. Preview editors do not stay open, are reused until explicitly set to be kept open (e.g. via double click or editing), and show file names in italics.
  "workbench.editor.enablePreview": true,
  // Controls whether editors remain in preview when a code navigation is started from them. Preview editors do not stay open, and are reused until explicitly set to be kept open (e.g. via double click or editing). This value is ignored when `workbench.editor.enablePreview` is disabled.
  "workbench.editor.enablePreviewFromCodeNavigation": false,
  // Controls whether editors opened from Quick Open show as preview editors. Preview editors do not stay open, and are reused until explicitly set to be kept open (e.g. via double click or editing). This value is ignored when `workbench.editor.enablePreview` is disabled.
  "workbench.editor.enablePreviewFromQuickOpen": false,
  // Controls whether tabs are closed in most recently used order or from left to right.
  "workbench.editor.focusRecentEditorAfterClose": true,
  // Controls whether a top border is drawn on tabs for editors that have unsaved changes. This value is ignored when `workbench.editor.showTabs` is disabled.
  "workbench.editor.highlightModifiedTabs": false,
  // Enables use of editor history in language detection. This causes automatic language detection to favor languages that have been recently opened and allows for automatic language detection to operate with smaller inputs.
  "workbench.editor.historyBasedLanguageDetection": true,
  // Controls the format of the label for an editor.
  //  - default: Show the name of the file. When tabs are enabled and two files have the same name in one group the distinguishing sections of each file's path are added. When tabs are disabled, the path relative to the workspace folder is shown if the editor is active.
  //  - short: Show the name of the file followed by its directory name.
  //  - medium: Show the name of the file followed by its path relative to the workspace folder.
  //  - long: Show the name of the file followed by its absolute path.
  "workbench.editor.labelFormat": "default",
  // Controls whether the language in a text editor is automatically detected unless the language has been explicitly set by the language picker. This can also be scoped by language so you can specify which languages you do not want to be switched off of. This is useful for languages like Markdown that often contain other languages that might trick language detection into thinking it's the embedded language and not Markdown.
  "workbench.editor.languageDetection": true,
  // When enabled, shows a Status bar Quick Fix when the editor language doesn't match detected content language.
  "workbench.editor.languageDetectionHints": {
    "untitledEditors": true,
    "notebookEditors": true
  },
  // Controls if the number of opened editors should be limited or not. When enabled, less recently used editors will close to make space for newly opening editors.
  "workbench.editor.limit.enabled": false,
  // Controls if the maximum number of opened editors should exclude dirty editors for counting towards the configured limit.
  "workbench.editor.limit.excludeDirty": false,
  // Controls if the limit of maximum opened editors should apply per editor group or across all editor groups.
  "workbench.editor.limit.perEditorGroup": false,
  // Controls the maximum number of opened editors. Use the `workbench.editor.limit.perEditorGroup` setting to control this limit per editor group or across all groups.
  "workbench.editor.limit.value": 10,
  // Enables the use of mouse buttons four and five for commands 'Go Back' and 'Go Forward'.
  "workbench.editor.mouseBackForwardToNavigate": true,
  // Controls the scope of history navigation in editors for commands such as 'Go Back' and 'Go Forward'.
  //  - default: Navigate across all opened editors and editor groups.
  //  - editorGroup: Navigate only in editors of the active editor group.
  //  - editor: Navigate only in the active editor.
  "workbench.editor.navigationScope": "default",
  // Controls where editors open. Select `left` or `right` to open editors to the left or right of the currently active one. Select `first` or `last` to open editors independently from the currently active one.
  "workbench.editor.openPositioning": "right",
  // Controls the default direction of editors that are opened side by side (for example, from the Explorer). By default, editors will open on the right hand side of the currently active one. If changed to `down`, the editors will open below the currently active one.
  "workbench.editor.openSideBySideDirection": "right",
  // Controls the sizing of pinned editor tabs. Pinned tabs are sorted to the beginning of all opened tabs and typically do not close until unpinned. This value is ignored when `workbench.editor.showTabs` is disabled.
  //  - normal: A pinned tab inherits the look of non pinned tabs.
  //  - compact: A pinned tab will show in a compact form with only icon or first letter of the editor name.
  //  - shrink: A pinned tab shrinks to a compact fixed size showing parts of the editor name.
  "workbench.editor.pinnedTabSizing": "normal",
  // When enabled, a language detection model that takes into account editor history will be given higher precedence.
  "workbench.editor.preferHistoryBasedLanguageDetection": true,
  // Restores the last editor view state (e.g. scroll position) when re-opening editors after they have been closed. Editor view state is stored per editor group and discarded when a group closes. Use the `workbench.editor.sharedViewState` setting to use the last known view state across all editor groups in case no previous view state was found for a editor group.
  "workbench.editor.restoreViewState": true,
  // Controls whether an editor is revealed in any of the visible groups if opened. If disabled, an editor will prefer to open in the currently active editor group. If enabled, an already opened editor will be revealed instead of opened again in the currently active editor group. Note that there are some cases where this setting is ignored, e.g. when forcing an editor to open in a specific group or to the side of the currently active group.
  "workbench.editor.revealIfOpen": false,
  // Controls whether scrolling over tabs will open them or not. By default tabs will only reveal upon scrolling, but not open. You can press and hold the Shift-key while scrolling to change this behavior for that duration. This value is ignored when `workbench.editor.showTabs` is disabled.
  "workbench.editor.scrollToSwitchTabs": false,
  // Preserves the most recent editor view state (e.g. scroll position) across all editor groups and restores that if no specific editor view state is found for the editor group.
  "workbench.editor.sharedViewState": false,
  // Controls whether opened editors should show with an icon or not. This requires a file icon theme to be enabled as well.
  "workbench.editor.showIcons": true,
  // Controls whether opened editors should show in tabs or not.
  "workbench.editor.showTabs": true,
  // Controls if editor groups can be split from drag and drop operations by dropping an editor or file on the edges of the editor area.
  "workbench.editor.splitOnDragAndDrop": true,
  // Controls the sizing of editor groups when splitting them.
  //  - distribute: Splits all the editor groups to equal parts.
  //  - split: Splits the active editor group to equal parts.
  "workbench.editor.splitSizing": "distribute",
  // Controls the position of the editor's tabs close buttons, or disables them when set to 'off'. This value is ignored when `workbench.editor.showTabs` is disabled.
  "workbench.editor.tabCloseButton": "right",
  // Controls the sizing of editor tabs. This value is ignored when `workbench.editor.showTabs` is disabled.
  //  - fit: Always keep tabs large enough to show the full editor label.
  //  - shrink: Allow tabs to get smaller when the available space is not enough to show all tabs at once.
  "workbench.editor.tabSizing": "fit",
  // Controls the height of the scrollbars used for tabs and breadcrumbs in the editor title area.
  //  - default: The default size.
  //  - large: Increases the size, so it can be grabbed more easily with the mouse.
  "workbench.editor.titleScrollbarSizing": "default",
  // Controls if the untitled text hint should be visible in the editor.
  "workbench.editor.untitled.hint": "text",
  // Controls the format of the label for an untitled editor.
  //  - content: The name of the untitled file is derived from the contents of its first line unless it has an associated file path. It will fallback to the name in case the line is empty or contains no word characters.
  //  - name: The name of the untitled file is not derived from the contents of the file.
  "workbench.editor.untitled.labelFormat": "content",
  // Controls whether tabs should be wrapped over multiple lines when exceeding available space or whether a scrollbar should appear instead. This value is ignored when `workbench.editor.showTabs` is disabled.
  "workbench.editor.wrapTabs": false,
  // Configure glob patterns to editors (e.g. `"*.hex": "hexEditor.hexEdit"`). These have precedence over the default behavior.
  "workbench.editorAssociations": {
    "*.svg": "default",
    "*.frm": "default",
    "*.bin": "default"
  },
  // Configure the opener to use for external URIs (http, https).
  "workbench.externalUriOpeners": {},
  // Controls font aliasing method in the workbench.
  //  - default: Sub-pixel font smoothing. On most non-retina displays this will give the sharpest text.
  //  - antialiased: Smooth the font on the level of the pixel, as opposed to the subpixel. Can make the font appear lighter overall.
  //  - none: Disables font smoothing. Text will show with jagged sharp edges.
  //  - auto: Applies `default` or `antialiased` automatically based on the DPI of displays.
  "workbench.fontAliasing": "default",
  // Controls the delay in milliseconds after which the hover is shown for workbench items (ex. some extension provided tree view items). Already visible items may require a refresh before reflecting this setting change.
  "workbench.hover.delay": 500,
  // Specifies the file icon theme used in the workbench or 'null' to not show any file icons.
  //  - null: No file icons
  //  - vs-minimal
  //  - vs-seti
  //"workbench.iconTheme": "vs-seti",
  // Controls whether the layout controls in the custom title bar is enabled via `window.titleBarStyle`.
  "workbench.layoutControl.enabled": true,
  // Controls whether the layout control in the custom title bar is displayed as a single menu button or with multiple UI toggles.
  //  - menu: Shows a single button with a dropdown of layout options.
  //  - toggles: Shows several buttons for toggling the visibility of the panels and side bar.
  //  - both: Shows both the dropdown and toggle buttons.
  "workbench.layoutControl.type": "both",
  // Controls the default find mode for lists and trees in the workbench.
  //  - highlight: Highlight elements when searching. Further up and down navigation will traverse only the highlighted elements.
  //  - filter: Filter elements when searching.
  "workbench.list.defaultFindMode": "highlight",
  // Scrolling speed multiplier when pressing `Alt`.
  "workbench.list.fastScrollSensitivity": 5,
  // Controls whether lists and trees support horizontal scrolling in the workbench. Warning: turning on this setting has a performance implication.
  "workbench.list.horizontalScrolling": false,
  // A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.
  "workbench.list.mouseWheelScrollSensitivity": 1,
  // The modifier to be used to add an item in trees and lists to a multi-selection with the mouse (for example in the explorer, open editors and scm view). The 'Open to Side' mouse gestures - if supported - will adapt such that they do not conflict with the multiselect modifier.
  //  - ctrlCmd: Maps to `Control` on Windows and Linux and to `Command` on macOS.
  //  - alt: Maps to `Alt` on Windows and Linux and to `Option` on macOS.
  "workbench.list.multiSelectModifier": "ctrlCmd",
  // Controls how to open items in trees and lists using the mouse (if supported). Note that some trees and lists might choose to ignore this setting if it is not applicable.
  "workbench.list.openMode": "singleClick",
  // Controls whether lists and trees have smooth scrolling.
  "workbench.list.smoothScrolling": false,
  // Controls whether local file history is enabled. When enabled, the file contents of an editor that is saved will be stored to a backup location to be able to restore or review the contents later. Changing this setting has no effect on existing local file history entries.
  "workbench.localHistory.enabled": true,
  // Configure glob patterns for excluding files from the local file history. Changing this setting has no effect on existing local file history entries.
  "workbench.localHistory.exclude": {},
  // Controls the maximum number of local file history entries per file. When the number of local file history entries exceeds this number for a file, the oldest entries will be discarded.
  "workbench.localHistory.maxFileEntries": 50,
  // Controls the maximum size of a file (in KB) to be considered for local file history. Files that are larger will not be added to the local file history. Changing this setting has no effect on existing local file history entries.
  "workbench.localHistory.maxFileSize": 256,
  // Configure an interval in seconds during which the last entry in local file history is replaced with the entry that is being added. This helps reduce the overall number of entries that are added, for example when auto save is enabled. This setting is only applied to entries that have the same source of origin. Changing this setting has no effect on existing local file history entries.
  "workbench.localHistory.mergeWindow": 10,
  // Controls the default location of the panel (terminal, debug console, output, problems) in a new workspace. It can either show at the bottom, right, or left of the editor area.
  "workbench.panel.defaultLocation": "bottom",
  // Controls whether the panel opens maximized. It can either always open maximized, never open maximized, or open to the last state it was in before being closed.
  //  - always: Always maximize the panel when opening it.
  //  - never: Never maximize the panel when opening it. The panel will open un-maximized.
  //  - preserve: Open the panel to the state that it was in, before it was closed.
  "workbench.panel.opensMaximized": "preserve",
  // Specifies the preferred color theme for dark OS appearance when `window.autoDetectColorScheme` is enabled.
  "workbench.preferredDarkColorTheme": "Default Dark+",
  // Specifies the preferred color theme used in high contrast dark mode when `window.autoDetectHighContrast` is enabled.
  "workbench.preferredHighContrastColorTheme": "Default High Contrast",
  // Specifies the preferred color theme used in high contrast light mode when `window.autoDetectHighContrast` is enabled.
  "workbench.preferredHighContrastLightColorTheme": "Default High Contrast Light",
  // Specifies the preferred color theme for light OS appearance when `window.autoDetectColorScheme` is enabled.
  "workbench.preferredLightColorTheme": "Default Light+",
  // Specifies the product icon theme used.
  //  - Default: Default
  "workbench.productIconTheme": "Default",
  // Controls whether Quick Open should close automatically once it loses focus.
  "workbench.quickOpen.closeOnFocusLost": true,
  // Controls whether the last typed input to Quick Open should be restored when opening it the next time.
  "workbench.quickOpen.preserveInput": false,
  // Controls whether the workbench should render with fewer animations.
  //  - on: Always render with reduced motion.
  //  - off: Do not render with reduced motion
  //  - auto: Render with reduced motion based on OS configuration.
  "workbench.reduceMotion": "auto",
  // Controls the hover feedback delay in milliseconds of the dragging area in between views/editors.
  "workbench.sash.hoverDelay": 300,
  // Controls the feedback area size in pixels of the dragging area in between views/editors. Set it to a larger value if you feel it's hard to resize views using the mouse.
  "workbench.sash.size": 4,
  // Determines which settings editor to use by default.
  //  - ui: Use the settings UI editor.
  //  - json: Use the JSON file editor.
  "workbench.settings.editor": "ui",
  // Controls whether to enable the natural language search mode for settings. The natural language search is provided by a Microsoft online service.
  "workbench.settings.enableNaturalLanguageSearch": true,
  // Controls whether opening keybinding settings also opens an editor showing all default keybindings.
  "workbench.settings.openDefaultKeybindings": false,
  // Controls whether opening settings also opens an editor showing all default settings.
  "workbench.settings.openDefaultSettings": false,
  // Controls the behavior of the settings editor Table of Contents while searching.
  //  - hide: Hide the Table of Contents while searching.
  //  - filter: Filter the Table of Contents to just categories that have matching settings. Clicking a category will filter the results to that category.
  "workbench.settings.settingsSearchTocBehavior": "filter",
  // Controls whether to use the split JSON editor when editing settings as JSON. ##
  "workbench.settings.useSplitJSON": true,
  // Controls the location of the primary side bar and activity bar. They can either show on the left or right of the workbench. The secondary side bar will show on the opposite side of the workbench.
  "workbench.sideBar.location": "left",
  // Controls the visibility of the status bar at the bottom of the workbench.
  "workbench.statusBar.visible": true,
  // When enabled, will show the watermark tips when no editor is open.
  "workbench.tips.enabled": true,
  // Controls how tree folders are expanded when clicking the folder names. Note that some trees and lists might choose to ignore this setting if it is not applicable.
  "workbench.tree.expandMode": "singleClick",
  // Controls tree indentation in pixels.
  "workbench.tree.indent": 8,
  // Controls whether the tree should render indent guides.
  "workbench.tree.renderIndentGuides": "onHover",
  // When enabled, trusted domain prompts will appear when opening links in trusted workspaces.
  "workbench.trustedDomains.promptInTrustedWorkspace": false,
  // Controls the visibility of view header actions. View header actions may either be always visible, or only visible when that view is focused or hovered over.
  "workbench.view.alwaysShowHeaderActions": false,
  // When enabled, an extension's walkthrough will open upon install of the extension.
  "workbench.welcomePage.walkthroughs.openOnInstall": true,
  // Window
  // If set, automatically switch to the preferred color theme based on the OS appearance. If the OS appearance is dark, the theme specified at `workbench.preferredDarkColorTheme` is used, for light `workbench.preferredLightColorTheme`.
  "window.autoDetectColorScheme": false,
  // If enabled, will automatically change to high contrast theme if the OS is using a high contrast theme. The high contrast theme to use is specified by `workbench.preferredHighContrastColorTheme` and `workbench.preferredHighContrastLightColorTheme`.
  "window.autoDetectHighContrast": true,
  // If enabled, clicking on an inactive window will both activate the window and trigger the element under the mouse if it is clickable. If disabled, clicking anywhere on an inactive window will activate it only and a second click is required on the element.
  "window.clickThroughInactive": true,
  // Controls whether closing the last editor should also close the window. This setting only applies for windows that do not show folders.
  "window.closeWhenEmpty": false,
  // Show command launcher together with the window title.
  "window.commandCenter": true,
  // Controls whether to show a confirmation dialog before closing the window or quitting the application.
  //  - always: Always ask for confirmation.
  //  - keyboardOnly: Only ask for confirmation if a keybinding was used.
  //  - never: Never explicitly ask for confirmation.
  "window.confirmBeforeClose": "never",
  // Controls whether the menu bar will be focused by pressing the Alt-key. This setting has no effect on toggling the menu bar with the Alt-key.
  "window.customMenuBarAltFocus": true,
  // Adjust the appearance of dialog windows.
  "window.dialogStyle": "native",
  // If enabled, double clicking the application icon in the title bar will close the window and the window cannot be dragged by the icon. This setting only has an effect when `window.titleBarStyle` is set to `custom`.
  "window.doubleClickIconToClose": false,
  // Controls if native full-screen should be used on macOS. Disable this option to prevent macOS from creating a new space when going full-screen.
  "window.nativeFullScreen": true,
  // Enables macOS Sierra window tabs. Note that changes require a full restart to apply and that native tabs will disable a custom title bar style if configured.
  "window.nativeTabs": true,
  // Controls whether the main menus can be opened via Alt-key shortcuts. Disabling mnemonics allows to bind these Alt-key shortcuts to editor commands instead.
  "window.enableMenuBarMnemonics": true,
  // Control the visibility of the menu bar. A setting of 'toggle' means that the menu bar is hidden and a single press of the Alt key will show it. A setting of 'compact' will move the menu into the side bar.
  //  - classic: Menu is displayed at the top of the window and only hidden in full screen mode.
  //  - visible: Menu is always visible at the top of the window even in full screen mode.
  //  - toggle: Menu is hidden but can be displayed at the top of the window via the Alt key.
  //  - hidden: Menu is always hidden.
  //  - compact: Menu is displayed as a compact button in the side bar. This value is ignored when `window.titleBarStyle` is `native`.
  "window.menuBarVisibility": "classic",
  // Controls the dimensions of opening a new window when at least one window is already opened. Note that this setting does not have an impact on the first window that is opened. The first window will always restore the size and location as you left it before closing.
  //  - default: Open new windows in the center of the screen.
  //  - inherit: Open new windows with same dimension as last active one.
  //  - offset: Open new windows with same dimension as last active one with an offset position.
  //  - maximized: Open new windows maximized.
  //  - fullscreen: Open new windows in full screen mode.
  "window.newWindowDimensions": "default",
  // Controls whether files should open in a new window when using a command line or file dialog.
  // Note that there can still be cases where this setting is ignored (e.g. when using the `--new-window` or `--reuse-window` command line option).
  //  - on: Files will open in a new window.
  //  - off: Files will open in the window with the files' folder open or the last active window.
  //  - default: Files will open in a new window unless picked from within the application (e.g. via the File menu).
  "window.openFilesInNewWindow": "off",
  // Controls whether folders should open in a new window or replace the last active window.
  // Note that there can still be cases where this setting is ignored (e.g. when using the `--new-window` or `--reuse-window` command line option).
  //  - on: Folders will open in a new window.
  //  - off: Folders will replace the last active window.
  //  - default: Folders will open in a new window unless a folder is picked from within the application (e.g. via the File menu).
  "window.openFoldersInNewWindow": "default",
  // Controls whether a new empty window should open when starting a second instance without arguments or if the last running instance should get focus.
  // Note that there can still be cases where this setting is ignored (e.g. when using the `--new-window` or `--reuse-window` command line option).
  //  - on: Open a new empty window.
  //  - off: Focus the last active running instance.
  "window.openWithoutArgumentsInNewWindow": "on",
  // Controls whether a window should restore to full screen mode if it was exited in full screen mode.
  "window.restoreFullscreen": false,
  // Controls how windows are being reopened after starting for the first time. This setting has no effect when the application is already running.
  //  - preserve: Always reopen all windows. If a folder or workspace is opened (e.g. from the command line) it opens as a new window unless it was opened before. If files are opened they will open in one of the restored windows.
  //  - all: Reopen all windows unless a folder, workspace or file is opened (e.g. from the command line).
  //  - folders: Reopen all windows that had folders or workspaces opened unless a folder, workspace or file is opened (e.g. from the command line).
  //  - one: Reopen the last active window unless a folder, workspace or file is opened (e.g. from the command line).
  //  - none: Never reopen a window. Unless a folder or workspace is opened (e.g. from the command line), an empty window will appear.
  "window.restoreWindows": "all",
  // Controls the window title based on the active editor.
  "window.title": "${dirty}${activeEditorShort}${separator}${rootName}${separator}${appName}",
  // Adjust the appearance of the window title bar. On Linux and Windows, this setting also affects the application and context menu appearances. Changes require a full restart to apply.
  "window.titleBarStyle": "custom",
  // Separator used by `window.title`.
  "window.titleSeparator": " - ",
  // Files
  // Configure file associations to languages (e.g. `"*.extension": "html"`). These have precedence over the default associations of the languages installed.
  "files.associations": {},
  // When enabled, the editor will attempt to guess the character set encoding when opening files. This setting can also be configured per language. Note, this setting is not respected by text search. Only `files.encoding` is respected.
  "files.autoGuessEncoding": true,
  // Управляет автоматическим сохранением редакторов, в которых есть несохраненные изменения.
  // - off: Редактор с изменениями никогда не сохраняется автоматически.
  // - afterDelay: Редактор с изменениями автоматически сохраняется после настроенного `files.autoSaveDelay`.
  // - onFocusChange: Редактор с изменениями автоматически сохраняется, когда редактор теряет фокус.
  // - onWindowChange: Редактор с изменениями автоматически сохраняется, когда окно теряет фокус.
  "files.autoSave": "onWindowChange",
  // Определяет задержку в миллисекундах, после которой редактор с несохраненными изменениями будет сохранен автоматически. Применяется только в случае, когда для параметра "#files.autoSave#" задано значение "afterDelay".
  "files.autoSaveDelay": 1000,
  // Языковой идентификатор по умолчанию, назначаемый новым файлам. Если задано значение "${activeEditorLanguage}", будет использоваться языковой идентификатор текущего активного текстового редактора, если таковой имеется.
  "files.defaultLanguage": "",
  // Перемещение файлов/папок в корзину ОС (корзину Windows) при удалении. При отключении этого параметра файлы и папки будут удаляться навсегда.
  "files.enableTrash": true,
  //Кодировка по умолчанию, используемая при чтении и записи файлов. Этот параметр также можно настроить для отдельных языков.
  //utf8: UTF-8
  "files.encoding": "utf8",
  // The default end of line character.
  //  - \n: LF
  //  - \r\n: CRLF
  //  - auto: Uses operating system specific end of line character.
  "files.eol": "auto",
  // Configure glob patterns for excluding files and folders. For example, the File Explorer decides which files and folders to show or hide based on this setting. Refer to the `search.exclude` setting to define search-specific excludes.
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/Thumbs.db": true
  },
  // Controls whether unsaved files are remembered between sessions, allowing the save prompt when exiting the editor to be skipped.
  //  - off: Disable hot exit. A prompt will show when attempting to close a window with editors that have unsaved changes.
  //  - onExit: Hot exit will be triggered when the last window is closed on Windows/Linux or when the `workbench.action.quit` command is triggered (command palette, keybinding, menu). All windows without folders opened will be restored upon next launch. A list of previously opened windows with unsaved files can be accessed via `File > Open Recent > More...`
  //  - onExitAndWindowClose: Hot exit will be triggered when the last window is closed on Windows/Linux or when the `workbench.action.quit` command is triggered (command palette, keybinding, menu), and also for any window with a folder opened regardless of whether it's the last window. All windows without folders opened will be restored upon next launch. A list of previously opened windows with unsaved files can be accessed via `File > Open Recent > More...`
  "files.hotExit": "onExit",
  // When enabled, insert a final new line at the end of the file when saving it.
  "files.insertFinalNewline": false,
  // Controls the memory available to VS Code after restart when trying to open large files. Same effect as specifying `--max-memory=NEWSIZE` on the command line.
  "files.maxMemoryForLargeFilesMB": 4096,
  // Timeout in milliseconds after which file participants for create, rename, and delete are cancelled. Use `0` to disable participants.
  "files.participants.timeout": 60000,
  // Controls if files that were part of a refactoring are saved automatically
  "files.refactoring.autoSave": true,
  // Restore the undo stack when a file is reopened.
  "files.restoreUndoStack": true,
  // A save conflict can occur when a file is saved to disk that was changed by another program in the meantime. To prevent data loss, the user is asked to compare the changes in the editor with the version on disk. This setting should only be changed if you frequently encounter save conflict errors and may result in data loss if used without caution.
  //  - askUser: Will refuse to save and ask for resolving the save conflict manually.
  //  - overwriteFileOnDisk: Will resolve the save conflict by overwriting the file on disk with the changes in the editor.
  "files.saveConflictResolution": "askUser",
  // Enables the simple file dialog. The simple file dialog replaces the system file dialog when enabled.
  "files.simpleDialog.enable": false,
  // When enabled, will trim all new lines after the final new line at the end of the file when saving it.
  "files.trimFinalNewlines": false,
  // When enabled, will trim trailing whitespace when saving a file.
  "files.trimTrailingWhitespace": false,
  // Configure paths or glob patterns to exclude from file watching.
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true,
    "**/.hg/store/**": true
  },
  // Configure extra paths to watch for changes inside the workspace.
  "files.watcherInclude": [],
  // Screencast Mode
  // Controls the font size (in pixels) of the screencast mode keyboard.
  "screencastMode.fontSize": 56,
  // Controls how long (in milliseconds) the keyboard overlay is shown in screencast mode.
  "screencastMode.keyboardOverlayTimeout": 800,
  // Controls what is displayed in the keyboard overlay when showing shortcuts.
  //  - keys: Keys.
  //  - command: Command title.
  //  - commandWithGroup: Command title prefixed by its group.
  //  - commandAndKeys: Command title and keys.
  //  - commandWithGroupAndKeys: Command title and keys, with the command prefixed by its group.
  "screencastMode.keyboardShortcutsFormat": "commandAndKeys",
  // Controls the color in hex (#_RGB, #RGBA, #RRGGBB or #RRGGBBAA) of the mouse indicator in screencast mode.
  "screencastMode.mouseIndicatorColor": "#FF0000",
  // Controls the size (in pixels) of the mouse indicator in screencast mode.
  "screencastMode.mouseIndicatorSize": 20,
  // Only show keyboard shortcuts in screencast mode.
  "screencastMode.onlyKeyboardShortcuts": false,
  // Controls the vertical offset of the screencast mode overlay from the bottom as a percentage of the workbench height.
  "screencastMode.verticalOffset": 20,
  // Zen Mode
  // Controls whether turning on Zen Mode also centers the layout.
  "zenMode.centerLayout": true,
  // Controls whether turning on Zen Mode also puts the workbench into full screen mode.
  "zenMode.fullScreen": true,
  // Controls whether turning on Zen Mode also hides the activity bar either at the left or right of the workbench.
  "zenMode.hideActivityBar": true,
  // Controls whether turning on Zen Mode also hides the editor line numbers.
  "zenMode.hideLineNumbers": true,
  // Controls whether turning on Zen Mode also hides the status bar at the bottom of the workbench.
  "zenMode.hideStatusBar": true,
  // Controls whether turning on Zen Mode also hides workbench tabs.
  "zenMode.hideTabs": true,
  // Controls whether a window should restore to Zen Mode if it was exited in Zen Mode.
  "zenMode.restore": true,
  // Controls whether notifications do not disturb mode should be enabled while in Zen Mode. If true, only error notifications will pop out.
  "zenMode.silentNotifications": true,
  // File Explorer
  // Controls whether the explorer should automatically reveal and select files when opening them.
  //  - true: Files will be revealed and selected.
  //  - false: Files will not be revealed and selected.
  //  - focusNoScroll: Files will not be scrolled into view, but will still be focused.
  "explorer.autoReveal": true,
  // Controls whether the explorer should render folders in a compact form. In such a form, single child folders will be compressed in a combined tree element. Useful for Java package structures, for example.
  "explorer.compactFolders": true,
  // Controls whether the explorer should ask for confirmation when deleting a file via the trash.
  "explorer.confirmDelete": false,
  // Controls whether the explorer should ask for confirmation to move files and folders via drag and drop.
  "explorer.confirmDragAndDrop": false,
  // Controls whether the Explorer should ask for confirmation when undoing.
  //  - verbose: Explorer will prompt before all undo operations.
  //  - default: Explorer will prompt before destructive undo operations.
  //  - light: Explorer will not prompt before undo operations when focused.
  "explorer.confirmUndo": "default",
  // The path separation character used when copying relative file paths.
  //  - /: Use slash as path separation character.
  //  - \: Use backslash as path separation character.
  //  - auto: Uses operating system specific path separation character.
  "explorer.copyRelativePathSeparator": "auto",
  // Controls whether file decorations should use badges.
  "explorer.decorations.badges": true,
  // Controls whether file decorations should use colors.
  "explorer.decorations.colors": true,
  // Controls whether the explorer should allow to move files and folders via drag and drop. This setting only effects drag and drop from inside the explorer.
  "explorer.enableDragAndDrop": true,
  // Controls whether the Explorer should support undoing file and folder operations.
  "explorer.enableUndo": true,
  // Controls whether entries in .gitignore should be parsed and excluded from the Explorer.
  "explorer.excludeGitIgnore": false,
  // Controls whether the Explorer should expand multi-root workspaces containing only one folder during initialization
  "explorer.expandSingleFolderWorkspaces": true,
  // Controls whether file nesting is enabled in the Explorer. File nesting allows for related files in a directory to be visually grouped together under a single parent file.
  "explorer.fileNesting.enabled": false,
  // Controls whether file nests are automatically expanded. `explorer.fileNesting.enabled` must be set for this to take effect.
  "explorer.fileNesting.expand": true,
  // Управляет вложенностью файлов в проводнике. Каждый __Item__ представляет родительский шаблон и может содержать один символ `*`, соответствующий любой строке. Каждое __Value__ представляет собой список разделенных запятыми дочерних шаблонов, которые должны отображаться вложенными под данным родителем. Дочерние шаблоны могут содержать несколько специальных токенов:
  // - `${capture}`: соответствует разрешенному значению `*` из родительского шаблона
  // - `${basename}`: соответствует базовому имени родительского файла, `file` в `file.ts`
  // - `${extname}`: Соответствует расширению родительского файла, `ts` в `file.ts`
  // - `${dirname}`: Соответствует имени каталога родительского файла, `src` в `src/file.ts`
  // - `*`: соответствует любой строке, может использоваться только один раз для каждого дочернего шаблона
  "explorer.fileNesting.patterns": {
    "*.ts": "${capture}.js",
    "*.js": "${capture}.js.map, ${capture}.min.js, ${capture}.d.ts",
    "*.jsx": "${capture}.js",
    "*.tsx": "${capture}.ts",
    "tsconfig.json": "tsconfig.*.json",
    "package.json": "package-lock.json, yarn.lock, pnpm-lock.yaml"
  },
  // Controls what naming strategy to use when a giving a new name to a duplicated explorer item on paste.
  //  - simple: Appends the word "copy" at the end of the duplicated name potentially followed by a number
  //  - smart: Adds a number at the end of the duplicated name. If some number is already part of the name, tries to increase that number
  "explorer.incrementalNaming": "simple",
  // The minimum number of editor slots shown in the Open Editors pane. If set to 0 the Open Editors pane will dynamically resize based on the number of editors.
  "explorer.openEditors.minVisible": 0,
  // Controls the sorting order of editors in the Open Editors pane.
  //  - editorOrder: Editors are ordered in the same order editor tabs are shown.
  //  - alphabetical: Editors are ordered alphabetically by tab name inside each editor group.
  //  - fullPath: Editors are ordered alphabetically by full path inside each editor group.
  "explorer.openEditors.sortOrder": "editorOrder",
  // The maximum number of editors shown in the Open Editors pane. Setting this to 0 hides the Open Editors pane.
  "explorer.openEditors.visible": 9,
  // Controls the property-based sorting of files and folders in the Explorer.
  //  - default: Files and folders are sorted by their names. Folders are displayed before files.
  //  - mixed: Files and folders are sorted by their names. Files are interwoven with folders.
  //  - filesFirst: Files and folders are sorted by their names. Files are displayed before folders.
  //  - type: Files and folders are grouped by extension type then sorted by their names. Folders are displayed before files.
  //  - modified: Files and folders are sorted by last modified date in descending order. Folders are displayed before files.
  //  - foldersNestsFiles: Files and folders are sorted by their names. Folders are displayed before files. Files with nested children are displayed before other files.
  "explorer.sortOrder": "default",
  // Controls the lexicographic sorting of file and folder names in the Explorer.
  //  - default: Uppercase and lowercase names are mixed together.
  //  - upper: Uppercase names are grouped together before lowercase names.
  //  - lower: Lowercase names are grouped together before uppercase names.
  //  - unicode: Names are sorted in Unicode order.
  "explorer.sortOrderLexicographicOptions": "default",
  // Search
  // Controls the positioning of the actionbar on rows in the search view.
  //  - auto: Position the actionbar to the right when the search view is narrow, and immediately after the content when the search view is wide.
  //  - right: Always position the actionbar to the right.
  "search.actionsPosition": "right",
  // Controls whether the search results will be collapsed or expanded.
  //  - auto: Files with less than 10 results are expanded. Others are collapsed.
  //  - alwaysCollapse
  //  - alwaysExpand
  "search.collapseResults": "alwaysExpand",
  // Configure glob patterns for excluding files and folders in fulltext searches and quick open. Inherits all glob patterns from the `files.exclude` setting.
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/*.code-search": true
  },
  // Controls whether to follow symlinks while searching.
  "search.followSymlinks": true,
  // Controls whether the search view should read or modify the shared find clipboard on macOS.
  "search.globalFindClipboard": false,
  // Controls where new `Search: Find in Files` and `Find in Folder` operations occur: either in the search view, or in a search editor.
  //  - view: Search in the search view, either in the panel or side bars.
  //  - reuseEditor: Search in an existing search editor if present, otherwise in a new search editor.
  //  - newEditor: Search in a new search editor.
  "search.mode": "view",
  // Controls sorting order of editor history in quick open when filtering.
  //  - default: History entries are sorted by relevance based on the filter value used. More relevant entries appear first.
  //  - recency: History entries are sorted by recency. More recently opened entries appear first.
  "search.quickOpen.history.filterSortOrder": "default",
  // Whether to include results from recently opened files in the file results for Quick Open.
  "search.quickOpen.includeHistory": true,
  // Whether to include results from a global symbol search in the file results for Quick Open.
  "search.quickOpen.includeSymbols": false,
  // The default number of surrounding context lines to use when creating new Search Editors. If using `search.searchEditor.reusePriorSearchConfiguration`, this can be set to `null` (empty) to use the prior Search Editor's configuration.
  "search.searchEditor.defaultNumberOfContextLines": 1,
  // Configure effect of double clicking a result in a search editor.
  //  - selectWord: Double clicking selects the word under the cursor.
  //  - goToLocation: Double clicking opens the result in the active editor group.
  //  - openLocationToSide: Double clicking opens the result in the editor group to the side, creating one if it does not yet exist.
  "search.searchEditor.doubleClickBehaviour": "goToLocation",
  // When enabled, new Search Editors will reuse the includes, excludes, and flags of the previously opened Search Editor.
  "search.searchEditor.reusePriorSearchConfiguration": false,
  // Search all files as you type.
  "search.searchOnType": true,
  // When `search.searchOnType` is enabled, controls the timeout in milliseconds between a character being typed and the search starting. Has no effect when `search.searchOnType` is disabled.
  "search.searchOnTypeDebouncePeriod": 300,
  // Update the search query to the editor's selected text when focusing the search view. This happens either on click or when triggering the `workbench.views.search.focus` command.
  "search.seedOnFocus": false,
  // Enable seeding search from the word nearest the cursor when the active editor has no selection.
  "search.seedWithNearestWord": false,
  // Controls whether to show line numbers for search results.
  "search.showLineNumbers": false,
  // Search case-insensitively if the pattern is all lowercase, otherwise, search case-sensitively.
  "search.smartCase": false,
  // Controls sorting order of search results.
  //  - default: Results are sorted by folder and file names, in alphabetical order.
  //  - fileNames: Results are sorted by file names ignoring folder order, in alphabetical order.
  //  - type: Results are sorted by file extensions, in alphabetical order.
  //  - modified: Results are sorted by file last modified date, in descending order.
  //  - countDescending: Results are sorted by count per file, in descending order.
  //  - countAscending: Results are sorted by count per file, in ascending order.
  "search.sortOrder": "default",
  // Controls whether to use global `.gitignore` and `.ignore` files when searching for files. Requires `search.useIgnoreFiles` to be enabled.
  "search.useGlobalIgnoreFiles": false,
  // Controls whether to use `.gitignore` and `.ignore` files when searching for files.
  "search.useIgnoreFiles": true,
  // Controls whether to use `.gitignore` and `.ignore` files in parent directories when searching for files. Requires `search.useIgnoreFiles` to be enabled.
  "search.useParentIgnoreFiles": false,
  // Controls whether to open Replace Preview when selecting or replacing a match.
  "search.useReplacePreview": true,
  // HTTP
  // The proxy setting to use. If not set, will be inherited from the `http_proxy` and `https_proxy` environment variables.
  "http.proxy": "",
  // The value to send as the `Proxy-Authorization` header for every network request.
  "http.proxyAuthorization": null,
  // Controls whether the proxy server certificate should be verified against the list of supplied CAs.
  "http.proxyStrictSSL": true,
  // Use the proxy support for extensions.
  //  - off: Disable proxy support for extensions.
  //  - on: Enable proxy support for extensions.
  //  - fallback: Enable proxy support for extensions, fall back to request options, when no proxy found.
  //  - override: Enable proxy support for extensions, override request options.
  "http.proxySupport": "override",
  // Controls whether CA certificates should be loaded from the OS. (On Windows and macOS, a reload of the window is required after turning this off.)
  "http.systemCertificates": true,
  // Keyboard
  // Controls the dispatching logic for key presses to use either `code` (recommended) or `keyCode`.
  "keyboard.dispatch": "code",
  // Enables the macOS touchbar buttons on the keyboard if available.
  "keyboard.touchbar.enabled": true,
  // A set of identifiers for entries in the touchbar that should not show up (for example `workbench.action.navigateBack`).
  "keyboard.touchbar.ignored": [],
  // Update
  // Enable to download and install new VS Code versions in the background on Windows.
  "update.enableWindowsBackgroundUpdates": true,
  // Configure whether you receive automatic updates. Requires a restart after change. The updates are fetched from a Microsoft online service.
  //  - none: Disable updates.
  //  - manual: Disable automatic background update checks. Updates will be available if you manually check for updates.
  //  - start: Check for updates only on startup. Disable automatic background update checks.
  //  - default: Enable automatic update checks. Code will check for updates automatically and periodically.
  "update.mode": "default",
  // Show Release Notes after an update. The Release Notes are fetched from a Microsoft online service.
  "update.showReleaseNotes": true,
  // Debug
  // Allow setting breakpoints in any file.
  "debug.allowBreakpointsEverywhere": false,
  // Automatically show values for variables that are lazily resolved by the debugger, such as getters.
  "debug.autoExpandLazyVariables": false,
  // Controls whether to confirm when the window closes if there are active debug sessions.
  //  - never: Never confirm.
  //  - always: Always confirm if there are debug sessions.
  "debug.confirmOnExit": "never",
  // Controls whether suggestions should be accepted on Enter in the Debug Console. Enter is also used to evaluate whatever is typed in the Debug Console.
  "debug.console.acceptSuggestionOnEnter": "off",
  // Controls if the debug console should be automatically closed when the debug session ends.
  "debug.console.closeOnEnd": false,
  // Controls if the debug console should collapse identical lines and show a number of occurrences with a badge.
  "debug.console.collapseIdenticalLines": true,
  // Controls the font family in the debug console.
  "debug.console.fontFamily": "default",
  // Controls the font size in pixels in the debug console.
  "debug.console.fontSize": 14,
  // Controls if the debug console should suggest previously typed input.
  "debug.console.historySuggestions": true,
  // Controls the line height in pixels in the debug console. Use 0 to compute the line height from the font size.
  "debug.console.lineHeight": 0,
  // Controls if the lines should wrap in the debug console.
  "debug.console.wordWrap": true,
  // Show Source Code in Disassembly View.
  "debug.disassemblyView.showSourceCode": true,
  // Controls whether the editor should be focused when the debugger breaks.
  "debug.focusEditorOnBreak": true,
  // Controls whether the workbench window should be focused when the debugger breaks.
  "debug.focusWindowOnBreak": true,
  // Show variable values inline in editor while debugging.
  //  - on: Always show variable values inline in editor while debugging.
  //  - off: Never show variable values inline in editor while debugging.
  //  - auto: Show variable values inline in editor while debugging when the language supports inline value locations.
  "debug.inlineValues": "auto",
  // Controls when the internal debug console should open.
  "debug.internalConsoleOptions": "openOnFirstSessionStart",
  // Controls what to do when errors are encountered after running a preLaunchTask.
  //  - debugAnyway: Ignore task errors and start debugging.
  //  - showErrors: Show the Problems view and do not start debugging.
  //  - prompt: Prompt user.
  //  - abort: Cancel debugging.
  "debug.onTaskErrors": "prompt",
  // Controls when the debug view should open.
  "debug.openDebug": "openOnDebugBreak",
  // Automatically open the explorer view at the end of a debug session.
  "debug.openExplorerOnEnd": false,
  // Controls what editors to save before starting a debug session.
  //  - allEditorsInActiveGroup: Save all editors in the active group before starting a debug session.
  //  - nonUntitledEditorsInActiveGroup: Save all editors in the active group except untitled ones before starting a debug session.
  //  - none: Don't save any editors before starting a debug session.
  "debug.saveBeforeStart": "allEditorsInActiveGroup",
  // Controls whether breakpoints should be shown in the overview ruler.
  "debug.showBreakpointsInOverviewRuler": false,
  // Controls whether inline breakpoints candidate decorations should be shown in the editor while debugging.
  "debug.showInlineBreakpointCandidates": true,
  // Controls when the debug status bar should be visible.
  //  - never: Never show debug in status bar
  //  - always: Always show debug in status bar
  //  - onFirstSessionStart: Show debug in status bar only after debug was started for the first time
  "debug.showInStatusBar": "onFirstSessionStart",
  // Controls whether the debug sub-sessions are shown in the debug tool bar. When this setting is false the stop command on a sub-session will also stop the parent session.
  "debug.showSubSessionsInToolBar": false,
  // Очистить терминал перед запуском нового сеанса отладки в интегрированном или внешнем терминале.
  "debug.terminal.clearBeforeReusing": false,
  // Controls the location of the debug toolbar. Either `floating` in all views, `docked` in the debug view, or `hidden`.
  "debug.toolBarLocation": "floating",
  // Конфигурация запуска глобальной отладки. Следует использовать в качестве альтернативы файлу «launch.json», который является общим для всех рабочих областей.
  "launch": {
    "configurations": [],
    "compounds": []
  },
  // HTML
  // Enable/disable autoclosing of HTML tags.
  "html.autoClosingTags": true,
  // †.
  "html.autoCreateQuotes": true,
  // Controls the default value for attributes when completion is accepted.
  //  - doublequotes: Attribute value is set to ".
  //  - singlequotes: Attribute value is set to ''.
  //  - empty: Attribute value is not set.
  "html.completion.attributeDefaultValue": "doublequotes",
  // A list of relative file paths pointing to JSON files following the custom data format.
  // VS Code loads custom data on startup to enhance its HTML support for the custom HTML tags, attributes and attribute values you specify in the JSON files.
  // The file paths are relative to workspace and only workspace folder settings are considered.
  "html.customData": [],
  // Разделенный запятыми список тегов, в которых формат содержимого не должен изменяться. Значение "null" задается по умолчанию для тега "pre".
  "html.format.contentUnformatted": "pre,code,textarea",
  //Включить/отключить средство форматирования HTML по умолчанию.
  "html.format.enable": true,
  //` Список тегов, разделенных запятыми, перед которыми должен быть дополнительный символ новой строки. `null` по умолчанию имеет значение `"head, body, /html"`.`
  "html.format.extraLiners": "head, body, /html",
  // Формат и отступ ``.
  "html.format.indentHandlebars": false,
  // Отступ разделов `<head>` и `<body>`.
  "html.format.indentInnerHtml": false,
  // Максимальное количество разрывов строк, которое должно быть сохранено в одном фрагменте. Используйте `null` для неограниченного количества.
  "html.format.maxPreserveNewLines": null,
  // Максимальное количество разрывов строк в одном фрагменте. Используйте `null` для неограниченного количества.
  "html.format.preserveNewLines": true,
  // Уважайте теги языка шаблонов django, erb, handlebars и php.
  "html.format.templating": false,
  //Уважайте языковые теги шаблонов django, erb, handlebars и php.
  "html.format.unformatted": "wbr",
  // Keep text content together between this string.
  "html.format.unformattedContentDelimiter": "",
  // Обернуть атрибуты.
  // - авто: Переносить атрибуты только при превышении длины строки.
  // - принудительно: обернуть каждый атрибут, кроме первого.
  // - принудительное выравнивание: оберните каждый атрибут, кроме первого, и сохраните выравнивание.
  // - force-expand-multiline: Обернуть каждый атрибут.
  // -aligned-multiple: перенос при превышении длины строки, выравнивание атрибутов по вертикали.
  // - сохранить: Сохранить перенос атрибутов.
  // - save-aligned: Сохранить перенос атрибутов, но выровнять.
  "html.format.wrapAttributes": "auto",
  // Отступ для атрибутов с переносом после N символов. Укажите значение "null", чтобы использовать размер отступа по умолчанию. Игнорируется, если для параметра "#html.format.wrapAttributes#" задано значение "aligned".
  "html.format.wrapAttributesIndentSize": null,
  // Максимальное количество символов в строке (0 = отключить).
  "html.format.wrapLineLength": 120,
  // Показать документацию по тегам и атрибутам при наведении.
  "html.hover.documentation": true,
  // Показывать ссылки на MDN при наведении.
  "html.hover.references": true,
  // Определяет, будет ли встроенная поддержка языка HTML предлагать теги, свойства и значения HTML5.
  "html.suggest.html5": true,
  // Отслеживает связь между VS Code и языковым сервером HTML.
  "html.trace.server": "off",
  // Определяет, проверяет ли встроенная поддержка языка HTML встроенные скрипты.
  "html.validate.scripts": true,
  // Controls whether the built-in HTML language support validates embedded styles.
  "html.validate.styles": true,
  // JSON
  // Включить/отключить модуль форматирования JSON по умолчанию
  "json.format.enable": true,
  // Сохранять все существующие новые строки при форматирования.
  "json.format.keepLines": false,
  // Максимальное вычисленное количество контурных символов и областей сгиба (ограничено по соображениям производительности).
  "json.maxItemsComputed": 15000,
  //Если этот параметр включен, схемы JSON можно получать из местоположений http и https.
  "json.schemaDownload.enable": true,
  // Свяжите схемы с файлами JSON в текущем проекте.
  "json.schemas": [
    {
      "fileMatch": [
        "/.babelrc"
      ],
      "url": "https://json.schemastore.org/babelrc",
      "format": "color",
      "$schema": "https://json.schemastore.org/coffeelint",
      "line_endings": "unix"
    }
  ],
  // Traces the communication between VS Code and the JSON language server.
  "json.trace.server": "off",
  // Enable/disable JSON validation.
  "json.validate.enable": true,
  // Markdown
  // Enable/disable dropping into the Markdown editor to insert shift. Requires enabling `editor.dropIntoEditor.enabled`.
  "markdown.editor.drop.enabled": true,
  // Controls where links in Markdown files should be opened.
  //  - currentGroup: Open links in the active editor group.
  //  - beside: Open links beside the active editor.
  "markdown.links.openLocation": "currentGroup",
  // Sets how line-breaks are rendered in the Markdown preview. Setting it to 'true' creates a <br> for newlines inside paragraphs.
  "markdown.preview.breaks": false,
  // Double click in the Markdown preview to switch to the editor.
  "markdown.preview.doubleClickToSwitchToEditor": true,
  // Controls the font family used in the Markdown preview.
  "markdown.preview.fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, 'Ubuntu', 'Droid Sans', sans-serif",
  // Controls the font size in pixels used in the Markdown preview.
  "markdown.preview.fontSize": 14,
  // Controls the line height used in the Markdown preview. This number is relative to the font size.
  "markdown.preview.lineHeight": 1.6,
  // Enable or disable conversion of URL-like text to links in the Markdown preview.
  "markdown.preview.linkify": true,
  // Mark the current editor selection in the Markdown preview.
  "markdown.preview.markEditorSelection": true,
  // Controls how links to other Markdown files in the Markdown preview should be opened.
  //  - inPreview: Try to open links in the Markdown preview.
  //  - inEditor: Try to open links in the editor.
  "markdown.preview.openMarkdownLinks": "inPreview",
  // When a Markdown preview is scrolled, update the view of the editor.
  "markdown.preview.scrollEditorWithPreview": true,
  // When a Markdown editor is scrolled, update the view of the preview.
  "markdown.preview.scrollPreviewWithEditor": true,
  // Enable or disable some language-neutral replacement and quotes beautification in the Markdown preview.
  "markdown.preview.typographer": false,
  // A list of URLs or local paths to CSS style sheets to use from the Markdown preview. Relative paths are interpreted relative to the folder open in the Explorer. If there is no open folder, they are interpreted relative to the location of the Markdown file. All '\' need to be written as '\\'.
  "markdown.styles": [],
  // Enable/disable path suggestions for markdown links
  "markdown.suggest.paths.enabled": true,
  // Enable debug logging for the Markdown extension.
  "markdown.trace.extension": "off",
  // PHP
  // Controls whether the built-in PHP language suggestions are enabled. The support suggests PHP globals and variables.
  "php.suggest.basic": true,
  // Enable/disable built-in PHP validation.
  "php.validate.enable": true,
  // Points to the PHP executable.
  "php.validate.executablePath": "",
  // Whether the linter is run on save or on type.
  "php.validate.run": "onSave",
  // TypeScript
  // Enable/disable automatic closing of JSX tags.
  "javascript.autoClosingTags": true,
  // Enable/disable default JavaScript formatter.
  "javascript.format.enable": true,
  // Defines space handling after a comma delimiter.
  "javascript.format.insertSpaceAfterCommaDelimiter": true,
  // Определяет обработку пробелов после ключевого слова конструктора.
  "javascript.format.insertSpaceAfterConstructor": false,
  // Defines space handling after function keyword for anonymous functions.
  "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
  // Defines space handling after keywords in a control flow statement.
  "javascript.format.insertSpaceAfterKeywordsInControlFlowStatements": true,
  // Defines space handling after opening and before closing empty braces.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": true,
  // Defines space handling after opening and before closing JSX expression braces.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
  // Defines space handling after opening and before closing non-empty braces.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
  // Defines space handling after opening and before closing non-empty brackets.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,
  // Defines space handling after opening and before closing non-empty parenthesis.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": true,
  // Defines space handling after opening and before closing template string braces.
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": true,
  // Defines space handling after a semicolon in a for statement.
  "javascript.format.insertSpaceAfterSemicolonInForStatements": true,
  // Defines space handling after a binary operator.
  "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
  // Определяет обработку пробелов перед скобками аргумента функции.
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  // Defines whether an open brace is put onto a new line for control blocks or not.
  "javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  // Defines whether an open brace is put onto a new line for functions or not.
  "javascript.format.placeOpenBraceOnNewLineForFunctions": false,
  // Определяет обработку необязательных точек с запятой. Требуется использование TypeScript 3.7 или новее в рабочей области.
  // - игнорировать: не вставлять и не удалять точку с запятой.
  // - вставить: Вставить точку с запятой в конце оператора.
  // - удалить: Удалить ненужные точки с запятой.
  "javascript.format.semicolons": "ignore",
  // Включить/отключить подсказки вкладок для значений элементов в объявлениях перечисления:
  "javascript.inlayHints.enumMemberValues.enabled": true,
  // Включить/отключить подсказки вкладок для неявных возвращаемых типов в сигнатурах функций:
  "javascript.inlayHints.functionLikeReturnTypes.enabled": true,
  // Enable/disable inlay hints for parameter names:
  "javascript.inlayHints.parameterNames.enabled": "all",
  // Suppress parameter name hints on arguments whose text is identical to the parameter name.
  "javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName": true,
  // Enable/disable inlay hints for implicit parameter types:
  "javascript.inlayHints.parameterTypes.enabled": false,
  // Enable/disable inlay hints for implicit types on property declarations:
  "javascript.inlayHints.propertyDeclarationTypes.enabled": false,
  // Enable/disable inlay hints for implicit variable types:
  "javascript.inlayHints.variableTypes.enabled": false,
  // Suppress type hints on variables whose name is identical to the type name.
  "javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName": true,
  // Specify glob patterns of files to exclude from auto imports.
  "javascript.preferences.autoImportFileExcludePatterns": [],
  // Preferred path style for auto imports.
  //  - shortest: Prefers a non-relative import only if one is available that has fewer path segments than a relative import.
  //  - relative: Prefers a relative path to the imported file location.
  //  - non-relative: Prefers a non-relative import based on the `baseUrl` or `paths` configured in your `jsconfig.json` / `tsconfig.json`.
  //  - project-relative: Prefers a non-relative import only if the relative import path would leave the package or project directory. Requires using TypeScript 4.2+ in the workspace.
  "javascript.preferences.importModuleSpecifier": "shortest",
  // Preferred path ending for auto imports. Requires using TypeScript 4.5+ in the workspace.
  //  - auto: Use project settings to select a default.
  //  - minimal: Shorten `./component/index.js` to `./component`.
  //  - index: Shorten `./component/index.js` to `./component/index`.
  //  - js: Do not shorten path endings; include the `.js` extension.
  "javascript.preferences.importModuleSpecifierEnding": "auto",
  // Preferred style for JSX attribute completions.
  //  - auto: Insert `={}` or `="` after attribute names based on the prop type. See `javascript.preferences.quoteStyle` to control the type of quotes used for string attributes.
  //  - braces: Insert `={}` after attribute names.
  //  - none: Only insert attribute names.
  "javascript.preferences.jsxAttributeCompletionStyle": "auto",
  // Preferred quote style to use for Quick Fixes.
  //  - auto: Infer quote type from existing code
  //  - single: Always use single quotes: `'`
  //  - double: Always use double quotes: `"`
  "javascript.preferences.quoteStyle": "auto",
  //Включение или отключение введения псевдонимов для собирательных свойств объекта во время переименований. Требуется использование TypeScript 3.4 или более поздней версии в рабочей области.
  //Параметр typescript.preferences.renameShorthandProperties объявлен нерекомендуемым, вместо него следует использовать typescript.preferences.useAliasesForRenames(2)

  //Включение или отключение введения псевдонимов для собирательных свойств объекта во время переименований. Требуется использование TypeScript 3.4 или более поздней версии в рабочей области.     
  "javascript.preferences.useAliasesForRenames": true,
  // Включить/отключить ссылки CodeLens для файлов JavaScript
  "javascript.referencesCodeLens.enabled": false,
  // Включить/отключить ссылки CodeLens для всех функций в файлах JavaScript.
  "javascript.referencesCodeLens.showOnAllFunctions": false,
  // Включить или отключить предложения автоимпорта.
  "javascript.suggest.autoImports": true,
  //Включить или отключить завершение фрагментов для членов класса. В рабочей области требуется использовать TypeScript 4.5 и выше.
  "javascript.suggest.classMemberSnippets.enabled": false,
  // Дополните функции сигнатурами их параметров.
  "javascript.suggest.completeFunctionCalls": false,
  // Enable/disable suggestion to complete JSDoc comments.
  "javascript.suggest.completeJSDocs": true,
  // Enabled/disable autocomplete suggestions.
  "javascript.suggest.enabled": true,
  // Enable/disable showing completions on potentially undefined values that insert an optional chain call. Requires TS 3.7+ and strict null checks to be enabled.
  "javascript.suggest.includeAutomaticOptionalChainCompletions": true,
  // Enable/disable auto-import-style completions on partially-typed import statements. Requires using TypeScript 4.3+ in the workspace.
  "javascript.suggest.includeCompletionsForImportStatements": true,
  // Enable/disable generating `@returns` annotations for JSDoc templates. Requires using TypeScript 4.2+ in the workspace.
  "javascript.suggest.jsdoc.generateReturns": true,
  // Enable/disable including unique names from the file in JavaScript suggestions. Note that name suggestions are always disabled in JavaScript code that is semantically checked using `@ts-check` or `checkJs`.
  "javascript.suggest.names": true,
  // Enable/disable suggestions for paths in import statements and require calls.
  "javascript.suggest.paths": true,
  // Enable/disable suggestion diagnostics for JavaScript files in the editor.
  "javascript.suggestionActions.enabled": true,
  // Enable/disable automatic updating of import paths when you rename or move a file in VS Code.
  //  - prompt: Prompt on each rename.
  //  - always: Always update paths automatically.
  //  - never: Never rename paths and don't prompt.
  "javascript.updateImportsOnFileMove.enabled": "prompt",
  //Включение или отключение проверки JavaScript
  "javascript.validate.enable": true,
  // Включение или отключение семантической проверки файлов JavaScript. Этот параметр переопределяется файлом "jsconfig.json" или "tsconfig.json".
  "js/ts.implicitProjectConfig.checkJs": false,
  // Задает систему модуля для программы. Дополнительные сведения: https://www.typescriptlang.org/tsconfig#module.
  "js/ts.implicitProjectConfig.module": "ESNext",
  // Включение или отключение строгих типов функций в файлах JavaScript и TypeScript, которые не являются частью проекта. Этот параметр переопределяется файлом "jsconfig.json" или "tsconfig.json".
  "js/ts.implicitProjectConfig.strictFunctionTypes": true,
  // Enable/disable strict null checks in JavaScript and TypeScript files that are not part of a project. Existing `jsconfig.json` or `tsconfig.json` files override this setting.
  "js/ts.implicitProjectConfig.strictNullChecks": true,
  // Set target JavaScript language version for emitted JavaScript and include library declarations.
  "js/ts.implicitProjectConfig.target": "ES2020",
  // Enable/disable automatic closing of JSX tags.
  "typescript.autoClosingTags": true,
  // Check if npm is installed for Automatic Type Acquisition.
  "typescript.check.npmIsInstalled": true,
  // Отключает автоматическое получение типов. Автоматическое получение типов извлекает пакеты @типов из npm для улучшения IntelliSense для внешних библиотек.
  "typescript.disableAutomaticTypeAcquisition": true, //##
  // Включает вывод пользователям запросов на использование версии TypeScript, настроенной в рабочей области для IntelliSense.
  "typescript.enablePromptUseWorkspaceTsdk": true, //##
  // Enable/disable default TypeScript formatter.
  "typescript.format.enable": true,
  // Defines space handling after a comma delimiter.
  "typescript.format.insertSpaceAfterCommaDelimiter": true,
  // Defines space handling after the constructor keyword.
  "typescript.format.insertSpaceAfterConstructor": false,
  // Defines space handling after function keyword for anonymous functions.
  "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
  // Defines space handling after keywords in a control flow statement.
  "typescript.format.insertSpaceAfterKeywordsInControlFlowStatements": true,
  // Defines space handling after opening and before closing empty braces.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": true,
  // Defines space handling after opening and before closing JSX expression braces.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
  // Defines space handling after opening and before closing non-empty braces.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
  // Defines space handling after opening and before closing non-empty brackets.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
  // Defines space handling after opening and before closing non-empty parenthesis.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
  // Defines space handling after opening and before closing template string braces.
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
  // Defines space handling after a semicolon in a for statement.
  "typescript.format.insertSpaceAfterSemicolonInForStatements": true,
  // Defines space handling after type assertions in TypeScript.
  "typescript.format.insertSpaceAfterTypeAssertion": false,
  // Defines space handling after a binary operator.
  "typescript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
  // Defines space handling before function argument parentheses.
  "typescript.format.insertSpaceBeforeFunctionParenthesis": false,
  // Defines whether an open brace is put onto a new line for control blocks or not.
  "typescript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  // Defines whether an open brace is put onto a new line for functions or not.
  "typescript.format.placeOpenBraceOnNewLineForFunctions": false,
  // Defines handling of optional semicolons. Requires using TypeScript 3.7 or newer in the workspace.
  //  - ignore: Don't insert or remove any semicolons.
  //  - insert: Insert semicolons at statement ends.
  //  - remove: Remove unnecessary semicolons.
  "typescript.format.semicolons": "ignore",
  // Enable/disable implementations CodeLens. This CodeLens shows the implementers of an interface.
  "typescript.implementationsCodeLens.enabled": false,
  // Enable/disable inlay hints for member values in enum declarations:
  "typescript.inlayHints.enumMemberValues.enabled": false,
  // Enable/disable inlay hints for implicit return types on function signatures:
  "typescript.inlayHints.functionLikeReturnTypes.enabled": false,
  // Enable/disable inlay hints for parameter names:
  "typescript.inlayHints.parameterNames.enabled": "none",
  // Suppress parameter name hints on arguments whose text is identical to the parameter name.
  "typescript.inlayHints.parameterNames.suppressWhenArgumentMatchesName": true,
  // Enable/disable inlay hints for implicit parameter types:
  "typescript.inlayHints.parameterTypes.enabled": false,
  // Enable/disable inlay hints for implicit types on property declarations:
  "typescript.inlayHints.propertyDeclarationTypes.enabled": false,
  // Enable/disable inlay hints for implicit variable types:
  "typescript.inlayHints.variableTypes.enabled": false,
  // Suppress type hints on variables whose name is identical to the type name.
  "typescript.inlayHints.variableTypes.suppressWhenTypeMatchesName": true,
  // Sets the locale used to report JavaScript and TypeScript errors. Defaults to use VS Code's locale.
  "typescript.locale": "auto",
  // Specifies the path to the npm executable used for Automatic Type Acquisition.
  "typescript.npm": "",
  // Specify glob patterns of files to exclude from auto imports.
  "typescript.preferences.autoImportFileExcludePatterns": [],
  // Preferred path style for auto imports.
  //  - shortest: Prefers a non-relative import only if one is available that has fewer path segments than a relative import.
  //  - relative: Prefers a relative path to the imported file location.
  //  - non-relative: Prefers a non-relative import based on the `baseUrl` or `paths` configured in your `jsconfig.json` / `tsconfig.json`.
  //  - project-relative: Prefers a non-relative import only if the relative import path would leave the package or project directory. Requires using TypeScript 4.2+ in the workspace.
  "typescript.preferences.importModuleSpecifier": "shortest",
  // Preferred path ending for auto imports.
  //  - auto: Use project settings to select a default.
  //  - minimal: Shorten `./component/index.js` to `./component`.
  //  - index: Shorten `./component/index.js` to `./component/index`.
  //  - js: Do not shorten path endings; include the `.js` extension.
  "typescript.preferences.importModuleSpecifierEnding": "auto",
  // Enable/disable searching `package.json` dependencies for available auto imports.
  //  - auto: Search dependencies based on estimated performance impact.
  //  - on: Always search dependencies.
  //  - off: Never search dependencies.
  "typescript.preferences.includePackageJsonAutoImports": "auto",
  // Preferred style for JSX attribute completions.
  //  - auto: Insert `={}` or `="` after attribute names based on the prop type.
  //  - braces: Insert `={}` after attribute names.
  //  - none: Only insert attribute names.
  "typescript.preferences.jsxAttributeCompletionStyle": "auto",
  // Preferred quote style to use for Quick Fixes.
  //  - auto: Infer quote type from existing code
  //  - single: Always use single quotes: `'`
  //  - double: Always use double quotes: `"`
  "typescript.preferences.quoteStyle": "auto",
  // Enable/disable introducing aliases for object shorthand properties during renames. Requires using TypeScript 3.4 or newer in the workspace.
  "typescript.preferences.useAliasesForRenames": true,
  // Enable/disable references CodeLens in TypeScript files.
  "typescript.referencesCodeLens.enabled": false,
  // Enable/disable references CodeLens on all functions in TypeScript files.
  "typescript.referencesCodeLens.showOnAllFunctions": false,
  // Report style checks as warnings.
  "typescript.reportStyleChecksAsWarnings": true,
  // Enable/disable auto import suggestions.
  "typescript.suggest.autoImports": true,
  // Enable/disable snippet completions for class members.
  "typescript.suggest.classMemberSnippets.enabled": true,
  // Complete functions with their parameter signature.
  "typescript.suggest.completeFunctionCalls": false,
  // Enable/disable suggestion to complete JSDoc comments.
  "typescript.suggest.completeJSDocs": true,
  // Enabled/disable autocomplete suggestions.
  "typescript.suggest.enabled": true,
  // Enable/disable showing completions on potentially undefined values that insert an optional chain call. Requires TS 3.7+ and strict null checks to be enabled.
  "typescript.suggest.includeAutomaticOptionalChainCompletions": true,
  // Enable/disable auto-import-style completions on partially-typed import statements. Requires using TypeScript 4.3+ in the workspace.
  "typescript.suggest.includeCompletionsForImportStatements": true,
  // Enable/disable snippet completions from TS Server. Requires using TypeScript 4.3+ in the workspace.
  "typescript.suggest.includeCompletionsWithSnippetText": true,
  // Enable/disable generating `@returns` annotations for JSDoc templates. Requires using TypeScript 4.2+ in the workspace.
  "typescript.suggest.jsdoc.generateReturns": true,
  // Enable/disable snippet completions for methods in object literals.
  "typescript.suggest.objectLiteralMethodSnippets.enabled": true,
  // Enable/disable suggestions for paths in import statements and require calls.
  "typescript.suggest.paths": true,
  // Enable/disable suggestion diagnostics for TypeScript files in the editor.
  "typescript.suggestionActions.enabled": true,
  // Controls auto detection of tsc tasks.
  //  - on: Create both build and watch tasks.
  //  - off: Disable this feature.
  //  - build: Only create single run compile tasks.
  //  - watch: Only create compile and watch tasks.
  "typescript.tsc.autoDetect": "on",
  // Указывает путь к папке с файлами tsserver и `lib*.d.ts` в установке TypeScript для использования в IntelliSense, например: `./node_modules/typescript/lib`.
  // - Если указано в качестве пользовательской настройки, версия TypeScript из `typescript.tsdk` автоматически заменяет встроенную версию TypeScript.
  // — Если typescript.tsdk указан в качестве параметра рабочей области, он позволяет вам переключиться на использование этой версии TypeScript для IntelliSense в рабочей области с помощью команды «TypeScript: выберите версию TypeScript».
  "typescript.tsdk": "",
  // Enables tracing TS server performance to a directory. These trace files can be used to diagnose TS Server performance issues. The log may contain file paths, source code, and other potentially sensitive information from your project.
  "typescript.tsserver.enableTracing": false,
  // Enables logging of the TS server to a file. This log can be used to diagnose TS Server issues. The log may contain file paths, source code, and other potentially sensitive information from your project.
  "typescript.tsserver.log": "off",
  // The maximum amount of memory (in MB) to allocate to the TypeScript server process.
  "typescript.tsserver.maxTsServerMemory": 3072,
  // Additional paths to discover TypeScript Language Service plugins.
  "typescript.tsserver.pluginPaths": [],
  // Enables tracing of messages sent to the TS server. This trace can be used to diagnose TS Server issues. The trace may contain file paths, source code, and other potentially sensitive information from your project.
  "typescript.tsserver.trace": "off",
  // Определяет, запускает ли TypeScript выделенный сервер для более быстрой обработки операций, связанных с синтаксисом, таких как свертывание вычислительного кода.
  // - всегда: используйте более легкий сервер синтаксиса для обработки всех операций IntelliSense. Этот синтаксический сервер может предоставлять IntelliSense только для открытых файлов.
  // - никогда: не использовать выделенный сервер синтаксиса. Используйте один сервер для обработки всех операций IntelliSense.
  // - auto: создать как полный сервер, так и более легкий сервер, предназначенный для синтаксических операций. Синтаксический сервер используется для ускорения синтаксических операций и предоставления IntelliSense во время загрузки проектов.
  "typescript.tsserver.useSyntaxServer": "auto",
  // Configure which watching strategies should be used to keep track of files and directories. Requires using TypeScript 3.8+ in the workspace.
  "typescript.tsserver.watchOptions": {},
  // Enable/disable automatic updating of import paths when you rename or move a file in VS Code.
  //  - prompt: Prompt on each rename.
  //  - always: Always update paths automatically.
  //  - never: Never rename paths and don't prompt.
  "typescript.updateImportsOnFileMove.enabled": "prompt",
  // Enable/disable TypeScript validation.
  "typescript.validate.enable": true,
  // Controls which files are searched by go to symbol in workspace.
  //  - allOpenProjects: Search all open JavaScript or TypeScript projects for symbols. Requires using TypeScript 3.9 or newer in the workspace.
  //  - currentProject: Only search for symbols in the current JavaScript or TypeScript project.
  "typescript.workspaceSymbols.scope": "allOpenProjects",
  // Testing
  // Always reveal the executed test when `testing.followRunningTest` is on. If this setting is turned off, only failed tests will be revealed.
  "testing.alwaysRevealTestOnStateChange": false,
  // Определяет, когда будет автоматически открываться представление "Просмотр ошибок".
  // failureInVisibleDocument: Открывать автоматически при сбое теста в видимом документе.
  "testing.automaticallyOpenPeekView": "failureInVisibleDocument",
  // Определяет, следует ли автоматически открывать представление просмотра в режиме автозапуска.
  "testing.automaticallyOpenPeekViewDuringAutoRun": true,
  // How long to wait, in milliseconds, after a test is marked as outdated and starting a new run.
  "testing.autoRun.delay": 1000,
  // Controls which tests are automatically run.
  //  - all: Automatically runs all discovered test when auto-run is toggled. Reruns individual tests when they are changed.
  //  - rerun: Reruns individual tests when they are changed. Will not automatically run any tests that have not been already executed.
  "testing.autoRun.mode": "all",
  // Controls the action to take when left-clicking on a test decoration in the gutter.
  //  - run: Run the test.
  //  - debug: Debug the test.
  //  - contextMenu: Open the context menu for more options.
  "testing.defaultGutterClickAction": "run",
  // Controls whether the running test should be followed in the Test Explorer view.
  "testing.followRunningTest": true,
  // Controls whether test decorations are shown in the editor gutter.
  "testing.gutterEnabled": true,
  // Controls when the testing view should open.
  //  - neverOpen: Never automatically open the testing view
  //  - openOnTestStart: Open the testing view when tests start
  //  - openOnTestFailure: Open the testing view on any test failure
  "testing.openTesting": "openOnTestStart",
  // Control whether save all dirty editors before running a test.
  "testing.saveBeforeTest": true,
  // CSS
  // Insert semicolon at end of line when completing CSS properties.
  "css.completion.completePropertyWithSemicolon": true,
  // By default, VS Code triggers property value completion after selecting a CSS property. Use this setting to disable this behavior.
  "css.completion.triggerPropertyValueCompletion": true,
  // A list of relative file paths pointing to JSON files following the custom data format.
  // VS Code loads custom data on startup to enhance its CSS support for the custom CSS properties, at directives, pseudo classes and pseudo elements you specify in the JSON files.
  // The file paths are relative to workspace and only workspace folder settings are considered.
  "css.customData": [],
  // Put braces on the same line as rules (`collapse`) or put braces on own line (`expand`).
  "css.format.braceStyle": "collapse",
  // Enable/disable default CSS formatter.
  "css.format.enable": true,
  // Maximum number of line breaks to be preserved in one chunk, when `css.format.preserveNewLines` is enabled.
  "css.format.maxPreserveNewLines": null,
  // Separate rulesets by a blank line.
  "css.format.newlineBetweenRules": true,
  // Separate selectors with a new line.
  "css.format.newlineBetweenSelectors": true,
  // Whether existing line breaks before elements should be preserved.
  "css.format.preserveNewLines": true,
  // Ensure a space character around selector separators '>', '+', '~' (e.g. `a > b`).
  "css.format.spaceAroundSelectorSeparator": false,
  // Show tag and attribute documentation in CSS hovers.
  "css.hover.documentation": true,
  // Show references to MDN in CSS hovers.
  "css.hover.references": true,
  // Invalid number of parameters.
  "css.lint.argumentsInColorFunction": "error",
  // Do not use `width` or `height` when using `padding` or `border`.
  "css.lint.boxModel": "ignore",
  // When using a vendor-specific prefix make sure to also include all other vendor-specific properties.
  "css.lint.compatibleVendorPrefixes": "ignore",
  // Do not use duplicate style definitions.
  "css.lint.duplicateProperties": "ignore",
  // Do not use empty rulesets.
  "css.lint.emptyRules": "warning",
  // Avoid using `float`. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
  "css.lint.float": "ignore",
  // `@font-face` rule must define `src` and `font-family` properties.
  "css.lint.fontFaceProperties": "warning",
  // Hex colors must consist of three or six hex numbers.
  "css.lint.hexColorLength": "error",
  // Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
  "css.lint.idSelector": "ignore",
  // IE hacks are only necessary when supporting IE7 and older.
  "css.lint.ieHack": "ignore",
  // Avoid using `!important`. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
  "css.lint.important": "ignore",
  // Import statements do not load in parallel.
  "css.lint.importStatement": "ignore",
  // Property is ignored due to the display. E.g. with `display: inline`, the `width`, `height`, `margin-top`, `margin-bottom`, and `float` properties have no effect.
  "css.lint.propertyIgnoredDueToDisplay": "warning",
  // The universal selector (`*`) is known to be slow.
  "css.lint.universalSelector": "ignore",
  // Unknown at-rule.
  "css.lint.unknownAtRules": "warning",
  // Unknown property.
  "css.lint.unknownProperties": "warning",
  // Unknown vendor specific property.
  "css.lint.unknownVendorSpecificProperties": "ignore",
  // A list of properties that are not validated against the `unknownProperties` rule.
  "css.lint.validProperties": [],
  // When using a vendor-specific prefix, also include the standard property.
  "css.lint.vendorPrefix": "warning",
  // No unit for zero needed.
  "css.lint.zeroUnits": "ignore",
  // Traces the communication between VS Code and the CSS language server.
  "css.trace.server": "off",
  // Enables or disables all validations.
  "css.validate": true,
  // LESS
  // Insert semicolon at end of line when completing CSS properties.
  "less.completion.completePropertyWithSemicolon": true,
  // By default, VS Code triggers property value completion after selecting a CSS property. Use this setting to disable this behavior.
  "less.completion.triggerPropertyValueCompletion": true,
  // Put braces on the same line as rules (`collapse`) or put braces on own line (`expand`).
  "less.format.braceStyle": "collapse",
  // Enable/disable default LESS formatter.
  "less.format.enable": true,
  // Maximum number of line breaks to be preserved in one chunk, when `less.format.preserveNewLines` is enabled.
  "less.format.maxPreserveNewLines": null,
  // Separate rulesets by a blank line.
  "less.format.newlineBetweenRules": true,
  // Separate selectors with a new line.
  "less.format.newlineBetweenSelectors": true,
  // Whether existing line breaks before elements should be preserved.
  "less.format.preserveNewLines": true,
  // Ensure a space character around selector separators '>', '+', '~' (e.g. `a > b`).
  "less.format.spaceAroundSelectorSeparator": false,
  // Show tag and attribute documentation in LESS hovers.
  "less.hover.documentation": true,
  // Show references to MDN in LESS hovers.
  "less.hover.references": true,
  // Invalid number of parameters.
  "less.lint.argumentsInColorFunction": "error",
  // Do not use `width` or `height` when using `padding` or `border`.
  "less.lint.boxModel": "ignore",
  // When using a vendor-specific prefix make sure to also include all other vendor-specific properties.
  "less.lint.compatibleVendorPrefixes": "ignore",
  // Do not use duplicate style definitions.
  "less.lint.duplicateProperties": "ignore",
  // Do not use empty rulesets.
  "less.lint.emptyRules": "warning",
  // Avoid using `float`. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
  "less.lint.float": "ignore",
  // `@font-face` rule must define `src` and `font-family` properties.
  "less.lint.fontFaceProperties": "warning",
  // Hex colors must consist of three or six hex numbers.
  "less.lint.hexColorLength": "error",
  // Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
  "less.lint.idSelector": "ignore",
  // IE hacks are only necessary when supporting IE7 and older.
  "less.lint.ieHack": "ignore",
  // Avoid using `!important`. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
  "less.lint.important": "ignore",
  // Import statements do not load in parallel.
  "less.lint.importStatement": "ignore",
  // Property is ignored due to the display. E.g. with `display: inline`, the `width`, `height`, `margin-top`, `margin-bottom`, and `float` properties have no effect.
  "less.lint.propertyIgnoredDueToDisplay": "warning",
  // The universal selector (`*`) is known to be slow.
  "less.lint.universalSelector": "ignore",
  // Unknown at-rule.
  "less.lint.unknownAtRules": "warning",
  // Unknown property.
  "less.lint.unknownProperties": "warning",
  // Unknown vendor specific property.
  "less.lint.unknownVendorSpecificProperties": "ignore",
  // A list of properties that are not validated against the `unknownProperties` rule.
  "less.lint.validProperties": [],
  // When using a vendor-specific prefix, also include the standard property.
  "less.lint.vendorPrefix": "warning",
  // No unit for zero needed.
  "less.lint.zeroUnits": "ignore",
  // Enables or disables all validations.
  "less.validate": true,
  // SCSS (Sass)
  // Insert semicolon at end of line when completing CSS properties.
  "scss.completion.completePropertyWithSemicolon": true,
  // By default, VS Code triggers property value completion after selecting a CSS property. Use this setting to disable this behavior.
  "scss.completion.triggerPropertyValueCompletion": true,
  // Put braces on the same line as rules (`collapse`) or put braces on own line (`expand`).
  "scss.format.braceStyle": "collapse",
  // Enable/disable default SCSS formatter.
  "scss.format.enable": true,
  // Maximum number of line breaks to be preserved in one chunk, when `scss.format.preserveNewLines` is enabled.
  "scss.format.maxPreserveNewLines": null,
  // Separate rulesets by a blank line.
  "scss.format.newlineBetweenRules": true,
  // Separate selectors with a new line.
  "scss.format.newlineBetweenSelectors": true,
  // Whether existing line breaks before elements should be preserved.
  "scss.format.preserveNewLines": true,
  // Ensure a space character around selector separators '>', '+', '~' (e.g. `a > b`).
  "scss.format.spaceAroundSelectorSeparator": false,
  // Show tag and attribute documentation in SCSS hovers.
  "scss.hover.documentation": true,
  // Show references to MDN in SCSS hovers.
  "scss.hover.references": true,
  // Invalid number of parameters.
  "scss.lint.argumentsInColorFunction": "error",
  // Do not use `width` or `height` when using `padding` or `border`.
  "scss.lint.boxModel": "ignore",
  // When using a vendor-specific prefix make sure to also include all other vendor-specific properties.
  "scss.lint.compatibleVendorPrefixes": "ignore",
  // Do not use duplicate style definitions.
  "scss.lint.duplicateProperties": "ignore",
  // Do not use empty rulesets.
  "scss.lint.emptyRules": "warning",
  // Avoid using `float`. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
  "scss.lint.float": "ignore",
  // `@font-face` rule must define `src` and `font-family` properties.
  "scss.lint.fontFaceProperties": "warning",
  // Hex colors must consist of three or six hex numbers.
  "scss.lint.hexColorLength": "error",
  // Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
  "scss.lint.idSelector": "ignore",
  // IE hacks are only necessary when supporting IE7 and older.
  "scss.lint.ieHack": "ignore",
  // Avoid using `!important`. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
  "scss.lint.important": "ignore",
  // Import statements do not load in parallel.
  "scss.lint.importStatement": "ignore",
  // Property is ignored due to the display. E.g. with `display: inline`, the `width`, `height`, `margin-top`, `margin-bottom`, and `float` properties have no effect.
  "scss.lint.propertyIgnoredDueToDisplay": "warning",
  // The universal selector (`*`) is known to be slow.
  "scss.lint.universalSelector": "ignore",
  // Unknown at-rule.
  "scss.lint.unknownAtRules": "warning",
  // Unknown property.
  "scss.lint.unknownProperties": "warning",
  // Unknown vendor specific property.
  "scss.lint.unknownVendorSpecificProperties": "ignore",
  // A list of properties that are not validated against the `unknownProperties` rule.
  "scss.lint.validProperties": [],
  // When using a vendor-specific prefix, also include the standard property.
  "scss.lint.vendorPrefix": "warning",
  // No unit for zero needed.
  "scss.lint.zeroUnits": "ignore",
  // Enables or disables all validations.
  "scss.validate": true,
  // Extensions
  // When enabled, automatically checks extensions for updates. If an extension has an update, it is marked as outdated in the Extensions view. The updates are fetched from a Microsoft online service.
  "extensions.autoCheckUpdates": true,
  // Controls the automatic update behavior of extensions. The updates are fetched from a Microsoft online service.
  //  - true: Download and install updates automatically for all extensions.
  //  - onlyEnabledExtensions: Download and install updates automatically only for enabled extensions. Disabled extensions will not be updated automatically.
  //  - false: Extensions are not automatically updated.
  "extensions.autoUpdate": true,
  // When enabled, editors with extension details will be automatically closed upon navigating away from the Extensions View.
  "extensions.closeExtensionDetailsOnViewChange": false,
  // When an extension is listed here, a confirmation prompt will not be shown when that extension handles a URI.
  "extensions.confirmedUriHandlerExtensionIds": [],
  // When enabled, the notifications for extension recommendations will not be shown.
  "extensions.ignoreRecommendations": false,
  // Override the untrusted workspace support of an extension. Extensions using `true` will always be enabled. Extensions using `limited` will always be enabled, and the extension will hide functionality that requires trust. Extensions using `false` will only be enabled only when the workspace is trusted.
  "extensions.supportUntrustedWorkspaces": {},
  // Override the virtual workspaces support of an extension.
  "extensions.supportVirtualWorkspaces": {},
  // Output
  // Enable/disable the ability of smart scrolling in the output view. Smart scrolling allows you to lock scrolling automatically when you click in the output view and unlocks when you click in the last line.
  "output.smartScroll.enabled": true,
  // Settings Sync
  // List of extensions to be ignored while synchronizing. The identifier of an extension is always `${publisher}.${name}`. For example: `vscode.csharp`.
  "settingsSync.ignoredExtensions": [
    "pthorsson.vscode-jsp",
    "henriiik.docker-linter"
  ],
  // Configure settings to be ignored while synchronizing.
  "settingsSync.ignoredSettings": [],
  // Synchronize keybindings for each platform.
  "settingsSync.keybindingsPerPlatform": true,
  // Notebooks
  // Controls whether code cells in the interactive window are collapsed by default.
  "interactiveWindow.collapseCellInputCode": "fromEditor",
  // When enabled notebook breadcrumbs contain code cells.
  "notebook.breadcrumbs.showCodeCells": true,
  // Controls where the focus indicator is rendered, either along the cell borders or on the left gutter.
  "notebook.cellFocusIndicator": "gutter",
  // Where the cell toolbar should be shown, or whether it should be hidden.
  "notebook.cellToolbarLocation": {
    "default": "right"
  },
  // Whether the cell toolbar should appear on hover or click.
  "notebook.cellToolbarVisibility": "click",
  // Control whether the notebook editor should be rendered in a compact form. For example, when turned on, it will decrease the left margin width.
  "notebook.compactView": true,
  // Control whether outputs action should be rendered in the output toolbar.
  "notebook.consolidatedOutputButton": true,
  // Control whether extra actions are shown in a dropdown next to the run button.
  "notebook.consolidatedRunButton": false,
  // Whether to use the enhanced text diff editor for notebook.
  "notebook.diff.enablePreview": true,
  // Hide Metadata Differences
  "notebook.diff.ignoreMetadata": false,
  // Hide Outputs Differences
  "notebook.diff.ignoreOutputs": false,
  // Priority list for output mime types
  "notebook.displayOrder": [],
  // Control whether the notebook editor should allow moving cells through drag and drop.
  "notebook.dragAndDropEnabled": true,
  // Settings for code editors used in notebooks. This can be used to customize most editor.* settings.
  "notebook.editorOptionsCustomizations": {},
  // Control whether to render a global toolbar inside the notebook editor.
  "notebook.globalToolbar": true,
  // Control whether the actions on the notebook toolbar should render label or not.
  "notebook.globalToolbarShowLabel": "always",
  // Control where the insert cell actions should appear.
  //  - betweenCells: A toolbar that appears on hover between cells.
  //  - notebookToolbar: The toolbar at the top of the notebook editor.
  //  - both: Both toolbars.
  //  - hidden: The insert actions don't appear anywhere.
  "notebook.insertToolbarLocation": "both",
  // Controls the display of line numbers in the cell editor.
  "notebook.lineNumbers": "off",
  // Controls the font size in pixels of rendered markup in notebooks. When set to `0`, 120% of `editor.fontSize` is used.
  "notebook.markup.fontSize": 0,
  // When enabled cursor can navigate to the next/previous cell when the current cursor in the cell editor is at the first/last line.
  "notebook.navigation.allowNavigateToSurroundingCells": true,
  // When enabled notebook outline shows code cells.
  "notebook.outline.showCodeCells": false,
  // Control how many lines of text in a text output is rendered.
  "notebook.output.textLineLimit": 30,
  // The font family for the output text for notebook cells. When set to empty, the `editor.fontFamily` is used.
  "notebook.outputFontFamily": "",
  // Font size for the output text for notebook cells. When set to 0, `editor.fontSize` is used.
  "notebook.outputFontSize": 0,
  // Line height of the output text for notebook cells.
  //  - Values between 0 and 8 will be used as a multiplier with the font size.
  //  - Values greater than or equal to 8 will be used as effective values.
  "notebook.outputLineHeight": 22,
  // Whether the cell status bar should be shown.
  //  - hidden: The cell Status bar is always hidden.
  //  - visible: The cell Status bar is always visible.
  //  - visibleAfterExecute: The cell Status bar is hidden until the cell has executed. Then it becomes visible to show the execution status.
  "notebook.showCellStatusBar": "visible",
  // Controls when the Markdown header folding arrow is shown.
  //  - always: The folding controls are always visible.
  //  - never: Never show the folding controls and reduce the gutter size.
  //  - mouseover: The folding controls are visible only on mouseover.
  "notebook.showFoldingControls": "mouseover",
  // Whether to use separate undo/redo stack for each cell.
  "notebook.undoRedoPerCell": true,
  // Automatically scroll the interactive window to show the output of the last statement executed. If this value is false, the window will only scroll if the last cell was already the one scrolled to.
  "interactiveWindow.alwaysScrollOnNewCell": true,
  // Controls whether the Interactive Window sessions/history should be restored across window reloads.
  "interactiveWindow.restore": false,
  // Terminal
  //   Если файл открывается из обозревателя в терминале, определяет, какой тип терминала будет запущен
  // integrated: Использовать встроенный терминал VS Code.
  "terminal.explorerKind": "integrated",
  // External Terminal
  // Customizes which terminal to run on Linux.
  "terminal.external.linuxExec": "xterm",
  // Customizes which terminal application to run on macOS.
  "terminal.external.osxExec": "Terminal.app",
  // Customizes which terminal to run on Windows.
  "terminal.external.windowsExec": "C:\\Windows\\System32\\cmd.exe",
  // Whether to allow menubar mnemonics (for example, Alt+F) to trigger the open of the menubar. Note that this will cause all alt keystrokes to skip the shell when true. This does nothing on macOS.
  "terminal.integrated.allowMnemonics": false,
  // If enabled, alt/option + click will reposition the prompt cursor to underneath the mouse when `editor.multiCursorModifier` is set to `'alt'` (the default value). This may not work reliably depending on your shell.
  "terminal.integrated.altClickMovesCursor": true,
  // The terminal profile to use on Linux for automation-related terminal usage like tasks and debug.
  "terminal.integrated.automationProfile.linux": null,
  // The terminal profile to use on macOS for automation-related terminal usage like tasks and debug.
  "terminal.integrated.automationProfile.osx": null,
  // The terminal profile to use for automation-related terminal usage like tasks and debug.
  "terminal.integrated.automationProfile.windows": null,
  // A set of messages that when encountered in the terminal will be automatically responded to. Provided the message is specific enough, this can help automate away common responses.
  "terminal.integrated.autoReplies": {},
  // The number of milliseconds to show the bell within a terminal tab when triggered.
  "terminal.integrated.bellDuration": 1000,
  // A set of command IDs whose keybindings will not be sent to the shell but instead always be handled by VS Code. This allows keybindings that would normally be consumed by the shell to act instead the same as when the terminal is not focused, for example `Ctrl+P` to launch Quick Open.
  "terminal.integrated.commandsToSkipShell": [
    "-workbench.action.terminal.focusFind"
  ],
  // Определяет, следует ли подтверждать закрытие окна, если есть активные сеансы терминала.
  // never: Никогда не подтверждать.
  "terminal.integrated.confirmOnExit": "never",
  // Определяет, следует ли подтверждать завершение терминалов при наличии дочерних процессов. Если задано значение "редактор2, терминалы в области редактора будут помечены как измененные, если у них есть дочерние процессы. Обратите внимание, что обнаружение дочерних процессов может не работать должным образом для оболочек типа Git Bash, которые не запускают свои процессы как дочерние процессы оболочки.
  //editor: Проверить, находится ли терминал в редакторе.
  "terminal.integrated.confirmOnKill": "editor",
  // Controls whether text selected in the terminal will be copied to the clipboard.
  "terminal.integrated.copyOnSelection": false,
  // Controls whether the terminal cursor blinks.
  "terminal.integrated.cursorBlinking": false,
  // Controls the style of terminal cursor.
  "terminal.integrated.cursorStyle": "line",
  // Controls the width of the cursor when `terminal.integrated.cursorStyle` is set to `line`.
  "terminal.integrated.cursorWidth": 1,
  // Whether to draw custom glyphs for block element and box drawing characters instead of using the font, which typically yields better rendering with continuous lines. Note that this doesn't work with the DOM renderer.
  "terminal.integrated.customGlyphs": true,
  // An explicit start path where the terminal will be launched, this is used as the current working directory (cwd) for the shell process. This may be particularly useful in workspace settings if the root directory is not a convenient cwd.
  "terminal.integrated.cwd": "",
  // Controls where newly created terminals will appear.
  //  - editor: Create terminals in the editor
  //  - view: Create terminals in the terminal view
  "terminal.integrated.defaultLocation": "view",
  // The default profile used on Linux. This setting will currently be ignored if either `terminal.integrated.shell.linux` or `terminal.integrated.shellArgs.linux` are set.
  "terminal.integrated.defaultProfile.linux": null,
  // The default profile used on macOS. This setting will currently be ignored if either `terminal.integrated.shell.osx` or `terminal.integrated.shellArgs.osx` are set.
  "terminal.integrated.defaultProfile.osx": null,
  // The default profile used on Windows. This setting will currently be ignored if either `terminal.integrated.shell.windows` or `terminal.integrated.shellArgs.windows` are set.
  "terminal.integrated.defaultProfile.windows": null,
  // Controls whether to detect and set the `$LANG` environment variable to a UTF-8 compliant option since VS Code's terminal only supports UTF-8 encoded data coming from the shell.
  //  - auto: Set the `$LANG` environment variable if the existing variable does not exist or it does not end in `'.UTF-8'`.
  //  - off: Do not set the `$LANG` environment variable.
  //  - on: Always set the `$LANG` environment variable.
  "terminal.integrated.detectLocale": "auto",
  // Controls whether bold text in the terminal will always use the "bright" ANSI color variant.
  "terminal.integrated.drawBoldTextInBrightColors": true,
  // Controls whether the terminal bell is enabled, this shows up as a visual bell next to the terminal's name.
  "terminal.integrated.enableBell": true,
  // Whether to enable file links in the terminal. Links can be slow when working on a network drive in particular because each file link is verified against the file system. Changing this will take effect only in new terminals.
  "terminal.integrated.enableFileLinks": true,
  // Show a warning dialog when pasting multiple lines into the terminal. The dialog does not show when:
  // - Bracketed paste mode is enabled (the shell supports multi-line paste natively)
  // - The paste is handled by the shell's readline (in the case of pwsh)
  "terminal.integrated.enableMultiLinePasteWarning": true,
  // Persist terminal sessions/history for the workspace across window reloads.
  "terminal.integrated.enablePersistentSessions": true,
  // Object with environment variables that will be added to the VS Code process to be used by the terminal on Linux. Set to `null` to delete the environment variable.
  "terminal.integrated.env.linux": {},
  // Object with environment variables that will be added to the VS Code process to be used by the terminal on macOS. Set to `null` to delete the environment variable.
  "terminal.integrated.env.osx": {},
  // Object with environment variables that will be added to the VS Code process to be used by the terminal on Windows. Set to `null` to delete the environment variable.
  "terminal.integrated.env.windows": {},
  // Whether to display the environment changes indicator on each terminal which explains whether extensions have made, or want to make changes to the terminal's environment.
  //  - off: Disable the indicator.
  //  - on: Enable the indicator.
  //  - warnonly: Only show the warning indicator when a terminal's environment is 'stale', not the information indicator that shows a terminal has had its environment modified by an extension.
  "terminal.integrated.environmentChangesIndicator": "warnonly",
  // Whether to relaunch terminals automatically if extension want to contribute to their environment and have not been interacted with yet.
  "terminal.integrated.environmentChangesRelaunch": true,
  // Scrolling speed multiplier when pressing `Alt`.
  "terminal.integrated.fastScrollSensitivity": 5,
  // Controls the font family of the terminal, this defaults to `editor.fontFamily`'s value.
  "terminal.integrated.fontFamily": "monospace",
  // Controls the font size in pixels of the terminal.
  "terminal.integrated.fontSize": 14,
  // The font weight to use within the terminal for non-bold text. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.
  "terminal.integrated.fontWeight": "normal",
  // The font weight to use within the terminal for bold text. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.
  "terminal.integrated.fontWeightBold": "bold",
  // Controls whether the terminal will leverage the GPU to do its rendering.
  //  - auto: Let VS Code detect which renderer will give the best experience.
  //  - on: Enable GPU acceleration within the terminal.
  //  - off: Disable GPU acceleration within the terminal.
  //  - canvas: Use the terminal's fallback canvas renderer which uses a 2d context instead of webgl which may perform better on some systems.
  "terminal.integrated.gpuAcceleration": "auto",
  // A set of process names to ignore when using the `terminal.integrated.confirmOnKill` setting.
  "terminal.integrated.ignoreProcessNames": [],
  // Whether new shells should inherit their environment from VS Code, which may source a login shell to ensure $PATH and other development variables are initialized. This has no effect on Windows.
  "terminal.integrated.inheritEnv": true,
  // Controls the letter spacing of the terminal, this is an integer value which represents the amount of additional pixels to add between characters.
  "terminal.integrated.letterSpacing": 0,
  // Controls the line height of the terminal, this number is multiplied by the terminal font size to get the actual line-height in pixels.
  "terminal.integrated.lineHeight": 1,
  // When local echo should be enabled. This will override `terminal.integrated.localEchoLatencyThreshold`
  //  - on: Always enabled
  //  - off: Always disabled
  //  - auto: Enabled only for remote workspaces
  "terminal.integrated.localEchoEnabled": "auto",
  // Local echo will be disabled when any of these program names are found in the terminal title.
  "terminal.integrated.localEchoExcludePrograms": [
    "vim",
    "vi",
    "nano",
    "tmux"
  ],
  // Length of network delay, in milliseconds, where local edits will be echoed on the terminal without waiting for server acknowledgement. If '0', local echo will always be on, and if '-1' it will be disabled.
  "terminal.integrated.localEchoLatencyThreshold": 30,
  // Terminal style of locally echoed text; either a font style or an RGB color.
  "terminal.integrated.localEchoStyle": "dim",
  // Controls whether to force selection when using Option+click on macOS. This will force a regular (line) selection and disallow the use of column selection mode. This enables copying and pasting using the regular terminal selection, for example, when mouse mode is enabled in tmux.
  "terminal.integrated.macOptionClickForcesSelection": false,
  // Controls whether to treat the option key as the meta key in the terminal on macOS.
  "terminal.integrated.macOptionIsMeta": false,
  // When set the foreground color of each cell will change to try meet the contrast ratio specified. Example values:
  //
  // - 1: Do nothing and use the standard theme colors.
  // - 4.5: WCAG AA compliance (minimum).
  // - 7: WCAG AAA compliance (enhanced).
  // - 21: White on black or black on white.
  "terminal.integrated.minimumContrastRatio": 1,
  // A multiplier to be used on the `deltaY` of mouse wheel scroll events.
  "terminal.integrated.mouseWheelScrollSensitivity": 1,
  // When the terminal process must be shutdown (for example, on window or application close), this determines when the previous terminal session contents/history should be restored and processes be recreated when the workspace is next opened.
  //  - onExit: Revive the processes after the last window is closed on Windows/Linux or when the `workbench.action.quit` command is triggered (command palette, keybinding, menu).
  //  - onExitAndWindowClose: Revive the processes after the last window is closed on Windows/Linux or when the `workbench.action.quit` command is triggered (command palette, keybinding, menu), or when the window is closed.
  //  - never: Never restore the terminal buffers or recreate the process.
  "terminal.integrated.persistentSessionReviveProcess": "onExit",
  // Controls the maximum amount of lines that will be restored when reconnecting to a persistent terminal session. Increasing this will restore more lines of scrollback at the cost of more memory and increase the time it takes to connect to terminals on start up. This setting requires a restart to take effect and should be set to a value less than or equal to `terminal.integrated.scrollback`.
  "terminal.integrated.persistentSessionScrollback": 100,
  // The Linux profiles to present when creating a new terminal via the terminal dropdown. Set the `path` property manually with an optional `args`.
  // Set an existing profile to `null` to hide the profile from the list, for example: `"bash": null`.
  "terminal.integrated.profiles.linux": {},
  // The macOS profiles to present when creating a new terminal via the terminal dropdown.
  "terminal.integrated.profiles.osx": {
    "bash": {
      "path": "bash",
      "args": [
        "-l"
      ],
      "icon": "terminal-bash"
    },
    "zsh": {
      "path": "zsh",
      "args": [
        "-l"
      ]
    },
    "fish": {
      "path": "fish",
      "args": [
        "-l"
      ]
    },
    "tmux": {
      "path": "tmux",
      "icon": "terminal-tmux"
    },
    "pwsh": {
      "path": "pwsh",
      "icon": "terminal-powershell"
    }
  },
  // The Windows profiles to present when creating a new terminal via the terminal dropdown.
  "terminal.integrated.profiles.windows": {},
  // Controls how terminal reacts to right click.
  //  - default: Show the context menu.
  //  - copyPaste: Copy when there is a selection, otherwise paste.
  //  - paste: Paste on right click.
  //  - selectWord: Select the word under the cursor and show the context menu.
  //  - nothing: Do nothing and pass event to terminal.
  "terminal.integrated.rightClickBehavior": "copyPaste",
  // Controls the maximum amount of lines the terminal keeps in its buffer.
  "terminal.integrated.scrollback": 10000,
  // Отправляет большинство настраиваемых сочетаний клавиш на терминал, а не в рабочую среду, переопределяя #terminal.integrated.commandsToSkipShell#, который можно альтернативно использовать для точной настройки.
  "terminal.integrated.sendKeybindingsToShell": false,
  // When shell integration is enabled, adds a decoration for each command.
  //  - both: Show decorations in the gutter (left) and overview ruler (right)
  //  - gutter: Show gutter decorations to the left of the terminal
  //  - overviewRuler: Show overview ruler decorations to the right of the terminal
  //  - never: Do not show decorations
  "terminal.integrated.shellIntegration.decorationsEnabled": "both",
  // Determines whether or not shell integration is auto-injected to support features like enhanced command tracking and current working directory detection.
  "terminal.integrated.shellIntegration.enabled": true,
  // Controls the number of recently used commands to keep in the terminal command history. Set to 0 to disable terminal command history.
  "terminal.integrated.shellIntegration.history": 100,
  // Controls whether to show the alert "The terminal process terminated with exit code" when exit code is non-zero.
  "terminal.integrated.showExitAlert": true,
  // Whether to show hovers for links in the terminal output.
  "terminal.integrated.showLinkHover": true,
  // Controls the working directory a split terminal starts with.
  //  - workspaceRoot: A new split terminal will use the workspace root as the working directory. In a multi-root workspace a choice for which root folder to use is offered.
  //  - initial: A new split terminal will use the working directory that the parent terminal started with.
  //  - inherited: On macOS and Linux, a new split terminal will use the working directory of the parent terminal. On Windows, this behaves the same as initial.
  "terminal.integrated.splitCwd": "inherited",

  // A codicon ID to associate with terminal icons by default.
  "terminal.integrated.tabs.defaultIcon": "terminal",
  // Управляет описанием терминала, которое отображается справа от заголовка. Переменные заменяются в зависимости от контекста:
  // ${cwd}: текущая рабочая папка терминала
  // ${cwdFolder}: текущая рабочая папка терминала, отображаемая для рабочих областей с несколькими корнями или в рабочей области с одним корневым каталогом, если значение отличается от исходной рабочей папки. В Windows это будет отображаться только при включенной интеграции оболочки.
  // ${workspaceFolder}: рабочая область, в которой был запущен терминал
  // ${local}: указывает локальный терминал в удаленной рабочей области
  // ${process}: имя процесса терминала
  // ${separator}: условный разделитель ("-"), который отображается, только если он окружен переменными со значениями или статическим текстом.
  // ${sequence}: имя, предоставленное терминалу процессом
  // ${task}: указывает, что этот терминал связан с задачей
  "terminal.integrated.tabs.description": "${task}${separator}${local}${separator}${cwdFolder}",
  // Controls whether terminal tab statuses support animation (eg. in progress tasks).
  "terminal.integrated.tabs.enableAnimation": true,
  // Controls whether terminal tabs display as a list to the side of the terminal. When this is disabled a dropdown will display instead.
  "terminal.integrated.tabs.enabled": true,
  // Controls whether focusing the terminal of a tab happens on double or single click.
  //  - singleClick: Focus the terminal when clicking a terminal tab
  //  - doubleClick: Focus the terminal when double clicking a terminal tab
  "terminal.integrated.tabs.focusMode": "doubleClick",
  // Controls whether the terminal tabs view will hide under certain conditions.
  //  - never: Never hide the terminal tabs view
  //  - singleTerminal: Hide the terminal tabs view when there is only a single terminal opened
  //  - singleGroup: Hide the terminal tabs view when there is only a single terminal group opened
  "terminal.integrated.tabs.hideCondition": "singleTerminal",
  // Controls the location of the terminal tabs, either to the left or right of the actual terminal(s).
  //  - left: Show the terminal tabs view to the left of the terminal
  //  - right: Show the terminal tabs view to the right of the terminal
  "terminal.integrated.tabs.location": "right",
  // Separator used by `terminal.integrated.tabs.title` and `terminal.integrated.tabs.title`.
  "terminal.integrated.tabs.separator": " - ",
  // Controls whether terminal split and kill buttons are displays next to the new terminal button.
  //  - always: Always show the actions
  //  - singleTerminal: Show the actions when it is the only terminal opened
  //  - singleTerminalOrNarrow: Show the actions when it is the only terminal opened or when the tabs view is in its narrow textless state
  //  - never: Never show the actions
  "terminal.integrated.tabs.showActions": "singleTerminalOrNarrow",
  // Shows the active terminal information in the view, this is particularly useful when the title within the tabs aren't visible.
  //  - always: Always show the active terminal
  //  - singleTerminal: Show the active terminal when it is the only terminal opened
  //  - singleTerminalOrNarrow: Show the active terminal when it is the only terminal opened or when the tabs view is in its narrow textless state
  //  - never: Never show the active terminal
  "terminal.integrated.tabs.showActiveTerminal": "singleTerminalOrNarrow",
  // Controls the terminal title. Variables are substituted based on the context:
  // - `${cwd}`: the terminal's current working directory
  // - `${cwdFolder}`: the terminal's current working directory, displayed for multi-root workspaces or in a single root workspace when the value differs from the initial working directory.
  // - `${workspaceFolder}`: the workspace in which the terminal was launched
  // - `${local}`: indicates a local terminal in a remote workspace
  // - `${process}`: the name of the terminal process
  // - `${separator}`: a conditional separator (" - ") that only shows when surrounded by variables with values or static text.
  // - `${sequence}`: the name provided to the terminal by the process
  // - `${task}`: indicates this terminal is associated with a task
  "terminal.integrated.tabs.title": "${process}",
  // Controls what version of Unicode to use when evaluating the width of characters in the terminal. If you experience emoji or other wide characters not taking up the right amount of space or backspace either deleting too much or too little then you may want to try tweaking this setting.
  //  - 6: Version 6 of Unicode, this is an older version which should work better on older systems.
  //  - 11: Version 11 of Unicode, this version provides better support on modern systems that use modern versions of Unicode.
  "terminal.integrated.unicodeVersion": "11",
  // Controls whether or not WSL distros are shown in the terminal dropdown
  "terminal.integrated.useWslProfiles": true,
  // Whether to use ConPTY for Windows terminal process communication (requires Windows 10 build number 18309+). Winpty will be used if this is false.
  "terminal.integrated.windowsEnableConpty": true,
  // A string containing all characters to be considered word separators by the double click to select word feature.
  "terminal.integrated.wordSeparators": " ()[]{}',\"`─‘’",
  // Tasks
  // Enable automatic tasks in the folder.
  //  - on: Always
  //  - auto: Prompt for permission for each folder
  //  - off: Never
  "task.allowAutomaticTasks": "auto",
  // Controls enablement of `provideTasks` for all task provider extension. If the Tasks: Run Task command is slow, disabling auto detect for task providers may help. Individual extensions may also provide settings that disable auto detection.
  "task.autoDetect": "on",
  // Configures whether to show the problem matcher prompt when running a task. Set to `true` to never prompt, or use a dictionary of task types to turn off prompting only for specific task types.
  "task.problemMatchers.neverPrompt": false,
  // Controls whether to show the task detail for tasks that have a detail in task quick picks, such as Run Task.
  "task.quickOpen.detail": true,
  // Controls the number of recent items tracked in task quick open dialog.
  "task.quickOpen.history": 30,
  // Causes the Tasks: Run Task command to use the slower "show all" behavior instead of the faster two level picker where tasks are grouped by provider.
  "task.quickOpen.showAll": false,
  // Controls whether the task quick pick is skipped when there is only one task to pick from.
  "task.quickOpen.skip": false,
  // On window reload, reconnect to tasks that have problem matchers.
  "task.reconnection": true,
  // Save all dirty editors before running a task.
  //  - always: Always saves all editors before running.
  //  - never: Never saves editors before running.
  //  - prompt: Prompts whether to save editors before running.
  "task.saveBeforeRun": "always",
  // Shows decorations at points of interest in the terminal buffer such as the first problem found via a watch task.
  "task.showDecorations": true,
  // Configures whether a warning is shown when a provider is slow
  "task.slowProviderWarning": true,
  // Problems
  // Controls whether Problems view should automatically reveal files when opening them.
  "problems.autoReveal": true,
  // Show Errors & Warnings on files and folder.
  "problems.decorations.enabled": true,
  // Controls the default view mode of the Problems view.
  "problems.defaultViewMode": "tree",
  // When enabled shows the current problem in the status bar.
  "problems.showCurrentInStatus": false,
  // Controls the order in which problems are navigated.
  //  - severity: Navigate problems ordered by severity
  //  - position: Navigate problems ordered by position
  "problems.sortOrder": "severity",
  // Breadcrumb Navigation
  // Enable/disable navigation breadcrumbs.
  "breadcrumbs.enabled": true,
  // Controls whether and how file paths are shown in the breadcrumbs view.
  //  - on: Show the file path in the breadcrumbs view.
  //  - off: Do not show the file path in the breadcrumbs view.
  //  - last: Only show the last element of the file path in the breadcrumbs view.
  "breadcrumbs.filePath": "on",
  // Render breadcrumb items with icons.
  "breadcrumbs.icons": true,
  // When enabled breadcrumbs show `array`-symbols.
  "breadcrumbs.showArrays": true,
  // When enabled breadcrumbs show `boolean`-symbols.
  "breadcrumbs.showBooleans": true,
  // When enabled breadcrumbs show `class`-symbols.
  "breadcrumbs.showClasses": true,
  // When enabled breadcrumbs show `constant`-symbols.
  "breadcrumbs.showConstants": true,
  // When enabled breadcrumbs show `constructor`-symbols.
  "breadcrumbs.showConstructors": true,
  // When enabled breadcrumbs show `enumMember`-symbols.
  "breadcrumbs.showEnumMembers": true,
  // When enabled breadcrumbs show `enum`-symbols.
  "breadcrumbs.showEnums": true,
  // When enabled breadcrumbs show `event`-symbols.
  "breadcrumbs.showEvents": true,
  // When enabled breadcrumbs show `field`-symbols.
  "breadcrumbs.showFields": true,
  // When enabled breadcrumbs show `file`-symbols.
  "breadcrumbs.showFiles": true,
  // When enabled breadcrumbs show `function`-symbols.
  "breadcrumbs.showFunctions": true,
  // When enabled breadcrumbs show `interface`-symbols.
  "breadcrumbs.showInterfaces": true,
  // When enabled breadcrumbs show `key`-symbols.
  "breadcrumbs.showKeys": true,
  // When enabled breadcrumbs show `method`-symbols.
  "breadcrumbs.showMethods": true,
  // When enabled breadcrumbs show `module`-symbols.
  "breadcrumbs.showModules": true,
  // When enabled breadcrumbs show `namespace`-symbols.
  "breadcrumbs.showNamespaces": true,
  // When enabled breadcrumbs show `null`-symbols.
  "breadcrumbs.showNull": true,
  // When enabled breadcrumbs show `number`-symbols.
  "breadcrumbs.showNumbers": true,
  // When enabled breadcrumbs show `object`-symbols.
  "breadcrumbs.showObjects": true,
  // When enabled breadcrumbs show `operator`-symbols.
  "breadcrumbs.showOperators": true,
  // When enabled breadcrumbs show `package`-symbols.
  "breadcrumbs.showPackages": true,
  // When enabled breadcrumbs show `property`-symbols.
  "breadcrumbs.showProperties": true,
  // When enabled breadcrumbs show `string`-symbols.
  "breadcrumbs.showStrings": true,
  // When enabled breadcrumbs show `struct`-symbols.
  "breadcrumbs.showStructs": true,
  // When enabled breadcrumbs show `typeParameter`-symbols.
  "breadcrumbs.showTypeParameters": true,
  // When enabled breadcrumbs show `variable`-symbols.
  "breadcrumbs.showVariables": true,
  // Controls whether and how symbols are shown in the breadcrumbs view.
  //  - on: Show all symbols in the breadcrumbs view.
  //  - off: Do not show symbols in the breadcrumbs view.
  //  - last: Only show the current symbol in the breadcrumbs view.
  "breadcrumbs.symbolPath": "on",
  // Controls how symbols are sorted in the breadcrumbs outline view.
  //  - position: Show symbol outline in file position order.
  //  - name: Show symbol outline in alphabetical order.
  //  - type: Show symbol outline in symbol type order.
  "breadcrumbs.symbolSortOrder": "position",

  // Управляет Visual Studio Code телеметрией, телеметрией собственных расширений и телеметрией участвующих сторонних расширений. Некоторые сторонние расширения могут не учитывать этот параметр. Обратитесь к документации конкретного расширения, чтобы быть уверенным. Телеметрия помогает нам лучше понять, как работает Visual Studio Code, где необходимо внести улучшения и как используются функции. Подробнее о [data we collect] (https://aka.ms/vscode-telemetry) и наш документ [privacy statement] (https://go.microsoft.com/fwlink/?LinkId=786907). Чтобы изменения в отчетах о сбоях вступили в силу, требуется полная перезагрузка приложения.
  "telemetry.telemetryLevel": "all",
  // Outline
  // Render Outline Elements with Icons.
  "outline.icons": true,
  // Use badges for Errors & Warnings.
  "outline.problems.badges": true,
  // Use colors for Errors & Warnings.
  "outline.problems.colors": true,
  // Show Errors & Warnings on Outline Elements.
  "outline.problems.enabled": true,
  // When enabled outline shows `array`-symbols.
  "outline.showArrays": true,
  // When enabled outline shows `boolean`-symbols.
  "outline.showBooleans": true,
  // When enabled outline shows `class`-symbols.
  "outline.showClasses": true,
  // When enabled outline shows `constant`-symbols.
  "outline.showConstants": true,
  // When enabled outline shows `constructor`-symbols.
  "outline.showConstructors": true,
  // When enabled outline shows `enumMember`-symbols.
  "outline.showEnumMembers": true,
  // When enabled outline shows `enum`-symbols.
  "outline.showEnums": true,
  // When enabled outline shows `event`-symbols.
  "outline.showEvents": true,
  // When enabled outline shows `field`-symbols.
  "outline.showFields": true,
  // When enabled outline shows `file`-symbols.
  "outline.showFiles": true,
  // When enabled outline shows `function`-symbols.
  "outline.showFunctions": true,
  // When enabled outline shows `interface`-symbols.
  "outline.showInterfaces": true,
  // When enabled outline shows `key`-symbols.
  "outline.showKeys": true,
  // When enabled outline shows `method`-symbols.
  "outline.showMethods": true,
  // When enabled outline shows `module`-symbols.
  "outline.showModules": true,
  // When enabled outline shows `namespace`-symbols.
  "outline.showNamespaces": true,
  // When enabled outline shows `null`-symbols.
  "outline.showNull": true,
  // When enabled outline shows `number`-symbols.
  "outline.showNumbers": true,
  // When enabled outline shows `object`-symbols.
  "outline.showObjects": true,
  // When enabled outline shows `operator`-symbols.
  "outline.showOperators": true,
  // When enabled outline shows `package`-symbols.
  "outline.showPackages": true,
  // When enabled outline shows `property`-symbols.
  "outline.showProperties": true,
  // When enabled outline shows `string`-symbols.
  "outline.showStrings": true,
  // When enabled outline shows `struct`-symbols.
  "outline.showStructs": true,
  // When enabled outline shows `typeParameter`-symbols.
  "outline.showTypeParameters": true,
  // When enabled outline shows `variable`-symbols.
  "outline.showVariables": true,
  // Timeline
  // The number of items to show in the Timeline view by default and when loading more items. Setting to `null` (the default) will automatically choose a page size based on the visible area of the Timeline view.
  "timeline.pageSize": null,
  // Default Configuration Overrides
  // Configure settings to be overridden for the css language.
  "[css]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for the dockercompose language.
  "[dockercompose]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
    "editor.autoIndent": "advanced"
  },
  // Configure settings to be overridden for the dockerfile language.
  "[dockerfile]": {
    "editor.quickSuggestions": {
      "strings": true
    }
  },
  // Configure settings to be overridden for the git-commit language.
  "[git-commit]": {
    "editor.rulers": [
      72
    ],
    "workbench.editor.restoreViewState": false
  },
  // Configure settings to be overridden for the git-rebase language.
  "[git-rebase]": {
    "workbench.editor.restoreViewState": false
  },
  // Configure settings to be overridden for the go language.
  "[go]": {
    "editor.insertSpaces": false
  },
  // Configure settings to be overridden for the handlebars language.
  "[handlebars]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for the html language.
  "[html]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for the javascript language.
  "[javascript]": {
    "editor.maxTokenizationLineLength": 2500
  },
  // Configure settings to be overridden for the json language.
  "[json]": {
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for the jsonc language.
  "[jsonc]": {
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for the less language.
  "[less]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for the makefile language.
  "[makefile]": {
    "editor.insertSpaces": false
  },
  // Configure settings to be overridden for the markdown language.
  "[markdown]": {
    "editor.unicodeHighlight.ambiguousCharacters": false,
    "editor.unicodeHighlight.invisibleCharacters": false,
    "editor.wordWrap": "on",
    "editor.quickSuggestions": {
      "comments": "off",
      "strings": "off",
      "other": "off"
    }
  },
  // Configure settings to be overridden for the plaintext language.
  "[plaintext]": {
    "editor.unicodeHighlight.ambiguousCharacters": false,
    "editor.unicodeHighlight.invisibleCharacters": false
  },
  // Configure settings to be overridden for the scss language.
  "[scss]": {
    "editor.suggest.insertMode": "replace"
  },
  // Configure settings to be overridden for the search-result language.
  "[search-result]": {
    "editor.lineNumbers": "off"
  },
  // Configure settings to be overridden for the shellscript language.
  "[shellscript]": {
    "files.eol": "\n"
  },
  // Configure settings to be overridden for the yaml language.
  "[yaml]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
    "editor.autoIndent": "advanced"
  },
  // Audio Cues
  // Plays a sound when the active line has a breakpoint.
  //  - auto: Enable audio cue when a screen reader is attached.
  //  - on: Enable audio cue.
  //  - off: Disable audio cue.
  "audioCues.lineHasBreakpoint": "auto",
  // Plays a sound when the active line has an error.
  //  - auto: Enable audio cue when a screen reader is attached.
  //  - on: Enable audio cue.
  //  - off: Disable audio cue.
  "audioCues.lineHasError": "auto",
  // Plays a sound when the active line has a folded area that can be unfolded.
  //  - auto: Enable audio cue when a screen reader is attached.
  //  - on: Enable audio cue.
  //  - off: Disable audio cue.
  "audioCues.lineHasFoldedArea": "auto",
  // Plays a sound when the active line has an inline suggestion.
  //  - auto: Enable audio cue when a screen reader is attached.
  //  - on: Enable audio cue.
  //  - off: Disable audio cue.
  "audioCues.lineHasInlineSuggestion": "auto",
  // Plays a sound when the active line has a warning.
  //  - auto: Enable audio cue when a screen reader is attached.
  //  - on: Enable audio cue.
  //  - off: Disable audio cue.
  "audioCues.lineHasWarning": "off",
  // Plays a sound when trying to read a line with inlay hints that has no inlay hints.
  //  - auto: Enable audio cue when a screen reader is attached.
  //  - on: Enable audio cue.
  //  - off: Disable audio cue.
  "audioCues.noInlayHints": "auto",
  // Plays a sound when the debugger stopped on a breakpoint.
  //  - auto: Enable audio cue when a screen reader is attached.
  //  - on: Enable audio cue.
  //  - off: Disable audio cue.
  "audioCues.onDebugBreak": "auto",
  // The volume of the audio cues in percent (0-100).
  "audioCues.volume": 70,
  // Remote
  // When enabled, new running processes are detected and ports that they listen on are automatically forwarded. Disabling this setting will not prevent all ports from being forwarded. Even when disabled, extensions will still be able to cause ports to be forwarded, and opening some URLs will still cause ports to forwarded.
  "remote.autoForwardPorts": true,
  // Sets the source from which ports are automatically forwarded when `remote.autoForwardPorts` is true. On Windows and Mac remotes, the `process` option has no effect and `output` will be used. Requires a reload to take effect.
  //  - process: Ports will be automatically forwarded when discovered by watching for processes that are started and include a port.
  //  - output: Ports will be automatically forwarded when discovered by reading terminal and debug output. Not all processes that use ports will print to the integrated terminal or debug console, so some ports will be missed. Ports forwarded based on output will not be "un-forwarded" until reload or until the port is closed by the user in the Ports view.
  "remote.autoForwardPortsSource": "process",
  // When enabled extensions are downloaded locally and installed on remote.
  "remote.downloadExtensionsLocally": false,
  // Override the kind of an extension. `ui` extensions are installed and run on the local machine while `workspace` extensions are run on the remote. By overriding an extension's default kind using this setting, you specify if that extension should be installed and enabled locally or remotely.
  "remote.extensionKind": {
    "pub.name": [
      "ui"
    ]
  },
  // Specifies the local host name that will be used for port forwarding.
  "remote.localPortHost": "localhost",
  // Set default properties that are applied to all ports that don't get properties from the setting `remote.portsAttributes`.
  "remote.otherPortsAttributes": {},
  // Set properties that are applied when a specific port number is forwarded.
  "remote.portsAttributes": {},
  // Restores the ports you forwarded in a workspace.
  "remote.restoreForwardedPorts": true,
  // Emmet
  // An array of languages where Emmet abbreviations should not be expanded.
  "emmet.excludeLanguages": [
    "markdown"
  ],
  // An array of paths, where each path can contain Emmet syntaxProfiles and/or snippet files.
  // In case of conflicts, the profiles/snippets of later paths will override those of earlier paths.
  "emmet.extensionsPath": [],
  // Enable Emmet abbreviations in languages that are not supported by default. Add a mapping here between the language and Emmet supported language.
  //  For example: `{"vue-html": "html", "javascript": "javascriptreact"}`
  "emmet.includeLanguages": {},
  // When set to `false`, the whole file is parsed to determine if current position is valid for expanding Emmet abbreviations. When set to `true`, only the content around the current position in CSS/SCSS/Less files is parsed.
  "emmet.optimizeStylesheetParsing": true,
  // Preferences used to modify behavior of some actions and resolvers of Emmet.
  "emmet.preferences": {},
  // Shows possible Emmet abbreviations as suggestions. Not applicable in stylesheets or when emmet.showExpandedAbbreviation is set to `"never"`.
  "emmet.showAbbreviationSuggestions": true,
  // Shows expanded Emmet abbreviations as suggestions.
  // The option `"inMarkupAndStylesheetFilesOnly"` applies to html, haml, jade, slim, xml, xsl, css, scss, sass, less and stylus.
  // The option `"always"` applies to all parts of the file regardless of markup/css.
  "emmet.showExpandedAbbreviation": "always",
  // If `true`, then Emmet suggestions will show up as snippets allowing you to order them as per `editor.snippetSuggestions` setting.
  "emmet.showSuggestionsAsSnippets": false,
  // Define profile for specified syntax or use your own profile with specific rules.
  "emmet.syntaxProfiles": {},
  // When enabled, Emmet abbreviations are expanded when pressing TAB.
  "emmet.triggerExpansionOnTab": false,
  // If `true`, Emmet will use inline completions to suggest expansions.
  "emmet.useInlineCompletions": false,
  // Variables to be used in Emmet snippets.
  "emmet.variables": {},
  // Git
  // Controls whether force push (with or without lease) is enabled.
  "git.allowForcePush": false,
  // Controls whether commits without running pre-commit and commit-msg hooks are allowed.
  "git.allowNoVerifyCommit": false,
  // Always show the Staged Changes resource group.
  "git.alwaysShowStagedChangesResourceGroup": false,
  // Controls the signoff flag for all commits. ##
  "git.alwaysSignOff": true,
  // When set to true, commits will automatically be fetched from the default remote of the current Git repository. Setting to `all` will fetch from all remotes.
  "git.autofetch": true,
  // Duration in seconds between each automatic git fetch, when `git.autofetch` is enabled.
  "git.autofetchPeriod": 180,
  // Whether auto refreshing is enabled.
  "git.autorefresh": true,
  // Configures when repositories should be automatically detected.
  //  - true: Scan for both subfolders of the current opened folder and parent folders of open files.
  //  - false: Disable automatic repository scanning.
  //  - subFolders: Scan for subfolders of the currently opened folder.
  //  - openEditors: Scan for parent folders of open files.
  "git.autoRepositoryDetection": true,
  // Stash any changes before pulling and restore them after successful pull.
  "git.autoStash": false,
  // Prefix used when creating a new branch.
  "git.branchPrefix": "",
  // List of protected branches. By default, a prompt is shown before changes are committed to a protected branch. The prompt can be controlled using the `git.branchProtectionPrompt`  setting.
  "git.branchProtection": [],
  // Controls whether a prompt is being before changes are committed to a protected branch.
  //  - alwaysCommit: Always commit changes to the protected branch.
  //  - alwaysCommitToNewBranch: Always commit changes to a new branch.
  //  - alwaysPrompt: Always prompt before changes are committed to a protected branch.
  "git.branchProtectionPrompt": "alwaysPrompt",
  // List of dictionaries used for the randomly generated branch name. Each value represents the dictionary used to generate the segment of the branch name. Supported dictionaries: `adjectives`, `animals`, `colors` and `numbers`.
  //  - adjectives: A random adjective
  //  - animals: A random animal name
  //  - colors: A random color name
  //  - numbers: A random number between 100 and 999
  "git.branchRandomName.dictionary": [
    "adjectives",
    "animals"
  ],
  // Controls whether a random name is generated when creating a new branch.
  "git.branchRandomName.enable": false,
  // Controls the sort order for branches.
  "git.branchSortOrder": "committerdate",
  // A regular expression to validate new branch names.
  "git.branchValidationRegex": "",
  // The character to replace whitespace in new branch names, and to separate segments of a randomly generated branch name.
  "git.branchWhitespaceChar": "-",
  // Controls what type of git refs are listed when running `Checkout to...`.
  //  - local: Local branches
  //  - tags: Tags
  //  - remote: Remote branches
  "git.checkoutType": [
    "local",
    "remote",
    "tags"
  ],
  // Controls whether the diff editor should be automatically closed when changes are stashed, committed, discarded, staged, or unstaged.
  "git.closeDiffOnOperation": false,
  // List of git commands (ex: commit, push) that would have their `stdout` logged to the git output. If the git command has a client-side hook configured, the client-side hook's `stdout` will also be logged to the git output.
  "git.commandsToLog": [],
  // Always confirm the creation of empty commits for the 'Git: Commit Empty' command.
  "git.confirmEmptyCommits": true,
  // Controls whether to ask for confirmation before force-pushing.
  "git.confirmForcePush": true,
  // Controls whether to ask for confirmation before committing without verification.
  "git.confirmNoVerifyCommit": true,
  // Confirm before synchronizing git repositories.
  "git.confirmSync": false,
  // Controls the Git count badge.
  //  - all: Count all changes.
  //  - tracked: Count only tracked changes.
  //  - off: Turn off counter.
  "git.countBadge": "all",
  // Controls whether Git contributes colors and badges to the Explorer and the Open Editors view.
  "git.decorations.enabled": true,
  // The default location to clone a git repository.
  "git.defaultCloneDirectory": null,
  // Controls whether to automatically detect git submodules.
  "git.detectSubmodules": true,
  // Controls the limit of git submodules detected.
  "git.detectSubmodulesLimit": 10,
  // Enables commit signing with GPG or X.509.
  "git.enableCommitSigning": false,
  // Whether git is enabled.
  "git.enabled": true,
  // Commit all changes when there are no staged changes.
  "git.enableSmartCommit": true,
  // Controls whether the Git Sync command appears in the status bar.
  "git.enableStatusBarSync": true,
  // When enabled, fetch all branches when pulling. Otherwise, fetch just the current one.
  "git.fetchOnPull": false,
  // Follow push all tags when running the sync command.
  "git.followTagsWhenSync": false,
  // List of git repositories to ignore.
  "git.ignoredRepositories": [],
  // Ignores the legacy Git warning.
  "git.ignoreLegacyWarning": false,
  // Ignores the warning when there are too many changes in a repository.
  "git.ignoreLimitWarning": false,
  // Ignores the warning when Git is missing.
  "git.ignoreMissingGitWarning": false,
  // Ignores the warning when it looks like the branch might have been rebased when pulling.
  "git.ignoreRebaseWarning": false,
  // Ignore modifications to submodules in the file tree.
  "git.ignoreSubmodules": false,
  // Ignores the warning when Git 2.25 - 2.26 is installed on Windows.
  "git.ignoreWindowsGit27Warning": false,
  // Controls when to show commit message input validation.
  "git.inputValidation": "warn",
  // Controls the commit message length threshold for showing a warning.
  "git.inputValidationLength": 72,
  // Controls the commit message subject length threshold for showing a warning. Unset it to inherit the value of `config.inputValidationLength`.
  "git.inputValidationSubjectLength": 50,
  // Specifies how much information (if any) to log to the Git output.
  "git.logLevel": "Info",
  // Open the merge editor for files that are currently under conflict.
  "git.mergeEditor": true,
  // Controls whether to open a repository automatically after cloning.
  //  - always: Always open in current window.
  //  - alwaysNewWindow: Always open in a new window.
  //  - whenNoFolderOpen: Only open in current window when no folder is opened.
  //  - prompt: Always prompt for action.
  "git.openAfterClone": "prompt",
  // Controls whether the diff editor should be opened when clicking a change. Otherwise the regular editor will be opened.
  "git.openDiffOnClick": true,
  // Path and filename of the git executable, e.g. `C:\Program Files\Git\bin\git.exe` (Windows). This can also be an array of string values containing multiple paths to look up.
  "git.path": null,
  // Run a git command after a successful commit.
  //  - none: Don't run any command after a commit.
  //  - push: Run 'git push' after a successful commit.
  //  - sync: Run 'git pull' and 'git push' after a successful commit.
  "git.postCommitCommand": "none",
  // Controls whether Git should check for unsaved files before committing.
  //  - always: Check for any unsaved files.
  //  - staged: Check only for unsaved staged files.
  //  - never: Disable this check.
  "git.promptToSaveFilesBeforeCommit": "always",
  // Controls whether Git should check for unsaved files before stashing changes.
  //  - always: Check for any unsaved files.
  //  - staged: Check only for unsaved staged files.
  //  - never: Disable this check.
  "git.promptToSaveFilesBeforeStash": "always",
  // Prune when fetching.
  "git.pruneOnFetch": false,
  // Fetch all tags when pulling.
  "git.pullTags": true,
  // Force git to use rebase when running the sync command.
  "git.rebaseWhenSync": false,
  // Remember the last git command that ran after a commit.
  "git.rememberPostCommitCommand": false,
  // List of folders that are ignored while scanning for Git repositories when `git.autoRepositoryDetection` is set to `true` or `subFolders`.
  "git.repositoryScanIgnoredFolders": [
    "node_modules"
  ],
  // Controls the depth used when scanning workspace folders for Git repositories when `git.autoRepositoryDetection` is set to `true` or `subFolders`. Can be set to `-1` for no limit.
  "git.repositoryScanMaxDepth": 1,
  // Controls whether to require explicit Git user configuration or allow Git to guess if missing.
  "git.requireGitUserConfig": true,
  // List of paths to search for git repositories in.
  "git.scanRepositories": [],
  // Controls whether an action button is shown in the Source Control view.
  "git.showActionButton": {
    "commit": true,
    "publish": true,
    "sync": true
  },
  // Controls whether to show the commit input in the Git source control panel.
  "git.showCommitInput": true,
  // Controls whether to show an inline Open File action in the Git changes view.
  "git.showInlineOpenFileAction": true,
  // Controls whether git actions should show progress.
  "git.showProgress": true,
  // Controls whether to show a notification when a push is successful.
  "git.showPushSuccessNotification": false,
  // Control which changes are automatically staged by Smart Commit.
  //  - all: Automatically stage all changes.
  //  - tracked: Automatically stage tracked changes only.
  "git.smartCommitChanges": "all",
  // Controls how to limit the number of changes that can be parsed from Git status command. Can be set to 0 for no limit.
  "git.statusLimit": 10000,
  // Suggests to enable smart commit (commit all changes when there are no staged changes).
  "git.suggestSmartCommit": true,
  // Controls whether a notification comes up when running the Sync action, which allows the user to cancel the operation.
  "git.supportCancellation": false,
  // Controls whether to enable VS Code to be the authentication handler for git processes spawned in the integrated terminal. Note: terminals need to be restarted to pick up a change in this setting.
  "git.terminalAuthentication": true,
  // Controls whether to enable VS Code to be the Git editor for Git processes spawned in the Integrated Terminal.
  "git.terminalGitEditor": false,
  // Controls which date to use for items in the Timeline view.
  //  - committed: Use the committed date
  //  - authored: Use the authored date
  "git.timeline.date": "committed",
  // Controls whether to show the commit author in the Timeline view.
  "git.timeline.showAuthor": true,
  // Controls whether to show uncommitted changes in the Timeline view.
  "git.timeline.showUncommitted": false,
  // Controls how untracked changes behave.
  //  - mixed: All changes, tracked and untracked, appear together and behave equally.
  //  - separate: Untracked changes appear separately in the Source Control view. They are also excluded from several actions.
  //  - hidden: Untracked changes are hidden and excluded from several actions.
  "git.untrackedChanges": "mixed",
  // Controls whether to use the message from the commit input box as the default stash message.
  "git.useCommitInputAsStashMessage": false,
  // Controls whether a full text editor will be used to author commit messages, whenever no message is provided in the commit input box.
  "git.useEditorAsCommitInput": true,
  // Controls whether force pushing uses the safer force-with-lease variant.
  "git.useForcePushWithLease": true,
  // Controls whether GIT_ASKPASS should be overwritten to use the integrated version.
  "git.useIntegratedAskPass": true,
  // Enable verbose output when `git.useEditorAsCommitInput` is enabled.
  "git.verboseCommit": false,
  // Controls whether to enable automatic GitHub authentication for git commands within VS Code.
  "github.gitAuthentication": true,
  // Controls which protocol is used to clone a GitHub repository
  "github.gitProtocol": "https",
  // URI of your GitHub Enterprise Instance
  "github-enterprise.uri": "",
  // Grunt
  // Controls enablement of Grunt task detection. Grunt task detection can cause files in any open workspace to be executed.
  "grunt.autoDetect": "off",
  // Gulp
  // Controls enablement of Gulp task detection. Gulp task detection can cause files in any open workspace to be executed.
  "gulp.autoDetect": "off",
  // Jake
  // Controls enablement of Jake task detection. Jake task detection can cause files in any open workspace to be executed.
  "jake.autoDetect": "off",
  // Merge Conflict
  // Whether to automatically navigate to the next merge conflict after resolving a merge conflict.
  "merge-conflict.autoNavigateNextConflict.enabled": false,
  // Create a CodeLens for merge conflict blocks within editor.
  "merge-conflict.codeLens.enabled": true,
  // Create decorators for merge conflict blocks within editor.
  "merge-conflict.decorators.enabled": true,
  // Controls where the diff view should be opened when comparing changes in merge conflicts.
  //  - Current: Open the diff view in the current editor group.
  //  - Beside: Open the diff view next to the current editor group.
  //  - Below: Open the diff view below the current editor group.
  "merge-conflict.diffViewPosition": "Current",
  // JavaScript Debugger
  // Configures which processes to automatically attach and debug when `debug.node.autoAttach` is on. A Node process launched with the `--inspect` flag will always be attached to, regardless of this setting.
  //  - always: Auto attach to every Node.js process launched in the terminal.
  //  - smart: Auto attach when running scripts that aren't in a node_modules folder.
  //  - onlyWithFlag: Only auto attach when the `--inspect` is given.
  //  - disabled: Auto attach is disabled and not shown in status bar.
  "debug.javascript.autoAttachFilter": "disabled",
  // Configures glob patterns for determining when to attach in "smart" `debug.javascript.autoAttachFilter` mode. `$KNOWN_TOOLS$` is replaced with a list of names of common test and code runners.
  "debug.javascript.autoAttachSmartPattern": [
    "${workspaceFolder}/**",
    "!**/node_modules/**",
    "**/$KNOWN_TOOLS$/**"
  ],
  // When debugging a remote web app, configures whether to automatically tunnel the remote server to your local machine.
  "debug.javascript.automaticallyTunnelRemoteServer": true,
  // Whether to stop when conditional breakpoints throw an error.
  "debug.javascript.breakOnConditionalError": false,
  // Where a "Run" and "Debug" code lens should be shown in your npm scripts. It may be on "all", scripts, on "top" of the script section, or "never".
  "debug.javascript.codelens.npmScripts": "top",
  //Параметры, используемые при отладке открытых ссылок, нажимаемых внутри терминала отладки JavaScript. Можно установить «выкл.», чтобы отключить это поведение, или «всегда», чтобы включить отладку во всех терминалах.
  "debug.javascript.debugByLinkOptions": "on",
  // The default `runtimeExecutable` used for launch configurations, if unspecified. This can be used to config custom paths to Node.js or browser installations.
  "debug.javascript.defaultRuntimeExecutable": {
    "pwa-node": "node"
  },
  // Default options used when debugging a process through the `Debug: Attach to Node.js Process` command.
  "debug.javascript.pickAndAttachOptions": {},
  // Request options to use when loading resources, such as source maps, in the debugger. You may need to configure this if your sourcemaps require authentication or use a self-signed certificate, for instance. Options are used to create a request using the `got` library.
  // A common case to disable certificate verification can be done by passing `{ "https": { "rejectUnauthorized": false } }`.
  "debug.javascript.resourceRequestOptions": {},
  // Параметры запуска по умолчанию для терминала отладки JavaScript и скриптов npm
  "debug.javascript.terminalOptions": {},
  // Configures whether sourcemapped file where the original file can't be read will automatically be unmapped. If this is false (default), a prompt is shown.
  "debug.javascript.unmapMissingSources": false,
  // Npm
  // Controls whether npm scripts should be automatically detected.
  "npm.autoDetect": "on",
  // Enable running npm scripts contained in a folder from the Explorer context menu.
  "npm.enableRunFromFolder": false,

  // Configure glob patterns for folders that should be excluded from automatic script detection.
  "npm.exclude": "",
  // Fetch data from https://registry.npmjs.org and https://registry.bower.io to provide auto-completion and information on hover features on npm dependencies.
  "npm.fetchOnlinePackageInfo": true,
  // The package manager used to run scripts.
  //  - auto: Auto-detect which package manager to use for running scripts based on lock files and installed package managers.
  //  - npm: Use npm as the package manager for running scripts.
  //  - yarn: Use yarn as the package manager for running scripts.
  //  - pnpm: Use pnpm as the package manager for running scripts.
  "npm.packageManager": "auto",
  // Run npm commands with the `--silent` option.
  "npm.runSilent": false,
  // The default click action used in the npm scripts Explorer: `open` or `run`, the default is `open`.
  "npm.scriptExplorerAction": "open",
  // An array of regular expressions that indicate which scripts should be excluded from the NPM Scripts view.
  "npm.scriptExplorerExclude": [],
  // Display hover with 'Run' and 'Debug' commands for scripts.
  "npm.scriptHover": true,
  // References Search View
  // Controls whether 'Peek References' or 'Find References' is invoked when selecting CodeLens references.
  //  - peek: Show references in peek editor.
  //  - view: Show references in separate view.
  "references.preferredLocation": "peek",
  "terminal.integrated.smoothScrolling": true,
  "google-translate.firstLanguage": "en",
  "google-translate.secondLanguage": "ru",
  "githubIssues.queries": [
    {
      "label": "My Issues",
      "query": "default"
    },
    {
      "label": "Created Issues",
      "query": "author:${user} state:open repo:${owner}/${repository} sort:created-desc"
    },
    {
      "label": "Recent Issues",
      "query": "state:open repo:${owner}/${repository} sort:updated-desc"
    }
  ]
  // "workbench.colorTheme": "Dark mode ART"

```


