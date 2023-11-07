//COMPONENTS
import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//ASSETS
import __base from '~/assets/styles/base';


//VIEW
export default class BottomMenu extends Component {

	
	render = () => {
		const { children } = this.props;
		console.log(this.props);
		return (
			<View style={[__base.bottomMenu]}>
				<TouchableOpacity style={__base.bottomMenuTab} onPress={() => this.props.navigation.navigate('Home') }>
					{(this.props.active == 'home') ? (
						<View><Image style={[ __base.bottomMenuImage ]} source={require('~/assets/images/ico-home-active.png')} />
						<Text style={__base.bottomMenuTextActive}>Home</Text></View>
					) : (
						<View><Image style={[ __base.bottomMenuImage ]} source={require('~/assets/images/ico-home.png')} />
						<Text style={__base.bottomMenuText}>Home</Text></View>
					)}
			    </TouchableOpacity>
			    <TouchableOpacity style={__base.bottomMenuTab} onPress={() => this.props.navigation.navigate('Profile') }>
			    	{(this.props.active == 'profile') ? (
						<View><Image style={[ __base.bottomMenuImage ]} source={require('~/assets/images/ico-profile-active.png')} />
						<Text style={__base.bottomMenuTextActive}>Profile</Text></View>
					) : (
						<View><Image style={[ __base.bottomMenuImage ]} source={require('~/assets/images/ico-profile.png')} />
						<Text style={__base.bottomMenuText}>Profile</Text></View>
					)}
			    </TouchableOpacity>
			    <TouchableOpacity style={__base.bottomMenuTab} onPress={() => this.props.navigation.navigate('Access') }>
			    	{(this.props.active == 'access') ? (
						<View><Image style={[ __base.bottomMenuImage ]} source={require('~/assets/images/ico-access-active.png')} />
						<Text style={__base.bottomMenuTextActive}>Access</Text></View>
					) : (
						<View><Image style={[ __base.bottomMenuImage ]} source={require('~/assets/images/ico-access.png')} />
						<Text style={__base.bottomMenuText}>Access</Text></View>
					)}
			    </TouchableOpacity>
			</View>
		)
	}

}