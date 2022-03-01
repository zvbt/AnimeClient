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
  if (title === "AnimeClient | BETA") {
    discordClient.updatePresence({
      details: "Page d'acceuil",
      state: "v1.0.1-BETA",
      largeImageKey: 'logo',
      smallImageKey: 'none',
      instance: false
    });
  } else {
    discordClient.updatePresence({
      details: title,
      state: "᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼",
      largeImageKey: 'logo',
      smallImageKey: 'none',
      instance: false
    });
    }
};