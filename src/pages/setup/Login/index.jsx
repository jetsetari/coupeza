//COMPONENTS
import { useState, useEffect } from "react";
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import  MainButton  from '~/components/MainButton';
import  BackButton  from '~/components/BackButton';
import PageLoader from "~/components/PageLoader";
import Loading from "~/components/Loading";

import { doSignInWithEmailAndPassword } from "~/data/firebase/auth";
import { getUserById } from "~/data/firebase/firestore/getData";

//I18N
import Locales from '~/data/locales';
const { getText } = Locales();

//ASSETS
import __base from '~/assets/styles/base';
import __setup from '~/assets/styles/pages/setup';


//VIEW
export default function Login({navigation}) {
  const [email, setEmail] = useState('depauw.aaron@gmail.com');
  const [password, setPassword] = useState('theisland88');
  const [doLogin, setDoLogin] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const txt = getText('Login');

  function signInWithEmail() {
    setError(false); setLoading(true);
    doSignInWithEmailAndPassword(email, password, (result, error) => {
      setLoading(false);
      if (result === "error") {
        setError(error.message);
      } else {
        navigation.navigate('LinkDevice');
      }
    });
  }

  return (
    loading ? <Loading /> : (
      <View style={__setup.container}>
        { doLogin && <PageLoader /> }
        <StatusBar hidden={true} />
        <BackButton onPress={() => navigation.navigate('Register') }>
          { txt.btnBack }
        </BackButton>
        <KeyboardAvoidingView style={__setup.container} behavior="padding" enabled>
          <Text style={[__base.h1]}>{ txt.title }</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register') }>
            <Text style={[__base.text, __base.textCenter]}>{ txt.txt }</Text>
          </TouchableOpacity>
          <TextInput value={ email } autoCapitalize="none" onChangeText={ (email) => setEmail(email) } style={__base.inputText} placeholder={ txt.placeEmail } />
          <TextInput value={ password } autoCapitalize="none" onChangeText={ (password) => setPassword(password) } secureTextEntry={true} style={__base.inputText} secureTextEntry={true} placeholder={ txt.placePassword }/>
          {
            error && (
              <Text style={[__base.text, __base.error]}>{ error }</Text>
            )
          }
          <MainButton onPress={() => signInWithEmail() }>{ txt.button }</MainButton>
        </KeyboardAvoidingView>
      </View>
    )
  );
}
