import styled from 'styled-components';
import Partitions from './Partitions.js';

export default function SmallContainer({ d, daySelected }) {
  return (
    <Container daySelected={daySelected}>
      <div className='atvContainer'>
        {d.map((venueAndInfo, index) => (
          <Partitions key={index} venueAndInfo={venueAndInfo} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
position: relative;
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
    padding-bottom: 6dvh;
`;
