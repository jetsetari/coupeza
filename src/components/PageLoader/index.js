import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function PageLoader({ loading = 'Loading' }) {
  const animation = useRef(0);

  return (
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
      <View style={{width: 120, height: 120, position: 'absolute', borderRadius: 7, backgroundColor: 'rgba(0,0,0,0.7)', alignSelf: 'center', justifySelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <LottieView ref={animation} autoPlay={true} loop={true} style={{width: 40, height: 40}} autoSize source={require('./loader.json')} />
        <Text style={{ color: '#FFF', marginTop: 10, fontFamily: 'Sailec-Light' }}>{ loading }</Text>
      </View>
    </View>
  );
}
