
import KurssiLuettelo from "./KurssiLuettelo";
import { UseKurssiStore } from "./stores/UseKurssiStore";

function Kurssit(){

    const data = UseKurssiStore((state) => state.data);
       

    return (
        <div>
            <h3>Kurssit:</h3>
            {data.map((d, i) => (
                <KurssiLuettelo data={d} key={i} />
            ))}
        </div>
        
    );
}

export default Kurssit;