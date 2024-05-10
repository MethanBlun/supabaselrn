import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://wrsgdyacajazvpomkcyu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indyc2dkeWFjYWphenZwb21rY3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxODQzNzIsImV4cCI6MjAzMDc2MDM3Mn0.Z8aA6fY06IljS_fHlQ6_of1CpG0eqN0nTdkA6xPngvs");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;