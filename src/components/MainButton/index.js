//COMPONENTS
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


//ASSETS
import __base from '~/assets/styles/base';
import __setup from '~/assets/styles/pages/setup';

//VIEW
export default class MainButton extends Component {
	static propTypes = {
		children: PropTypes.string.isRequired
	}
	render = () => {
		const { children } = this.props;
		const text_style = (this.props.align == 'left') ? [__base.buttonText, { textAlign: 'left' }] : [__base.buttonText];
		const button_style = (this.props.size == 'big') ? [__base.button, __base.defWidth] : [__base.button];

		return (
			<TouchableOpacity style={button_style} {...this.props}>
				<Text style={text_style}>{children}</Text>
			</TouchableOpacity>
		)
	}
}