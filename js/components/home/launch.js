import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardItem, Text, Button, Icon, Left, Body, Right, Spinner, Grid, Col } from 'native-base';
import styles from './styles';

class Launch extends Component {
  render () {
    const {launch} = this.props;
    console.log("--------------launches----------");
    console.log(launch);
    return (
      <Card style={styles.launch.card}>

        {/*BODY*/}
        <View style={{marginBottom: 5}}>
          <Text style={{fontSize:14, color: "#333"}}>
            Server:  {launch.server_name}
          </Text>

          <Text style={{fontSize:12, color: "#333"}}>
            EA: {launch.ea_name},  Symbol: {launch.symbol},  Timeframe: {launch.timeframe}
          </Text>
        </View >
        
        {/*FOOTER*/}
        <View flexDirection="row" justifyContent="space-between" style={{borderTopWidth: 1, borderTopColor: '#aaa', paddingTop: 5}}>  
          <Text style={{fontSize: 12, color: (launch.active == 1 ? 'green' : 'red')}}>
            Status:  {launch.active == 1 ? "Active" : "Deactive"}
          </Text>

          {
            launch.active == 0 ? 
            <Button small info style={styles.launch.button} onPress={()=>this.props.onChangeStatus()}>
              <Text style={ styles.launch.buttonText }>
                Activate
              </Text>
            </Button> 
            : 
            <Button small warning style={styles.launch.button} onPress={()=>this.props.onChangeStatus()}>
              <Text style={ styles.launch.buttonText }>
                Deactivate
              </Text>
            </Button>
          }

        </View>
      </Card>
    )
  }
}

export default Launch;