import React from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import MyButton from '../button/button';
import './index.scss'
import * as bsIcons from 'react-icons/bs'

const Contact = () => {
     return (
          <>
               <section className='contact_container bg-light'>
                    <Container>
                         <Row>
                              <Col md={8}>
                                   <div className='container_box'>
                                        <h6 className='text-muted text-uppercase'>We answer within 24 hours</h6>
                                        <h1 className='text-dark fw-bold'>Contact Us</h1>
                                        <form action='#' className='mt-5'>
                                             <Form>
                                                  <Row>
                                                       <Col>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                 <Form.Label>First Name</Form.Label>
                                                                 <Form.Control type="text"/>
                                                            </Form.Group>
                                                       </Col>

                                                       <Col>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                 <Form.Label>Last Name</Form.Label>
                                                                 <Form.Control type="text"/>
                                                            </Form.Group>
                                                       </Col>
                                                  </Row>

                                                  <Row>
                                                       <Col>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                 <Form.Label>Phone</Form.Label>
                                                                 <Form.Control type="text"/>
                                                            </Form.Group>
                                                       </Col>

                                                       <Col>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                 <Form.Label>Email</Form.Label>
                                                                 <Form.Control type="email"/>
                                                            </Form.Group>
                                                       </Col>
                                                  </Row>
                                                  
                                                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                       <Form.Label>Message</Form.Label>
                                                       <Form.Control as="textarea" rows={3} />
                                                  </Form.Group>

                                                  <MyButton 
                                                       color="success"
                                                       text="Send message"
                                                  />
                                             </Form>
                                        </form>
                                   </div>
                              </Col>

                              <Col md={4} className="mt-5">
                                   <Row>
                                        <Col>
                                             <div className='p-5 bg-white text-center rounded'>
                                                  <h1 className='text-muted'>
                                                       <bsIcons.BsMap />
                                                  </h1>
                                                  <h6 className='text-muted'>Our address</h6>

                                                  <p className='mt-3'>
                                                       Brooklyn, NY 11204. 9359
                                                       Hollow Lane. NY 11706.
                                                  </p>
                                             </div>
                                        </Col>

                                        <Col>
                                             <div className='p-5 mt-3 bg-white text-center rounded'>
                                                  <h1 className='text-muted'>
                                                       <bsIcons.BsMailbox />
                                                  </h1>
                                                  <h6 className='text-muted'>Email</h6>

                                                  <p className='mt-3'>
                                                       joycehairsalone@gmail.com
                                                  </p>
                                             </div>
                                        </Col>
                                   </Row>
                              </Col>
                         </Row>
                    </Container>
               </section>
          </>
     )
}

export default Contact;