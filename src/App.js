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

// For thousand operator
const commas = (x) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return x;
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
              setThailand(dat[k]);
              break;
            default:
              arr.push(dat[k]);
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
        <appContext.Provider value={{ path, setPath, relative, setRelative, commas }}>
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
};

export default App;