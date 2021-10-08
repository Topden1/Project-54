import React, {Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {
  displayAlert() {
    alert('I am an alert box');
  }
  render(){ 
  return (
    <View style={styles.container}>
   

      <Text style={styles.paragraph}>
      <Button title="Press Here" color="red" onPress={this.displayALert} />
      <Button title="Click Here" color="blue" onPress={this.displayALert} />
      <Button title="Touch Here" color="green" onPress={this.displayALert} />
      <Button title=" DON'T TOUCH" color="black" onPress={this.displayALert} />
      <Button title="Slap It" color="orange" onPress={this.displayALert} />

        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>

      
    </View>
  );
   }
}

//style={{ width:200, height:100, marginTop:80}}>
    //<Button
    //title="sound1"
    //color="red"
    //onPress={() => Alert.alert('Play Sound 1')} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
