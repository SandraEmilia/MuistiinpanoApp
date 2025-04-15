
function KurssiLuettelo ({ data }) {
    return (
        <div style={{ border: "1px solid black", marginBottom: "8px", padding: "4px" }}>
            
            <p>{data.kurssi} (id: {data.kurssi_id})</p>

        </div>
    );
}

export default KurssiLuettelo;