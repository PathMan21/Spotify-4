import React, { useEffect, useState } from "react";


const CLIENT_ID = "cfeca5ba238345c1b38b0cb1db856248";
const CLIENT_SECRET = "73ef72e8f467422ebfbdc8d54f52d6d2";

const encodedCredentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
const authorizationHeader = `Basic ${encodedCredentials}`;

export default function Callback() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            const authParams = {
                method: "POST",
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                    "Authorization": authorizationHeader
                },
                body: new URLSearchParams({
                    grant_type: "authorization_code",
                    code: code,
                    redirect_uri: "http://localhost:3000/callback"
                }).toString()
            };

            fetch("https://accounts.spotify.com/api/token", authParams)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('spotifyToken', data.access_token);
                    console.log("data:", data);
                    console.log("data token:", data.access_token);
                    setToken(data.access_token);
                })
                .catch(error => console.error("Error fetching token:", error));
        }
    }, []);

    useEffect(() => {
        if (token) {
            return window.location.replace("http://localhost:3000/album");
        }


    })

    return (
        <div>
            ...Redirection...
        </div>
    );
}
