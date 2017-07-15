
const React = require('react-native');

const { StyleSheet } = React;
export default {
  container: {
    backgroundColor: '#FBFAFA',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#23aae1',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 18,
  },
  launch: {
    card: {
      borderRadius: 4,
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10
    },
    cardItem: {
      padding: 0,
      paddingRight: 0,
      borderRadius: 4
    },
    cardItemFooter: {
      borderRadius: 4
    },
    cardItemText: {

    },
    button: {
      height: 20,
      paddingTop: 0,
      paddingBottom: 4,
      paddingLeft: 4,
      paddingRight: 4
    },
    buttonText: {
      fontSize: 12
    }
  }
};
