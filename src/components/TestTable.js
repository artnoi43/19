import { useContext } from 'react';
import { appContext } from '../App';
import LocationHeader from './LocationHeader';
import TestRow from './TestRow';

function RelativeHeaders() {
    return (
        <>
            <LocationHeader />
            <th>Positive Rate</th>
            <th>Tests Per Case</th>
            <th>New Tests PT</th>
            <th>New Tests Smoothed PT</th>
            <th>Total Tests PT</th>
        </>
    );
};

function AbsoluteHeaders() {
    return (
        <>
            <LocationHeader />
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