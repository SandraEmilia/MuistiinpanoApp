function Etusivu() {

    //Aloitussivu
    return (
        <div className="bg-stone-300 h-48 pt-2 pb-2">
            <h3 className="text-xl m-4 pt-2 text-center text-stone-600">Tervetuloa MuistiinpanoAppiin!</h3>
            <p className="text-center m-4 py-4 text-stone-600">Tämän sovelluksen avulla voit luoda kurssikohtaisia muistiinpanoja. <br />
            Ylhäältä valikosta voit siirtyä lisäämään kursseja, luomaan muistiinpanoja tai selaamaan muistiinpanoja.</p>
        </div>
    );
}

export default Etusivu;