import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    
   
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="d-flex flex-column align-items-center">
                <h2 className="mb-4 rounded-pill">Inscription</h2>
                <Form className="mb-3 rounded-pill mt-5 mb-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Nom d'utilisateur" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Mot de passe" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button type="submit" className="rounded-pill mt-3">S'inscrire</Button>
                </Form>
            </div>
        </Container>
    );
}
