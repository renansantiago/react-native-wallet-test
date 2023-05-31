import React from 'react';
import { ActivityIndicator, Alert, ScrollView, Text } from 'react-native';
import styles from './styles';
import CreditCardForm from '../../../components/CreditCardForm';
import { RootStackParamList } from '../../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import useCardAPI, { CreditCard } from '~/hooks/cards';
import stylesDefault from '~/theme/styles';

type CreditCardRegisterScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreditCardRegister'
>;

const CreditCardRegisterScreen = () => {
  const navigation = useNavigation<CreditCardRegisterScreenProp>();
  const { loading, error, registerCard } = useCardAPI();

  const handleCardRegisterForm = async (card: CreditCard) => {
    await registerCard(card);
    if (error) {
      Alert.alert(error);
    } else {
      Alert.alert('Cartão cadastrado com sucesso!');
      navigation.reset({
        index: 1,
        routes: [{ name: 'Home' }, { name: 'CreditCardList' }],
      });
    }
  };

  return (
    <ScrollView
      style={[styles.scrollview, stylesDefault.primaryBackground]}
      contentContainerStyle={styles.scrollviewContainer}
      contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.title}>Wallet Test</Text>
      <CreditCardForm handleCardRegisterForm={handleCardRegisterForm} />
      {loading && <ActivityIndicator size="large" color="grey" />}
      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
};

export default CreditCardRegisterScreen;
