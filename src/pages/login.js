import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';

const CLIENT_ID = "cfeca5ba238345c1b38b0cb1db856248";
const CLIENT_SECRET = "73ef72e8f467422ebfbdc8d54f52d6d2";

const scopeUser = "user-read-playback-state user-read-currently-playing";
const redirect_uri = "http://localhost:3000/callback";

export default function Login() {

    const authorizationURL = "https://accounts.spotify.com/authorize?client_id=" + CLIENT_ID + "&response_type=code&scope=" + scopeUser + "&redirect_uri=" + redirect_uri ;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    

    return  ( 
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
            <script src="app.js"></script>
        <div className="d-flex flex-column align-items-center">
            <h2 className="mb-4 rounded-pill">Login</h2>
            <Form className="mb-3 rounded-pill mt-5 mb-5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="name" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password"  name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit" className="rounded-pill mt-3">Login</Button>
            </Form>
            <a href="/inscription"className="mb-2">Pas de compte ? <strong>S'inscrire</strong></a>
            <br></br>
            <a className="btn btn-success btn-lg rounded-pill" href={authorizationURL}>Login with Spotify</a>
        </div>
    </Container>


    )



};