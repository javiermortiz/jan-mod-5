import { useEffect, useState } from 'react';

//child component
function Message({ message }) {
  useEffect(() => {
    const msg = setInterval(() => {
      console.log(message);
    }, 3000);

    return () => clearInterval(msg);
  }, [message]);

  return <div className='message'>Logging to console "{message}"</div>;
}

// parent component
export default function Cleanup() {
  const [message, setMessage] = useState('a');

  return (
    <div className='App'>
      {console.log('render')}
      <h3>Type the message to log to console</h3>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Message message={message} />
    </div>
  );
}
