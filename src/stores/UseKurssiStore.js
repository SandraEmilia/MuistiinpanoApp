import { create } from "zustand";

let data_orig = [
    {
      kurssi: "Javascript",
      kurssi_id: 1
    },
    {
      kurssi: "Versionhallinta",
      kurssi_id: 2
    },
    {
      kurssi: "Fysiikka",
      kurssi_id: 3
    },
  ];

const UseKurssiStore = create((set, get) => ({
    data: data_orig,
    addRow: (r) => {
        const currentData = get().data;
        const uusiId = 
            currentData.length > 0
            ? Math.max(...currentData.map((k) => k.kurssi_id)) + 1
            : 1;
        const uusiRivi = { ...r, kurssi_id: uusiId};
        set({ data: [...currentData, uusiRivi] });
    }


}));

export { UseKurssiStore };