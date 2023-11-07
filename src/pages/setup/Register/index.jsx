//COMPONENTS
import { useState } from 'react';
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import  MainButton  from '~/components/MainButton';
import  BackButton  from '~/components/BackButton';
import * as Localization from 'expo-localization';
import { doCreateUserWithEmailAndPassword } from "~/data/firebase/auth";
import Loading from "~/components/Loading";

//I18N
import Locales from '~/data/locales';
const { getText } = Locales();

//ASSETS
import __base from '~/assets/styles/base';
import __setup from '~/assets/styles/pages/setup';

//VIEW
export default function RegisterScreen({navigation}) {

  const [firstName, setFirstName] = useState('Aäron');
  const [lastName, setLastName] = useState('De Pauw');
  const [companyCode, setCompanyCode] = useState('PmlpOtH2Kh');
  const [email, setEmail] = useState('depauw.aaron@gmail.com');
  const [password, setPassword] = useState('theisland88');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const txt = getText('Register');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };


  async function signInWithEmail() {
    //let content = {  email: email,  first_name: firstName,  last_name: lastName };
    if(firstName == '' || lastName == '' || email == '' || password == ''){
      setError('Please fill in all fields');
    } else if(!validateEmail(email)){
      setError('Please fill in a correct email');
    } else if(password.length < 5) {
      setError('Choose stronger password')
    } else {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        company: companyCode
      }
      setLoading(true);
      doCreateUserWithEmailAndPassword(email, password, data, (result) => {
        if(result.type=='error'){
          setLoading(false);
          setError(result.data);
        } else {
          navigation.navigate('LinkDevice')
        }
      })
    }
  } 

  return (
    loading ? <Loading /> : (
      <View style={__setup.container}>
        <StatusBar hidden={true} />
        <BackButton onPress={() => navigation.navigate('SelectLanguage') }>
          { txt.btnBack }
        </BackButton>
        <KeyboardAvoidingView style={__setup.container} behavior="padding" enabled>
          <Text style={[__base.h1]}>{ txt.title }</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Login') }>
            <Text style={[__base.text, __base.textCenter]}>{ txt.txt }</Text>
          </TouchableOpacity>
          <TextInput value={firstName} onChangeText={ (firstName) => setFirstName(firstName) } style={__base.inputText} placeholder="First name" />
          <TextInput value={lastName} onChangeText={ (lastName) => setLastName(lastName) } style={__base.inputText} placeholder="Last name" />
          <TextInput value={companyCode} onChangeText={ (companyCode) => setCompanyCode(companyCode) } style={__base.inputText} placeholder="Company Code" />
          <TextInput value={email} onChangeText={ (email) => setEmail(email) } autoCapitalize="none" style={__base.inputText} placeholder={"Email"}/>
          <TextInput value={password} secureTextEntry={true} onChangeText={ (password) => setPassword(password) } autoCapitalize="none" style={__base.inputText} placeholder={"Password"}/>
          <MainButton onPress={() => signInWithEmail() }>{ txt.button }</MainButton>
          { error && <Text style={ __base.error }>{ error }</Text> }
        </KeyboardAvoidingView>
      </View>
    )
  );
}
