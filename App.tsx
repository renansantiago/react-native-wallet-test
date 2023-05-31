import React from 'react';
import { Button, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/creditcard';
import CreditCardListScreen from './src/screens/creditcard/cards';
import CreditCardRegisterScreen from './src/screens/creditcard/register';
import Header from '~/components/Header';
import stylesDefault from '~/theme/styles';

export type RootStackParamList = {
  Home: undefined;
  CreditCardList: undefined;
  CreditCardRegister: undefined;
};

const defaultScreenOptions = {
  headerShadowVisible: false,
  headerBackTitle: 'voltar',
  header: (props: NativeStackHeaderProps) => {
    return (
      <Header
        hasStack={!!props.back?.title}
        navigation={props.navigation}
        type="none"
      />
    );
  },
  headerLeft: ({ canGoBack }) => {
    // eslint-disable-next-line react-native/no-inline-styles
    return canGoBack ? <Button title="aaaa" /> : null;
  },
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={[styles.container, stylesDefault.primaryBackground]}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={defaultScreenOptions}
          />
          <Stack.Screen
            name="CreditCardList"
            component={CreditCardListScreen}
            options={{
              ...defaultScreenOptions,
              header: (props: NativeStackHeaderProps) => {
                return (
                  <Header
                    hasStack={!!props.back?.title}
                    navigation={props.navigation}
                    type="wallet"
                  />
                );
              },
            }}
          />
          <Stack.Screen
            name="CreditCardRegister"
            component={CreditCardRegisterScreen}
            options={{
              ...defaultScreenOptions,
              header: (props: NativeStackHeaderProps) => {
                return (
                  <Header
                    hasStack={!!props.back?.title}
                    navigation={props.navigation}
                    type="register"
                  />
                );
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
