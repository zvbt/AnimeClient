const { app, BrowserWindow, dialog, components, ipcMain } = require("electron");
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
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
    frame: false,
    fullscreen: false,
    fullscreenable: true,
    simpleFullscreen: true,
    width: 1280,
    height: 720,
    maximizable: true,
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

  mainWindow.loadFile(path.join(__dirname, 'public', 'index.html'));
  mainWindow.setTitle("AnimeClient");

  mainWindow.webContents.setWindowOpenHandler((details) => {
    return { action: "deny" };
  });

  contents.on("dom-ready", (event, url) => {
  ipcMain.on("minimize-window", () => {
    mainWindow.minimize();
  });

  ipcMain.on("close-window", () => {
    mainWindow.close();
  });

    autoUpdater.checkForUpdates();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  mainWindow.setIcon("./build/logo.png");
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

app.whenReady().then(async () => {
  await components.whenReady();
  console.log('components ready:', components.status());
  if (process.platform === 'win32'){
    console.log('Windows')
    createWindow();
    discord(mainWindow);
  } if (process.platform === 'linux'){
    console.log('Linux')
    createWindow();
  } if (process.platform === 'darwin'){
    console.log('MacOS')
    createWindow();
  }
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
