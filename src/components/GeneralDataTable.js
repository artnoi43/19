import GeneralDataRow from './GeneralDataRow';

function GeneralData({ data, thailand }) {
    return (
        <table>
            <caption>Global COVID-19 Data</caption>
            <tbody>
                <tr className="small-table-header">
                    <th>Location</th>
                    <th>Population</th>
                    <th className="relative">New Cases (Per Million)</th>
                    <th>New Cases</th>
                    <th>New Cases (Smoothed)</th>
                    <th className="relative">New Deaths (Per Million)</th>
                    <th>New Deaths</th>
                    <th>New Deaths (Smoothed)</th>
                    <th className="relative">Total Deaths (Per Million)</th>
                    <th>Total Deaths</th>
                    <th>Updated</th>
                </tr>
                <GeneralDataRow data={thailand} />
                {data.map(
                    data => <GeneralDataRow key={data.location} data={data} />
                )}
            </tbody>
        </table>
    )
}

export default GeneralData
