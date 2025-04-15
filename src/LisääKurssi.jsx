import { UseKurssiStore } from "./stores/UseKurssiStore";

function LisääKurssi() {

    const data = UseKurssiStore((state) => state.data);
    
    const viimeinen = data[data.length -1];

    
    return (
        <div style={{border: "1px solid black"}}>
            

            <p>Kurssi: "{viimeinen.kurssi}" lisätty id:llä {viimeinen.kurssi_id}</p>
        </div>
    );
}

export default LisääKurssi;