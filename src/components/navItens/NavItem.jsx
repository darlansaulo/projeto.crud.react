import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
    <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> Início
        </Link>
        <Link to="/users">
            <i className="fa fa-users"></i> Cadastro
        </Link>
        <Link to="/info">
            <i className="fa fa-info-circle"></i> Sobre
        </Link>
    </nav>