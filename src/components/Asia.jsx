import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { Text, Stack, Image, Heading, Button } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Asia = ({ Asia }) => {
  const AfricaArray = Asia.filter((country) => {
    return country.region === "Asia";
  });
  return (
    <>
      <Navbar countries={Asia}/>
      <div className="country-container">
        {AfricaArray.map((country, index) => {
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
                    <Button variant="solid" colorScheme="blue">
                      View More Details
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Asia;
