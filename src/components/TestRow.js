import { useContext } from 'react';
import { appContext } from '../App';
import LocationData from './LocationData';

function RelativeData({ data, commas }) {
    return (
        <>
            <LocationData data={data} commas={commas} />
            <td>{data.positive_rate ? commas(data.positive_rate) : "N/A"}</td>
            <td>{data.tests_per_case ? commas(data.tests_per_case) : "N/A"}</td>
            <td>{data.new_tests_per_thousand ? commas(data.new_tests_per_thousand) : "N/A"}</td>
            <td>{data.new_tests_smoothed_per_thousand ? commas(data.new_tests_smoothed_per_thousand) : "N/A"}</td>
            <td>{data.total_tests_per_thousand ? commas(data.total_tests_per_thousand) : "N/A"}</td>
        </>
    );
};

function AbsoluteData({ data, commas }) {
    return (
        <>
            <LocationData data={data} commas={commas} />
            <td>{data.new_tests ? commas(data.new_tests) : "N/A"}</td>
            <td>{data.new_tests_smoothed ? commas(data.new_tests_smoothed) : "N/A"}</td>
            <td>{data.total_tests ? commas(data.total_tests) : "N/A"}</td>
        </>
    );
};

function TestRow({ data }) {
    const { relative, commas } = useContext(appContext);
    return (
        <tr>
            {relative ? (
                <RelativeData data={data} commas={commas} />
            ) : (
                <AbsoluteData data={data} commas={commas} />
            )}
        </tr>
    );
};

export default TestRow;
