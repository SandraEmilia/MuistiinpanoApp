import Select from "react-select";
import { UseKurssiStore } from "./stores/UseKurssiStore";
import { useEffect, useState } from "react";
import { UseNoteStore } from "./stores/UseNoteStore";
import Muistiinpanot from "./Muistiinpanot";

function MpNäkymä () {

    //Haetaan kurssit ja muistiinpanot tilanhallinta storesta
    const data = UseKurssiStore((state) => state.data);
    const note = UseNoteStore((state) => state.note);
    const fetchNote = UseNoteStore((state) => state.fetchNote);
    
    //Alustetaan valittu kurssi siten, että oletusnäkymänä on "Kaikki kurssit"
    const [optionPicked, setOptionPicked] = useState({ name: "Kaikki kurssit", id: "all"});

    //Valikon vaihtoehtoina ensin "kaikki kurssit" + kaikki lisätyt kurssit
    const valikko = [
        {name: "Kaikki kurssit", id: "all"},
        ...data
    ];

    //Hakee muistiinpanot, kun komponentti latautuu
    useEffect(() => {
        fetchNote();
    }, [fetchNote]);

    //Suodattaa näytettävät muistiinpanot kurssin perusteella
    const näkyvät = optionPicked.id === "all" //Jos valittuna on "kaikki kurssit", näytetään kaikki muistiinpanot.
    ? note
    : note.filter((n) => n.course.id === optionPicked.id); //Muuten vain valitun kurssin muistiinpanot
    
    return (
        <div className="bg-stone-300 h-70 pt-2 pb-2">
            <h3 className="text-stone-600 p-4 text-xl text-center">Muistiinpanot</h3>

            {/* Drop-down valikko toteutettu react-select -kirjastolla */}
            <Select
            className="p-2 w-1/2 block mx-auto mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-stone-600"
            placeholder= "Valitse kurssi..."
            options={valikko}
            getOptionLabel={(d) => d.name}
            getOptionValue={(d) => d.id}
            onChange={(option) => setOptionPicked(option)}
            value={optionPicked} />

            <div>
            
            {/* Näytetään muistiinpanot, tai tulostetaan "ei muistiinpanoja", jos näytettäviä muistiinpanoja ei ole */}
                {näkyvät.length === 0 ? (
                    <p className="text-center text-stone-600">Ei muistiinpanoja</p>
                ) : (
                    näkyvät.map((n,i) => (    //Map-metodi käy läpi jokaisen alkion arrayssa ja jokaisesta luodaan yksi muistiinpanot-komponentti
                        <Muistiinpanot note={n} key={i} /> 
                    ))
                    )
                }
            </div>
        </div>

        
    );
}

export default MpNäkymä;