function LocationData({ data, commas }) {
    return (
        <>
            <td><strong>{data.location}</strong></td>
            <td>{data.population ? commas(data.population) : "N/A"}</td>
        </>
    );
};

export default LocationData;
