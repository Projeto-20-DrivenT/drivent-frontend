import SmallContainer from './SmallContainer.js';

function treatData(venue) {
  let arr = [];
  let auxArr = [];
  let counter = 0;
  for (let index = 0; index < venue.length; index++) {
    if (counter === 3) {
      arr.push(auxArr);
      auxArr = [];
      counter = 0;
    }
    const obj = {
      ...venue[index]
    };
    auxArr.push(obj);
    counter++;
    if(index === venue.length - 1) 
      arr.push(auxArr);
  }

  return arr;
}

export default function ActivitiesContainer({ venue, daySelected }) {
  const data = treatData(venue);
  return (
    <>
      {data.map((d, index) => (
        <SmallContainer key={index} d={d} daySelected={daySelected}/>
      ))}
    </>);
}
