
import React, { Component } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Toast } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import Launch from './launch';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import { tryGetLaunches, changeStatus } from '../../actions/home';

import styles from './styles';


class Home extends Component {

  constructor (props) {
    super(props);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  newPage = (index) => {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  onChangeStatus = (launch_id, activeStatus) => {
    this.props.changeStatus({
      launch_id: launch_id,
      active: (activeStatus == 0 ? 1 : 0)
    })
  }

  componentDidMount = () => {
    this.props.tryGetLaunches();
  }

  render() {
    const {launches} = this.props.launches;
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body >
            <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>  
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <ScrollView style={{backgroundColor:"#f0ffe8", padding: 10}}>
          <Content >
            <Button 
              rounded 
              style={{marginTop: 10, marginBottom: 10, marginLeft: 'auto', marginRight: 'auto'}}
              onPress = {()=>Actions.launchEA()}
            >
              <Text>+ Launch More EAs</Text>
            </Button>
            {launches.map((launch, index) => (
              <Launch key={launch.launch_id} launch={launch} onChangeStatus={()=> this.onChangeStatus(launch.launch_id, launch.active)}></Launch>
            ))}
          </Content>
        </ScrollView>
        
      </Container>
    );
  }
}

const bindAction = dispatch => ({
  setIndex: index => dispatch(setIndex(index)),
  openDrawer: () => dispatch(openDrawer()),
  tryGetLaunches: () => dispatch(tryGetLaunches()),
  changeStatus: (payload) => dispatch(changeStatus(payload)),
});

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    launches: state.home,
  }
};

export default connect(mapStateToProps, bindAction)(Home);
