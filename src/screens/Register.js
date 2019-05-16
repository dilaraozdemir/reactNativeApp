import React, {useState} from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';


const Register = (props) =>{

    const [email, setEmail] = useState('');
    const [passwword, setPassword] = useState('');
    const registerUser = () =>{
        Alert.alert(
            'Register',
            `Email: ${email} - Password: ${passwword}`,
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            {cancelable: false},
          );
    }


    return(
        <SafeAreaView>
            <Input
                placeholder='E-Mail...'
                keyboardType='email-address'
                leftIcon={
                    <Icon
                        name='envelope-o'
                        size={24}
                        color='black'
                    />
                }
                value={email}
                onChangeText={(e)=>{
                    setEmail(value);
                }}
            />

            <Input
                placeholder='Passwword'
                leftIcon={
                    <Icon
                        name='key'
                        size={24}
                        color='black'
                    />
                    }
                value={email}
                onChangeText={(e)=>{
                    setPassword(value);
                }}
            />
            <Button
            icon={
                <Icon
                    name="Register"
                    size={15}
                    color="white"
                />
                }
                title="Button with icon component"
                onPress={() =>{
                    registerUser();
                }}
            />
        </SafeAreaView>
        
    );
};

const syles = EStyleSheet.create({
    textStyle: {
        fontSize: '$fontSize',
        color: '$textColor',
        backgroundColor: '$backColor',
    }
});

export default Register;