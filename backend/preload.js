const { ipcRenderer, contextBridge } = require('electron');



const API = {
    window: {
        quit: () => ipcRenderer.send('app/close')
    }
}


contextBridge.exposeInMainWorld('app', API)
