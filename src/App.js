import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import './App.css'
 
class App extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }


  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
        <p>{this.state.result}</p>
        {console.log(this.state.result)}

        <div className="container">
          <p>Generar QR</p>
          <input type="text" placeholder="Enter value"></input>
          <button>
            Generate
          </button>
          <div id="qrcode"></div>
        </div>

      </div>
    )
  }
}

export default App;
