"use strict";
const discordClient = require("discord-rich-presence")("947072787565133864");

let connected = false;
discordClient.on("error", (err) => {
    console.log(`Error: ${err}`);
});
discordClient.on("connected", () => {
    connected = true;
});

export function discord(mainWindow) {
    let title = mainWindow.getTitle();

    if (title.match("AnimeClient")) {
        discordClient.updatePresence({
            details: "Watching an anime",
            state: "     ",
            largeImageKey: "logo",
            largeImageText: "AnimeClient v2.0.5",
            smallImageKey: "none",
            startTimestamp: Date.now(),
            instance: false,
            buttons: [
                {
                    label: "Download the app",
                    url: "https://zvbt.github.io/AnimeClient/",
                },
            ],
        });
    }

};
