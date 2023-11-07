import React, { useRef, useState, useEffect, useReducer } from "react";
import { Text, View, StatusBar, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "~/data/redux/settingsSlice";
import { Dimensions, PixelRatio } from 'react-native';

//Locales
import Locales from '~/data/locales';
const { getText } = Locales();
const { width, height } = Dimensions.get('window');

//ASSETS
import __base from '~/assets/styles/base';
import __setup from '~/assets/styles/pages/setup';

export default function SelectLanguage({navigation}) {
  const languageTxt = getText('SelectLanguage');
  const [txt, setTxt] = useState(false);
  const dispatch = useDispatch();
  const lang = ['nl', 'en', 'fr'];
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [langI, dispatchLang] = useReducer((state)=> { return (state == 2) ? 0 : state+1  }, 0);

  const fadeIn = () => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 2000, useNativeDriver: true }).start(({ finished }) => {
      fadeOut();
    });
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 2000, useNativeDriver: true }).start(({ finished }) => {
      dispatchLang(); fadeIn();
    });
  };

  useEffect(()=> {
    setTxt(languageTxt);
  }, []);

  useEffect(() => { fadeIn(); }, []);

  const selectLanguage = (_language) => {
    dispatch(setLanguage(_language));
    navigation.navigate('Register');
  }

  return (
    <View style={__setup.container}>
      <StatusBar hidden={true} />
      <Animated.View style={[ { opacity: fadeAnim } ]}>
        <Text style={[__base.h1, __setup.textCenter]}>{ txt && txt[lang[langI]].intro }</Text>
        <Text style={[__base.text, __setup.textCenter]}>{ txt && txt[lang[langI]].introTxt }</Text>
      </Animated.View>
      <View style={{ flexDirection: (width > 800) ? 'row' : 'row' }}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => selectLanguage('en')}>
          <ImageBackground
            style={[ __setup.selectLanguageFlag ]}
            source={require('~/assets/images/lang-en.png')}
            imageStyle={[ __setup.selectLanguageFlagImage ]}
          />
          { (width > 800) && <Text style={[__base.imageLabels]}>{ txt && txt.en.language }</Text> }
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => selectLanguage('nl')}>
          <ImageBackground
            style={[ __setup.selectLanguageFlag ]}
            source={require('~/assets/images/lang-nl.png')}
            imageStyle={[ __setup.selectLanguageFlagImage ]}
          />
          { (width > 800) && <Text style={[__base.imageLabels]}>{ txt && txt.nl.language }</Text> }
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => selectLanguage('fr')}>
          <ImageBackground
            style={[ __setup.selectLanguageFlag ]}
            source={require('~/assets/images/lang-fr.png')}
            imageStyle={[ __setup.selectLanguageFlagImage ]}
          />
          { (width > 800) && <Text style={[__base.imageLabels]}>{ txt && txt.fr.language }</Text> }
        </TouchableOpacity>
      </View>
    </View>
  );
}