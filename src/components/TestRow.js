import { useContext } from 'react';
import { appContext } from '../App';

function TestRow({ data }) {
    const { relative } = useContext(appContext)
    return (
        <tr>
            <td><strong>{data.location}</strong></td>
            {relative ? <>
                <td>{data.positive_rate ? data.positive_rate : "N/A"}</td>
                <td>{data.tests_per_case ? data.tests_per_case : "N/A"}</td>
                <td>{data.new_tests_per_thousand ? data.new_tests_per_thousand : "N/A"}</td>
                <td>{data.new_tests_smoothed_per_thousand ? data.new_tests_smoothed_per_thousand : "N/A"}</td>
                <td>{data.total_tests_per_thousand ? data.total_tests_per_thousand : "N/A"}</td>
            </> : <>
                <td>{data.new_tests ? data.new_tests : "N/A"}</td>
                <td>{data.new_tests_smoothed ? data.new_tests_smoothed : "N/A"}</td>
                <td>{data.total_tests ? data.total_tests : "N/A"}</td>
            </>}
        </tr>
    )
}

export default TestRow
