import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { Text, Stack, Image, Heading, Button } from "@chakra-ui/react";
import CountryDetailNavbar from "./CountryDetailNavbar";

function CountryDetail({ countries }) {
  const { countryName } = useParams();
  const country = countries.find((pro) => {
    return pro.name.common === countryName;
  });
  console.log(countries);
  console.log(country);

  if (!country) {
    return (
      <div className="error">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  return (
    <div>
      <CountryDetailNavbar/>
      <div
        className="country-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom : "40px"
        }}
      >
        <div className="card-element" style={{marginTop : "0"}}>
          <Card maxW="md">
            <CardBody>
              <Image
                className="country-detail-img"
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
                <Text>
                  <span className="capital">Borders</span> :{" "}
                  <span className="value" style={{textTransform : "uppercase"}}>{country.borders[0]} , {country.borders[1]} , {country.borders[2]}</span>
                </Text>
                <Text>
                  <span className="capital">Timezones</span> :{" "}
                  <span className="value">{country.timezones[0]}</span>
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  <a href="/">Back</a>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
