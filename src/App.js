import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Row, Card, CardBody, CardTitle, CardSubtitle } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Login from './pages/login';
import Callback from "./pages/callback";
import Album from "./pages/main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const code = new URLSearchParams(window.location.search).get("code");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/album",
    element: <Album/>

  },
  {
    path: "/callback", 
    element: <Callback/>
  },
  {
    path: "/login",
    element: <Login/>
  }

]);

function App() {

  return code ? <Callback/> : (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
