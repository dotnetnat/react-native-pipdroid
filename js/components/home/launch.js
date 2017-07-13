import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Card, CardItem, Text, Button, Icon, Left, Body, Right, Spinner, Grid, Col } from 'native-base';
// import { Grid, Row } from 'react-native-easy-grid';
import styles from './styles';
import {api, json} from '../../apis';

class Launch extends Component {
  constructor (props) {
    super(props);
    this.onPressActivate = this.onPressActivate.bind(this);
    this.onPressDeactivate = this.onPressDeactivate.bind(this);
  }

  onPressActivate = () => {
    
  }

  onPressDeactivate = () => {
    
  }

  
  render () {
    const {launch} = this.props;
    console.log(launch);
    return (
      <Card style={styles.launch.card}>
        <View style={{marginBottom: 5}}>
          <Text style={{fontSize:14, color: "#333"}}>Server:  {launch.server_name}</Text>
          <Text style={{fontSize:12, color: "#333"}}>EA: {launch.ea_name},  Symbol: {launch.symbol},  Timeframe: {launch.timeframe}</Text>
        </View >
        <View flexDirection="row" justifyContent="space-between" style={{borderTopWidth: 1, borderTopColor: '#aaa', paddingTop: 5}}>  
          <Text style={{fontSize: 12, color: (!launch.active ? 'green' : 'red')}}>Status:  {!launch.active ? "Active" : "Deactive"}</Text>
          {
            launch.active ? 
            <Button small info style={styles.launch.button}><Text style={styles.launch.buttonText}>Activate</Text></Button> 
            : 
            <Button small info style={styles.launch.button}><Text>Deactivate</Text></Button>
          }
        </View>
      </Card>
    )
  }
}
const bindAction = (dispatch) => ({
  
})
export default connect(null, bindAction)(Launch);