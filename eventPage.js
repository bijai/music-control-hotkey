chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    if (command == "toggle-feature-play")
    {
        console.log("Play or Pause ? ");
    }
  });