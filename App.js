import './global';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  const Web3 = require('web3');

  useEffect(() => {
    handleWeb3();
  }, []);

  const handleWeb3 = async () => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://eth-goerli.public.blastapi.io'),
    );

    console.log('web3====>>>', await web3.config.defaultBlock);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {'Web3 integration into react-native@0.72.4'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
