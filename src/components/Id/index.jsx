//COMPONENTS
import React, { useRef } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import style from './Id-styles';
import moment from 'moment';


export default function Id({ data }) {
	console.log(data.dob);
  	return (
  		<>
  			<ImageBackground source={require('./id.png')} resizeMode="cover" imageStyle={style.imageStyle} style={style.profileImage}>
  				<Text style={ style.country }>{ data.countryCode }</Text>
  				<Text style={ style.firstName }>{ data.firstName.toUpperCase() }</Text>
  				<Text style={ style.lastName }>{ data.lastName.toUpperCase() }</Text>
  				{ data.dob && <Text style={ style.dob }>{ moment(data.dob).format('DD-MM-YYYY') }</Text> }
  				<Text style={ style.gender }>{ (data.gender == 'female') ? 'MRS' : 'MR' }</Text>
  				<ImageBackground source={require('./stamp.png')} resizeMode="cover" imageStyle={style.stampStyle} style={style.stamp} />
  				<ImageBackground source={{uri: data?.picture?.large}} resizeMode="cover" imageStyle={style.avatarStyle} style={style.avatar} />
  			</ImageBackground>
		</>
	)
}
