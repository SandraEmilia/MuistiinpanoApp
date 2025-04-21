import Muistiinpanot from "./Muistiinpanot";
import { UseNoteStore } from "./stores/UseNoteStore";
import { useEffect } from "react";


function MuistiinpanoListaus({ compact = false, selectedCourseId = null }) {

    const note = UseNoteStore((state) => state.note);
    const fetchNote = UseNoteStore((state) => state.fetchNote);
    


    useEffect(() => {
                fetchNote();
        }, []);

    const näkyvät = selectedCourseId
    ? note.filter((n) => n.course.id === selectedCourseId)
    : [];

    return (
        <div>
            {näkyvät.map((n, i) => (
                <Muistiinpanot note={n} key={i} compact={compact} />
                
            ))}
        </div>
    );
}

export default MuistiinpanoListaus;