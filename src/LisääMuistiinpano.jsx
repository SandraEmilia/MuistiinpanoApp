import Select from "react-select";
import { UseKurssiStore } from "./stores/UseKurssiStore";
import { useState } from "react";
import { Muistiinpano } from "./utils/Muistiinpano";
import { UseNoteStore } from "./stores/UseNoteStore";
import MuistiinpanoListaus from "./MuistiinpanoListaus";

function LisääMuistiinpano() {

    const lisääRivi = UseNoteStore((state) => state.lisääRivi);
    const data = UseKurssiStore((state) => state.data);

    const [optionPicked, setOptionPicked] = useState(null);
    const [teksti, setTeksti] = useState("");

    const handleClick = () => {
        if (!optionPicked || teksti.trim() === "") return;

        const uusi = Muistiinpano(teksti, optionPicked);
        console.log("Lisättävä muistiinpano:", uusi);
        
        lisääRivi(uusi);
        setTeksti("");
    };

    

    return (
        <div style={{border:"1px solid black"}}>
            <h3>Lisää muistiinpano</h3>

            <Select
            placeholder="Valitse kurssi..."
            options={data}
            getOptionValue={(d) => d.id}
            getOptionLabel={(d) => d.name}
            onChange={(option) => setOptionPicked(option)}
            isDisabled={!!optionPicked} />

            <br />

            <textarea
            value={teksti}
            onChange={(e) => setTeksti(e.target.value)}
            placeholder="Kirjoita muistiinpano..."
            disabled={!optionPicked}
            />

            <br />

            <button 
            onClick={handleClick}
            disabled={!optionPicked}
            >Lisää</button>

            <MuistiinpanoListaus selectedCourseId={optionPicked?.id} compact={true} />
            
        </div>
    );
}

export default LisääMuistiinpano;