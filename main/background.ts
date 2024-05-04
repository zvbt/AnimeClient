import path from 'path'
import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import { autoUpdater } from 'electron-updater'
import { fetch } from 'cross-fetch'
import { ElectronBlocker, fullLists, Request } from '@cliqz/adblocker-electron'
import { readFileSync, writeFileSync } from 'fs'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
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
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  }
)

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)


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

  mainWindow.setTitle("AnimeClient v2.0.4");

  mainWindow.webContents.setWindowOpenHandler((details) => {
    return { action: "deny" };
  });
  
  autoUpdater.checkForUpdates();

  }
})()

  

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
