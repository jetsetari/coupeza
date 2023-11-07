//COMPONENTS
import { useState, useEffect } from "react";
import { Text, View, StatusBar, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getEvents } from "~/data/firebase/firestore/getData";
import Loading from "~/components/Loading";
import moment from 'moment';

//ASSETS
import __base from '~/assets/styles/base';
import __scan from '~/assets/styles/pages/scan';

//DATA
const sliderWidth = Dimensions.get('window').width;

//VIEW
export default function SelectEventScreen({navigation}) {
    const [entries, setEntries] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        getEvents((response) => {
            setEntries(response);
        })
    }, []);

    const _renderItem = ({ item, index }) => {
        return (
            <View>
              <TouchableOpacity  activeOpacity={1} onPress={() => navigation.navigate('ScanEvent', {event: item})}>
                <ImageBackground style={__scan.selectEventSlide} source={{uri: item.image}} imageStyle={__scan.selectEventSlideImage} ></ImageBackground>
                    <Text style={__scan.selectEventSlideLabel}>{ item.name }</Text>
                    <Text style={[__scan.selectEventSlideDate]}>{moment(item.date.toDate()).format('DD MMMM YYYY') }</Text>
              </TouchableOpacity>
            </View>
        );
    }

    return (
        !entries ? <Loading /> : (
            <View style = {[__scan.container, __scan.selectEventContainer]} > 
                <StatusBar hidden={true} />
                <Text style={[__base.h1]}>Select event</Text>
                <Text style={[__base.text]}>Select the event and start to scan.</Text>
                <Carousel
                    data={entries}
                    renderItem={_renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={280}
                    removeClippedSubviews={false}
                    onSnapToItem={(index) => setActiveSlide(index) }
                />
                <Pagination 
                    dotsLength={entries.length} 
                    activeDotIndex={activeSlide} 
                    dotStyle={__base.paginationDots} 
                    inactiveDotOpacity={0.4} 
                    inactiveDotScale={0.7} 
                />
            </View>
        )
    );

}
