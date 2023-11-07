import * as React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Lottie from 'lottie-react-native';
import theme from '~/assets/styles/themes/dark.theme.js';

function Loading({ label = false }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#01020D" }}>
       <Lottie source={require('./loading-lottie.json')} style={{ widt: 70, height: 70 }} autoPlay loop />
       { label && <Text style={{ marginTop: 10, color: '#FFF', fontFamily: theme.FONT_BOLD }}>{ label.toUpperCase() }</Text> }
    </View>
  );
}

export default Loading