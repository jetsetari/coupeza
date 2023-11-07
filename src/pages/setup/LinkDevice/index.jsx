//COMPONENTS
import { useState } from 'react';
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native';
import  MainButton  from '~/components/MainButton';
import  BackButton  from '~/components/BackButton';
import { getDeviceByTmpId } from "~/data/firebase/firestore/getData";
import { activateDevice } from "~/data/firebase/firestore/updateData";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import Loading from "~/components/Loading";

//I18N
import Locales from '~/data/locales';
const { getText } = Locales();

//ASSETS
import __base from '~/assets/styles/base';
import __setup from '~/assets/styles/pages/setup';

//VIEW
export default function NameDevice({navigation}) {

	const [secretCode, setSecretCode] = useState('');
	const txt = getText('LinkDevice');
	const [codeNumber, setCodeNumber] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const setCode = (number) => {
		if(number === "del"){
			setSecretCode(secretCode.substring(0, secretCode.length - 1));
		} else{
			if(secretCode.length <= 5){
				setSecretCode(secretCode+''+number);
			} else {
			}
		}
	}

	const checkCode = () => {
		setLoading(true);
		console.log(secretCode);
		activateDevice(secretCode, (device_exists)=> {
			if(device_exists){
				AsyncStorage.setItem('device_id', device_exists, () => {
					navigation.navigate('NameDevice');
				});
			} else {
				setError('Wrong code');
				setTimeout(()=> {
					setError(false);
				}, 1500);
			}
			setLoading(false);
		});
	}

	return (
		loading ? <Loading /> : (
			<View style={__setup.container}>
				<StatusBar hidden={true} />
				<BackButton onPress={() => navigation.navigate('Register') }>
					{ txt.btnBack }
				</BackButton>
				<KeyboardAvoidingView style={__setup.container} behavior="padding" enabled>
					<Text style={[__base.h1]}>{ txt.title }</Text>
					<Text style={[__base.text, __base.textCenter]}>{ txt.txt }</Text>
					<View style={[__setup.codeFill]}>
						<View style={ (secretCode.length >= 1) ? __setup.codeFillFilled : __setup.codeFillEmpty} />
						<View style={ (secretCode.length >= 2) ? __setup.codeFillFilled : __setup.codeFillEmpty} />
						<View style={ (secretCode.length >= 3) ? __setup.codeFillFilled : __setup.codeFillEmpty} />
						<View style={ (secretCode.length >= 4) ? __setup.codeFillFilled : __setup.codeFillEmpty} />
						<View style={ (secretCode.length >= 5) ? __setup.codeFillFilled : __setup.codeFillEmpty} />
						<View style={ (secretCode.length >= 6) ? __setup.codeFillFilled : __setup.codeFillEmpty} />
					</View>
					<View style={__setup.codeWrapper}>
            <View style={__setup.codeRow}>
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(1) }>
                <Text style={__setup.codeTxt}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(2) }>
                <Text style={__setup.codeTxt}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(3) }>
                <Text style={__setup.codeTxt}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={__setup.codeRow}>
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(4) }>
                <Text style={__setup.codeTxt}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(5) }>
                <Text style={__setup.codeTxt}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(6) }>
                <Text style={__setup.codeTxt}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={__setup.codeRow}>
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(7) }>
                <Text style={__setup.codeTxt}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(8) }>
                <Text style={__setup.codeTxt}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(9) }>
                <Text style={__setup.codeTxt}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={__setup.codeRow}>
            	{
                secretCode.length > 0 ? (
                  <TouchableOpacity style={__setup.codeColDel} onPress={() => setCode("del")}>
                    <Icon name="delete" size={28} color="#fff" style={__setup.codeColIcon} />
                  </TouchableOpacity>
                ) : (
                  <View style={__setup.codeColHidden}/>
                )
              }
              <TouchableOpacity style={__setup.codeCol} onPress={() => setCode(0)}>
                <Text style={__setup.codeTxt}>0</Text>
              </TouchableOpacity>
              {
                (secretCode.length == 6) ? (
                  <TouchableOpacity style={[__setup.codeColDel, { backgroundColor: '#23d366' }]} onPress={() => checkCode()}>
                    <Icon name="check" size={28} color="#fff" style={__setup.codeColIcon} />
                  </TouchableOpacity>
                ) : (
                  <View style={__setup.codeColHidden}/>
                )
              }
            </View>
	       	</View>
	       	{ error  && <Text style={[__base.error, __setup.codeError]}>{ error }</Text> }
				</KeyboardAvoidingView>
			</View>
		)
	);
	
}
