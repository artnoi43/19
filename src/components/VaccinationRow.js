import { useContext } from 'react';
import { appContext } from '../App';

function VaccinationRow({ data }) {
    const { relative, commas } = useContext(appContext);
    return (
        <tr>
            <td><strong>{data.location}</strong></td>
            {relative ? <>
                <td>{data.new_vaccinations_smoothed_per_million ? commas(data.new_vaccinations_smoothed_per_million) : "N/A"}</td>
                <td>{data.total_vaccinations_per_hundred ? commas(data.total_vaccinations_per_hundred) : "N/A"}</td>
                <td>{data.people_vaccinated_per_hundred ? commas(data.people_vaccinated_per_hundred) : "N/A"}</td>
                <td>{data.people_fully_vaccinated_per_hundred ? commas(data.people_fully_vaccinated_per_hundred) : "N/A"}</td>
                <td>{data.total_boosters_per_hundred ? commas(data.total_boosters_per_hundred) : "N/A"}</td>
            </> : <>
                <td>{data.new_vaccinations ? commas(data.new_vaccinations) : "N/A"}</td>
                <td>{data.total_vaccinations ? commas(data.total_vaccinations) : "N/A"}</td>
                <td>{data.people_vaccinated ? commas(data.people_vaccinated) : "N/A"}</td>
                <td>{data.people_fully_vaccinated ? commas(data.people_fully_vaccinated) : "N/A"}</td>
            </>}
        </tr>
    );
};

export default VaccinationRow;