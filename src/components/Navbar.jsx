import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Card,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Text,
  Stack,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { SearchIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import debounce from "lodash.debounce";

function Navbar({ countries }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const handleSearch = debounce((searchTerm) => {
    const searchTermLower = searchTerm.toLowerCase();
    if (searchTerm === "") {
      setResults([]);
    } else {
      const searchObject = countries.filter((searchCountry) => {
        return searchCountry.name.common
          .toLowerCase()
          .includes(searchTermLower);
      });
      setResults(searchObject);
    }
  }, 800);
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    handleSearch(searchTerm);
  };

  return (
    <div className="nav">
      <Breadcrumb
        spacing="8px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "25px 0",
        }}
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="link">
            All
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/africa" className="link">
            Africa
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/asia" className="link">
            Asia
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <InputGroup size="md" style={{ marginBlock: "20px" }}>
        <Input
          type="text"
          style={{ paddingBlock: "20px" }}
          placeholder="Enter Search"
          onChange={handleChange}
          value={search}
        />
        <InputRightElement>
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>




      {/* SHOW SEARCH RESULT */}
      <div className="country-container" style={{border : "2px solid black"}} >
        {results.map((country, index) => {
          return (
            <div
              key={index}
              className="card-element"
              style={{ paddingBottom: "60px"}}
            >
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
    </div>
  );
}
export default Navbar;
