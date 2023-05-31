# React Native Wallet Test

Este é um projeto de teste utilizando React Native para simular um app de uma carteira com seus cartões.

Este projeto está usando [Typescript](https://reactnative.dev/docs/typescript) como linguagem principal, [Formik](https://formik.org/docs/guides/react-native) para tratar o formulário de registro de cartão, [react-native-mask-text](https://github.com/akinncar/react-native-mask-text) para tratar as máscaras, e [Jest](https://jestjs.io/) para Testes Unitários.

Rodando o App
---------------
1. Tenha certeza de ter o ambiente [configurado](https://reactnative.dev/docs/environment-setup) corretamente para rodar a aplicação.
2. Clone o repositório e rode no terminal: ```npm install``` ou ```yarn```
3. Abra a pasta de iOS e rode no terminal: ```pod install``` (iOS only)
4. Para rodar o app no terminal:
### Android (Emulador ou Device)
```npm run android``` ou ```yarn android```

### iOS (Emulador)
```npm run ios``` ou ```yarn ios```
### iOS (Device)
```npm run ios --device``` ou ```yarn ios --device```

Para rodar o app em um iPhone pode ser necessário uma [configuração](https://reactnative.dev/docs/running-on-device) adicional.

5. Para rodar os testes unitários execute no terminal: ```npm test``` ou ```yarn test```

TODO (itens de melhoria para atingir 100% do teste proposto no Figma)
---------------
- Animações
- Tela de sucesso (por enquanto utilizando apenas um Alert)
- Tela de transição
- Seleção de cartão
- Sombra e design do header (Apenas no Android)

Observações
---------------
- O app foi testado no iOS, para rodar no Android será necessário configuração adicional para fazer o json-server funcionar pois o emulador do Android não interpreta corretamente o localhost para fazer a conexão.