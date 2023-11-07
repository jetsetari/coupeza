//COMPONENTS
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import style from './CodeBullets-styles';


export default class CodeBullets extends Component {
  render = () => {
    return (
      <View style={style.code_container}>
        <View style={this.props.codeNumber.length >= 1 ? style.activeBullet : style.bullet}></View>
        <View style={this.props.codeNumber.length >= 2 ? style.activeBullet : style.bullet}></View>
        <View style={this.props.codeNumber.length >= 3 ? style.activeBullet : style.bullet}></View>
        <View style={this.props.codeNumber.length >= 4 ? style.activeBullet : style.bullet}></View>
        {this.props.seperator && (
          <View style={style.seperator}>
            <Text style={style.seperatorText}>-</Text>
          </View>
        )}
        <View style={this.props.codeNumber.length >= 5 ? style.activeBullet : style.bullet}></View>
        <View style={this.props.codeNumber.length >= 6 ? style.activeBullet : style.bullet}></View>
        <View style={this.props.codeNumber.length >= 7 ? style.activeBullet : style.bullet}></View>
        <View style={this.props.codeNumber.length >= 8 ? style.activeBullet : style.bullet}></View>
        {!this.props.seperator && <View style={this.props.codeNumber.length >= 9 ? style.activeBullet : style.bullet}></View>}
      </View>
    );
  };
}

