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
  let title = mainWindow.getTitle();

  if (title.match("AnimeClient")) {
    discordClient.updatePresence({
      details: "     ",
      state: "     ",
      largeImageKey: "logo",
      largeImageText: "AnimeClient v2.0",
      smallImageKey: "none",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  //crunchy
  const cr_site = title.split(" - ").pop();
  const cr_episode = title.split(" - ").shift();
  if (
    (title.match("Crunchyroll") && title.match("Anime en streaming")) ||
    (title.match("Crunchyroll") && title.match("en direct du Japon"))
  ) {
    discordClient.updatePresence({
      details: "Crunchyroll",
      state: "Page d'acceuil",
      largeImageKey: "crunchy",
      largeImageText: "Crunchyroll",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }
  if (
    title.match("Regardez sur") ||
    title.match("Watch on") ||
    title.match("Visionner sur")
  ) {
    discordClient.updatePresence({
      details: "Crunchyroll",
      state: cr_episode,
      largeImageKey: "crunchy",
      largeImageText: "Crunchyroll",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Watch episode",
          url: mainWindow.webContents.getURL(),
        },
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  //neko sama
  const neko_site = title.split(" - ").pop();
  const neko_episode = title.split(" - ").shift();
  if (title.match("Infinité")) {
    discordClient.updatePresence({
      details: "Neko-sama",
      state: "Page d'acceuil",
      largeImageKey: "nekosama",
      largeImageText: "Neko-sama",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }
  if (neko_site.match("sama")) {
    discordClient.updatePresence({
      details: neko_site,
      state: neko_episode,
      largeImageKey: "nekosama",
      largeImageText: "Neko-sama",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Watch episode",
          url: mainWindow.webContents.getURL(),
        },
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  //voiranime
  const va_site = title.split(" - ").pop();
  const va_ep = title.split(" VOSTFR ").shift();
  const va_ep1 = va_ep.split("- ").pop();
  const va_episode = va_ep.split("- ").shift();
  const pageanime1 = title.split("gratuitement ").pop();
  const pageanime = pageanime1.split(" en HD").shift();

  if (pageanime1.match(" en HD- ")) {
    discordClient.updatePresence({
      details: "Regarde la page de l'anime:",
      state: pageanime,
      largeImageKey: "va",
      largeImageText: "Voiranime",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Watch anime",
          url: mainWindow.webContents.getURL(),
        },
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  if (title.match("Voiranime") && title.match("EN FRANCE")) {
    discordClient.updatePresence({
      details: "Voiranime",
      state: "Page d'acceuil",
      largeImageKey: "va",
      largeImageText: "Voiranime",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  if (title.match(" - Voiranime")) {
    discordClient.updatePresence({
      details: va_site,
      state: va_episode + " E" + va_ep1,
      largeImageKey: "va",
      largeImageText: "Voiranime",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Watch episode",
          url: mainWindow.webContents.getURL(),
        },
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  //vostfree
  const vf_episode = title.split(" en DDL").shift();

  if (title.match("Gratuit")) {
    discordClient.updatePresence({
      details: "Vostfree",
      state: "Page d'acceuil",
      largeImageKey: "vost",
      largeImageText: "Vostfree",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }
  if (title.match("DDL")) {
    discordClient.updatePresence({
      details: "VostFree",
      state: vf_episode,
      largeImageKey: "vost",
      largeImageText: "Vostfree",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Watch episode",
          url: mainWindow.webContents.getURL(),
        },
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  //anilist
  if (title.match("AniList") && title.match("Home")) {
    discordClient.updatePresence({
      details: title,
      state: "    ",
      largeImageKey: "al",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }
  if (title.match("'s ")) {
    discordClient.updatePresence({
      details: title,
      state: "    ",
      largeImageKey: "al",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "View profile",
          url: mainWindow.webContents.getURL(),
        },
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  //mangadex

  const scanTitle1 = title.split(" - MangaDex").shift();
  const scanTitle2 = scanTitle1.split("- ").pop();
  const chapter1 = scanTitle1.split(" - ").shift();
  const chapter = chapter1.split("Chapter ").pop();
  const page = chapter1.split(" | ").shift();

  if (title === "MangaDex") {
    discordClient.updatePresence({
      details: "MangaDex",
      state: "Page d'acceuil",
      largeImageKey: "mangadex",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }
  if (title.match("Chapter")) {
    discordClient.updatePresence({
      details: "MangaDex: en train de lire",
      state: "Page: " + page + " Chapitre: " + chapter + " de " + scanTitle2,
      largeImageKey: "mangadex",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  //aniflix
  if (title.match("Animeflix")) {
    discordClient.updatePresence({
      details: "Animeflix",
      state: "Browsing 🔍",
      largeImageKey: "https://www.aniflix.pro/icons/apple-touch-icon.png",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  const af_title = title.split(" |").shift();
  const af_ep = title.split("| Episode").pop();
  const url = mainWindow.webContents.getURL();

  if (url.match("aniflix.pro/watch")) {
    discordClient.updatePresence({
      details: "Animeflix",
      state: af_title + " Episode " + af_ep,
      largeImageKey: "https://www.aniflix.pro/icons/apple-touch-icon.png",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Watch episode",
          url: mainWindow.webContents.getURL(),
        },
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  //gogoanime
  if (title.match("Watch anime online, English anime online - Gogoanime")) {
    discordClient.updatePresence({
      details: "GoGoAnime",
      state: "Browsing 🔍",
      largeImageKey:
        "https://s3.us-east-1.wasabisys.com/e-zimagehosting/7ed0180f-b228-49a7-be1e-0183c1938777/cxcdw55r.png",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }

  const go_title = title.split("Watch ").pop();
  const go_title2 = go_title.split(" Episode").shift();

  const go_ep = title.split("Episode ").pop();
  const go_ep2 = go_ep.split(" ").shift();

  if (title.match("Watch") && title.match("Episode")) {
    discordClient.updatePresence({
      details: "GoGoAnime",
      state: go_title2 + " Episode " + go_ep2,
      largeImageKey:
        "https://s3.us-east-1.wasabisys.com/e-zimagehosting/7ed0180f-b228-49a7-be1e-0183c1938777/cxcdw55r.png",
      smallImageKey: "logo",
      instance: false,
      buttons: [
        {
          label: "Watch episode",
          url: mainWindow.webContents.getURL(),
        },
        {
          label: "Download the app",
          url: "https://zvbt.github.io/AnimeClient/",
        },
      ],
    });
  }
};
