import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  scrollviewContainer: {
    flexGrow: 1,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
  },
  error: {
    textAlign: 'center',
    color: 'yellow',
  },
});

export default styles;
