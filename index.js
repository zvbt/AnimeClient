const { electron, app, BrowserWindow, ipcMain, Menu } = require("electron");
const { fetch } = require("cross-fetch");
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");
const {
  ElectronBlocker,
  fullLists,
  Request,
} = require("@cliqz/adblocker-electron");
const { getWindowSettings, saveBounds } = require("./settings");
const discord = require("./discord");

async function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      nodeIntegrationInSubFrames: true,
      webviewTag: true,
    },
    autoHideMenuBar: true,
    frame: false,
    fullscreen: false,
    fullscreenable: true,
    simpleFullscreen: false,
    width: 1280,
    height: 720,
    minHeight: 720,
    minWidth: 1280,
    maximizable: false,
    resizable: false,
    roundedCorners: true,
  });

  const contents = mainWindow.webContents;
  const url = getWindowSettings();

  let menu = Menu.buildFromTemplate([
    {
      label: "Menu",
      submenu: [
        {
          label: "Acceuil",
          click: () => {
            contents.loadURL("http://ac.zvbt.space/");
          },
          accelerator: "Ctrl+Space",
        },
        {
          label: "Adblock",
          click: () => {
            contents.loadURL("https://d3ward.github.io/toolz/adblock.html");
          },
          accelerator: "Ctrl+Shift+Space",
        },
        {
          label: "Go back",
          click: () => {
            contents.goBack();
          },
          accelerator: "Ctrl+Alt+Q",
        },
        {
          label: "Go forward",
          click: () => {
            contents.goForward();
          },
          accelerator: "Ctrl+Alt+S",
        },
        {
          label: "Console",
          click: () => {
            contents.openDevTools();
          },
          accelerator: "Ctrl+Shift+i",
        },
        {
          type: "separator",
        },
        {
          label: "Reload",
          click: () => {
            contents.reload();
          },
          accelerator: "Ctrl+r",
        },
        {
          label: "Restart",
          click: () => {
            app.relaunch();
          },
          accelerator: "Ctrl+Alt+r",
        },
        {
          label: "Quit",
          click: () => {
            app.quit();
          },
          accelerator: "Ctrl+Alt+x",
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);

  // cache blocker for faster loading
  const blocker = await ElectronBlocker.fromLists(
    fetch,
    fullLists,
    {
      enableCompression: true,
    },{
      path: 'engine.bin',
      read: async (...args) => readFileSync(...args),
      write: async (...args) => writeFileSync(...args),
    },
  );

  blocker.enableBlockingInSession(mainWindow.webContents.session);
  blocker.on("request-blocked", (request) => {
    console.log("blocked 1", request.tabId, request.url);
  });

  mainWindow.loadURL(url);
  mainWindow.setTitle("AnimeClient v2.0");

  mainWindow.webContents.setWindowOpenHandler((details) => {
    return { action: "deny" };
  });

  contents.on("dom-ready", () => saveBounds(contents.getURL()));

  contents.on("dom-ready", (event, url) => {
    let title = mainWindow.getTitle();

    if (title.match("AnimeClient")) {
      console.log("ac");
    } else {
      contents.executeJavaScript(`
      const style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = '* { -webkit-app-region: no-drag !important; }';
      document.head.appendChild(style);
    `);
    }
  });

  // //javascript injection
  // contents.on("dom-ready", () => {
  //   contents.executeJavaScript(`
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = 'https://ac.akali.best/inject.js';
  //     document.head.appendChild(script);
  //   `);
  // });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  mainWindow.setIcon("./build/logo.ico");
}

app.on("ready", () => {
  createWindow();
  discord(mainWindow);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

const InfiniteLoop = require("infinite-loop");
let il = new InfiniteLoop();
function discordrpc() {
  discord(mainWindow);
}

il.add(discordrpc, []);
il.setInterval(5000);
il.run();
