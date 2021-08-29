import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import Data from './components/Data';
import Vaccination from './components/Vaccination';

const commas = (x) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return x;
  };
}

const createDat = (obj) => {
  return {
    location: obj.location,
    // General COVID data
    population: commas(obj.population),
    new_cases: commas(obj.new_cases),
    new_cases_per_million: commas(obj.new_cases_per_million),
    new_cases_smoothed: commas(obj.new_cases_smoothed),
    new_deaths: commas(obj.new_deaths),
    new_deaths_per_million: commas(obj.new_deaths_per_million),
    new_deaths_smoothed: commas(obj.new_deaths_smoothed),
    total_deaths: commas(obj.total_deaths),
    total_deaths_per_million: commas(obj.total_deaths_per_million),
    last_updated_date: obj.last_updated_date,
    // Vaccination
    new_vaccinations: commas(obj.new_vaccinations),
    total_vaccinations_per_hundred: commas(obj.total_vaccinations_per_hundred),
    total_vaccinations: commas(obj.total_vaccinations),
    people_vaccinated_per_hundred: commas(obj.people_vaccinated_per_hundred),
    people_vaccinated: commas(obj.people_vaccinated),
    people_fully_vaccinated_per_hundred: commas(obj.people_fully_vaccinated_per_hundred),
    people_fully_vaccinated: commas(obj.people_fully_vaccinated),
  };
};

const darkTheme = createTheme({
  palette: {
    type: 'dark'
  }
});

function App() {

  const [covidData, setCovidData] = useState([]);
  const [thailand, setThailand] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {

    const fetchOWID = async () => {
      const url = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json';

      try {
        const res = await fetch(url);
        const dat = await res.json();
        const arr = [];
        for (let k in dat) {
          switch (k) {
            case "THA":
              setThailand(createDat(dat[k]));
              break;
            default:
              arr.push(createDat(dat[k]))
          }
        }
        setCovidData(arr);
      } catch (err) {
        console.log(`Failed to fetch data: ${err}`)
      };
    };

    fetchOWID()
  }, []);

  useEffect(() => {

    const filterLocation = (data) => {
      if (!location) {
        return true
      } else {
        return data.location.toUpperCase().includes(location.toLocaleUpperCase());
      }
    }

    setFiltered(covidData
      .filter(filterLocation)
    );

  }, [covidData, location])

  const onLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <div>
          <h1><a href="https://artnoi.com">artnoi.com</a>/19</h1>
          <p>A COVID-19 tracker for comparison with Thailand</p>
        </div>
        <div className="search">
          <TextField label="Filter Location" onChange={onLocationChange} />
          <p>Total locations: {covidData.length}</p>
        </div>
        <Route exact path="/">
          <Data data={filtered} thailand={thailand} />
        </Route>
        <Route exact path="/vaccination">
          <Vaccination data={filtered} thailand={thailand} />
        </Route>
      </ThemeProvider>
    </Router>
  );
}

export default App;