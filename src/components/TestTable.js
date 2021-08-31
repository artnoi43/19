import TestRow from './TestRow';

function TestTable({ data, thailand }) {
    return (
        <table>
            <caption>Global COVID-19 Tests Data</caption>
            <tbody>
                <tr className="small-table-header">
                    <th>Location</th>
                    <th>Positive Rate</th>
                    <th>Tests Per Case</th>
                    <th>New Tests</th>
                    <th className="relative">New Tests (Per Thousand)</th>
                    <th>New Tests Smoothed</th>
                    <th className="relative">New Tests Smoothed (Per Thousand)</th>
                    <th>Total Tests</th>
                    <th className="relative">Total Tests (Per Thousand)</th>
                </tr>
                <TestRow data={thailand} />
                {data.map(
                    data => <TestRow key={data.location} data={data} />
                )}
            </tbody>
        </table>
    )
}

export default TestTable