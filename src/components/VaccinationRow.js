function VaccinationRow({ data }) {
    return (
        <tr>
            <td>{data.location}</td>
            <td>{data.new_vaccinations ? data.new_vaccinations : "N/A"}</td>
            <td className="per-million">{data.total_vaccinations_per_hundred ? data.total_vaccinations_per_hundred : "N/A"}</td>
            <td>{data.total_vaccinations ? data.total_vaccinations : "N/A"}</td>
            <td>{data.people_vaccinated_per_hundred ? data.people_vaccinated_per_hundred : "N/A"}</td>
            <td className="per-million">{data.people_vaccinated ? data.people_vaccinated : "N/A"}</td>
            <td>{data.people_fully_vaccinated_per_hundred ? data.people_fully_vaccinated_per_hundred : "N/A"}</td>
            <td>{data.people_fully_vaccinated ? data.people_fully_vaccinated : "N/A"}</td>
        </tr>
    )
}

export default VaccinationRow