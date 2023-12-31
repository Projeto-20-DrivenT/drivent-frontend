import React, { useEffect, useState } from 'react';
import { Message, StyledTypography } from '../Payment/index.js';
import styled from 'styled-components';
import useGetTicket from '../../../hooks/api/useGetTicket.js';
import useActivityes from '../../../hooks/api/useActivities.js';
import ActivitiesContainer from '../../../components/Activities/ActivitiesContainer.js';

export default function Activities() {
  const [daySelected, setDaySelected] = useState(false);
  const [buttons, setButtons] = useState([]);
  const [venue, setVenue] = useState({});
  const { activities } = useActivityes();
  const { ticket } = useGetTicket();
  let message;

  useEffect(() => {
    setButtons(activities?.map(m => {
      return {
        label: m.eventDay,
        selected: false,
      };
    }));
  }, [activities]);

  const handleButtonClick = (index) => {
    const updatedButtons = buttons?.map((button, i) => ({
      ...button,
      selected: i === index,
    }));
    setButtons(updatedButtons);
    setVenue(activities[index].venue);
    if (!daySelected) setDaySelected(true);
  };

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

  return (
    <>
      <Text>Escolha de Atividades</Text>
      {checkDetails(ticket) ? (
        <Message>{message}</Message>
      ) : (
        <Container daySelected={daySelected}>
          <h1>Primeiro, filtre pelo dia do evento:</h1>
          <div className='buttons'>
            {buttons?.map((button, index) => (
              <DayButton
                key={index}
                daySelected={button.selected}
                onClick={() => handleButtonClick(index)}
              >
                {button.label}
              </DayButton>
            ))}
          </div>
          <ActivitiesContainer venue={venue} daySelected={daySelected}/>   
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
    margin-top: 1dvh;
    margin-bottom: 8dvh;
  }
`;

const DayButton = styled.button`
  width: 131px;
  height: 4dvh;
  border-radius: 4px;
  border: 0;
  background-color: ${props => (props.daySelected ? '#FFD37D' : '#E0E0E0')};
  font-size: 1.2dvh;
  font-family: "Lexend Deca", sans-serif;
  margin-top: 3dvh;
  margin-right: 2dvw;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
`;

const Text = styled.h1`
  font-size: 34px;
  margin-bottom: 2dvh;
`;
