set results to ""
try
  tell application "Finder" to set results to POSIX path of (target of window 1 as alias)
end try

tell application "iTerm"
  set activeWindow to (current session of current window)
  if not (is at shell prompt of activeWindow) then
    set newWindow to (window 1)
  else
    set newWindow to (create window with default profile)
  end if
end tell
