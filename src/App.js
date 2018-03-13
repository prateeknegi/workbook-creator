import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WorksheetAppBar from './component/WorksheetAppBar';
import Worksheet from './expression-value-worksheet/WorkSheet'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div>
              <WorksheetAppBar/>
              <Worksheet/>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
