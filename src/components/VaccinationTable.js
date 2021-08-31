import VaccinationRow from './VaccinationRow';

function Vaccination({ data, thailand }) {
    return (
        <table>
            <caption>Global COVID-19 Vaccination Data</caption>
            <tbody>
                <tr className="small-table-header">
                    <th>Location</th>
                    <th>New Vaccinations</th>
                    <th className="relative">Total Vaccinations (Per Hundred)</th>
                    <th>Total Vaccinations</th>
                    <th className="relative">People Vaccinated (Per Hundred)</th>
                    <th>People Vaccinated</th>
                    <th className="relative">People Fully Vaccinated (Per Hundred)</th>
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