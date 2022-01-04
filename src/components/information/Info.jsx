import './Info.css'
import React from 'react';
import Main from '../template/Main';

const infoProps = {
    icon: 'info',
    title: 'Informações!',
    subtitle: 'Informações sobre o desenvolvedor'
}

export default props =>
    <React.Fragment>
        <Main {...infoProps}>
            <div className="info">Informações sobre o projeto</div>
        </Main>
    </React.Fragment>

