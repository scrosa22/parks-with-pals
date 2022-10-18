import React, { useState } from "react";
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

// const stateList2 = "AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY";

const SearchParks = () => {
  const [searchedParks, setSearchedParks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      return false;
    }
    try {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${searchInput}&stateCode=&api_key=Tk6fBL9Bwm4TDRp2fHSPEN8zDwt9ZHzowZbMSeI0`
      );

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { data } = await response.json();

      const parkData = data.map((park) => ({
        Name: park.fullName,
        description: park.description,
        fees: park.entranceFees || ["No Fee data to display"],
        Directions: park.directionsInfo,
        states: park.states
      }));

      setSearchedParks(parkData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>

      <Container>
      <h3>National Park Search</h3>
        <Form onSubmit={handleFormSubmit}>
          <Form.Row>
            <Col >
              <Form.Control
                name="searchInput"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                size="lg"
                placeholder="Search for a park"
              />
            </Col>
            <Col>
              <Button type="submit" variant="success" size="lg">
                Submit Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>

      <Container>
        <h2>
          {/* {searchedParks.length
            ? `Viewing ${searchedParks.length} results:`
            : 'Search for a park to begin'} */}
        </h2>
        <CardColumns>
          {searchedParks.map((park) => {
            return (
              <Card key={park.fullName} border="dark">
            
                <Card.Body>
                  <Card.Title>{park.fullName}</Card.Title>
                  <p>Name: {park.name}</p>
                  <br></br>

                  <Card.Text>Description: {park.description}</Card.Text>
                  <Card.Text>Directions: {park.directionsInfo}</Card.Text>
                  <Card.Text>Fees: {park.entranceFees}</Card.Text>

                  {/* { (
                    <Button
                      disabled={savedparkNames?.some(
                        (savedPark) => savedPark === park.fullName
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSavePark(park.fullName)}
                    >
                      {savedPark?.some((savedPark) => savedPark === park.fullName)
                        ? 'Park Already Saved!'
                        : 'Save This Park!'}
                    </Button>
                  )} */}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>

      <div class="card-header text-dark p-5 m-2" id="state-list"></div>
    </div>
  );
};

export default SearchParks;
