import React from 'react';
import {
  Falsy,
  RecursiveArray,
  RegisteredStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

type Type = 'primary' | 'secondary';

interface ButtonProps {
  style?:
    | false
    | TextStyle
    | RegisteredStyle<TextStyle>
    | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>>
    | null;
  title: string;
  onPress: () => void;
  type?: Type;
}

const Button: React.FC<ButtonProps> = ({
  style,
  title,
  onPress,
  type = 'primary',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        styles.container,
        type === 'primary'
          ? styles.primaryContainer
          : styles.secondaryContainer,
      ]}>
      <Text
        style={[
          styles.title,
          type === 'primary' ? styles.primaryTitle : styles.secondaryTitle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  primaryContainer: {
    backgroundColor: '#12C2E9',
  },
  secondaryContainer: {
    backgroundColor: '#A5FF32',
  },
  title: {
    fontSize: 18,
  },
  primaryTitle: {
    color: 'white',
  },
  secondaryTitle: {
    color: '#142995',
  },
});

export default Button;
