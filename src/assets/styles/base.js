import { StyleSheet } from 'react-native';
import theme from '~/assets/styles/themes/dark.theme.js';
import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    h1: {
        color: theme.FONT_COLOR_H1, fontFamily: theme.FONT_SEMIBOLD, 
        fontSize: theme.FONT_H1, marginBottom : 5
    },
    h2: {
        color: theme.FONT_COLOR_H1, fontFamily: theme.FONT_SEMIBOLD, 
        fontSize: theme.FONT_H2, marginBottom : 10
    },
    text: {
        color: theme.FONT_COLOR_TEXT, fontFamily: theme.FONT_LIGHT, 
        fontSize: theme.FONT_TEXT, lineHeight: 24, marginBottom: 25
    },
    textCenter: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#4F87FF', padding: 13, borderRadius: theme.DEF_RADIUS, 
        width: theme.DEF_WIDTH, maxWidth: 100+'%', textAlign: 'center', 
        marginBottom : theme.MARGIN_BOTTOM,
    },
    buttonText: {
        color: '#FFF', paddingLeft: 5, paddingRight: 5, 
        fontSize: 18, textAlign: 'left'
    },
    buttonSmall: {
        color: '#FFF', paddingLeft: 20, paddingRight: 20, 
        fontSize: 14, textAlign: 'center',
    },
    imageLabels: {
        color: theme.FONT_COLOR_H1, fontFamily: theme.FONT_REGULAR, 
        fontSize: theme.FONT_TEXT-2, textAlign: 'center', lineHeight: 24
    },
    error : {
        color: '#FF6B6B', fontFamily: theme.FONT_REGULAR, 
        fontSize: 14, textAlign: 'left', maxWidth: 100+'%', 
        width: theme.DEF_WIDTH, marginTop: 10 
    },
    defWidth: {
        width: theme.DEF_WIDTH_RESIZE,
        maxWidth: 100+'%',
    },
    listItemEven: {
        backgroundColor: '#EFEFEF'
    },
    inputText : {
        backgroundColor: '#FFF', maxHeight: 400, maxWidth: 100+'%', 
        width: theme.DEF_WIDTH, borderRadius: theme.DEF_RADIUS, padding: 13, 
        marginBottom : theme.MARGIN_BOTTOM, fontSize: 18,
    },
    paginationDots : {
        width: 10, height: 10, borderRadius: 5, marginHorizontal: 0, 
        backgroundColor: '#FFF', top: -20,
    }
});