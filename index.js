const { electron, app, BrowserWindow, ipcMain, Menu } = require("electron");
const { fetch } = require("cross-fetch");
const { readFileSync, writeFileSync } = require("fs");
const {
  ElectronBlocker,
  fullLists,
  Request,
} = require("@cliqz/adblocker-electron");
const { path } = require("path");
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
    frame: true,
    fullscreen: false,
    width: 1280,
    height: 720,
    minHeight: 720,
    minWidth: 1280,
    resizable: true, //windows 11 round border
  });

  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    console.log("popup blocked");
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
            contents.loadURL(
              "https://silvercube.fr/animeclient/client/index.html"
            );
          },
          accelerator: "Ctrl+Space",
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
          label: "Go forward",
          click: () => {
            contents.openDevTools();
          },
          accelerator: "Ctrl+Alt+i",
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

  const blocker = await ElectronBlocker.fromLists(
    fetch,
    fullLists,
    {
      enableCompression: true,
    },
    {
      path: "engine.bin",
      read: async (...args) => readFileSync(...args),
      write: async (...args) => writeFileSync(...args),
    }
  );

  blocker.enableBlockingInSession(mainWindow.webContents.session);
  blocker.on("request-blocked", (request) => {
    console.log("blocked 1", request.tabId, request.url);
  });

  mainWindow.loadURL(url);
  mainWindow.setTitle("AnimeClient v2.0");

  contents.on("dom-ready", () => saveBounds(contents.getURL()));

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
il.setInterval(2000);
il.run();
