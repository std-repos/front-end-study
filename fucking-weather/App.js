import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Weather from "./Weather";

export default class App extends Component {
  state = {
    isLoaded: true
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        { isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
          </View>
        )}
      </View>
    );
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'space-between',
    alignItems :'stretch',
    flexDirection: 'row',
    flexWrap:'wrap'/**/
  },
  loading: {
    flex:1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft:25
  },
  loadingText:{
    fontSize:38,
    marginBottom: 100,

  }
});

/* https://snack.expo.io/ByIiMayXr https://snack.expo.io/@namheekim/supportive-salsa https://github.com/f21Namhee/front-end-study.git */