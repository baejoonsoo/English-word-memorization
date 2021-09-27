const Props = ({ name = 'NULL', color = 'red' }) => {
  return (
    <div>
      <h1
        style={{
          color: color,
        }}
      >
        제 이름은 {name}입니다
      </h1>
    </div>
  );
};

export default Props;
