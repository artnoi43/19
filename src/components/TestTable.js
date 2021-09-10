import { useContext } from 'react';
import { appContext } from '../App'
import TestRow from './TestRow';

function RelativeHeaders() {
    return (
        <>
            <th className="relative">Positive Rate</th>
            <th className="relative">Tests Per Case</th>
            <th className="relative">New Tests PT</th>
            <th className="relative">New Tests Smoothed PT</th>
            <th className="relative">Total Tests PT</th>
        </>
    );
};

function AbsoluteHeaders() {
    return (
        <>
            <th>New Tests</th>
            <th>New Tests Smoothed</th>
            <th>Total Tests</th>
        </>
    );
};

function TestTable({ data, thailand }) {
    const { relative } = useContext(appContext);

    return (
        <>
            <table>
                <caption><strong>
                    Global COVID-19 Tests Data {relative ? "(PT = Per Thousand)" : null}
                </strong></caption>
                <thead className="small-table-header">
                    <th>Location</th>
                    {relative ? <RelativeHeaders /> : <AbsoluteHeaders />}
                </thead>
                <tbody>
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