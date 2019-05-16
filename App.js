import React, {Component} from 'react';
import { Scene, Router , Stack } from 'react-native-router-flux';
import { StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';


EStyleSheet.build({
  $textColor: '#f1f1f1',
  $backColor: '#000',
  $fontSize: Platform.OS == 'ios' ? 18 : 16,

});

export default class App extends Component {
  render() {
    return (
    <>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Router>
            <Stack key="root">
              <Scene key="login" component={Login} title="Login" back={true}  />
              <Scene key="register" component={Register} title="Register" back/>
              <Scene initial key="home" component={Home} title="Home" />
            </Stack>
          </Router>
    </>
    );  
  };
};
