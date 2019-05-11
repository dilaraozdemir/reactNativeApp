import React, {Component} from 'react';
import { Scene, Router , Stack } from 'react-native-router-flux';


import Login from './src/screens/Login';
import Login from './src/screens/Register';
import Login from './src/screens/Home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Router>
            <Stack key="root">
              <Scene key="login" component={Login} title="Login" back={true}  />
              <Scene key="register" component={Register} title="Register" back/>
              <Scene initial key="home" component={Home} title="Home" />
            </Stack>
          </Router>
      </View>
    );
  }
}
