import { app, BrowserWindow, ipcMain, Menu, MenuItem,} from 'electron';
import fetch from 'cross-fetch';
import { readFileSync, writeFileSync } from 'fs';
import { ElectronBlocker, fullLists, Request } from '@cliqz/adblocker-electron';
const path = require('path')
const discord = require('./discord')


let mainWindow: BrowserWindow | null = null

async function createWindow() {
 
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      nodeIntegrationInSubFrames: true,
      },
    autoHideMenuBar: true,
    frame: true,
    fullscreen: false,
    width: 1280,
    height: 720,
  

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
        label: "Console",
        click: () => {
          contents.openDevTools()
        },
        accelerator: "Ctrl+Shift+I"
      },
      {
        label: "Go back",
        click: () => {
          contents.goBack()
        },
        accelerator: "Ctrl+Alt+A"
      },
      {
        label: "Go forward",
        click: () => {
          contents.goForward()
        },
        accelerator: "Ctrl+Alt+z"
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
    console.log('blocked', request.tabId, request.url);
    discord(mainWindow);
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
  mainWindow.setTitle('AnimeClient | BETA')
  
 

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
    
  mainWindow.setIcon('./build/logo.ico');
}


app.on('ready', () => {
  createWindow();
  
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