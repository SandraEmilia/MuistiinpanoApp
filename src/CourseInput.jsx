import { useState } from "react";
import { kurssinNimi } from "./utils/KurssinNimi";
import { UseKurssiStore } from "./stores/UseKurssiStore";


function CourseInput() {

    const addRow = UseKurssiStore((state) => state.addRow);

    const handleClick = () => {
        console.log("Painettu!");
        let n = kurssinNimi(text);
        console.log(n);
        addRow(n);
        setText("");
    };

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };



    return (
        <div style={{border: "1px solid black"}}>
            <h3>Lisää kurssi:</h3>
            <textarea
            onChange={(e) => handleChange(e)}
            value={text}
            name="courseinput"
            ></textarea> <br />
            <button onClick={handleClick}>Lisää</button>
        </div>
    );
}

export default CourseInput;