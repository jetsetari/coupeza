//COMPONENTS
import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';


//ASSETS
import __base from '~/assets/styles/base';
import __components from '~/assets/styles/components';

//VIEW
export default class BackButton extends Component {

	static propTypes = {
		children: PropTypes.string.isRequired
	}
	render = () => {
		const { children } = this.props;
		return (
			<TouchableOpacity {...this.props} style={[ __components.backButton ]}>
				<Image style={[ __components.backButtonImage ]} source={require('~/assets/images/_layout/btn_back.png')} />
				<Text style={[ __components.backButtonText ]}>{ children }</Text>
			</TouchableOpacity>
		)
	}

}