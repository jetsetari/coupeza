import { StyleSheet } from 'react-native';
import theme from '~/assets/styles/themes/dark.theme.js';

// const itemWidth = Dimensions.get('window').width-350;
// const itemHeight = Dimensions.get('window').height-350;
// const itemHalf = (itemWidth/2)-60;

export default StyleSheet.create({
    code_container: { 
        flexDirection: "row", 
        width: "100%", 
        justifyContent: "center", 
        marginBottom: 30, 
        marginTop: 20 
    },
    bullet: { 
        borderWidth: 1, 
        borderColor: "#272E3A", 
        borderRadius: 20, 
        backgroundColor: "#272E3A",
        height: 20, 
        width: 20, 
        marginLeft: 8, 
        marginRight: 8 
    },
    seperator: { 
        marginLeft: 5, 
        marginRight: 5, 
        margin: 0 
    },
    seperatorText: { 
        color: "#ACC63C", 
        fontSize: 25, 
        marginTop: -7 
    },
    activeBullet: { 
        borderWidth: 1, 
        borderColor: "#FFFFFF", 
        borderRadius: 20, 
        height: 20, 
        width: 20, 
        marginLeft: 8, 
        marginRight: 8, 
        backgroundColor: "#FFFFFF" 
    }
 });
