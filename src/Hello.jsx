import './JSX.css';

const Hello = () => {
  const name = '배준수';

  return (
    <div>
      <h1>제 이름은 {name}입니다</h1>
      <h1>Hello world!</h1>
      <h2>good bye</h2>
      <div className="gray-box" />
      <input placeholder="입력하세요" />
    </div>
  );
};

export default Hello;
