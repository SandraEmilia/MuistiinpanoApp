import { create } from "zustand";


const UseKurssiStore = create((set, get) => ({
    data: [],
    addRow: (r) => {
        const currentData = get().data;
        const uusiId = 
            currentData.length > 0
            ? Math.max(...currentData.map((k) => k.id)) + 1
            : 1;
        const uusiRivi = { ...r, id: uusiId};
        set({ data: [...currentData, uusiRivi] });
    },
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