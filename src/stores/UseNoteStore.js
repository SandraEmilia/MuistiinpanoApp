import { create } from "zustand";


//Zustand-store muistiinpanojen hallintaan
const UseNoteStore = create((set, get) => ({

  //Tähän tallennetaan muistiinpanot
  note: [],

  //Lisäää uuden muistiinpanon
  lisääRivi: (uusi) => {
    const currentNote = get().note;

    //Generoidaan uusi id
    const uusiId =
      currentNote.length > 0
      ? Math.max(...currentNote.map((i) => i.id)) +1
      : 1;

      const uusiRivi = {...uusi, id: uusiId};
      set({ note: [...currentNote, uusiRivi]}); //Päivitetään tila uudella rivillä
  },

  //Poistaa muistiinpanon
  poistaRivi: (rivi) =>
    set((state) => ({
      note: state.note.filter((n) => n.text !== rivi.text),
    })),
    
  //Noutaa muistiinpanot ulkoisesta API:sta ja lisää vain ne, joita ei vielä ole.
  fetchNote: async () => {
    try {
      const response = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");
      const tiedot = await response.json();

     const currentNote = get().note;

     //Suodattaa id:n perusteella pois muistiinpanot, jotka on jo ladattuna.
     const uudet = tiedot.filter(apiNotet =>
      !currentNote.some(lisättyNote => lisättyNote.id === apiNotet.id)
     );


     //Lisätään uudet muistiinpanot nykyisten lisäksi.
      set({ note: [...currentNote, ...uudet] });
    } catch (error) {
      console.error("Virhe noudettaessa dataa", error);
    }
  }
}));


export { UseNoteStore };
