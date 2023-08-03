import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { toast } from 'react-toastify';
import { useForm } from '../../hooks/useForm';
import creditCardValidation from './CreditCardFormsValidation';

export default function PaymentForms({ setConfirmed }) {
  const {
    handleSubmit,
    handleChange,
    data,
    errors,
    customHandleChange,
  } = useForm({
    validations: creditCardValidation,

    onSubmit: () => { 
      console.log('submit: ', data);
      //TODO: postar pagamento
      setConfirmed(prev => !prev);
      toast('Pagamento realizado com sucesso!');
    },

    initialValues: {
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      focus: '',
    },
  });
  
  return (
    <>
      <CardForms>
        <Cards
          number={data.number}
          expiry={data.expiry}
          cvc={data.cvc}
          name={data.name}
          focused={data.focus}
        />
        <form>
          <Input
            name="number"
            label="Card Number"
            type="text"
            mask='9999 9999 9999 9999'
            size="small"
            className="paymentInput"
            value={data.number}
            onClick={(e) => customHandleChange('focus')(e.target.name)}
            onChange={handleChange('number')}
          />
          {errors.number ? <small>{errors.number}</small> : <small>E.g.: 49..., 51..., 36..., 37...</small>}
          
          <Input
            name="name"
            label="Name"
            type="text"
            size="small"
            className="paymentInput"
            value={data.name}
            onClick={(e) => customHandleChange('focus')(e.target.name)}
            onChange={handleChange('name')}
          />
          {errors.name && <small>{errors.name}</small>}

          <Input
            name="expiry"
            label="Valid thru"
            type="text"
            size="small"
            mask='99/99'
            className="paymentInput paymentInputExpiry"
            value={data.expiry}
            onClick={(e) => customHandleChange('focus')(e.target.name)}
            onChange={handleChange('expiry')}
          />
          
          <Input
            name="cvc"
            label="CVC"
            type="text"
            size="small"
            mask='999'
            className="paymentInput paymentInputCvc"
            value={data.cvc}
            onClick={(e) => customHandleChange('focus')(e.target.name)}
            onChange={handleChange('cvc')}
          />
          {errors.expiry ? <small className='paymentInputExpiry'>{errors.expiry}</small > : <small className='paymentInputExpiry'></small>}
          {errors.cvc && <small className='paymentInputCvc'>{errors.cvc}</small>}
        </form>
      </CardForms>
      <Button onClick={ handleSubmit }>
        Finalizar Compra
      </Button>
    </>
  );
};

const CardForms = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0px;
    width: 100%;
    div {
        margin: 0px;
    };

    form {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0px 25px;
        margin-top: -8px;
        width: 50%;
        .paymentInput{
            width: 80%;
            height: 52px;
            div {
                height: 45px;
            }
            
        }
        .paymentInputExpiry {
            width: calc(50% - 7.5px);
            margin-right: 15px;
        }
        .paymentInputCvc {
            width: calc(30% - 7.5px);;
        }

    }

    small{
        width: 100%;
        font-size: 14px;
        padding: 0px;
        margin-top: -7px;
        .paymentInputExpiry {
            width: calc(50% - 7.5px);
            margin-right: 15px;
        }
        .paymentInputCvc {
            width: calc(30% - 7.5px);justify-content: flex-start;
            align-self: flex-end;
            justify-self: flex-end;
        }
    }

`; 
