var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "8085", // Set to the assembly language mode you've created
  theme: "dracula", // Choose your preferred theme
  lineNumbers: true, // Show line numbers
  autofocus: true, // Automatically focus on the editor when the page loads
  indentUnit: 4, // Indent using 4 spaces
  matchBrackets: true, // Highlight matching brackets
  autoCloseBrackets: true, // Automatically close brackets
});
