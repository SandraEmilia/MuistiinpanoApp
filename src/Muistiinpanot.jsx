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
            
            <div>
                {compact ? (
                 <p className="border border-2 border-stone-600 p-2 w-1/2 mx-auto my-4 ">{note.text}</p>
                ) : (
                    <div className="border border-2 border-stone-600 p-2 w-1/2 mx-auto my-4 ">
                        <div className="relative">
                            <span className="absolute top-2 right-2 text-stone-900 cursor-pointer border border-1 border-stone-600 px-1 py-0 bg-stone-200 text-xs"
                            aria-label="Poista muistiinpano"
                            tabIndex={0}
                            onClick={() => handleCloseClick(note)}
                            >
                            X
                            </span>
                        </div>
                        <p className="text-stone-600">
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