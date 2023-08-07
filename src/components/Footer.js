import React from 'react';
import spotify from '../images/spotify-icon.png';
import { MDBFooter } from 'mdb-react-ui-kit';
import "../App.css";

function Footer() {
    return (
    <MDBFooter id="my-footer" bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-5' style={{ backgroundColor: '#d9d8d8' }}>
        &copy; {new Date().getFullYear()} Created by:{' '}
        <a className='text-dark' href='https://kxllytrxn.github.io'>
          Kelly Tran
        </a>
        <img src={spotify} id="spotify" alt="spotify logo"></img>
      </div>
    </MDBFooter>
    )
}

export default Footer;
