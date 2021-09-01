import { useContext } from 'react';
import { appContext } from '../App';
import VaccinationRow from './VaccinationRow';

function Vaccination({ data, thailand }) {
    const { relative } = useContext(appContext)
    return (
        <table>
            <caption><strong>
                Global COVID-19 Vaccination Data {relative ? "(PM = Per Million, PH = Per Hundred)" : null}
            </strong></caption>
            <tbody>
                <tr className="small-table-header">
                    <th>Location</th>
                    {relative ? <>
                        <th>New Vaccination Smoothed PM</th>
                        <th>Total Vaccinations PH</th>
                        <th>People Vaccinated PH</th>
                        <th>People Fully Vaccinated PH</th>
                        <th>Total Boosters PH</th>
                    </> : <>
                        <th>New Vaccinations</th>
                        <th>Total Vaccinations</th>
                        <th>People Vaccinated</th>
                        <th>People Fully Vaccinated</th>
                    </>}
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