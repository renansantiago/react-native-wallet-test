import { ErrorMessage, Formik, FormikErrors, FormikHelpers } from 'formik';
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import {
  isCardNumberAmexInvalid,
  isCardNumberDiscoverInvalid,
  isCardNumberMasterInvalid,
  isCardNumberValid,
  isCardNumberVisaInvalid,
  isCvvValid,
  isExpirationDateFuture,
  isExpirationDateValid,
  isNameValid,
} from '../helpers/validators';
import { mask, unMask } from 'react-native-mask-text';
import { CreditCard } from '~/hooks/cards';
import Button from '~/components/Button';

interface IFormValues {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  fullName: string;
}

interface CreditCardFormProps {
  handleCardRegisterForm: (card: CreditCard) => void;
}

const CreditCardForm: React.FC<CreditCardFormProps> = ({
  handleCardRegisterForm,
}) => {
  const submit = (values: IFormValues, actions: FormikHelpers<IFormValues>) => {
    const errors: FormikErrors<IFormValues> = {};

    const unmaskedCardNumber = unMask(values.cardNumber);

    if (isCardNumberVisaInvalid(unmaskedCardNumber)) {
      errors.cardNumber = 'O número de cartão Visa é inválido';
    } else if (isCardNumberMasterInvalid(unmaskedCardNumber)) {
      errors.cardNumber = 'O número de cartão Mastercard é inválido';
    } else if (isCardNumberAmexInvalid(unmaskedCardNumber)) {
      errors.cardNumber = 'O número de cartão American Express é inválido';
    } else if (isCardNumberDiscoverInvalid(unmaskedCardNumber)) {
      errors.cardNumber = 'O número de cartão Discover é inválido';
    } else if (!isCardNumberValid(unmaskedCardNumber)) {
      errors.cardNumber = 'O número de cartão é inválido';
    }

    if (!isExpirationDateValid(values.expirationDate)) {
      errors.expirationDate = 'Data de expiração inválida';
    } else if (!isExpirationDateFuture(values.expirationDate)) {
      errors.expirationDate = 'A data de expiração precisa estar no futuro';
    }

    if (!isCvvValid(values.cvv, unmaskedCardNumber)) {
      errors.cvv = 'Código se segurança inválido';
    }

    if (!isNameValid(values.fullName)) {
      errors.fullName = 'Nome inválido';
    }

    actions.setErrors(errors);

    if (Object.values(errors).length === 0) {
      handleCardRegisterForm({
        name: values.fullName,
        number: values.cardNumber,
        cvv: values.cvv,
        expiration: values.expirationDate,
      });
    }
  };

  const initialValues: IFormValues = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    fullName: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
        <View style={styles.container}>
          <Text style={styles.inputTitle}>número do cartão</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              const formattedNumber = mask(text, '9999 9999 9999 9999');
              setFieldValue('cardNumber', formattedNumber);
            }}
            onBlur={handleBlur('cardNumber')}
            value={values.cardNumber}
            placeholder="Digite o número do cartão"
            keyboardType={'number-pad'}
            maxLength={19}
          />
          <Text style={styles.textError}>
            <ErrorMessage name="cardNumber" />
          </Text>
          <Text style={styles.inputTitle}>nome do titular do cartão</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            value={values.fullName}
            placeholder="Digite o nome do titular"
            keyboardType={'default'}
            maxLength={255}
          />
          <Text style={styles.textError}>
            <ErrorMessage name="fullName" />
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputLine}>
              <Text style={styles.inputTitle}>vencimento</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  const formattedDate = mask(text, '99/99');
                  setFieldValue('expirationDate', formattedDate);
                }}
                onBlur={handleBlur('expirationDate')}
                value={values.expirationDate}
                placeholder="MM/YY"
                keyboardType={'number-pad'}
                maxLength={5}
              />
              <Text style={styles.textError}>
                <ErrorMessage name="expirationDate" />
              </Text>
            </View>

            <View style={[styles.inputLine, styles.inputLineRight]}>
              <Text style={styles.inputTitle}>código de segurança</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('cvv')}
                onBlur={handleBlur('cvv')}
                value={values.cvv}
                placeholder="Digite o cvv"
                keyboardType={'number-pad'}
                maxLength={4}
              />
              <Text style={styles.textError}>
                <ErrorMessage name="cvv" />
              </Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <Button onPress={() => handleSubmit()} title="avançar" />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginTop: 5,
    height: 40,
    paddingLeft: 15,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  inputTitle: {
    marginTop: 15,
    color: 'white',
  },
  inputLine: {
    flex: 0.5,
    width: '100%',
  },
  inputLineRight: {
    marginLeft: 15,
  },
  textError: {
    color: 'yellow',
    fontSize: 12,
    marginTop: 5,
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  bottom: {
    marginTop: 20,
  },
});

export default CreditCardForm;
