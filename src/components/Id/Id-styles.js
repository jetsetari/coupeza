import { StyleSheet } from 'react-native';
import theme from '~/assets/styles/themes/dark.theme.js';


export default StyleSheet.create({
    profileImage: {
        width: 580/2, height: 373/2
    },
    country: {
        fontFamily: theme.FONT_BOLD, color: '#5A6259',
        position: 'absolute', right: 23, fontSize: 20,
        top: 13
    },
    firstName: {
        fontFamily: theme.FONT_BOLD, color: '#5A6259',
        position: 'absolute', left: 95, fontSize: 20,
        top: 65
    },
    lastName: {
        fontFamily: theme.FONT_LIGHT, color: '#FFF',
        position: 'absolute', left: 95, fontSize: 16,
        top: 85
    },
    dob: {
        fontFamily: theme.FONT_BOLD, color: '#5A6259',
        position: 'absolute', right: 25, fontSize: 16,
        top: 62
    },
    gender: {
        fontFamily: theme.FONT_BOLD, color: '#000',
        position: 'absolute', right: 20, fontSize: 16,
        top: 95
    },
    avatar: {
        width: 60, height: 60, borderRadius: 100+'%',
        position: 'absolute', bottom: 10, right: 20
    },
    avatarStyle: {
        borderRadius: 100+'%'
    },
    stamp: {
        width: 30, height: 30, position: 'absolute',
        bottom: 10, right: 10, zIndex: 5555
    }
 });
