import React, { Component } from 'react'

class App extends Component {

  render() {
    return (
      <div>
        <h1>React Electron Desktop App</h1>
        <button onClick={this.sendNotification}>Send Notification</button>
      </div>
    )
  }

  sendNotification = () => {
    console.log('sending notification')
    electron.notificationApi.sendNotification('My custom message!');
  }
}

export default App;
