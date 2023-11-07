import { useState, useEffect } from "react";
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, StyleSheet, Modal, Dimensions, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import __base from '~/assets/styles/base';
import __scan from '~/assets/styles/pages/scan';

import Id from '~/components/Id';

export default function UserDetails({selectedUser, event, view = 'full' }) {
  const today = moment();


  return (
    <ScrollView style={ __scan.userDetailsWrapper }>
      <View style={__scan.previewProfile}>
        <ImageBackground source={{uri: selectedUser?.picture?.large}} resizeMode="cover" imageStyle={__scan.imageStyle} style={__scan.profileImage} />
        <View>
          <Text style={[__scan.previewProfileFirst]}>{selectedUser?.firstName}</Text>
          <Text style={[__scan.previewProfileLast]}>{selectedUser?.lastName}  { selectedUser.dob ? '('+today.diff(selectedUser.dob, 'years')+')': '' }</Text>
        </View>
      </View>
      <View style={__scan.userDetailsRow}>
        <Text style={[__base.h2]}>Details</Text>
        <View style={__scan.userRowSplit}>
          <View style={__scan.userRow}>
            <Text style={__scan.rowTitle}>Gender</Text>
            <Text style={__scan.rowDetail}>{ selectedUser.gender }</Text>
          </View>
          <View style={__scan.rowSpace} />
          <View style={__scan.userRow}>
            <Text style={__scan.rowTitle}>Country</Text>
            <ImageBackground source={{ uri: 'https://flagpedia.net/data/flags/h80/'+selectedUser.countryCode.toLowerCase()+'.webp' }} resizeMode="cover" style={__scan.imageFlag} />
          </View>
        </View>
        <View style={__scan.userRow}>
          <Text style={__scan.rowTitle}>Location</Text>
          <Text style={__scan.rowDetail}>{ selectedUser.location.city }, { selectedUser.location.postcode } { selectedUser.location.state }</Text>
        </View>
        <View style={__scan.userRow}>
          <Text style={__scan.rowTitle}>Date of Birth</Text>
          <Text style={__scan.rowDetail}>{ moment(selectedUser.dob).format('DD MMMM YYYY') }</Text>
        </View>
        { selectedUser.email && (
          <View style={__scan.userRow}>
            <Text style={__scan.rowTitle}>Email</Text>
            <Text style={__scan.rowDetail}>{ selectedUser.email }</Text>
          </View>
        )}
      </View>
      <View style={__scan.userDetailsRow}>
        <Text style={[__base.h2]}>ID</Text>
        <Id data={selectedUser} />
      </View>
      <View style={__scan.userDetailsRow}>
        <Text style={[__base.h2]}>Logs</Text>
        <View style={ __scan.logLine }>
          <Text style={[__scan.rowTitle]}>{moment(selectedUser.created.toDate()).format('DD/MM  HH:mm') }</Text>
          <Text style={__scan.rowDetail}>User created - First Entree</Text>
        </View>
      </View>
    </ScrollView>
  )
}