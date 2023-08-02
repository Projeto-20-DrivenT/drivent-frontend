import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Ticket() {
  const { tickets } = useTicket();
  const [priceForHotel, setPriceForHotel] = useState(0);
  const [priceForRemoteTicket, setPriceForRemoteTicket] = useState(0);
  const [priceForInPersonTicket, setPriceForInPersonTicket] = useState(0);
  const [isRemote, setIsRemote] = useState(null);
  const [includesHotel, setIncludesHotel] = useState(null);

  useEffect(() => {
    if (tickets) {
      let hotelPriceTotal = 0;
      let inPersonTicketPriceWithoutHotel = 0;

      tickets.forEach(t => {
        if (t.isRemote) {
          setPriceForRemoteTicket(t.price);
        } else {
          if (!t.includesHotel) {
            inPersonTicketPriceWithoutHotel = t.price;
            setPriceForInPersonTicket(t.price);
          } else {
            hotelPriceTotal = t.price;
          }
        }
      });
      setPriceForHotel(hotelPriceTotal - inPersonTicketPriceWithoutHotel);
    }
  }, [tickets]);

  function handleClick(choice) {
    if (isRemote === null) {
      setIsRemote(choice);
    } else {
      if (isRemote !== choice) {
        setIsRemote(choice);
        setIncludesHotel(null);
      }
    }
  }
  return (
    <>
      <DivTicket>
        <h1>Primeiro, escolha sua modalidade de ingresso</h1>
        <div>
          <Card onClick={() => handleClick(false)} active={isRemote === false}>
            <p>Presencial</p>
            <span>R$ {priceForInPersonTicket}</span>
          </Card>
          <Card onClick={() => handleClick(true)} active={isRemote === true}>
            <p>Online</p>
            <span>R$ {priceForRemoteTicket}</span>
          </Card>
        </div>
      </DivTicket>

      {isRemote === false &&
        <DivTicket>
          <h1>Ótimo! Agora escolha sua modalidade de hospedagem</h1>
          <div>
            <Card onClick={() => setIncludesHotel(false)} active={includesHotel === false}>
              <p>Sem Hotel</p>
              <span>+ R$ 0</span>
            </Card>
            <Card onClick={() => setIncludesHotel(true)} active={includesHotel === true}>
              <p>Com Hotel</p>
              <span>+ R$ {priceForHotel}</span>
            </Card>
          </div>
        </DivTicket>
      }
    </>
  );
}

const DivTicket = styled.div`
  color: #8E8E8E;
  div {
    margin: 10px 30px 20px 0;
    display: flex;
  }
`;

const Card = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: ${props => (props.active ? 'none' : '1px solid #CECECE')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: #454545;
    margin-bottom: 5px;
  }
  background-color: ${props => (props.active ? '#FFEED2' : 'white')};
`;
