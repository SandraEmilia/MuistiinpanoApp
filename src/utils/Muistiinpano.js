const Muistiinpano = (teksti, kurssi,) => {

  const aikaLeima = new Date().toLocaleString("fi-FI", {
    timeZone: "Europe/Helsinki",
  });
    return {
      text: teksti,
      timestamp: aikaLeima,
      course: {
        id: kurssi.id,
        name: kurssi.name
      }
    };
  };
  
  export { Muistiinpano };
  
