import { useState, useEffect } from 'react';

const Decrementer = () => {
  const [num, setNum] = useState(100);

  // uncomment the useEffect below
  useEffect(() => {
    const interval = setInterval(function () {
      setNum((prevNum) => prevNum - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Countdown: {num}</h1>
    </div>
  );
};

//parent component
const Unmount = () => {
  const [dismount, setDismount] = useState(false);

  return (
    <div>
      <h1>Unmount Component</h1>
      <button onClick={() => setDismount(!dismount)}>
        {dismount ? 'Unmount Decrementer' : 'Mount Decrementer'}
      </button>
      {dismount && <Decrementer />}
    </div>
  );
};

export default Unmount;
