import Select from "react-select";
import { UseKurssiStore } from "./stores/UseKurssiStore";
import { useEffect, useState } from "react";
import { UseNoteStore } from "./stores/UseNoteStore";
import { Muistiinpano } from "./utils/Muistiinpano";
import Muistiinpanot from "./Muistiinpanot";

function MpNäkymä () {

    const data = UseKurssiStore((state) => state.data);
    const note = UseNoteStore((state) => state.note);
    const fetchNote = UseNoteStore((state) => state.fetchNote);
    
    const [optionPicked, setOptionPicked] = useState({ name: "Kaikki kurssit", id: "all"});
    const valikko = [
        {name: "Kaikki kurssit", id: "all"},
        ...data
    ];

    useEffect(() => {
        fetchNote();
    }, [fetchNote]);

    const näkyvät = optionPicked.id === "all"
    ? note
    : note.filter((n) => n.course.id === optionPicked.id);
    
    return (
        <div className="bg-stone-300 h-70 pt-2 pb-2">
            <h3 className="text-stone-600 p-4 text-xl text-center">Muistiinpanot</h3>
            <Select
            className="p-2 w-1/2 block mx-auto mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-stone-600"
            placeholder= "Valitse kurssi..."
            options={valikko}
            getOptionLabel={(d) => d.name}
            getOptionValue={(d) => d.id}
            onChange={(option) => setOptionPicked(option)}
            value={optionPicked} />

            <div>
                {näkyvät.length === 0 ? (
                    <p className="text-center text-stone-600">Ei muistiinpanoja</p>
                ) : (
                    näkyvät.map((n,i) => (
                        <Muistiinpanot note={n} key={i} />
                    ))
                    )
                }
            </div>
        </div>

        
    );
}

export default MpNäkymä;