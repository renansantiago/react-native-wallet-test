import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  list: {
    width: '100%',
  },
  cardList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 20,
    paddingVertical: 20,
  },
  selectedCard: {
    zIndex: 1,
  },
  bgBlack: {
    backgroundColor: '#111111',
  },
  bgGreen: {
    backgroundColor: '#A5FF32',
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 40,
  },
  cardBlackTitle: {
    color: 'white',
  },
  cardGreenTitle: {
    color: '#3F3F3F',
  },
  cardData: {
    fontSize: 16,
    marginBottom: 5,
  },
  footerTitle: {
    color: 'white',
  },
  error: {
    color: 'yellow',
  },
});

export default styles;
