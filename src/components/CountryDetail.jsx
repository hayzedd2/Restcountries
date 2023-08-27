import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

function CountryDetail({ countries }) {
  const { countryName } = useParams();
  const item = countries.find((pro) => {
    return pro.name.common === countryName;
  });
  console.log(countries);
  console.log(item);

  if (!item) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  return (
    <div>
      <p>{item.name.common}</p>
    </div>
  );
}

export default CountryDetail;
