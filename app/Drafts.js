import React from 'react';
import { Text, View } from 'react-native';
import MyNavScreen from './MyNavScreen';


export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <View>
        <MyNavScreen banner={'Drafts'} navigation={this.props.navigation}/>
      </View>
    );
  }
}
