import { app, BrowserWindow, Menu, session} from 'electron';
import fetch from 'cross-fetch';
import { readFileSync, writeFileSync } from 'fs';
import { ElectronBlocker, fullLists, Request } from '@cliqz/adblocker-electron';
const InfiniteLoop = require('infinite-loop');
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
  mainWindow.setTitle('AnimeClient | v1.0.4-BETA')
  
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


let il = new InfiniteLoop;
function discordrpc() {
  discord(mainWindow);
  console.log("Discord RPC updated")
}

//idk how to make it in other way 
il.add(discordrpc, []);
il.setInterval(2000)
il.run();