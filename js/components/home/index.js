
import React, { Component } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Toast } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import Launch from './launch';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import { tryGetLaunches } from '../../actions/home';

import styles from './styles';


class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  newPage = (index) => {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  componentDidMount = () => {
    this.props.tryGetLaunches();
  }

  render() {
    const {launches} = this.props.launches;
    console.log (launches);
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
          {/*<Grid style={styles.mt}>
            {this.props.list.map((item, i) =>
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.newPage(i)}
                >
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Row>
            )}
          </Grid>*/}
          
          {launches.map((launch, index) => (
            <Launch key={launch.launch_id} launch={launch} onChangeStatus={()=> this.props.tryGetLaunches}></Launch>
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
});

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.user.name,
    launches: state.home,
  }
};

export default connect(mapStateToProps, bindAction)(Home);
