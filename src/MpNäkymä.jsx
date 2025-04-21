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
        <div>
            <h3>Muistiinpanot</h3>
            <Select
            placeholder= "Valitse kurssi..."
            options={valikko}
            getOptionLabel={(d) => d.name}
            getOptionValue={(d) => d.id}
            onChange={(option) => setOptionPicked(option)}
            value={optionPicked} />

            <div>
                {
                    näkyvät.map((n,i) => (
                        <Muistiinpanot note={n} key={i} />
                    ))}
            </div>
        </div>

        
    );
}

export default MpNäkymä;