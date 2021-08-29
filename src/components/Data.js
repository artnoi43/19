import { Link } from 'react-router-dom';
import DataRow from './DataRow';

function Data({ data, thailand }) {
    return (
        <table>
            <caption>Global COVID-19 Data - <Link to="/vaccination">Click Here for Vaccinaion Data</Link></caption>
            <tbody>
                <tr className="small-table-header">
                    <th>Location</th>
                    <th>Population</th>
                    <th className="per-million">New Cases (Per Million)</th>
                    <th>New Cases</th>
                    <th>New Cases (Smoothed)</th>
                    <th className="per-million">New Deaths (Per Million)</th>
                    <th>New Deaths</th>
                    <th>New Deaths (Smoothed)</th>
                    <th className="per-million">Total Deaths (Per Million)</th>
                    <th>Total Deaths</th>
                    <th>Updated</th>
                </tr>
                <DataRow data={thailand} />
                {data.map(
                    data => <DataRow key={data.location} data={data} />
                )}
            </tbody>
        </table>
    )
}

export default Data
