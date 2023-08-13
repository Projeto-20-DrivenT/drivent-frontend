import React, { useState } from 'react';
import { Message, StyledTypography } from '../Payment/index.js';
import styled from 'styled-components';
import useGetTicket from '../../../hooks/api/useGetTicket.js';
import soldOffImg from '../../../assets/images/ant-design_close-circle-outlined.svg';
import availableImg from '../../../assets/images/pepicons_enter.svg';

export default function Activities() {
  // const { ticket } = useGetTicket();
  const [daySelected, setDaySelected] = useState(false);
  const [soldOff, setSoldOff] = useState(true);
  //teste esse dado vira do DB e vai ir pro component como prop

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

  const data = [{
    dia: '10/11',
    locais: [{
      nomeLocal: 'teste',
      atividades: [
        {

        }
      ]
    }]
  }, {
    dia: '11/11',
    locais: [{
      nomeLocal: 'torres',
      atividades: [
        {

        }
      ]
    }]
  }];

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
      <Text>Escolha de Atividades</Text>
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
          <SmallContainer>
            <div className='atvContainer'>
              <Partitions>
                <p>Auditório Principal</p>
                <Card soldOff={soldOff}>
                  <div className='atvName'>
                    <h2>Minecraft: montando o PC ideal</h2>
                    <h3>09:00 - 10:00</h3>
                  </div>
                  <div className='vacancies'>
                    <img src={soldOff ? soldOffImg : availableImg} alt={soldOff ? 'soldOffImg' : 'availableImg'} />
                    <h2>Esgotado</h2>
                  </div>
                </Card>
              </Partitions>
              <Partitions>
                <p>Auditório Principal</p>
                <Card soldOff={soldOff}>
                  <div className='atvName'>
                    <h2>Minecraft: montando o PC ideal</h2>
                    <h3>09:00 - 10:00</h3>
                  </div>

                  <div className='vacancies'>
                    <img src={soldOff ? soldOffImg : availableImg} alt={soldOff ? 'soldOffImg' : 'availableImg'} />
                    <h2>Esgotado</h2>
                  </div>
                </Card>
              </Partitions>
              <Partitions>
                <p>Auditório Principal</p>
                <Card soldOff={soldOff}>
                  <div className='atvName'>
                    <h2>Minecraft: montando o PC ideal</h2>
                    <h3>09:00 - 10:00</h3>
                  </div>

                  <div className='vacancies'>
                    <img src={soldOff ? soldOffImg : availableImg} alt={soldOff ? 'soldOffImg' : 'availableImg'} />
                    <h2>Esgotado</h2>
                  </div>
                </Card>
              </Partitions>
            </div>
          </SmallContainer>
          <SmallContainer>
            <div className='atvContainer'>
              <Partitions>
                <p>Auditório Principal</p>
                <Card soldOff={soldOff}>
                  <div className='atvName'>
                    <h2>Minecraft: montando o PC ideal</h2>
                    <h3>09:00 - 10:00</h3>
                  </div>

                  <div className='vacancies'>
                    <img src={soldOff ? soldOffImg : availableImg} alt={soldOff ? 'soldOffImg' : 'availableImg'} />
                    <h2>Esgotado</h2>
                  </div>
                </Card>
              </Partitions>
              <Partitions>
                <p>Auditório Principal</p>
                <Card soldOff={soldOff}>
                  <div className='atvName'>
                    <h2>Minecraft: montando o PC ideal</h2>
                    <h3>09:00 - 10:00</h3>
                  </div>

                  <div className='vacancies'>
                    <img src={soldOff ? soldOffImg : availableImg} alt={soldOff ? 'soldOffImg' : 'availableImg'} />
                    <h2>Esgotado</h2>
                  </div>
                </Card>
              </Partitions>
              <Partitions>
                <p>Auditório Principal</p>
                <Card soldOff={soldOff}>
                  <div className='atvName'>
                    <h2>Minecraft: montando o PC ideal</h2>
                    <h3>09:00 - 10:00</h3>
                  </div>

                  <div className='vacancies'>
                    <img src={soldOff ? soldOffImg : availableImg} alt={soldOff ? 'soldOffImg' : 'availableImg'} />
                    <h2>Esgotado</h2>
                  </div>
                </Card>
              </Partitions>
            </div>
          </SmallContainer>
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

  .atvContainer {
    border: 1px solid rgba(215, 215, 215, 1);
    display: ${props => (props.daySelected ? 'flex' : 'none')};
    width: 100%;
    height: 46dvh;

    @media (max-width: 600px) {
        flex-direction: column;
        height: 100%;
      }
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

const Card = styled.div`
  background: rgba(241, 241, 241, 1);
  width: 100%;
  height: 9dvh;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  @media (max-width: 600px) {
    padding: 10px 5px 10px 10px;
  }

  .atvName {
    font-size: 1dvh;
    h2 {
      font-weight: 700;
    }
    h3 {
      margin-top: 1dvh;
      font-weight: 400;
    }
  }

  .vacancies {
    border-left: 1px solid rgba(207, 207, 207, 1);
    width: 5dvw;
    height: 5dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    @media (max-width: 600px) {
      width: 15dvw;
      height: 6dvh;
    }

    h2 {
      font-size: 0.9dvh;
      color: ${props => (props.soldOff ? '#CC6666' : '#078632')};

      @media (max-width: 1500px) {
        font-size: 0.7dvh;
      }

      @media (max-width: 600px) {
        font-size: 1vh;
      }
    }

    img {
      width: 2dvw;
      height: 2dvh;
      @media (max-width: 600px) {
        width: 4dvw;
        height: 4dvh;
      }
    }
  }

`;

const Partitions = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid rgba(215, 215, 215, 1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
      height: 14dvh;
  }

  p {
    position: absolute;
    color: #7B7B7B;
    font-size: 1.3dvh;
    top: -7%;

    @media (max-width: 600px) {
      top: -18%;
    }
  }
`;

const SmallContainer = styled.div`
padding-bottom: 6dvh;
  .names {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1dvh;
    color: #7B7B7B;
    font-size: 1.3dvh;
  }

`;

const Text = styled.h1`
  font-size: 34px;
  margin-bottom: 2dvh;
`;
