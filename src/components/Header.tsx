import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ParamListBase } from '@react-navigation/native';

const arrow = require('~/assets/imgs/arrow.png');
const add = require('~/assets/imgs/add.png');

type Type = 'wallet' | 'register' | 'none';

interface HeaderProps {
  hasStack: boolean;
  navigation: NativeStackNavigationProp<ParamListBase>;
  type: Type;
}

const Header: React.FC<HeaderProps> = ({ hasStack, navigation, type }) => {
  return (
    type !== 'none' && (
      <View
        style={[
          styles.container,
          type === 'wallet' ? styles.bgHeaderExtended : {},
        ]}>
        <StatusBar barStyle={'dark-content'} />
        <View
          style={[
            styles.containerTitle,
            type === 'wallet' ? styles.shadow : {},
          ]}>
          {hasStack && navigation && (
            <TouchableOpacity
              style={[styles.button, styles.buttonLeft]}
              onPress={() => navigation.goBack()}>
              <Image style={styles.img} source={arrow} />
            </TouchableOpacity>
          )}
          <Text
            style={
              type === 'wallet'
                ? styles.title
                : [styles.subtitle, styles.subtitleCenter]
            }>
            {type === 'wallet' ? 'Wallet Test' : 'cadastro'}
          </Text>
          <TouchableOpacity
            disabled={type !== 'wallet'}
            style={[styles.button, styles.buttonRight]}
            onPress={() => navigation.navigate('CreditCardRegister')}>
            {type === 'wallet' && <Image style={styles.img} source={add} />}
          </TouchableOpacity>
        </View>
        {type === 'wallet' && (
          <View style={styles.containerScreen}>
            <Text style={styles.subtitle}>Meus cartões</Text>
          </View>
        )}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  bgHeaderExtended: {
    height: 170,
    backgroundColor: '#EEEEEE',
  },
  containerTitle: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    paddingTop: 30,
    alignItems: 'center',
  },
  shadow: {
    backgroundColor: '#EEEEEE',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  containerScreen: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: '#142995',
    fontSize: 22,
  },
  subtitle: {
    textAlign: 'center',
    color: '#12C2E9',
    fontSize: 20,
  },
  subtitleCenter: {
    flex: 1,
  },
  img: {
    height: 18,
    width: 18,
  },
  button: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLeft: {
    marginLeft: 10,
  },
  buttonRight: {
    marginRight: 10,
  },
});

export default Header;
