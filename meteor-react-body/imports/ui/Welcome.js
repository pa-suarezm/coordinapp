import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../../client/main.css'

const welcome = (props) => {

    return(
        <div id="container-wrap-welcome">
            <Container>
                <h1>¡Te damos la bienvenida!</h1>
            </Container>
        </div>
    )
}

export default welcome;