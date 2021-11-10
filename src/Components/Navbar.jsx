import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
<div>
    <nav className=" navbar navbar-expand-lg  navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Hote<span style={{color:'red'}}>llia</span> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/nairobi" className="navbar-brand  py-2  ml-5 mr-5" style={{ marginLeft: '200px' }}> Nairobi</Link>
            </li>
            <li className="nav-item">
            <Link to="/kisumu" className="navbar-brand  py-2  ml-5 mr-5" style={{ marginLeft: '200px' }}> Kisumu</Link>
            </li>
            <li className="nav-item">
            <Link to="/mombasa" className="navbar-brand  py-2  ml-5 mr-5" style={{ marginLeft: '200px' }}> Mombasa </Link>
            </li>
            </ul>
         </div> 
    </nav>
</div>
        )
    }
}
