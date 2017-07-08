
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
  },
  header: {
    alignItems: 'center'
  },
  logo: {
    width: 170,
    height: 170,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
    shadowColor: '#23aae1',
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#23aae1',
  },
  register: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  registerLink: {
    marginTop: 20,
    fontSize: 12,
    color: 'green',
  }
};
