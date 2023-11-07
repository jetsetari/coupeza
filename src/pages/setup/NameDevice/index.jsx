//COMPONENTS
import { useEffect, useState } from 'react';
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import  MainButton  from '~/components/MainButton';
import  BackButton  from '~/components/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateDeviceName } from "~/data/firebase/firestore/updateData";

//I18N
import Locales from '~/data/locales';
const { getText } = Locales();

//ASSETS
import __base from '~/assets/styles/base';
import __setup from '~/assets/styles/pages/setup';

//VIEW
export default function NameDevice({navigation}) {
    const [deviceId, setDeviceId] = useState(false);
    const [deviceName, setDeviceName] = useState('Front Office');
    const txt = getText('NameDevice');

    useEffect(() => {
        AsyncStorage.getItem("device_id").then((value) => {
            setDeviceId(value);
        });
    }, []);

    const changeName = (text) => {
        setDeviceName(text);
    }

    const saveName = () => {
        if(deviceId){
            updateDeviceName(deviceId, deviceName);
            navigation.navigate('CreateEvent');
        }
    }

    return (
        <ImageBackground source={require('./images/bg-name-device.jpg')} imageStyle={{resizeMode: 'cover'}} style={[__setup.containerNameDevice]}>
            <StatusBar hidden={true} />
            <BackButton onPress={() => navigation.navigate('Register') }>
                { txt.btnBack }
            </BackButton>
            <KeyboardAvoidingView style={__setup.containerNameDevice} behavior="padding" enabled>
                <Text style={[__base.h1]}>{ txt.title }</Text>
                <Text style={[__base.text, __base.textCenter]}>{ txt.txt }</Text>
                <TextInput value={deviceName}  onChangeText={text => changeName(text)} style={__base.inputText}  placeholder={ txt.title }/>
                <MainButton onPress={() => saveName()}>{ txt.button }</MainButton>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
    
}
