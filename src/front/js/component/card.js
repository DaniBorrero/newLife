import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';


export const CardDev = ({tittle, img, text}) => (
	<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{tittle}</Card.Title>
                <Card.Text>
                {text}
                </Card.Text>
                <Button variant="primary">Repositorio donde use {tittle}</Button>
            </Card.Body>
    </Card>
);