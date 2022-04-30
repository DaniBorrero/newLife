import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';


export const CardDev = ({tittle, img, text}) => (
    
        <Card className="m-3 border border-dark" style={{ width: '18rem' }}>
            <Card.Img className="my-2" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{tittle}</Card.Title>
                    <Card.Text>
                    {text}
                    </Card.Text>
                    <Button variant="primary">Repositorio</Button>
                </Card.Body>
        </Card>
    
);