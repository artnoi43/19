import { useContext } from 'react';
import { appContext } from '../App';

function RelativeData({ data, commas }) {
    return (
        <>
            <td><strong>{data.location}</strong></td>
            <td>{data.population ? commas(data.population) : "N/A"}</td>
            <td>{data.new_cases_per_million ? commas(data.new_cases_per_million) : "N/A"}</td>
            <td>{data.new_deaths_per_million ? commas(data.new_deaths_per_million) : "N/A"}</td>
            <td>{data.total_deaths_per_million ? commas(data.total_deaths_per_million) : "N/A"}</td>
            <td>{data.last_updated_date}</td>
        </>
    );
};

function AbsoluteData({ data, commas }) {
    return (
        <>
            <td><strong>{data.location}</strong></td>
            <td>{data.population ? commas(data.population) : "N/A"}</td>
            <td>{data.new_cases ? commas(data.new_cases) : "N/A"}</td>
            <td>{data.new_cases_smoothed ? commas(data.new_cases_smoothed) : "N/A"}</td>
            <td>{data.new_deaths ? commas(data.new_deaths) : "N/A"}</td>
            <td>{data.new_deaths_smoothed ? commas(data.new_deaths_smoothed) : "N/A"}</td>
            <td>{data.total_deaths ? commas(data.total_deaths) : "N/A"}</td>
            <td>{data.last_updated_date}</td>
        </>
    );
};

function GeneralDataRow({ data }) {
    const { relative, commas } = useContext(appContext);
    return (
        <tr>
            {relative ? (
                <RelativeData data={data} commas={commas} />
            ) : (
                <AbsoluteData data={data} commas={commas} />
            )}
        </tr>
    );
};

export default GeneralDataRow;