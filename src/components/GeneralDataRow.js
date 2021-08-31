function GeneralDataRow({ data }) {
    return (
        <tr>
            <td><strong>{data.location}</strong></td>
            <td>{data.population ? data.population : "N/A"}</td>
            <td className="relative">{data.new_cases_per_million ? data.new_cases_per_million : "N/A"}</td>
            <td>{data.new_cases ? data.new_cases : "N/A"}</td>
            <td>{data.new_cases_smoothed ? data.new_cases_smoothed : "N/A"}</td>
            <td className="relative">{data.new_deaths_per_million ? data.new_deaths_per_million : "N/A"}</td>
            <td>{data.new_deaths ? data.new_deaths : "N/A"}</td>
            <td>{data.new_deaths_smoothed ? data.new_deaths_smoothed : "N/A"}</td>
            <td className="relative">{data.total_deaths_per_million ? data.total_deaths_per_million : "N/A"}</td>
            <td>{data.total_deaths ? data.total_deaths : "N/A"}</td>
            <td>{data.last_updated_date}</td>
        </tr>
    )
}

export default GeneralDataRow