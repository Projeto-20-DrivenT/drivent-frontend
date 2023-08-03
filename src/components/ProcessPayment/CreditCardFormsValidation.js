const creditCardValidation = {
  number: {
    required: { value: true, message: 'digite o numero do cartão' },
    custom: {
      isValid: (value) => parseInt(value?.replaceAll(' ', '')?.length, 10) === 16,
      message: 'Digite um numero válido para o cartão',
    }
  },
  name: {
    required: { value: true, message: 'digite o nome' }
  },
  expiry: {
    required: { value: true, message: 'digite a data de expiração' },
    pattern: { value: '^[0-9]{2}/[0-9]{2}$', message: 'digite a data em formato válido "xx/xx"' }
  },
  cvc: {
    required: { value: true, message: 'digite o CVC' },
    custom: {
      isValid: (value) => parseInt(value?.length, 10) === 3,
      message: 'CVC deve possuir três digitos',
    }
  },
};

export default creditCardValidation;
