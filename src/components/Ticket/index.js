import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import useTicketTypes from '../../hooks/api/useTicketTypes';
import DoneDeal from './DoneDeal';

export default function Ticket() {
  const { ticketTypes } = useTicketTypes();
  const [ticketInPersonWithHotel, setTicketInPersonWithHotel] = useState({});
  const [ticketInPersonWithoutHotel, setTicketInPersonWithoutHotel] = useState({});
  const [ticketRemote, setTicketRemote] = useState({});
  const [isRemote, setIsRemote] = useState(null);
  const [includesHotel, setIncludesHotel] = useState(null);

  useEffect(() => {
    if (ticketTypes) {
      ticketTypes.forEach(ticketType => {
        const { isRemote, includesHotel } = ticketType;

        if (isRemote) {
          setTicketRemote(ticketType);
        } else if (includesHotel) {
          setTicketInPersonWithHotel(ticketType);
        } else {
          setTicketInPersonWithoutHotel(ticketType);
        }
      });
    }
  }, [ticketTypes]);

  function handleIsEventRemote(isRemoteEvent) {
    if (isRemote === null) {
      setIsRemote(isRemoteEvent);
    } else if (isRemote !== isRemoteEvent) {
      setIsRemote(isRemoteEvent);
      setIncludesHotel(null);
    }
  }

  return (
    <>
      <DivTicket>
        <h1>Primeiro, escolha sua modalidade de ingresso</h1>
        <div>
          <Card onClick={() => handleIsEventRemote(false)} active={isRemote === false}>
            <p>Presencial</p>
            <span>R$ {ticketInPersonWithoutHotel.price}</span>
          </Card>
          <Card onClick={() => handleIsEventRemote(true)} active={isRemote === true}>
            <p>Online</p>
            <span>R$ {ticketRemote.price}</span>
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
              <span>+ R$ {ticketInPersonWithHotel.price - ticketInPersonWithoutHotel.price}</span>
            </Card>
          </div>
        </DivTicket>
      }

      {isRemote === true &&
        <DoneDeal price={ticketRemote.price} id={ticketRemote.id}/>
      }

      {includesHotel === false &&
        <DoneDeal price={ticketInPersonWithoutHotel.price} id={ticketInPersonWithoutHotel.id}/>
      }

      {includesHotel === true &&
        <DoneDeal price={ticketInPersonWithHotel.price} id={ticketInPersonWithHotel.id}/>
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
