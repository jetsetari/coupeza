import { StyleSheet, Dimensions } from 'react-native';
import theme from '~/assets/styles/themes/dark.theme.js';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    //--Back Button
    backButton: {
        position: 'absolute', 
        top: (width > 800) ? 40 : 50, 
        left: (width > 800) ? 40 : 20, 
        zIndex: 555555
    },
    backButtonImage: {
    	width: 12, 
    	height: 28
    },
    backButtonText: {
        display: (width > 800) ? 'flex' : 'none', 
    	color: '#FFF', 
    	position: 'absolute', 
    	left: 25, 
    	width: 400, 
    	top: 6, 
    	fontSize: 18 
    }
});