import { useState, useEffect } from "react";
import Country from "./components/Country";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Africa from "./components/Africa";
import Asia from "./components/Asia";
import Navbar from "./components/Navbar";
const api = "https://restcountries.com/v3.1/all";


function App() {
  const [data, setData] = useState([]);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element : <Country countries={data}/>
    },
    {
      path: "/africa",
      element: <Africa  Africa={data}/>
    },
    {
      path: "/asia",
      element: <Asia  Asia={data}/>
    },
  ]);
 
  

  const Api = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    Api();
  }, []);
  
  return (
    <div>
      <ChakraProvider>
        <div className="App">
          <RouterProvider router={router} />
          
        </div>
      </ChakraProvider>
    </div>
  );
}

export default App;
