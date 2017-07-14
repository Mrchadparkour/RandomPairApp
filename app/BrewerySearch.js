import React from 'react';
import { Text, View } from 'react-native';


export default class BrewerySearch extends React.Component {
  constructor() {
    super(props);

    this.state ={
      test: "Hello World"
    };
  }

  render() {
    return(
      <Text>{this.state.test}</Text>
    );
  }
}
