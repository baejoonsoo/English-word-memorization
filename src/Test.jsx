import Wrapper from './Wrapper';

const Test = ({ name, age, major }) => {
  return (
    <Wrapper>
      <p>my name : {name}</p>
      <p>my age : {age}</p>
      <p>my major : {major}</p>
    </Wrapper>
  );
};

export default Test;
