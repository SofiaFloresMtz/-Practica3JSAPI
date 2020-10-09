function Leer() {
    const ciudad = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='e8fc2ecec2fe6056787cae875471c66';
    //const api_url=`http://www.omdbapi.com/?s=${ciudad}&apikey=${key}`
    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=fe8fc2ecec2fe6056787cae875471c66`
    buscar1(api_url);
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()

      }).then(resultado=>{
            console.log(resultado);
            const coord = resultado;

            function clima({name,main: {temp: estado, humidity: hume}}){
                return `La temperatura en ${name} es de:
                <br> ${estado} grados Fahrenheit y la humedad es de ${hume}`;
            }

            console.log(clima(coord));
            document.getElementById("lista").innerHTML=clima(coord);
      });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay clima"></img></div>`;
        })

    }

}    

     
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(respuesta.data);
    console.log(Search);
    
    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay comida"></img></div>`;
        })

    }

}    
