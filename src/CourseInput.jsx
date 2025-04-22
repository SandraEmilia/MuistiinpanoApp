import { useEffect, useState } from "react";
import { kurssinNimi } from "./utils/KurssinNimi";
import { UseKurssiStore } from "./stores/UseKurssiStore";
import LisääMuistiinpano from "./LisääMuistiinpano";
import LisääKurssi from "./LisääKurssi";


function CourseInput() {

    //Hakee tilanhallinta storesta datan lisäys ja haku -funktiot
    const addRow = UseKurssiStore((state) => state.addRow);
    const fetchData = UseKurssiStore((state) => state.fetchData);

    useEffect(() => {
        fetchData();
    }, []);


// Käyttäjän klikatessa "lisää" -nappia, käsitellään lisättävän kurssin nimi ja tallennetaan se listaan.
    const handleClick = () => {
        let n = kurssinNimi(text);
        console.log(n);
        addRow(n);
        setText("");
    };

    //Tilamuuttuja tekstikentälle (kurssin nimi)
    const [text, setText] = useState("");

    //Käsittelee tekstikentän muutokset
    const handleChange = (e) => {
        setText(e.target.value);
    };



    return (
        <div className="bg-stone-300 h-[18rem] pt-2 pb-2">
            <h3 className="text-stone-600 p-4 text-xl text-center">Lisää kurssi:</h3>
            <textarea
            className="border border-stone-600 rounded-md p-2 w-1/2 block mx-auto mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-stone-600 mb-0"
            onChange={(e) => handleChange(e)}
            value={text}
            name="courseinput"
            ></textarea> <br />
            <button
            className="border-2 border-stone-600 px-4 py-2  text-stone-600 rounded-md mx-auto block hover:bg-stone-600 hover:text-white transition mb-4"
            onClick={handleClick}>Lisää</button>

            <LisääKurssi />
        </div>
    );
}

export default CourseInput;