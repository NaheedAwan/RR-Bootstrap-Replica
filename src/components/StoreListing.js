import { template } from '@babel/core'
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
export default function StoreListing() {
    return (
        <div>
            <h2>Choose your store in 
                <span tabindex="0" role="button" className="css-1io1d4t" >  Raleigh-Durham </span></h2>
                <div className="css-121kum4" style={{display:"flex"}}>
                    <ul className='css-1abc'>
                        <li><button className='css-2abc-RetailerCard'>
                            <div className='css-3abc'>
                                <picture>
                                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} 
                                src="https://tse4.mm.bing.net/th?id=OIP.d-3fKKoBqaAUYq8myGO7sQHaEK&pid=Api&P=0&w=289&h=162" roundedCircle 
                                className="css-4abc"/>
                                </picture>
                                <div className="css-5abc"> 
                                <p>Aldi</p>
                                </div>
                                </div>
                                </button>
                                </li>
                                <li><button className='css-2abc-RetailerCard'>
                            <div className='css-3abc'>
                                <picture>
                                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} 
                               src="http://www.newhope.com/sites/newhope360.com/files/sprouts-farmers-market-logo.jpg" roundedCircle 
                                className="css-4abc"/>
                                </picture>
                                <div className="css-5abc"> 
                                <p>Sprouts Farmers Market</p>
                                </div>
                                </div>
                                </button>
                                </li>
                                <li><button className='css-2abc-RetailerCard'>
                            <div className='css-3abc'>
                                <picture>
                                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} 
                               src="https://tse4.mm.bing.net/th?id=OIP.w8LG56cN2jVyF6S26fdqPwHaGG&pid=Api&P=0&w=199&h=164"roundedCircle 
                                className="css-4abc"/>
                                </picture>
                                <div className="css-5abc"> 
                                <p>Kroger</p>
                                </div>
                                </div>
                                </button>
                                </li>
                                <li><button className='css-2abc-RetailerCard'>
                            <div className='css-3abc'>
                                <picture>
                                <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} 
                               src="https://tse4.mm.bing.net/th?id=OIP.xJlFzowCT0o1WVL4kogelwHaHa&pid=Api&P=0&w=154&h=154" roundedCircle 
                                className="css-4abc"/>
                                </picture>
                                <div className="css-5abc"> 
                                <p>Publix</p>
                                </div>
                                </div>
                                </button>
                                </li>
        
            </ul>
            </div>
        </div>
    )
}
















    {/* <Container style={{ marginTop: "40px", textAlign: "center" }}> */}
                {/* <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} > */}
                    {/* <Col xs=".5" >
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://tse4.mm.bing.net/th?id=OIP.d-3fKKoBqaAUYq8myGO7sQHaEK&pid=Api&P=0&w=289&h=162" roundedCircle />

                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                   
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="http://www.newhope.com/sites/newhope360.com/files/sprouts-farmers-market-logo.jpg" roundedCircle />

                        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://tse4.mm.bing.net/th?id=OIP.w8LG56cN2jVyF6S26fdqPwHaGG&pid=Api&P=0&w=199&h=164" roundedCircle />
                  
                        <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col> */}
                {/* </Row> */}
            {/* </Container> */}
