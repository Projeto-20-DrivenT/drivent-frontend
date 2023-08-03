import styled from 'styled-components';
import useCreateTicket from '../../hooks/api/useCreateTicket';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function DoneDeal({ price, id }) {
  const { createTicket } = useCreateTicket();
  const [ disabledButton, setDisabledButton ] = useState(false);
  
  async function bookTicket() {
    setDisabledButton(true);
    const body = { ticketTypeId: id };
    try {
      await createTicket(body);
      toast('Ticket criado com sucesso');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch {
      toast('Não foi possível criar o ticket!');
      setDisabledButton(false);
    }
  }
  return (
    <DivDone>
      <p>Fechado! O total ficou em <strong>R$ {price}</strong>. Agora é só confirmar:</p>
      <button onClick={() => bookTicket()} disabled={disabledButton} >RESERVAR INGRESSO</button>
    </DivDone>
  );
}

const DivDone = styled.div`
  color: #8E8E8E;
  button {
    width: 175px;
    height: 40px;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    text-align: center;
    margin-top: 15px;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  }
`;
