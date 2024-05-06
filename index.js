const { app, BrowserWindow, Menu, dialog } = require("electron");
const { fetch } = require("cross-fetch");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const { readFileSync, writeFileSync } = require("fs");
const {
  ElectronBlocker,
  fullLists,
  Request,
} = require("@cliqz/adblocker-electron");
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
    width: 1600,
    height: 900,
    maximizable: false,
    resizable: true,
    roundedCorners: true,
  });

  const contents = mainWindow.webContents;

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

  mainWindow.loadURL("http://ac.zvbt.space");
  mainWindow.setTitle("AnimeClient");

  mainWindow.webContents.setWindowOpenHandler((details) => {
    return { action: "deny" };
  });


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

    autoUpdater.checkForUpdates();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  mainWindow.setIcon("./build/logo.png");

 if (process.platform === 'win32'){
    console.log('Windows')
    discord(mainWindow);
  } if (process.platform === 'linux'){
    console.log('Linux')
  } if (process.platform === 'darwin'){
    console.log('MacOS')
  }


}

// updater
autoUpdater.on("update-available", (_event, releaseNotes, releaseName) =>{
  const dialogOpts = {
    type: 'info',
    buttons: ['Ok'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version is being downloaded.'
  }
  dialog.showMessageBox(dialogOpts, (response) => {

  })
})

autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) =>{
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded> Restart the application to apply the updates.'
  }
  dialog.showMessageBox(dialogOpts).then((returnValue) =>{
    if (returnValue.response === 0) autoUpdater.quitAndInstall()
  })
})



app.on("ready", () => {
  createWindow();
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