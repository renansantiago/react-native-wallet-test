import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  safearea: {
    flex: 0,
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
    marginBottom: 30,
  },
  cardList: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 20,
  },
  selectedCard: {
    zIndex: 1,
  },
  cardNumber: {
    fontSize: 18,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
  },
  error: {
    color: 'red',
  },
  button: {
    marginBottom: 20,
  },
});

export default styles;
