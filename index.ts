import electron, { app, BrowserWindow, ipcMain, Menu} from 'electron';
import fetch from 'cross-fetch';
import { readFileSync, writeFileSync } from 'fs';
import { ElectronBlocker, fullLists, Request } from '@cliqz/adblocker-electron';
import path from 'path';
const discord = require('./discord')
let mainWindow: BrowserWindow | null = null

async function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      nodeIntegrationInSubFrames: true,
      preload: path.join(__dirname + "/backend/preload.js")
      },
    autoHideMenuBar: true,
    frame: false,
    fullscreen: false,
    width: 1280,
    height: 720,
    minHeight: 720,
    minWidth: 1280,
    maxHeight: 720,
    maxWidth: 1280,
    resizable: true, //windows 11 round border
  });

  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    console.log("popup blocked")
  })
  const contents = mainWindow.webContents;
  
let menu = Menu.buildFromTemplate([
  {
    label: "Menu",
    submenu: [
      {
        label: "Acceuil",
        click: () => {
          contents.loadFile('./client/index.html')
        },
        accelerator: "Ctrl+Space"
      },
      {
        label: "conosole",
        click: () => {
          contents.openDevTools()
        },
        accelerator: "Ctrl+shift+I"
      },
      {
        label: "Go back",
        click: () => {
          contents.goBack()
        },
        accelerator: "Ctrl+Alt+Q"
      },
      {
        label: "Go forward",
        click: () => {
          contents.goForward()
        },
        accelerator: "Ctrl+Alt+S"
      },
      {
        type: "separator"
      },
      {
        label: "Reload",
        click: () => {
          contents.reload()
        },
        accelerator: "Ctrl+r"
      },
      {
        label: "Restart",
        click: () => {
          app.relaunch()
        },
        accelerator: "Ctrl+Alt+r"
      },
      {
        label: "Quit",
        click: () => {
          app.quit()
        },
        accelerator: "Ctrl+Alt+x"
      }
    ]
  },
])
  Menu.setApplicationMenu(menu) 

  const blocker = await ElectronBlocker.fromLists(
    fetch,
    fullLists,
    {
      enableCompression: true,
    },
    {
      path: 'engine.bin',
      read: async (...args) => readFileSync(...args),
      write: async (...args) => writeFileSync(...args),
    },
  );

  
  blocker.enableBlockingInSession(mainWindow.webContents.session);

  blocker.on('request-blocked', (request: Request) => {
    console.log('blocked 1', request.tabId, request.url);
  });
  blocker.on('request-redirected', (request: Request) => {
    console.log('redirected', request.tabId, request.url);
  });

  blocker.on('request-whitelisted', (request: Request) => {
    console.log('whitelisted', request.tabId, request.url);
  });

  blocker.on('csp-injected', (request: Request) => {
    console.log('csp', request.url);
  });

  blocker.on('script-injected', (script: string, url: string) => {
    console.log('script', script.length, url);
  });

  blocker.on('style-injected', (style: string, url: string) => {
    console.log('style', style.length, url);
  });

  mainWindow.loadFile('./client/index.html')
  mainWindow.setTitle('AnimeClient | v1.1.1')
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
    
  mainWindow.setIcon('./build/logo.ico');
}




app.on('ready', () => {
  createWindow();
  discord(mainWindow);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


ipcMain.on('app/close', () => {
  app.quit()
})