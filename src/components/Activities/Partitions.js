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
  height: 46dvh;
  overflow-y: scroll;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch; 
  border: 1px solid rgba(215, 215, 215, 1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  @media (max-width: 600px) {
      height: 20dvh;
  }

  p {
    position: absolute;
    color: #7B7B7B;
    font-size: 1.3dvh;
    top: -4dvh;
    z-index: 2;

    @media (max-width: 600px) {
        position: relative;
        top: -1dvh;
    }
  }
`;
