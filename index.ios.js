/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict'

 var SearchPage = require('./SearchPage');

 import React, {
   AppRegistry,
   Component,
   StyleSheet,
   Text,
   View
 } from 'react-native';


 var styles = React.StyleSheet.create({
  text:{
    color:'#999',
    backgroundColor:'white',
    fontSize:22,
    margin:80
  },
  container: {
    flex: 1
  }
});

 class PropertyFinder extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

 class HelloWorld extends Component{
  render(){
    return <React.Text style={styles.text}> Hello World! </React.Text>;
  }
}

// class PropertyFinder extends Component {
//   render() {
//     return (
//     <View style={styles.container}>
//     <Text style={styles.welcome}>
//     Welcome to React Native!
//     </Text>
//     <Text style={styles.instructions}>
//     To get started, edit index.ios.js
//     </Text>
//     <Text style={styles.instructions}>
//     Press Cmd+R to reload,{'\n'}
//     Cmd+D or shake for dev menu
//     </Text>
//     </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

React.AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
