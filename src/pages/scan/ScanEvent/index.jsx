//COMPONENTS
import { useState, useEffect } from "react";
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, StyleSheet, Modal, Dimensions, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import  MainButton  from '~/components/MainButton';
import  BackButton  from '~/components/BackButton';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import { getUsers, getLast6HoursClientCount } from "~/data/firebase/firestore/getData";
import Icon from 'react-native-vector-icons/Ionicons';
import UserDetails from '../UserDetails';
import Loading from "~/components/Loading";

//I18N
const { width, height } = Dimensions.get('window');

//ASSETS
import __base from '~/assets/styles/base';
import __scan from '~/assets/styles/pages/scan';

//VIEW
export default function ScanEventScreen({route, navigation}) {
  const [graphData, setGraphData] = useState(false);

  const getStats = () => {
    getLast6HoursClientCount((response)=> {
      setGraphData(response)
    });
  }

  useEffect(() => {
    getUsers((response) => {
      setScanning(true);
      getStats();
      setTimeout(() => {
        setScanning(false);
        setUsers(response);
        setScanText('Scanning...');
      }, 1500);            
    })
  }, []);

  const [event, setEvent] = useState(route.params.event);
  const [userVisible, setUserVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [users, setUsers] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanText, setScanText] = useState('Loading...');

  return (
    !users ? <Loading label={'Loading...'} /> : (
      <View style={[__scan.container, __scan.scanContainer]}>
        <Modal animationType="fade" transparent={true} visible={userVisible} onRequestClose={() => { setUserVisible(!userVisible); }}>
          <View style={__scan.scanHeader}>
            <Text style={__scan.userDetailsHeader}>{ selectedUser.firstName } { selectedUser.lastName }</Text>
            <Text style={__scan.userEventHeader}>{ event.name }</Text>
            <TouchableOpacity onPress={() => setUserVisible(!userVisible)} style={ __scan.closeRight }>
                <Icon name={ 'close-circle-outline' } size={38} color="#FFFFFF"  />
            </TouchableOpacity>
          </View>
          <UserDetails selectedUser={selectedUser} event={event} />
        </Modal>
        <StatusBar hidden={true} />
        <View style={__scan.scanHeader}>
          <TouchableOpacity  onPress={() => navigation.navigate('SelectEvent') } style={__scan.scanHeaderBack}>
            <Icon name={ 'chevron-back-outline' } size={28} color="#FFFFFF"  />
          </TouchableOpacity>
          <Text style={__scan.scanHeaderEvent}>{ event.name }</Text>
          <Text style={__scan.scanHeaderDate}>{moment(event.date.toDate()).format('DD MMMM YYYY') }</Text>
          {/*<View style={__scan.scanHeaderDetails} />*/}
        </View>
        <View style={__scan.scanStats}>
          <ImageBackground source={{uri: event.image}} resizeMode="cover" imageStyle={__scan.scanStatsPosterStyle} style={__scan.scanStatsPoster} />
          <View style={__scan.scanStatsVisits}>
            <View style={__scan.scanStatsVisitsBlock}>
              <Text style={__scan.scanStatsAmount}>{ users.length }</Text>
              <Text style={__scan.scanStatsLabel}>Clients</Text>
            </View>
            <View style={__scan.scanStatsVisitsBlock}>
              <Text style={__scan.scanStatsAmount}>{moment(users[0].created.toDate()).format('HH:mm') }</Text>
              <Text style={__scan.scanStatsLabel}>Last Checkin</Text>
            </View>
          </View>
        </View>
        {
          graphData && (
            <View style={__scan.scanGraph}>
              <View style={__scan.scanGraphUp}>
                {
                  graphData.data.map((value, key) => {
                    let _height = ((100/graphData.highest*value.clients) == 0) ? 5 : (100/graphData.highest*value.clients)
                    return <View key={key} style={[__scan.scanGraphBarYellow, { height: _height+'%' }]} />
                  })
                }
              </View>
              <View style={__scan.scanGraphDown}>
                {
                  graphData.data.map((value, key) => {
                    let _height = ((100/graphData.highest*value.clients) == 0) ? 5 : (100/graphData.highest*value.clients)
                    return <View key={key} style={[__scan.scanGraphBarGrey, { height: _height+'%' }]} />
                  })
                }
              </View>
            </View>
          )
        }
        <View style={__scan.clientWrapper}>
          <Text style={[__base.h1]}>Last clients</Text>
          {
            scanning ? <View style={ __scan.loadingClients }><Loading label={scanText} /></View> : (
              <ScrollView style={ __scan.clientScroll }>
                { users.map((item, key) => {
                  return (
                    <TouchableOpacity key={key} style={__scan.userItem}  onPress={(e) => { setSelectedUser(item); setUserVisible(true); } }>
                      <ImageBackground source={{uri: item.picture.large}} resizeMode="cover" imageStyle={ __scan.userItemAvatarStyle } style={ __scan.userItemAvatar } />
                      <View>
                        <Text style={[__scan.userName]}>{ item.firstName } { item.lastName }</Text>
                        <Text style={[__scan.userScanTime]}>{moment(item.created.toDate()).format('HH:mm') }</Text>
                      </View>
                      <View style={__scan.userIcons}>
                        <Icon name={ (item.gender == 'female') ? 'woman-outline' : 'man-outline' } size={20} color="#FFF"  /> 
                      </View>
                    </TouchableOpacity>
                  )
                })}
                <View style={{height: 500, width: 100+'%'}} />
              </ScrollView>
            )
          }
        </View>
      </View>
    )
  );
}
