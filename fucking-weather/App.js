import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import Weather from "./Weather";

export default class App extends Component {
  state = {
    isLoaded: false,
    error:null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          error: 'Somthing went wrong'
        })
      },
      error => {
        this.setState({
          error:error
        })
      }
    );
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  errorText : {
    color: "red",
    backgroundColor:"transparent"
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