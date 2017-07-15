
import React, { Component } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Toast, Picker, Item, Input, Card, Fab } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { getConfInfo, launchEA } from '../../actions/launchEA';

import styles from './styles';


class LaunchEA extends Component {

  constructor (props) {
    super(props);

		this.state = {
			server: 0,
			symbol: "",
			timeframe: "",
			EA: "",
			username: "",
			password: ""
		};

		this.onServerChange = this.onServerChange.bind(this);
		this.onSymbolChange = this.onSymbolChange.bind(this);
		this.onTimeframeChange = this.onTimeframeChange.bind(this);
		this.onEAChange = this.onEAChange.bind(this);	
		this.onLaunchEA = this.onLaunchEA.bind(this);	
  }

  componentDidMount = () => {
		this.props.dispatch(getConfInfo());
  }

	componentWillReceiveProps = (nextProps) => {
		const { servers, symbols, timeframes, eas } = nextProps;
		if (servers.length > 0 && symbols.length > 0 && timeframes.length > 0 && eas.length > 0) {
			
			this.setState({
				server : 0,
				symbol: symbols[0].symbol,
				timeframe: timeframes[0].timeframe_name,
				EA: eas[0].ea_name,
				username: servers[0].account.useranme,
				password: servers[0].account.useranme
			});
		}
	}

	onServerChange = (value) => {
		console.log(index);
		this.setState({
			server: value,
			username: this.props.servers[value].account.username,
			password: this.props.servers[value].account.password
		});
	};

	onSymbolChange = (value) => {
		this.setState({
			symbol: value
		});
	}

	onTimeframeChange = (value) => {
		this.setState({
			timeframe: value
		});
	}

	onEAChange = (value) => {
		this.setState({
			EA: value
		});
	}

	onLaunchEA = () => {
		console.log(this.state);
		// const postData = {
		// 	server_name: this.props.servers[this.state.server].server_name,
		// 	login: this.state.useranme,
		// 	password: this.state.password,
		// 	symbol: this.state.symbol,
		// 	timeframe: this.state.timeframe,
		// 	ea: this.state.EA,
		// 	active: 1
		// };

		// this.props.dispatch(launchEA(this.state));
	}



  render() {
		const { servers, symbols, timeframes, eas } = this.props;
    return (
      <Container style={styles.container}>

				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={Actions.pop}>
              <Icon active name="arrow-back" />
            </Button>
					</Left>

          <Body >
            <Title>{(this.props.name) ? this.props.name : 'Launch EA'}</Title>  
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <ScrollView style={{backgroundColor:"#f0ffe8", padding: 10}}>
          <Content >
						<Text style={{marginTop: 20}}>Select a server</Text>
						<Card>
							<Picker
								mode="dropdown"
								headerStyle={{ backgroundColor: "#b95dd3" }}
								headerBackButtonTextStyle={{ color: "#fff" }}
								headerTitleStyle={{ color: "#fff" }}
								selectedValue={this.state.server}
								onValueChange={(value) => this.onServerChange(value)}
							>
							{
								servers.map((server, index) => (
									<Item key={server.server_id} label={server.server_name} value={index}/>
								))
							}
							</Picker>

							<Grid>
								<Col style={{padding: 10}}>
									<Item fixedLabel>
										<Input style={styles.server.input} placeholder='Account ID' value={this.state.username} onChange={(event) => {console.log(event.target.value);this.setState({username: event.target.value})}}/>
									</Item>
								</Col>

								<Col style={{padding: 10}}>
									<Item fixedLabel>
										<Input style={styles.server.input} 
											placeholder='Account Password' 
											value={this.state.password} 
											onChange={(event) => {this.setState({password: event.target.value})}}
										/>
									</Item>
								</Col>	
							</Grid>
							
						</Card>

						<Text style={{marginTop: 20}}>Select your EA</Text>
						<Card style={{padding: 10}}>
							<Grid>
								<Row>
									<Col size={40}>
										<Text style={styles.ea.text}>Symbol</Text>
									</Col>
									<Col size={50}>
										<Picker
											mode="dropdown"
											headerStyle={{ backgroundColor: "#b95dd3" }}
											headerBackButtonTextStyle={{ color: "#fff" }}
											headerTitleStyle={{ color: "#fff" }}
											selectedValue={this.state.symbol}
											onValueChange={(value) => this.onSymbolChange(value)}
										>
										{
											symbols.map((symbol, index) => (
												<Item key={symbol.symbol} label={symbol.symbol} value={symbol.symbol}/>
											))
										}
										</Picker>
									</Col>
									<Col size={10} justifyContent="center" alignItem="center">
									</Col>
								</Row>

								<Row>
									<Col size={40}>
										<Text style={styles.ea.text}>Time Frame</Text>
									</Col>
									<Col size={50}>
										<Picker
											mode="dropdown"
											headerStyle={{ backgroundColor: "#b95dd3" }}
											headerBackButtonTextStyle={{ color: "#fff" }}
											headerTitleStyle={{ color: "#fff" }}
											selectedValue={this.state.timeframe}
											onValueChange={(value) => this.onTimeframeChange(value)}
										>
										{
											timeframes.map((timeframe, index) => (
												<Item key={timeframe.timeframe_name} label={timeframe.timeframe_name} value={timeframe.timeframe_name}/>
											))
										}
										</Picker>
									</Col>
									<Col size={10} justifyContent="center" alignItem="center">

									</Col>
								</Row>

								<Row>
									<Col size={40}>
										<Text style={styles.ea.text}>EA</Text>
									</Col>
									<Col size={50}>
										<Picker
											mode="dropdown"
											headerStyle={{ backgroundColor: "#b95dd3" }}
											headerBackButtonTextStyle={{ color: "#fff" }}
											headerTitleStyle={{ color: "#fff" }}
											selectedValue={this.state.EA}
											onValueChange={(value) => this.onEAChange(value)}
										>
										{
											eas.map((ea, index) => (
												<Item key={ea.ea_name} label={ea.ea_name} value={ea.ea_name}/>
											))
										}
										</Picker>
									</Col>
									<Col size={10} justifyContent="center" alignItem="center">
										<Button small success style={{paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0, borderRadius: 20}}>
											<Icon name="ios-cloud-upload" size={15}/>
										</Button>
									</Col>
								</Row>
							</Grid>							
						</Card>
						<Button primary small style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 30}} onPress={this.onLaunchEA}>
							<Icon name="ios-add"/>
							<Text>LAUNCH EA ON MT4</Text>
						</Button>
          </Content>
        </ScrollView>	
      </Container>
    );
  }
}

const bindAction = dispatch => ({
  dispatch,
	openDrawer: () => dispatch(openDrawer())
});

const mapStateToProps = (state) => state.launchEA;

export default connect(mapStateToProps, bindAction)(LaunchEA);
