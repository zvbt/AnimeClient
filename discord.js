'use strict'
const discordClient = require('discord-rich-presence')('947072787565133864'); 

let connected = false;
discordClient.on('error', err => {
  console.log(`Error: ${err}`);
});
discordClient.on("connected", () => {
  connected = true;
});

module.exports = function discord(mainWindow) {

    let title = mainWindow.getTitle()
    discordClient.updatePresence({
      state: title,
      details: "Regarde",
      startTimestamp: Date.now(),
      largeImageKey: 'logo',
      smallImageKey: 'none',
      instance: true
    });
};