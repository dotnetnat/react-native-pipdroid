
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import { tryLogout } from '../../actions/home';

import styles from './style';

class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  componentWillReceiveProps = (newProps) => {
    console.log("-----------------receive props--------------");
  }

  render() {
    console.log("-------------------render------------------");
    return (
      <Content style={styles.sidebar} >
        <Image source={require('../../../images/logo.png')} style={styles.logo}/>
        <ListItem button onPress={() => { Actions.home(); this.props.closeDrawer();}} >
          <Text>Home</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.blankPage(); this.props.closeDrawer(); }} >
          <Text>Launch EA</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.blankPage(); this.props.closeDrawer(); }} >
          <Text>Profile</Text>
        </ListItem>
        <ListItem button onPress={() => { this.props.logout(); this.props.closeDrawer(); }} >
          <Text>Log Out</Text>
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    logout: () => dispatch(tryLogout()),
    closeDrawer: () => dispatch(closeDrawer()),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(SideBar);
