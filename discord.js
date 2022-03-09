/*
Can be done better but im lazy
*/

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

  if (title.match("AnimeClient")) {
    discordClient.updatePresence({
      details: "Page d'acceuil",
      state: "v1.0.4-BETA",
      largeImageKey: 'logo',
      smallImageKey: 'none',
      instance: false,
      buttons: [
        {
            "label": "Télécharger l'app",
            "url": "https://github.com/zvbt/AnimeClient/releases/latest"
        }
        
    ]
    });
  }

    //crunchy
    const cr_site = title.split(' - ').pop();
    const cr_episode = title.split(' - ').shift();
    if (title === "Crunchyroll - Watch Popular Anime & Read Manga Online") {
      discordClient.updatePresence({
        details: "Crunchyroll",
        state: "Page d'acceuil",
        largeImageKey: 'crunchy',
        smallImageKey: 'logo',
        instance: false,
        buttons: [
          {
              "label": "Télécharger l'app",
              "url": "https://github.com/zvbt/AnimeClient/releases/latest"
          }
          
      ]
      });
    }
    if (title.match("Watch on Crunchyroll")) {
      discordClient.updatePresence({
        details: "Crunchyroll",
        state: cr_episode,
        largeImageKey: 'crunchy',
        smallImageKey: 'logo',
        instance: false,
        buttons: [
          {
            "label": "Regarder l'épisode",
            "url": mainWindow.webContents.getURL()
          },
          {
              "label": "Télécharger l'app",
              "url": "https://github.com/zvbt/AnimeClient/releases/latest"
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
      smallImageKey: 'logo',
      instance: false,
      buttons: [
        {
            "label": "Télécharger l'app",
            "url": "https://github.com/zvbt/AnimeClient/releases/latest"
        }
        
    ]
    });
  }
  if (neko_site.match("sama")) {
    discordClient.updatePresence({
      details: neko_site,
      state: neko_episode,
      largeImageKey: 'nekosama',
      smallImageKey: 'logo',
      instance: false,
      buttons: [
        {
          "label": "Regarder l'épisode",
          "url": mainWindow.webContents.getURL()
        },
        {
            "label": "Télécharger l'app",
            "url": "https://github.com/zvbt/AnimeClient/releases/latest"
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
        smallImageKey: 'logo',
        instance: false,
        buttons: [
          {
              "label": "Télécharger l'app",
              "url": "https://github.com/zvbt/AnimeClient/releases/latest"
          }
          
      ]
      });
  }

    if (va_site.match("Voiranime")) {
      discordClient.updatePresence({
        details: va_site,
        state: va_episode + " E" + va_ep1,
        largeImageKey: 'va',
        smallImageKey: 'logo',
        instance: false,
        buttons: [
          {
            "label": "Regarder l'épisode",
            "url": mainWindow.webContents.getURL()
          },
          {
              "label": "Télécharger l'app",
              "url": "https://github.com/zvbt/AnimeClient/releases/latest"
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
      smallImageKey: 'logo',
      instance: false,
      buttons: [
        {
            "label": "Télécharger l'app",
            "url": "https://github.com/zvbt/AnimeClient/releases/latest"
        }
        
    ]
    });
  }
  if (title.match("DDL")) {
    discordClient.updatePresence({
      details: "VostFree",
      state: vf_episode,
      largeImageKey: 'vost',
      smallImageKey: 'logo',
      instance: false,
      buttons: [
        {
          "label": "Regarder l'épisode",
          "url": mainWindow.webContents.getURL()
        },
        {
            "label": "Télécharger l'app",
            "url": "https://github.com/zvbt/AnimeClient/releases/latest"
        }
        
    ]
    });
  }

//toonanime
const ta_episode = title.split(' Streaming ').shift();
if (title.match("Toonanime - Animes VF et Vostfr en streaming gratuit")) {
  discordClient.updatePresence({
    details: "ToonAnime",
    state: "Page d'acceuil",
    largeImageKey: 'ta',
    smallImageKey: 'logo',
    instance: false,
    buttons: [
      {
          "label": "Télécharger l'app",
          "url": "https://github.com/zvbt/AnimeClient/releases/latest"
      }
      
  ]
  });
}
if (title.match("»")) {
  discordClient.updatePresence({
    details: "ToonAnime",
    state: ta_episode,
    largeImageKey: 'ta',
    smallImageKey: 'logo',
    instance: false,
    buttons: [
      {
        "label": "Regarder l'épisode",
        "url": mainWindow.webContents.getURL()
      },
      {
          "label": "Télécharger l'app",
          "url": "https://github.com/zvbt/AnimeClient/releases/latest"
      }
      
  ]
  });
}

//anilist
if (title.match("AniList")) {
  discordClient.updatePresence({
    details: title,
    state: "᲼᲼᲼᲼᲼᲼᲼᲼",
    largeImageKey: 'al',
    smallImageKey: 'logo',
    instance: false,
    buttons: [
      {
          "label": "Télécharger l'app",
          "url": "https://github.com/zvbt/AnimeClient/releases/latest"
      }
  ]
  });
  }
  if (title.match("'s")) {
    discordClient.updatePresence({
      details: title,
      state: "᲼᲼᲼᲼᲼᲼᲼᲼",
      largeImageKey: 'al',
      smallImageKey: 'logo',
      instance: false,
      buttons: [
        {
          "label": "Voir le profile",
          "url": mainWindow.webContents.getURL()
        },
        {
            "label": "Télécharger l'app",
            "url": "https://github.com/zvbt/AnimeClient/releases/latest"
        }
    ]
    });
  }
};