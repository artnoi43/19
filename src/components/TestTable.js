import { useContext } from 'react';
import { appContext } from '../App'
import TestRow from './TestRow';

function TestTable({ data, thailand }) {
    const { relative } = useContext(appContext);

    return (
        <>
            <table>
                <caption><strong>
                    Global COVID-19 Tests Data {relative ? "(PT = Per Thousand)" : null}
                </strong></caption>
                <tbody>
                    <tr className="small-table-header">
                        <th>Location</th>
                        {relative ? <>
                            <th className="relative">Positive Rate</th>
                            <th className="relative">Tests Per Case</th>
                            <th className="relative">New Tests PT</th>
                            <th className="relative">New Tests Smoothed PT</th>
                            <th className="relative">Total Tests PT</th>
                        </> : <>
                            <th>New Tests</th>
                            <th>New Tests Smoothed</th>
                            <th>Total Tests</th>
                        </>}
                    </tr>
                    <TestRow data={thailand} />
                    {data.map(
                        data => <TestRow key={data.location} data={data} />
                    )}
                </tbody>
            </table >
        </>

    )
}

export default TestTable