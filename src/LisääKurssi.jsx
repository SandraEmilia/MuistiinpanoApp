
function LisääKurssi() {

   

    let kurssi = "Javascript";
    let kurssi_id = 5;
    
    return (
        <div style={{border: "1px solid black"}}>
            

            <p>Kurssi: "{kurssi}" lisätty id:llä {kurssi_id}</p>
        </div>
    );
}

export default LisääKurssi;