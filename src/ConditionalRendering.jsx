const ConditionalRendering = ({ isSpecial }) => {
  return (
    <div>
      <div>{isSpecial ? <span>Special</span> : <span>not Special</span>}</div>
      <div>{isSpecial || 'not Special'}</div>
      <div>{isSpecial && 'Special'}</div>
    </div>
  );
};

export default ConditionalRendering;
