import { Link } from 'react-router-dom';
import VaccinationRow from './VaccinationRow';

function Vaccination({ data, thailand }) {
    return (
        <table>
            <caption>Global COVID-19 Vaccination Data - <Link to="/">Click Here for General COVID-19 Data</Link></caption>
            <tbody>
                <tr className="small-table-header">
                    <th>Location</th>
                    <th>New Vaccinations</th>
                    <th className="per-million">Total Vaccinations (Per Hundred)</th>
                    <th>Total Vaccinations</th>
                    <th className="per-million">People Vaccinated (Per Hundred)</th>
                    <th>People Vaccinated</th>
                    <th className="per-million">People Fully Vaccinated (Per Hundred)</th>
                    <th>People Fully Vaccinated</th>
                </tr>
                <VaccinationRow data={thailand} />
                {data.map(
                    data => <VaccinationRow key={data.location} data={data} />
                )}
            </tbody>
        </table>
    )
}

export default Vaccination