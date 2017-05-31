import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
//Material UI
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import muiTheme from './mui-theme.js'
const theme = createMuiTheme({
  palette: createPalette(muiTheme),
});
//Component imports
import SomeComponent from './components/SomeComponent.js'
import Login from './components/auth/Login.js'

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}> 
          <div>
            <Route exact path="/" component={SomeComponent}/>
            <Route exact path="/login" component={Login}/>
          </div>
        </MuiThemeProvider>  
      </Router>
    );
  }
}
