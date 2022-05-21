import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
     return (
          <>
               <section className='footer bg-white pt-3 pb-3'>
                    <Container>
                         <Row>
                              <Col md={6}>
                                   <div className='text-start'>
                                        &copy; 2022, All rights reserved.
                                   </div>
                              </Col>

                              <Col md={6}>
                                   <div className='text-end'>
                                        <Link className='text-decoration-none text-muted' to={'/'}>
                                             Privacy policy
                                        </Link>

                                        <Link className='text-decoration-none text-muted ms-3' to={'/'}>
                                             Terms & Conditions
                                        </Link>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </section>
          </>
     )
}

export default Footer;