import { UseKurssiStore } from "./stores/UseKurssiStore";
import { useEffect } from "react";

function LisääKurssi() {

    const data = UseKurssiStore((state) => state.data);
    const fetchData = UseKurssiStore((state) => state.fetchData);

    useEffect(() => {
            fetchData();
    }, []);

    if (data.length === 0) {
        return <p>Ladataan kurssitietoja...</p>;
    }

    
    const viimeinen = data[data.length -1];

    
    return (
        <div style={{border: "1px solid black"}}>
            

            <p>Kurssi: "{viimeinen.name}" lisätty id:llä {viimeinen.id}</p>
        </div>
    );
}

export default LisääKurssi;