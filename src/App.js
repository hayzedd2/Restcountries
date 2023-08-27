import { useState, useEffect } from "react";
import Country from "./components/Country";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Africa from "./components/Africa";
import Asia from "./components/Asia";
import { Spinner } from "@chakra-ui/react";
const api = "https://restcountries.com/v3.1/all";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Country countries={data} />,
    },
    {
      path: "/africa",
      element: <Africa Africa={data} />,
    },
    {
      path: "/asia",
      element: <Asia Asia={data} />,
    },
    {
      path: "/country/:countryName",
      element: <CountryDetail countries={data} />,
    },
  ]);

  const Api = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setData(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <div>
      <ChakraProvider>
        {loading ? (
          <div className="error">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : (
          <div className="App">
            <RouterProvider router={router} />
          </div>
        )}
      </ChakraProvider>
    </div>
  );
}

export default App;
