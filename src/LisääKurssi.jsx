import { UseKurssiStore } from "./stores/UseKurssiStore";
import { useEffect } from "react";

function LisääKurssi() {

    const data = UseKurssiStore((state) => state.data);
    const fetchData = UseKurssiStore((state) => state.fetchData);

    useEffect(() => {
            fetchData();
    }, []);

    if (data.length === 0) {
        return <p className="text-center text-stone-600">Ladataan kurssitietoja...</p>;
    }

    
    const viimeinen = data[data.length -1];

    
    return (
        <div className="border-t-4 text-stone-600 text-center py-4">
            

            <p>Kurssi: "{viimeinen.name}" lisätty id:llä {viimeinen.id}</p>
        </div>
    );
}

export default LisääKurssi;