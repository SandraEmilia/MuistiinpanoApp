import Muistiinpanot from "./Muistiinpanot";
import { UseNoteStore } from "./stores/UseNoteStore";
import { useEffect } from "react";

//Listaa muistiinpanot tietyn kurssin perusteella, jos sellainen on valittu
function MuistiinpanoListaus({ compact = false, selectedCourseId = null }) {

    //Haetaan muistiinpanot tilanhallinta storesta
    const note = UseNoteStore((state) => state.note);
    const fetchNote = UseNoteStore((state) => state.fetchNote);
    

// Hakee muistiinpanot komponentin latautuessa
    useEffect(() => {
                fetchNote();
        }, []);

        //Suodattaa näkyviin vain ne muistiinpanot, jotka kuuluvat valitulle kurssille
    const näkyvät = selectedCourseId
    ? note.filter((n) => n.course.id === selectedCourseId)
    : []; //Näkymä jää tyhjäksi, jos kurssia ei ole valittu

    return (
        <div className="border-t-4 text-stone-600 text-center py-4">
            {/* Käydään läpi näkyvät muistiinpanot ja renderöidään jokainen omaan komponenttiin */}
            {näkyvät.map((n, i) => (
                <Muistiinpanot 
                note={n} 
                key={i} 
                compact={compact} /> //Voidaan valita tiivistetty tapa piirtää komponentti
                
            ))}
        </div>
    );
}

export default MuistiinpanoListaus;