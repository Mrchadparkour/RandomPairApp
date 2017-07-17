import React from 'react';
import {TextInput, ScrollView, View, Text} from 'react-native';
import axios from 'axios';

export default class DropdownText extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      resArray: []
    };
  }

  onChange(val){
    let newArray = []
    axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+ val +'&types=(regions)&language=en&key=AIzaSyAVcxtAqyP326_Tko9j23Aqv8VIQREELcI').then(res => {
      res.data.predictions.map(obj => newArray.push(obj.structured_formatting.main_text));
      this.setState({resArray: newArray});
    }).catch(err => this.setState({showErr: 'something is wrong'}));
      this.setState({searchValue: val});
  }

  render() {
    return(
      <View>
        <TextInput
          placeholder="Search by City or State"
          onChangeText={val => this.onChange(val)}
          value={this.state.searchValue}
          returnKeyType="search"
        />
        <ScrollView>
          {this.state.resArray.map(el => <Text key={el}>{el}</Text>)}
        </ScrollView>
      </View>
    );
  }
}
