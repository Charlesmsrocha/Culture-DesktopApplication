// 'use strict';

// console.log("main process working");

// console.log('main.js');

// const electron = require("electron");

// const app = electron.app;

// const BrowserWindow = electron.BrowserWindow;

// const path = require("path");

// const url = require("url");

// let win;

// function createWindow() {

//     win = new BrowserWindow({

//         webPreferences: {

//             nodeIntegration: true,

//             contextIsolation: false,

//         }
//     });
//     win.loadURL(url.format({

//         pathname: path.join(__dirname, 'index.html'),

//         protocol: 'file',

//         slashes: true

//     }));

//     win.on('closed', () => {

//         win = null;

//     })

// }

// app.on('ready', createWindow);

// app.on('window-all-closed', () => {

//     if (process.platform !== 'darwin') {

//         app.quit()

//     }
// });

// app.on('activate', () => {

//     if (win === null) {

//         createWindow()

//     }
// });
'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 650, height: 510 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () { mainWindow = null; });
});
