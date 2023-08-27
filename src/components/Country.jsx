import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { Text, Stack, Image, Heading, Button } from "@chakra-ui/react";

// population name region area carside with a car icon official name subregion startofweek
export default function Country({ countries }) {
  const [detail, setDetail] = useState([]);
  const Detail = (e, country) => {
    setDetail(country);
  };
  useEffect(() => {
    console.log(detail);
  }, [detail]);

  return (
    <div>
      <Navbar countries={countries}/>
      <div className="country-container">
        {countries.map((country, index) => {
          return (
            <div key={index} className="card-element">
              <Card maxW="sm">
                <CardBody>
                  <Image
                    className="country-img"
                    src={country.flags.png}
                    borderRadius="lg"
                  />

                  <Stack mt="6" spacing="3">
                    <Heading size="md" style={{ marginBottom: "20px" }}>
                      {country.name.common}
                    </Heading>
                    <Text>
                      <span className="capital">Capital</span> :{" "}
                      <span className="value">{country.capital}</span>
                    </Text>
                    <Text>
                      <span className="capital">Population</span> :{" "}
                      <span className="value">{country.population}</span>
                    </Text>
                    <Text>
                      <span className="capital">Region</span> :{" "}
                      <span className="value">{country.region}</span>
                    </Text>
                    <Text>
                      <span className="capital">CarSide</span> :{" "}
                      <span className="value"> {country.car.side}</span>
                    </Text>
                    <Text>
                      <span className="capital">Official Name</span> :{" "}
                      <span className="value">{country.name.official}</span>
                    </Text>
                    <Text>
                      <span className="capital">Sub Region</span> :{" "}
                      <span className="value">{country.subregion}</span>
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                    >
                     <a href={`/country/${country.name.common}`}>View More Details</a>
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
