import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import styles from './styles';

class Launch extends Component {
  render () {
    const {launch} = this.props;
    console.log(launch);
    return (
      <Card style={styles.launch.card}>
        <CardItem style={styles.launch.cardItem}>
          <Body>
            <Text style={{fontSize:14}}>Server: {launch.server_name}</Text>
            <Text>Symbol: {launch.symbol},  Timeframe: {launch.timeframe}</Text>
          </Body>
        </CardItem>
        <CardItem footer style={styles.launch.cardItemFooter}></CardItem>
      </Card>
    )
  }
}
const bindAction = (dispatch) => ({
  
})
export default connect(null, bindAction)(Launch);