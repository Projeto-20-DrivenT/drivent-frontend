import React, { useState } from 'react';
import { Message, StyledTypography } from '../Payment/index.js';
import styled from 'styled-components';
import useGetTicket from '../../../hooks/api/useGetTicket.js';

export default function Activities() {
  // const { ticket } = useGetTicket();
  const [daySelected, setDaySelected] = useState(false);

  const dataForTest = {
    status: 'PAID',
    TicketType: {
      isRemote: false
    }
  };

  let message;
  function checkDetails(detail) {
    if (detail?.status !== 'PAID') {
      message = 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades';
      return true;
    }
    else if (detail?.TicketType?.isRemote) {
      message = 'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.';
      return true;
    }
    return false;
  }

  const [buttons, setButtons] = useState([
    { label: 'Sexta, 22/10', selected: false },
    { label: 'Sábado, 23/10', selected: false },
    { label: 'Domingo, 24/10', selected: false },
  ]);

  const handleButtonClick = (index) => {
    const updatedButtons = buttons.map((button, i) => ({
      ...button,
      selected: i === index,
    }));
    setButtons(updatedButtons);
    if (!daySelected) setDaySelected(true);
  };

  return (
    <>
      <StyledTypography variant="h4">Escolha de Atividades</StyledTypography>
      {checkDetails(dataForTest) ? (
        <Message>{message}</Message>
      ) : (
        <Container daySelected={daySelected}>
          <h1>Primeiro, filtre pelo dia do evento:</h1>
          <div className='buttons'>
            {buttons.map((button, index) => (
              <DayButton
                key={index}
                daySelected={button.selected}
                onClick={() => handleButtonClick(index)}
              >
                {button.label}
              </DayButton>
            ))}
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  h1 {
    color: #8E8E8E;
    font-size: 20px;
    display: ${props => (props.daySelected ? 'none' : 'initial')};
  }

  .buttons {
    margin-top: 3dvh;
  }
`;

const DayButton = styled.button`
  width: 131px;
  height: 37px;
  border-radius: 4px;
  border: 0;
  background-color: ${props => (props.daySelected ? '#FFD37D' : '#E0E0E0')};
  font-size: 14px;
  font-family: "Lexend Deca", sans-serif;
  margin-top: 3dvh;
  margin-right: 2dvw;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
`;
