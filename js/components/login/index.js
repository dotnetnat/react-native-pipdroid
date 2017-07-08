
import React, { Component } from 'react';
import { Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Label, Button, Title, Icon, View, Text, Header, Left, Right, Body, Toast, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

import theme from '../../themes/base-theme';
import styles from './styles';

import { setUser } from '../../actions/user';
import { tryLogin } from '../../actions/login';

const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {
    const {msg, isLoggedIn} = nextProps;

    if (!isLoggedIn && msg) {
      Toast.show({
        text: msg,
        position: 'bottom',
        duration: 3000,
        type: 'danger'
      });
    }  
  }
  
  componentDidMount = () => {
    console.log("-------------did mount-------------");
  }

  setUser = (name) => {
    this.props.setUser(name);
  }

  handleLogin = () => {
    const userinfo = {username: this.state.username, password: this.state.password};
    if (!userinfo.username && !userinfo.password) {
      Toast.show({
        text: "Please input correct username and password",
        position: 'bottom',
        duration: 3000,
        type: 'warning'
      });
      return;
    }

    this.props.tryLogin(userinfo);
  }

  render() {  
    const {isAttempting, msg, isLoggedIn} = this.props;
    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
        return;
      }
      if (token) {
        console.log(token);
        Actions.pop();
        Actions.home();
      }
    });
    return (
      <Container>
        <View style={styles.container}>
          <Content>
              <View style={styles.bg}>
                <Image source={require('../../../images/logo.png')} style={styles.logo}/>
                <Item floatingLabel style={styles.input}>
                  <Icon active name="person" fontSize={10}/>
                  <Label>USERNAME</Label>
                  <Input onChangeText={username => this.setState({ username })} />
                </Item>
                <Item floatingLabel style={styles.input}>
                  <Icon name="unlock" fontSize={10}/>
                  <Label>PASSWORD</Label>
                  <Input secureTextEntr onChangeText={password => this.setState({ password })}/>
                </Item>
                <Button rounded block style={{ backgroundColor: theme.btnPrimaryBg}} onPress={()=>{this.handleLogin();}}>
                  <Text>Login</Text>
                </Button>
                {<Text style={styles.register}>
                  Don't you have an account? <Text style={styles.registerLink} onPress={()=>{Actions.register();}}>Register here</Text>
                </Text>}
                {isAttempting && <Spinner color='green'/>}
              </View>
          </Content>

        </View>
      </Container>
    );
  }
}

const bindActions = (dispatch) => ({
  setUser: name => dispatch(setUser(name)),
  tryLogin : userinfo => dispatch(tryLogin(userinfo)),
});

const mapsStateToProps = (state) => (state.login);

export default connect(mapsStateToProps, bindActions)(Login);
