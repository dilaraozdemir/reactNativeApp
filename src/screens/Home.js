import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



const Home = () =>{
    return(
        <SafeAreaView>
            <Text>Home</Text>
            <Button
                icon={
                    <Icon
                    name="sign-in"
                    size={15}
                    color="white"
            />
            }
            title="Login"
            onPress={() => {
                Actions.login();
            }}
            />
            
            <Button
                icon={
                    <Icon
                    name="user-plus"
                    size={15}
                    color="white"
            />
            }
            title="Register"
            buttonstyle={{ marginTop: 10 }}
            onPress={() => {
                console.log('go to register');
                Actions.register({username: 'dilara'});
            }}
            />
        </SafeAreaView>
    );
    
};
export default Home;