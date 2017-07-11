import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';
import {auth, db} from '../config/fireConfig';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Sign Up & Login!',
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: ''
    };
  }
  allowedPassage() {
    const { navigate } = this.props.navigation;
    const username = this.state.username + '@dercherdnoodle.com';
    auth.createUserWithEmailAndPassword(username, this.state.pass).then(() => navigate({'PairGenerator'})).catch(err =>{
      navigate({'home', {ohSnap: err}})
    });


  }


  render() {
    const { params } = this.props.navigation.state;
    return(
      <View>
        <TextInput
        placeholder='Enter Username'
        autoCorrect={false}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
        />
        <TextInput
        placeholder='Enter Password'
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(pass) => this.setState({pass})}
        value={this.state.pass}
        />
        <Button onPress={() => this.allowedPassage()}
        title="Nice to Meetcha!" />
        <Text>{params.ohSnap}</Text>
      </View>
    );
  }
}
