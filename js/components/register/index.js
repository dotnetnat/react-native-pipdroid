
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Label, Button, Title, Icon, View, Text, Header, Left, Right, Body, Toast, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { setUser } from '../../actions/user';
import { tryLogin } from '../../actions/login';

import styles from './styles';

const background = require('../../../images/shadow.png');

class Register extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister = () => {
    if (this.state.password != this.state.confirmPassword) {
      Toast.show({
        text: 'Confirm password should be equal to password',
        type: 'warning',
        postion: 'bottom',
        duration: 3000
      });
    } else {
      const userinfo = {
        name: this.state.name,
        email: this.state.email,
        username: this.state.username, 
        password: this.state.password,
      };
    }
    // this.props.tryRegister(userinfo);
  }

  render() {
    const {isAttemptingRegister, msg, isRegistered} = this.props;
    return (
      <Container>
        <View style={styles.container}>
        
          <Header>
            <Body style={styles.header}>
              <Title>Register</Title>
            </Body>
          </Header>

          <Content>
              <View style={styles.bg}>
                <Item floatingLabel style={styles.input}>
                  {/*<Icon active name="person" fontSize={10}/>*/}
                  <Label>FULLNAME</Label>
                  <Input onChangeText={name => this.setState({ name })} />
                </Item>
                <Item floatingLabel style={styles.input}>
                  {/*<Icon active name="person" fontSize={10}/>*/}
                  <Label>EMAIL</Label>
                  <Input onChangeText={email => this.setState({ email })} />
                </Item>
                <Item floatingLabel style={styles.input}>
                  {/*<Icon active name="person" fontSize={10}/>*/}
                  <Label>USERNAME</Label>
                  <Input onChangeText={username => this.setState({ username })} />
                </Item>
                <Item floatingLabel style={styles.input}>
                  {/*<Icon name="unlock" fontSize={10}/>*/}
                  <Label>PASSWORD</Label>
                  <Input secureTextEntr onChangeText={password => this.setState({ password })}/>
                </Item>
                <Item floatingLabel style={styles.input}>
                  {/*<Icon name="unlock" fontSize={10}/>*/}
                  <Label>CONFIRM PASSWORD</Label>
                  <Input secureTextEntr onChangeText={confirmPassword => this.setState({ confirmPassword })}/>
                </Item>
                <Button rounded block style={styles.btn} onPress={() => {this.handleRegister();}}>
                  <Text>Register</Text>
                </Button>
                <Text style={styles.login}>
                  Already have an account. <Text style={styles.loginLink} onPress={() => {Actions.login();}}>Back To Login</Text>
                </Text>
                {isAttemptingRegister && <Spinner color='green'/>}
              </View>
          </Content>

        </View>
      </Container>
    );
  }
}

const bindActions = (dispatch) => {
  return {
    setUser: name => dispatch(setUser(name)),
    tryLogin : userinfo => dispatch(tryLogin(userinfo))
  };
}

const mapsStateToProps = (state) => {
  return state.register || {};
  // return state.register;
};

export default connect(mapsStateToProps, bindActions)(Register);
