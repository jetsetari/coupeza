import { Dimensions, 
StyleSheet } from 'react-native';
import theme from '~/assets/styles/themes/dark.theme.js';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    //MAIN ELEMENTS
    container: {
        flex: 1, backgroundColor: theme.DEF_BG, alignItems: 'center', 
        justifyContent: 'center',
    },

    //--Select event
    selectEventContainer: {
        paddingTop : 200,
        marginTop: (width > 800) ? 0 : -40,  
    },
    selectEventSlide : {
        width: 260, height: 390, paddingHorizontal: 10, 
        backgroundColor: '#2A1840', borderRadius: 16, 
        alignItems:'flex-end', top: 0
    },
    selectEventSlideImage : {
        resizeMode: 'cover',  borderRadius: 18
    },
    selectEventSlideLabel : {
        color: '#FFFFFF', fontFamily: theme.FONT_REGULAR, 
        fontSize:21, textAlign: 'center', width: 260, 
        marginTop: 35, marginBottom: 0
    },
    selectEventSlideDate: {
        color: '#CCC', fontFamily: theme.FONT_Light, 
        fontSize:16, textAlign: 'center', width: 260, 
        marginTop: 5
    },

    //--GOOD
    scanContainer: {
        justifyContent: 'flex-start'
    },

    scanHeader: {
        width: 100+'%', height: 110, backgroundColor: '#0E1026',
        alignSelf: 'flex-start'
    },
    scanHeaderBack: {
        width: 50, height: 50, borderRadius: 100+'%', backgroundColor: '#26283C',
        position: 'absolute', left: 20, top: 35, paddingVertical: 10, paddingHorizontal: 9
    },
    scanHeaderDetails: {
        width: 50, height: 50, borderRadius: 100+'%', backgroundColor: '#26283C',
        position: 'absolute', right: 20, top: 35
    },
    scanHeader: {
        width: 100+'%', height: 110, backgroundColor: '#0E1026',
        alignSelf: 'flex-start'
    },
    scanHeaderEvent: {
        width: 100+'%', textAlign: 'center', color: '#FFF', fontSize: 18,
        marginTop: 50, fontFamily: theme.FONT_BOLD, marginBottom: 5
    },
    scanHeaderDate: {
        width: 100+'%', textAlign: 'center', color: '#C1C1C1',
        fontFamily: theme.FONT_Light, fontSize: 14
    },
    scanStats: {
        width: 100+'%', justifyContent: 'flex-start', alignSelf: 'flex-start',
        padding: 20, flexDirection: 'row'
    },
    scanStatsPoster: { 
        width: 100,  height: 100, backgroundColor: '#454545', borderRadius: 12,
        marginRight: 20
    },
    scanStatsPosterStyle: {
        borderRadius: 12 
    },
    scanStatsVisits: {
        justifyContent: 'center', flexDirection: 'row'
    },
    scanStatsVisitsBlock: {
        justifyContent: 'center', flexDirection: 'column'
    },
    scanStatsAmount: {
        fontFamily: theme.FONT_BOLD, color: '#FFF', fontSize: 35,
        marginRight: 35
    },
    scanStatsLabel: {
        fontFamily: theme.FONT_LIGHT, color: '#FFF', fontSize: 14,
    },
    scanGraph: {
        width: 100+'%', justifyContent: 'flex-start', alignSelf: 'flex-start',
        padding: 20, flexDirection: 'column'
    },
    scanGraphUp: {
        width: 100+'%', justifyContent: 'flex-start', alignSelf: 'flex-start',
        height: 70, flexDirection: 'row', 
    },
    scanGraphDown: {
        width: 100+'%', justifyContent: 'flex-start', alignSelf: 'flex-start',
        height: 70, flexDirection: 'row', 
    },
    scanGraphBarYellow: {
       flex: 1, backgroundColor: '#FFBF06', marginRight: 1, marginLeft: 1,
       alignSelf: 'flex-end'
    },
    scanGraphBarGrey: {
       flex: 1, backgroundColor: '#0E1026', marginRight: 1, marginLeft: 1,
       alignSelf: 'flex-start'
    },
    clientWrapper: {
        width: 100+'%', justifyContent: 'flex-start', alignSelf: 'flex-start',
        flexDirection: 'column', paddingHorizontal: 20, marginTop: 30
    },
    clientScroll: {
        width: 100+'%', marginTop: 5
    },
    userItem: {
        width: 100+'%', borderRadius: 12, backgroundColor: '#0E1026', marginBottom: 5,
        flexDirection: 'row', padding: 5, alignItems: 'center'
    },
    userItemAvatar: {
        width: 60, height: 60, marginRight: 10
    },
    userItemAvatarStyle: {
        borderRadius: 6
    },
    userName: {
        color: '#FFF', fontSize: 16,
        fontFamily: theme.FONT_BOLD, marginBottom: 2
    },
    userScanTime: {
        color: '#FFF', fontSize: 12, fontFamily: theme.FONT_LIGHT
    },
    userIcons: {
        marginLeft: 'auto', width: 100, height: 60, marginRight: 10,
        alignItems: 'flex-end', justifyContent: 'center'
    },
    loadingClients: {
        marginTop: 150
    },


    //---User Details
    closeRight: {
        width: 50, height: 50, borderRadius: 100+'%', backgroundColor: '#26283C',
        position: 'absolute', right: 20, top: 35, padding: 5, paddingHorizontal: 7
    },
    userDetailsWrapper: {
        flex: 1, backgroundColor: '#01020D', padding: 25
    },
    userDetailsHeader: {
        width: 100+'%', textAlign: 'left', color: '#FFF', fontSize: 18,
        marginTop: 50, fontFamily: theme.FONT_BOLD, marginBottom: 5, paddingLeft: 25
    },
    userEventHeader: {
        width: 100+'%', textAlign: 'left', color: '#C1C1C1',
        fontFamily: theme.FONT_Light, fontSize: 14, paddingLeft: 25
    },
    previewProfile: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 30
    },
    profileImage : { 
        width: 120, height: 120, marginRight: 20, backgroundColor: '#454545',
        borderRadius: 18
    },
    imageStyle: {
        borderRadius: 12
    },
    previewProfileFirst: {
        fontFamily: theme.FONT_BOLD, color: '#FFF', fontSize: 28,
        marginBottom: 3
    },
    previewProfileLast: {
        fontFamily: theme.FONT_LIGHT, color: '#FFF', fontSize: 18,
    },
    userDetailsRow: {
        marginBottom: 30
    },
    userRowSplit: {
        flexDirection: 'row', width: 100+'%', flex: 1
    },
    rowSpace: {
        width: 5
    },
    userRow: {
        padding: 15, borderRadius: 12, backgroundColor: '#0E1026',
        flexDirection: 'row', marginBottom: 5, flex: 1, alignItems: 'center'
    },
    rowTitle: {
        fontFamily: theme.FONT_BOLD, color: '#FFF', fontSize: 16,
        width: 100
    },
    rowDetail: {
        fontFamily: theme.FONT_LIGHT, color: '#FFF', fontSize: 16,
    },
    imageFlag: {
        width: 30, height: 20
    },
    logLine: {
        flexDirection: 'row', marginBottom: 5, flex: 1, alignItems: 'center'
    },
 });