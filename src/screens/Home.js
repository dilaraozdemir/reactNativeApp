import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



const Home = () =>{
    return(
        <View>
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
                Actions.register();
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
            title="REgister"
            buttonstyle={{ marginTop: 10 }}
            onPress={() => {
                console.log('go to register');
                Actions.register();
            }}
            />
        </View>
    );
    
};
export default Home;