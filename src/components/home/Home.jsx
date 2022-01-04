import React from 'react';
import Main from '../template/Main';

const homeProps = {
    icon:'home', 
    title:'Início', 
    subtitle:'Projeto Cadastro de Usuários'
}

export default props =>
    <Main {...homeProps}>
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0"> Sistema de cadastro de usuários desenvolvido em react!</p>
    </Main>