"use strict";
const discordClient = require("discord-rich-presence")("947072787565133864");

let connected = false;
discordClient.on("error", (err) => {
  console.log(`Error: ${err}`);
});
discordClient.on("connected", () => {
  connected = true;
});

module.exports = function discord(mainWindow) {
    discordClient.updatePresence({
      details: "Watching an anime",
      state: "     ",
      largeImageKey: "logo",
      largeImageText: "AnimeClient",
      smallImageKey: "none",
      startTimestamp: Date.now(),
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://animeclient.zvbt.cc",
        },
      ],
    });
};
