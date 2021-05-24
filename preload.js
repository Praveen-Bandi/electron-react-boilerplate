const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      console.log('recieved notify event')
      ipcRenderer.send('notify', message);
    }
  }
})