import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'

export default props => 
    <footer className="footer">
        <span>
            Desenvolvido com <i className="fa fa-gratipay text-danger" aria-hidden="true"></i> por
            <strong> Darlan </strong>
            <FontAwesomeIcon className="text-danger" icon={faFireAlt}/>
            
        </span>
    </footer>