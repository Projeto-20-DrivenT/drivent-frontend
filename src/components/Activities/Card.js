import styled from 'styled-components';
import soldOffImg from '../../assets/images/ant-design_close-circle-outlined.svg';
import availableImg from '../../assets/images/pepicons_enter.svg';
import registerImg from '../../assets/images/akar-icons_circle-check.svg';
import { useState } from 'react';
import api from '../../services/api.js';
import useToken from '../../hooks/useToken.js';

export default function Card({ activity }) {
  const [registred, setRegistred] = useState(activity.registeredByUser);
  const token = useToken();

  function handleRegister(activity, registred) {
    if (activity.registration >= activity.capacity)
      return alert('Atividade Esgotada !');
    if (registred)
      return alert('Você já está registrado nessa atividade !');

    // eslint-disable-next-line no-restricted-globals
    const result = confirm('Deseja se cadastrar nessa atividade?');

    result && api.post('/registration', { activityId: activity.id }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      setRegistred(result);
    }).catch((err) => {
      alert(err.message);
      setRegistred(false);
    });
  }

  return (
    <>
      <Activity soldOff={activity.registration >= activity.capacity} onClick={() => handleRegister(activity, registred)} registred={registred} hours={Math.abs((new Date(activity.startTime).getHours()) - (new Date(activity.endTime).getHours()))}>
        <div className='atvName'>
          <h2>{activity.name}</h2>
          <h3>{`${new Date(activity.startTime).getHours()}:${new Date(activity.startTime).getMinutes()} - ${new Date(activity.endTime).getHours()}:${new Date(activity.endTime).getMinutes()}`}</h3>
        </div>
        <div className='container'>
          <div className='vacancies'>
            <img src={registred ? registerImg : activity.registration >= activity.capacity ? soldOffImg : availableImg} alt={activity.registration < activity.capacity ? 'soldOffImg' : 'availableImg'} />
            <h2>{registred ? 'Inscrito' : activity.registration < activity.capacity ? `${activity.capacity - activity.registration} vagas` : 'Esgotado'} </h2>
          </div>
        </div>
      </Activity>
    </>

  );
}

const Activity = styled.div`
  background: ${props => props.registred ? '#D0FFDB' : 'rgba(241, 241, 241, 1)'};
  width: 100%;
  min-height: ${props => `${props.hours * 80}px`};
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    padding: 10px 5px 10px 10px;
    min-height: ${props => `${props.hours * 40}px`};
  }

  .container {
    height: 100%;
    border-left: 1px solid rgba(207, 207, 207, 1);
    display: flex;
    justify-content: center;
    align-items: center;
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
