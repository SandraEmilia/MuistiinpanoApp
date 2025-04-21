import { UseNoteStore } from "./stores/UseNoteStore";
import { useEffect } from "react";


function Muistiinpanot({ note, compact = false }) {

    const fetchNote = UseNoteStore((state) => state.fetchNote);
    const poistaRivi = UseNoteStore((state) => state.poistaRivi);

    const handleCloseClick = (rivi) => {
        console.log(rivi);
        poistaRivi(rivi);
    };

    useEffect(() => {
        fetchNote();
}, []);
    return (
        <div>
            
            <div style={{border: "1px solid black"}}>
                {compact ? (
                 <p>{note.text}</p>
                ) : (
                    <div>
                        <div className="relative">
                            <span className="absolute top-2 right-2 text-gray-500 cursor-pointer"
                            aria-label="Poista muistiinpano"
                            tabIndex={0}
                            onClick={() => handleCloseClick(note)}
                            >
                            X
                            </span>
                        </div>
                        <p style={{border: "1px solid black"}}>
                            {note.timestamp} <br />
                            {note.course.name} (id: {note.course.id}) <br />
                            {note.text}
                        </p>
                    </div>
                )}
            </div>
        </div>            
    );
}

export default Muistiinpanot;