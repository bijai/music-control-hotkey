chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    if (command == "toggle-feature-play")
    {
        console.log("Play or Pause ? ");
        chrome.tabs.query({"url":"https://play.google.com/*"}, function (result)
        {
            console.log(result);
            if (result.length == 1)
            {
                chrome.tabs.executeScript(result[0].id, {"code":'document.getElementById("player-bar-play-pause").click()'}, function (){})
            }
            
        });

        chrome.tabs.query({"url":"https://gaana.com/*"}, function (result)
        {
            console.log(result);
            if (result.length == 1)
            {
                chrome.tabs.executeScript(result[0].id, {"code":'document.getElementsByClassName("play-song playPause enabled")[0].click()'}, function (){})
            }
            
        });

        chrome.tabs.query({"url":"https://www.youtube.com/*"}, function (result)
        {
            console.log(result);
            if (result.length == 1)
            {
                chrome.tabs.executeScript(result[0].id, {"code":'document.getElementsByClassName("ytp-play-button ytp-button")[0].click()'}, function (){})
            }
            
        });
    }
});