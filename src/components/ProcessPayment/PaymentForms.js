import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useState } from 'react';
import styled from 'styled-components';
import Input from '../Form/Input';
import Button from '../Form/Button';

export default function PaymentForms() {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  function handleSubmit() {

  }

  return (
    <>
      <CardForms>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form>
          <Input
            name="number"
            label="Card Number"
            type="text"
            mask='9999 9999 9999 9999'
            size="small"
            className="paymentInput"
            value={state.number}
            onClick={() => setState({ ...state, focus: 'number' })}
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
          />
          <small>E.g.: 49..., 51..., 36..., 37...</small>
          <Input
            name="name"
            label="Name"
            type="text"
            size="small"
            className="paymentInput"
            value={state.name}
            onClick={() => setState({ ...state, focus: 'name' })}
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
          />
          <Input
            name="expiry"
            label="Valid thru"
            type="text"
            size="small"
            mask='99/99'
            className="paymentInput paymentInputExpiry"
            value={state.expiry}
            onClick={() => setState({ ...state, focus: 'expiry' })}
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
          />
          <Input
            name="cvc"
            label="CVC"
            type="text"
            size="small"
            mask='999'
            className="paymentInput paymentInputCvc"
            value={state.cvc}
            onClick={() => setState({ ...state, focus: 'cvc' })}
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
          />
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
        font-size: 14px;
        padding: 0px;
        margin-top: -7px;

    }
`; 
