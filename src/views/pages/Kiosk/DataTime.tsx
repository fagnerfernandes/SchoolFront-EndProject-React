import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'reactstrap';

export const DataTime = () => {
  const locale = 'en';
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 1 * 1000);
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${today.getDate()} ${today.toLocaleDateString(locale, {
    month: 'short',
    year: '2-digit',
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'} `;

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
    second: 'numeric',
  });

  return (
    <>
      <Card className="kiosk-time-card">
        <Row>
          <Col>
            <span className="kiosk-day">{day}</span>, <span className="kiosk-date">{date}</span>
          </Col>
        </Row>
        <Row>
          <Col>{time}</Col>
        </Row>
        <Row>
          <Col>{wish}</Col>
        </Row>
      </Card>
    </>
  );
};
export default DataTime;
