import Select from "react-select";
import { UseKurssiStore } from "./stores/UseKurssiStore";
import { useState } from "react";
import { Muistiinpano } from "./utils/Muistiinpano";
import { UseNoteStore } from "./stores/UseNoteStore";
import MuistiinpanoListaus from "./MuistiinpanoListaus";

function LisääMuistiinpano() {

    const lisääRivi = UseNoteStore((state) => state.lisääRivi);
    const data = UseKurssiStore((state) => state.data);

    //Tallennetaan käyttäjän valitsema kurssi sekä kirjoittama muistiinpano
    const [optionPicked, setOptionPicked] = useState(null);
    const [teksti, setTeksti] = useState("");

    //käsittelee muistiinpanon lisäyksen klikattaessa.
    const handleClick = () => {
        if (!optionPicked || teksti.trim() === "") return; //Estää muistiinpanon lisäämisen, jos kurssia ei ole valittu tai kenttä on tyhjä

        //Luodaan valitulle kurssille uusi muistiinpano
        const uusi = Muistiinpano(teksti, optionPicked);
        console.log("Lisättävä muistiinpano:", uusi);
        
        //Lisää muistiinpanon storeen
        lisääRivi(uusi);
        setTeksti(""); //Tyhjentää kentän
    };

    

    return (
        <div className="bg-stone-300 h-70 pt-2 pb-2">
            <h3 className="text-stone-600 p-4 text-xl text-center">Lisää muistiinpano</h3>

            <Select
            className="p-2 w-1/2 block mx-auto mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-stone-600"
            placeholder="Valitse kurssi..."
            options={data}
            getOptionValue={(d) => d.id}
            getOptionLabel={(d) => d.name}
            onChange={(option) => setOptionPicked(option)}
            isDisabled={!!optionPicked} />  
            {/* Valintalista select lukkiutuu, kun käyttäjä on valinnut kurssin */}

            <br />

            <textarea
            className="border border-stone-600 rounded-md p-2 w-1/2 block mx-auto mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-stone-600 mb-0"
            value={teksti}
            onChange={(e) => setTeksti(e.target.value)}
            placeholder="Kirjoita muistiinpano..."
            disabled={!optionPicked} //Tekstikenttään ei voi kirjoittaa ennen kuin kurssi on valittu.
            />

            <br />

            <button 
            onClick={handleClick}
            disabled={!optionPicked} //Buttonia ei voi klikata ennen kuin kurssivalinta on tehty.
            className="border-2 border-stone-600 px-4 py-2  text-stone-600 rounded-md mx-auto block hover:bg-stone-600 hover:text-white transition mb-4"
            >Lisää</button>

            <MuistiinpanoListaus selectedCourseId={optionPicked?.id} compact={true} />
            
        </div>
    );
}

export default LisääMuistiinpano;