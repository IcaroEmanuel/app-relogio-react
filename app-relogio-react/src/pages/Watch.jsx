import { useState, useEffect } from 'react';

export default function Watch() {
  const [currentTime, setCurrentTime] = useState('');

  const getTime = () => {
    const date = new Date;
    const actualHour = date.toLocaleTimeString();
    setCurrentTime(actualHour);
  }

    // useEffect - https://pt-br.reactjs.org/docs/hooks-overview.html
    useEffect(() => setInterval(() => getTime(), 1000));

  return (
    <section>
      Relógio mundial
      { currentTime }
    </section>
  );
}
