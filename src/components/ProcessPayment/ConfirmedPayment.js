import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function ConfirmedPayment() {
  return (
    <>
      <Block>
        <AiFillCheckCircle size='44px' color='#48B854'/>
        <div>
          <h4>Pagamento Confirmado!</h4>
          <p>Prossiga para escolha de hospedagem e atividades</p>
        </div>
      </Block>
    </>
  );
};

const Block = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;

    div {
        margin-left: 10px;
        font-size: 16px;
        line-height: 18.75px;
        color: #454545;

        h4 {
            font-weight: 700;
        }
        p {
            font-weight: 400;
        }
    }
`;
