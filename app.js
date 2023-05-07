'use strict'

const gui = require('nw.gui');
const os = require('os');

//Mac menu
function loadMenuForMacOS(){
const mb = new gui.Menu({ type: 'menubar'});
mb.createMacBuiltin('Mac app menu example');
gui.Window.get().menu = mb;
};

//Windows & Linux menu
function loadMenuForWindowsAndLinux(){
const menuBar = new gui.Menu({type:'menubar'});
const fileMenu = new gui.MenuItem({label: 'File'});
const sayHelloMenuItem = new gui.MenuItem(
    {
        label: 'Say hello',
        click: () => {alert('Hello');}
    });
const quitAppMenuItem =  new gui.MenuItem(
    {
        label: 'Quit app',
        click: () => {process.exit(0);}
    });

const fileSubMenu = new gui.Menu();
fileSubMenu.append(sayHelloMenuItem);
fileSubMenu.append(quitAppMenuItem);

fileMenu.submenu = fileSubMenu;
menuBar.append(fileMenu);
gui.Window.get().menu = menuBar;
};

if(os.platform() == 'darwin'){
    loadMenuForMacOS();
}else{
    loadMenuForWindowsAndLinux();
}
