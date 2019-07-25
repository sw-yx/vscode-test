// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // // Use the console to output diagnostic information (console.log) and errors (console.error)
  // // This line of code will only be executed once when your extension is activated
  // console.log('Congratulations, your extension "netlify-vscode-extension" is now active!')

  const commands = [
    // commandId must match whats in package.json
    vscode.commands.registerCommand('extension.helloWorld', function() {
      vscode.window.showInformationMessage('Hello swyx!')
    }),
    // commandId must match whats in package.json
    vscode.commands.registerCommand('catCoding.start', function() {
      // Create and show a new webview
      const panel = vscode.window.createWebviewPanel(
        'catCoding', // Identifies the type of the webview. Used internally
        'Cat Coding', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {}, // Webview options. More on these later.
      )
      // And set its HTML content
      panel.webview.html = getWebviewContent()
    }),
  ].map(context.subscriptions.push)
}
// exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`
}
