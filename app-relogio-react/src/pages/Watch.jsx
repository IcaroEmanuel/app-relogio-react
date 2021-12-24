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

  const getCurrentTimezoneName = () => {
    const date = new Date;
    const dateToString = date.toString();
    const CurrentTimezone = dateToString.slice(dateToString.indexOf('(') + 1, dateToString.length - 1);
    return CurrentTimezone;
  }

  return (
    <section>
      <section className='section-current-time'>
        <div className='current-time'>
          { currentTime }
        </div>
        <div className='current-timezone'>
          { getCurrentTimezoneName() }
        </div>
      </section>
    </section>
  );
}
