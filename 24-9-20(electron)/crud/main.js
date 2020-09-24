const { app, BrowserWindow } = require('electron')

function createWindow () {

   const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
  
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


