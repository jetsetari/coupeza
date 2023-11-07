import { StyleSheet } from 'react-native';
import theme from '~/assets/styles/themes/dark.theme.js';
import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    //MAIN ELEMENTS
    container: {
        fontFamily: theme.FONT_LIGHT, flex: 1, backgroundColor: theme.DEF_BG, 
        alignItems: 'center', justifyContent: 'center', color: '#FFF', padding: 10 
    },
    containerSplit: {
        display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'stretch',
    },
    containerSplitContent: {
        flex: 1, height: '100%',  backgroundColor: theme.DEF_BG, alignItems: 'flex-start', 
        justifyContent: 'center', padding: 80, textAlign: 'center'
    },
    alignCenter : {
        justifyContent: 'center', alignItems: 'center', flex: 1
    },
    textCenter : {
        textAlign: 'center'
    },

    //--Select Language
    selectLanguageFlag: {
        borderRadius: theme.DEF_RADIUS, width: (width > 800) ? 230 : 110, 
        height: (width > 800) ? 135 : 75, margin: (width > 800) ? 10 : 5, 
    },
    selectLanguageFlagImage: {
        resizeMode: 'cover',  borderRadius: theme.DEF_RADIUS,  
        borderColor: '#000',  borderWidth: 1
    },

    //--Checwifi
    wifi : {
        flexDirection: 'row',
    },
    wifiStatus : {
        width: 12, height: 12, borderRadius: 100, backgroundColor: '#01BB8F', 
        marginRight: 10, marginTop: 4
    },
    wifiText : {
        color: '#01BB8F', fontFamily: theme.FONT_MEDIUM, fontSize: 20
    },

    //--Link Device
    LinkDevice: {
        width: 553, height: 329, margin: 10, marginTop: -30
    },
    LinkDeviceImage: {
        resizeMode: 'cover', 
    },
    codeFill: {
        width: 110, display: 'flex', flexDirection: "row", 
        justifyContent: "center", marginBottom: 30
    },
    codeFillEmpty: {
        width: 15, height: 15, borderWidth: 1, borderColor: "#FFF", 
        marginRight: 5, marginLeft: 5,
        borderRadius: 100+'%'
    },
    codeFillFilled: {
        width: 15, height: 15, borderWidth: 1, borderColor: "#FFF", 
        marginRight: 5, marginLeft: 5, backgroundColor: "#FFF",
        borderRadius: 100+'%'
    },
    codeWrapper: { 
        width: (width > 800) ? 230 : 110,
    },
    codeRow: { 
        flexDirection: "row",  width: "100%",  justifyContent: "center"
    },
    codeColDel: { 
        backgroundColor: "#070a0f", margin: 7, height: 80, width: 80,  
        borderRadius: 80, display: "flex", justifyContent: "center", 
        alignItems: "center"
    },
    codeCol: { 
        backgroundColor: "#272E3A", margin: 7, height: 80, width: 80, 
        borderRadius: 80 , display: "flex", justifyContent: "center", 
        alignItems: "center",
    },
    codeColIcon: { 
        marginLeft: -5
    },
    codeColHidden: { 
        backgroundColor: "transparent", margin: 7, height: 80, width: 80, 
        borderRadius: 80 , display: "flex", justifyContent: "center", 
        alignItems: "center"
    },
    codeTxt: { 
        color: "#FFFFFF", fontSize: 28, fontFamily: theme.FONT_MEDIUM,
        textAlign: "center", marginTop: -2
    },
    codeError: {
        width: 100+'%', textAlign: 'center', position: 'absolute', bottom: 40,
        fontFamily: theme.FONT_SEMIBOLD,
    },

    //--Name Device
    containerNameDevice: {
        fontFamily: theme.FONT_LIGHT, flex: 1, alignItems: 'center', 
        justifyContent: 'center', color: '#FFF', padding: 10 
    },

    //--Create event
    hideWhenMobile: {
        display: (width > 800) ? 'flex' : 'none',
    },
    datePicker: {
        backgroundColor: '#FFF', borderRadius:6, paddingTop: 6, height: 45, 
        width: 130, marginLeft: 10, marginBottom: 10, alignItems: 'flex-start'
    },

    inputTextWithDatePicker: {
        width: (width > 800) ? (width/2)-295-130 : (width)-130-30
    },
    wrapperDate: {
        flexDirection: 'row'
    },
    
    coverImage: {
        width: (width/2)-250, height: (width/2)-50, justifyContent: 'center', 
        alignItems: 'center', backgroundColor: '#07091e', borderRadius: 36, overflow: 'hidden'
    },
    uploadCoverMobileWrapper: {
        flexDirection: 'row', alignItems: 'center', marginBottom : theme.MARGIN_BOTTOM,
    },
    uploadCoverMobilePreview: {
        width: 45, height: 45, backgroundColor: '#222', marginRight: 10, 
        borderRadius: theme.DEF_RADIUS, overflow: 'hidden'
    },
    uploadCoverMobileButton: {
        backgroundColor: '#333', padding: 13, borderRadius: theme.DEF_RADIUS, 
        maxWidth: 100+'%', textAlign: 'center'
    },
    uploadCoverMobileText: {
        color: '#FFF', paddingLeft: 5, paddingRight: 5, fontSize: 18, 
        textAlign: 'left'
    },
    uploadingText: {
        color: '#ffcb2b', fontFamily: theme.FONT_MEDIUM, fontSize: 16, 
        marginBottom: 0, marginLeft: 15
    },
    coverText: {
        color: '#555769', fontFamily: theme.FONT_MEDIUM, marginTop: 10, 
        fontSize: 22
    },
    leftImageBg: {
        resizeMode: 'cover', borderColor: '#000', alignSelf: "flex-end",
    },
    digitsScreen: {
        fontFamily: theme.FONT_DIGITS, color: '#FFFFFF', fontSize: 26, position: 'absolute', 
        left: 220, top: 325, opacity: 0.6, width: 190, textAlign: 'center',  
        transform: [{ skewY: "5deg"}, {rotateZ: "3deg"}]
    },

    //--Create Event
    eventName: {
        color: '#FFF', fontFamily: theme.FONT_REGULAR, fontSize: 28, 
        marginTop: 20,  marginBottom: 10
    },
    eventDate: {
        color: theme.FONT_COLOR_TEXT, fontFamily: theme.FONT_REGULAR, 
        fontSize: theme.FONT_TEXT, lineHeight: 28,
    },
});