import React from 'react';
import { Text, View, TextInput } from 'react-native';
import MyNavScreen from './MyNavScreen';
import axios from 'axios';
import DropdownText from './DropdownText';

export default class BrewerySearch extends React.Component {
  constructor() {
    super();

    this.state={
      searchValue: '',
      showErr: ''
    };
  }
  // onChange(val){
  //   this.setState({searchValue: val});
  //   axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+ val +'&types=geocode&language=en&key=AIzaSyAVcxtAqyP326_Tko9j23Aqv8VIQREELcI').then(res => {
  //     res.data.predictions.map(obj => console.log(obj));
  //   }).catch(err => this.setState({showErr: 'something is wrong'}));
  // }

  render() {
    console.log('lol');
    return(
      <View>
      <Text>{this.state.showErr}</Text>
        <DropdownText />
        <MyNavScreen navigation={this.props.navigation}/>
      </View>
    );
  }
}
