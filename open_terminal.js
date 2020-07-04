const exec = require('child_process').exec
const path = require('path')

module.exports = (pluginContext) => {
  const appleScriptTerminal = path.join(pluginContext.cwd, 'open_terminal_here.applescript')
  const appleScriptITerm2 = path.join(pluginContext.cwd, 'open_iterm2_here.applescript')
  const cmd = {
    terminal: `osascript ${appleScriptTerminal}`,
    iterm2: `osascript ${appleScriptITerm2}`,
  }
  return (val, env) => {
    const command = cmd[env.terminal] || cmd.terminal
    return new Promise((resolve) => exec(command, resolve))
  }
}
