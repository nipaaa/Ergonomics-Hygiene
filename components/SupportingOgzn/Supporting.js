import React from 'react';
import { Container } from 'react-bootstrap';
import SupportingOgn from './SupportingOgn';

const Supporting = () => {
    return (
        <Container className="section_gap top_gap">
        <h2 className="fw-bold text-center black_title">
          Supporting Organizations
        </h2>
       <SupportingOgn/>
      </Container>
    );
};

export default Supporting;