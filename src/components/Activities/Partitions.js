import styled from 'styled-components';
import Card from './Card.js';

export default function Partitions({ venueAndInfo }) {
  return (
    <Divisions>
      <p>{venueAndInfo.venueName}</p>
      {venueAndInfo.activity.map((activity, index) => (
        <Card key={index} activity={activity}/>
      ))}

    </Divisions>
  );
}

const Divisions = styled.div`
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
