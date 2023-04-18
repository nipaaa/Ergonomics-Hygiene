import React from 'react';
import { Container } from 'react-bootstrap';

const HealthMngDay1 = () => {
    const healthMAnage = [
        {
          time: "9.00 AM",
          content1: "Registration of the event",
          classname: "time",
        },
        {
          time: "9.15 AM",
          content1: "Welcome Opening Address- ",
          content2: "   Rob Aitken (UK, IOM Associate,",
          content3: "    Honorary Director IEH)",
          classname: "text-end time",
        },
      ];
    return (
        <Container>
        <h2 className="text-center program_title">
          Health Management in Today’s Workplace
        </h2>
        <div className="d-flex justify-content-between">
          {healthMAnage.map((health, index) => (
            <div className={health?.classname} key={index}>
              <h4>{health.time}</h4>
              <p className="m-0">{health?.content1}</p>
              <p className="m-0">{health?.content2}</p>
              <p className="m-0">{health?.content3}</p>
            </div>
          ))}
        </div>
      </Container>
    );
};

export default HealthMngDay1;