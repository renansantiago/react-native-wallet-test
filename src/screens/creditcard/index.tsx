import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import stylesDefault from '~/theme/styles';
import Button from '~/components/Button';

type CreditCardRegisterScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const CreditCardRegisterScreen = () => {
  const navigation = useNavigation<CreditCardRegisterScreenProp>();

  return (
    <View style={[styles.container, stylesDefault.primaryBackground]}>
      <Text style={styles.title}>Wallet Test</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('CreditCardList')}
        title="meus cartões"
      />
      <Button
        style={styles.button}
        type="secondary"
        onPress={() => navigation.navigate('CreditCardRegister')}
        title="cadastrar cartões"
      />
    </View>
  );
};

export default CreditCardRegisterScreen;
