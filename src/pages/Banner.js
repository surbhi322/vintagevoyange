import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div fluid>
            <div className='banner_outer'>
                <h1 className='text-center'>BANNER TEMPLATE</h1>
                <h5 className='text-center mb-3'>A Thrift Shop</h5>
                <div className='inside_div'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="navbar" style={{width: '500px'}}>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                    <div class="orange-div">
                        <h1>Vintage Voyage</h1>
                        <p>Vintage VoyageVintage VoyageVintage VoyageVintage VoyageVintage VoyageVintage Voyage
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;