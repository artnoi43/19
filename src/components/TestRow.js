import { useContext } from 'react';
import { appContext } from '../App';

function TestRow({ data }) {
    const { relative, commas } = useContext(appContext)
    return (
        <tr>
            <td><strong>{data.location}</strong></td>
            {relative ? <>
                <td>{data.positive_rate ? commas(data.positive_rate) : "N/A"}</td>
                <td>{data.tests_per_case ? commas(data.tests_per_case) : "N/A"}</td>
                <td>{data.new_tests_per_thousand ? commas(data.new_tests_per_thousand) : "N/A"}</td>
                <td>{data.new_tests_smoothed_per_thousand ? commas(data.new_tests_smoothed_per_thousand) : "N/A"}</td>
                <td>{data.total_tests_per_thousand ? commas(data.total_tests_per_thousand) : "N/A"}</td>
            </> : <>
                <td>{data.new_tests ? commas(data.new_tests) : "N/A"}</td>
                <td>{data.new_tests_smoothed ? commas(data.new_tests_smoothed) : "N/A"}</td>
                <td>{data.total_tests ? commas(data.total_tests) : "N/A"}</td>
            </>}
        </tr>
    )
}

export default TestRow
