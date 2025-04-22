import { create } from "zustand";


//Zustand-store kurssien hallintaan
const UseKurssiStore = create((set, get) => ({

  //Tähän tallennetaan kurssidata
    data: [],

    // Lisätään uusi kurssi ja luodaan automaattisesti uusi Id
    addRow: (r) => {
        const currentData = get().data;
        const uusiId = 
            currentData.length > 0
            ? Math.max(...currentData.map((k) => k.id)) + 1    //Suurin olemassa oleva id + 1
            : 1;     //Jos Id:itä ei ole, aloitetaan luominen 1:stä.
        const uusiRivi = { ...r, id: uusiId};
        set({ data: [...currentData, uusiRivi] });
    },

    //Hakee kurssitiedot ulkoisesta API:sta ja tallentaa ne tilanhallinta storeen
    fetchData: async () => {
      try {
        const response = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses");
        const tiedot = await response.json();
        set({ data: tiedot });
      } catch (error) {
        console.error("Virhe tietojen noudossa", error);
      }
    },


}));

export { UseKurssiStore };