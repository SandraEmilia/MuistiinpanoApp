const Muistiinpano = (teksti, kurssi,) => {
    return {
      text: teksti,
      timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
      course: {
        id: kurssi.id,
        name: kurssi.name
      }
    };
  };
  
  export { Muistiinpano };
  
