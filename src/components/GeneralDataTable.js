import { useContext } from 'react';
import { appContext } from '../App';
import LocationHeader from './LocationHeader';
import GeneralDataRow from './GeneralDataRow';

function RelativeHeaders() {
    return (
        <>
            <LocationHeader />
            <th>New Cases PM</th>
            <th>New Deaths PM</th>
            <th>Total Deaths PM</th>
            <th>Updated</th>
        </>
    );
};

function AbsoluteHeaders() {
    return (
        <>
            <LocationHeader />
            <th>New Cases</th>
            <th>New Cases (Smoothed)</th>
            <th>New Deaths</th>
            <th>New Deaths (Smoothed)</th>
            <th>Total Deaths</th>
            <th>Updated</th>
        </>
    );
};

function GeneralData({ data, thailand }) {
    const { relative } = useContext(appContext);
    return (
        <table>
            <caption><strong>
                Global COVID-19 Data {relative ? "(PM = Per Million)" : null}
            </strong></caption>
            <thead className="small-table-header">
                {relative ? <RelativeHeaders /> : <AbsoluteHeaders />}
            </thead>
            <tbody>
                <GeneralDataRow data={thailand} />
                {data.map(
                    countryData => <GeneralDataRow key={countryData.location} data={countryData} />
                )}
            </tbody>
        </table>
    );
};

export default GeneralData;
