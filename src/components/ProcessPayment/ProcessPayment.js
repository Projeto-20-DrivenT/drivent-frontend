import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import ConfirmedPayment from './ConfirmedPayment';

export default function ProcessPayment() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <Process>
        <h3>Ingresso Escolhido</h3>
        <Card>
          <h4>Presencial + Com Hotel</h4>
          <p>R$ 600</p>
        </Card>
        <h3>Pagamento</h3>
        <ConfirmedPayment />
      </Process>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Process = styled.div`
    color: #8E8E8E;
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;
    line-height: 23.44px;
`;

const Card = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  margin: 17px 0px;
  background: #FFEED2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 16px;
    line-height: 18.75px;
    color: #454545;
    margin-bottom: 7px;
  }

  p {
    font-size: 14px;
    line-height: 16.75px;
    color: #898989
  }
`;
