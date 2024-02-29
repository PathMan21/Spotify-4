import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Row, Card, CardBody, CardTitle, CardSubtitle } from "react-bootstrap";
import { useState, useEffect } from 'react';

const CLIENT_ID = "cfeca5ba238345c1b38b0cb1db856248";
const CLIENT_SECRET = "73ef72e8f467422ebfbdc8d54f52d6d2";

function Album() {
  const [searchInput, setSearchInput] = useState("");
  const [albums, setAlbums] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem('spotifyToken'));
  }, []);

  async function search() {
    try {
      const artistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      };

      const artistResponse = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, artistParameters);
      const artistData = await artistResponse.json();

      if (artistData.artists.items.length > 0) {
        const artistID = artistData.artists.items[0].id;
        console.log("Artist ID:", artistID);

        const albumsResponse = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`, artistParameters);
        const albumsData = await albumsResponse.json();

        console.log("Albums:", albumsData.items);
        setAlbums(albumsData.items);
      } else {
        console.log("Artist not found");
        setAlbums([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleChange = (value) => {
    setSearchInput(value);
  };

  return (
    <div>
      <Container>
        <InputGroup className='mb-3' size="lg">
          <FormControl 
            placeholder='Search For Artist'
            type="input"
            onKeyDown={event => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => handleChange(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>

      {albums.length !== undefined ? (
        <Container>
          <Row className='mx-2 row row-cols-4'>
            {albums.map((album, i) => (
              <Card key={i} className='mx-3 mt-3 p-3 shadow-sm rounded-20 w-10'>
                <Card.Img className="align-self-start mr-3" src={album.images[0].url}/>
                <CardBody>
                  <CardTitle className="text-muted">{album.name}</CardTitle>
                  <CardSubtitle className="blockquote-footer">{album.artists[0].name}</CardSubtitle>
                </CardBody>
              </Card>
            ))}
          </Row>
        </Container>
      ) : (
        <Container>
          {console.log("pas d'artistes")}
          <p>Nous n'avons pas trouvé l'artiste</p>
        </Container>
      )}
    </div>
  );
}

export default Album;
