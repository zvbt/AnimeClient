'use strict'

const { match } = require('assert')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

module.exports = function darkMode(mainWindow) {

  let title = mainWindow.getTitle();
  mainWindow.webContents.on('did-finish-load', () => {

    //ANILIST
    if (title.match("AniList")) {
      Promise.all([
           
        readFile(path.join(__dirname, 'anilist.css'), 'utf-8'),
      ])
        .then((cssFiles) => {
          mainWindow.webContents.insertCSS(
            `
            @media (prefers-color-scheme: dark) {
              ${cssFiles.join('\n')}
            }
            `,
            { cssOrigin: 'user' }
          )
        })
    }

    //VOIRANIME
    if (title.match("Voiranime")) {
      Promise.all([
            
        readFile(path.join(__dirname, 'voiranime.css'), 'utf-8'),
      ])
        .then((cssFiles) => {
          mainWindow.webContents.insertCSS(
            `
            @media (prefers-color-scheme: dark) {
              ${cssFiles.join('\n')}
            }
            `,
            { cssOrigin: 'user' }
          )
        })
    } 
    
    //VOSTFREE
    if (title.match("Vostfree")) {
      Promise.all([
            
        readFile(path.join(__dirname, 'vostfree.css'), 'utf-8'),
      ])
        .then((cssFiles) => {
          mainWindow.webContents.insertCSS(
            `
            @media (prefers-color-scheme: dark) {
              ${cssFiles.join('\n')}
            }
            `,
            { cssOrigin: 'user' }
          )
        })
    } 
  })
}