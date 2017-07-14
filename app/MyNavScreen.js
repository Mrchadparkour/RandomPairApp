import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text } from 'react-native';

export default class MyNavScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    return(
      <ScrollView>
        <Text>{this.props.banner}</Text>
        <Button
          onPress={() => navigate('DrawerOpen')}
          title="Open drawer"
        />
        <Button onPress={() => goBack(null)} title="Go back" />
      </ScrollView>
    );
  }
}