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
  mainWindow.webContents.on('dom-ready', () => {
    let title = mainWindow.getTitle()

  if (title.match("AnimeClient")) {
    discordClient.updatePresence({
      details: "Page d'acceuil",
      state: "v1.1.2",
      largeImageKey: 'logo',
      largeImageText: 'AnimeClient v1.1.2',
      smallImageKey: 'none',
      instance: false,
      buttons: [
        {
            "label": "Télécharger l'app",
            "url": "https://zvbt.github.io/"
        }
    ]
    });
  }

    //crunchy
    const cr_site = title.split(' - ').pop();
    const cr_episode = title.split(' - ').shift();
    if (title.match("Crunchyroll")) {
      discordClient.updatePresence({
        details: "Crunchyroll",
        state: "Page d'acceuil",
        largeImageKey: 'crunchy',
        largeImageText: 'Crunchyroll',
        smallImageKey: 'logo',
        instance: false,
        buttons: [
          {
              "label": "Télécharger l'app",
              "url": "https://zvbt.github.io/"
          }
      ]
      });
    }
    if (title.match("Regardez")) {
      discordClient.updatePresence({
        details: "Crunchyroll",
        state: cr_episode,
        largeImageKey: 'crunchy',
        largeImageText: 'Crunchyroll',
        smallImageKey: 'logo',
        instance: false,
        buttons: [
          {
            "label": "Regarder l'épisode",
            "url": mainWindow.webContents.getURL()
          },
          {
              "label": "Télécharger l'app",
              "url": "https://zvbt.github.io/"
          }
      ]
      });
    }

  //neko sama
  const neko_site = title.split(' - ').pop();
  const neko_episode = title.split(' - ').shift();
  if (title.match("Infinité")) {
    discordClient.updatePresence({
      details: "Neko-sama",
      state: "Page d'acceuil",
      largeImageKey: 'nekosama',
      largeImageText: 'Neko-sama',
      smallImageKey: 'logo',
      instance: false,
      buttons: [
        {
            "label": "Télécharger l'app",
            "url": "https://zvbt.github.io/"
        } 
    ]
    });
  }
  if (neko_site.match("sama")) {
    discordClient.updatePresence({
      details: neko_site,
      state: neko_episode,
      largeImageKey: 'nekosama',
      largeImageText: 'Neko-sama',
      smallImageKey: 'logo',
      instance: false,
      buttons: [
        {
          "label": "Regarder l'épisode",
          "url": mainWindow.webContents.getURL()
        },
        {
            "label": "Télécharger l'app",
            "url": "https://zvbt.github.io/"
        } 
    ]
    });
  }

    //voiranime
    const va_site = title.split(' - ').pop();
    const va_ep = title.split(' VOSTFR ').shift();
    const va_ep1 = va_ep.split('- ').pop();
    const va_episode = va_ep.split('- ').shift();

    if (title.match("Voiranime")) {
      discordClient.updatePresence({
        details: "Voiranime",
        state: "Page d'acceuil",
        largeImageKey: 'va',
        largeImageText: 'Voiranime',
        smallImageKey: 'logo',
        instance: false,
        buttons: [
          {
              "label": "Télécharger l'app",
              "url": "https://zvbt.github.io/"
          } 
      ]
      });
  }

    if (va_site.match("Voiranime")) {
      discordClient.updatePresence({
        details: va_site,
        state: va_episode + " E" + va_ep1,
        largeImageKey: 'va',
        largeImageText: 'Voiranime',
        smallImageKey: 'logo',
        instance: false,
        buttons: [
          {
            "label": "Regarder l'épisode",
            "url": mainWindow.webContents.getURL()
          },
          {
              "label": "Télécharger l'app",
              "url": "https://zvbt.github.io/"
          }
      ]
      });
    }
 

  //vostfree
  const vf_episode = title.split(' en DDL').shift();

  if (title.match("Gratuit")) {
    discordClient.updatePresence({
      details: "Vostfree",
      state: "Page d'acceuil",
      largeImageKey: 'vost',
      largeImageText: 'Vostfree',
      smallImageKey: 'logo',
      instance: false,
      buttons: [
        {
            "label": "Télécharger l'app",
            "url": "https://zvbt.github.io/"
        }
    ]
    });
  }
  if (title.match("DDL")) {
    discordClient.updatePresence({
      details: "VostFree",
      state: vf_episode,
      largeImageKey: 'vost',
      largeImageText: 'Vostfree',
      smallImageKey: 'logo',
      instance: false,
      buttons: [
        {
          "label": "Regarder l'épisode",
          "url": mainWindow.webContents.getURL()
        },
        {
            "label": "Télécharger l'app",
            "url": "https://zvbt.github.io/"
        }
    ]
    });
  }

//anilist
if (title.match("AniList")) {
  discordClient.updatePresence({
    details: title,
    state: "Share Anime & Manga",
    largeImageKey: 'al',
    largeImageText: 'AniList',
    smallImageKey: 'logo',
    instance: false,
    buttons: [
      {
          "label": "Télécharger l'app",
          "url": "https://zvbt.github.io/"
      }
  ]
  });
  } 
  })
};