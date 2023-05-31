import React, { useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import styles from './styles';
import useCardAPI, { CreditCard } from '~/hooks/cards';
import stylesDefault from '~/theme/styles';

const CreditCardListScreen = () => {
  const { cards, loading, error, fetchCardList } = useCardAPI();
  const { width } = Dimensions.get('window');

  useEffect(() => {
    fetchCardList();
  }, []);

  const handleCardSelect = (card: CreditCard) => {};

  const renderCard = ({ item, index }: { item: CreditCard; index: number }) => {
    const isBlackCard = index % 2 === 0;

    return (
      <TouchableOpacity
        style={[
          styles.card,
          isBlackCard ? styles.bgBlack : styles.bgGreen,
          { marginTop: index !== 0 ? -130 : 0, width: width - 60 },
        ]}
        onPress={() => handleCardSelect(item)}>
        <Text
          style={[
            styles.cardTitle,
            isBlackCard ? styles.cardBlackTitle : styles.cardGreenTitle,
          ]}>
          {isBlackCard ? 'Black Card' : 'Green Card'}
        </Text>
        <Text
          style={[
            styles.cardData,
            isBlackCard ? styles.cardBlackTitle : styles.cardGreenTitle,
          ]}>
          {item.name}
        </Text>
        <Text
          style={[
            styles.cardData,
            isBlackCard ? styles.cardBlackTitle : styles.cardGreenTitle,
          ]}>{`**** **** **** ${item.number.slice(-4)}`}</Text>
        <Text
          style={[
            styles.cardData,
            isBlackCard ? styles.cardBlackTitle : styles.cardGreenTitle,
          ]}>{`Validade ${item.expiration}`}</Text>
      </TouchableOpacity>
    );
  };

  const renderBottomView = () => (
    <View>
      <Text style={styles.footerTitle}>usar este cartão</Text>
    </View>
  );

  return (
    <View style={[styles.container, stylesDefault.primaryBackground]}>
      {loading ? (
        <ActivityIndicator size="large" color="grey" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={cards}
          renderItem={renderCard}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.cardList}
          ListFooterComponent={renderBottomView}
        />
      )}
    </View>
  );
};

export default CreditCardListScreen;
