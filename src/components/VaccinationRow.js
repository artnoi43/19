import { useContext } from 'react';
import { appContext } from '../App';

function VaccinationRow({ data }) {

    const { relative } = useContext(appContext);
    return (
        <tr>
            <td><strong>{data.location}</strong></td>
            {relative ? <>
                <td>{data.new_vaccinations_smoothed_per_million}</td>
                <td>{data.total_vaccinations_per_hundred ? data.total_vaccinations_per_hundred : "N/A"}</td>
                <td>{data.people_vaccinated_per_hundred ? data.people_vaccinated_per_hundred : "N/A"}</td>
                <td>{data.people_fully_vaccinated_per_hundred}</td>
                <td>{data.total_boosters_per_hundred}</td>
            </> : <>
                <td>{data.new_vaccinations ? data.new_vaccinations : "N/A"}</td>
                <td>{data.total_vaccinations ? data.total_vaccinations : "N/A"}</td>
                <td>{data.people_vaccinated ? data.people_vaccinated : "N/A"}</td>
                <td>{data.people_fully_vaccinated ? data.people_fully_vaccinated : "N/A"}</td>
            </>}
        </tr>
    )
}

export default VaccinationRow