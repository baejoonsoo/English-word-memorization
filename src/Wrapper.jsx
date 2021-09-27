const Wrapper = ({ children }) => {
  const style = {
    border: '2px solid blue',
    padding: 16,
  };

  return <div style={style}>{children}</div>;
};

export default Wrapper;
