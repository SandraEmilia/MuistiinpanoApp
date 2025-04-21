import { create } from "zustand";

const UseNoteStore = create((set, get) => ({
  note: [],
  lisääRivi: (uusi) => {
    const currentNote = get().note;

    const uusiId =
      currentNote.length > 0
      ? Math.max(...currentNote.map((i) => i.id)) +1
      : 1;

      const uusiRivi = {...uusi, id: uusiId};
      set({ note: [...currentNote, uusiRivi]});
  },
  poistaRivi: (rivi) =>
    set((state) => ({
      note: state.note.filter((n) => n.text !== rivi.text),
    })),
    
  fetchNote: async () => {
    try {
      const response = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");
      const tiedot = await response.json();

     const currentNote = get().note;

     const uudet = tiedot.filter(apiNotet =>
      !currentNote.some(lisättyNote => lisättyNote.id === apiNotet.id)
     );


      set({ note: [...currentNote, ...uudet] });
    } catch (error) {
      console.error("Virhe noudettaessa dataa", error);
    }
  }
}));


export { UseNoteStore };
