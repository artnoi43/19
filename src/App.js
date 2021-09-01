import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import DataTable from './components/GeneralDataTable';
import VaccinationTable from './components/VaccinationTable';
import TestTable from './components/TestTable';
import Links from './components/Links';
import Footer from './components/Footer';
import RelativeButton from './components/RelativeButton';

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
    new_vaccinations_smoothed_per_million: commas(obj.new_vaccinations_smoothed_per_million),
    total_vaccinations_per_hundred: commas(obj.total_vaccinations_per_hundred),
    total_vaccinations: commas(obj.total_vaccinations),
    people_vaccinated_per_hundred: commas(obj.people_vaccinated_per_hundred),
    people_vaccinated: commas(obj.people_vaccinated),
    people_fully_vaccinated_per_hundred: commas(obj.people_fully_vaccinated_per_hundred),
    people_fully_vaccinated: commas(obj.people_fully_vaccinated),
    total_boosters_per_hundred: commas(obj.total_boosters_per_hundred),
    // Tests
    positive_rate: commas(obj.positive_rate),
    tests_per_case: commas(obj.tests_per_case),
    new_tests: commas(obj.new_tests),
    new_tests_per_thousand: commas(obj.new_tests_per_thousand),
    new_tests_smoothed: commas(obj.new_tests_smoothed),
    new_tests_smoothed_per_thousand: commas(obj.new_tests_smoothed_per_thousand),
    total_tests: commas(obj.total_tests),
    total_tests_per_thousand: commas(obj.total_tests_per_thousand),
  };
};

const darkTheme = createTheme({
  palette: {
    type: 'dark'
  }
});

export const appContext = createContext(null);

function App() {

  const [path, setPath] = useState("/");
  const [covidData, setCovidData] = useState([]);
  const [thailand, setThailand] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [location, setLocation] = useState('');
  const [relative, setRelative] = useState(true);

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
        <appContext.Provider value={{ path, setPath, relative, setRelative }}>
          <div>
            <h1>19.<a href="https://artnoi.com">artnoi.com</a></h1>
            <p>A COVID-19 tracker for comparison with Thailand</p>
            <p>Source: <a href="https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json">OWID</a></p>
          </div>
          <div className="search">
            <TextField label="Filter Location" onChange={onLocationChange} />
            <p>Total Locations: {covidData.length}</p>
            <RelativeButton />
            <Links />
          </div>
          <Route exact path="/">
            <DataTable data={filtered} thailand={thailand} />
          </Route>
          <Route exact path="/vaccination">
            <VaccinationTable data={filtered} thailand={thailand} />
          </Route>
          <Route exact path="/test">
            <TestTable data={filtered} thailand={thailand} />
          </Route>
          <Footer />
        </appContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;