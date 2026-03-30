import { createRoot } from 'react-dom/client';  

const root = createRoot(document.getElementById('root'));

root.render(<h1>Loading...</h1>);

const url = "https://ghibliapi.vercel.app/films";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const movie = data.map((film) => (
      <div key={film.id} style={{border:"2px solid black", margin:"10px", padding:"10px"}}>
        <img 
          src={film.image} 
          alt={film.title} 
          style={{width:"300px"}} 
        />
        <div style={{color:"red",borderRadius:"20px"}}>
        <h2>Titel : {film.title}</h2>
        <p>release_date : {film.release_date}</p>
        <p>Directer : {film.director}</p>
        </div>
        
      </div>
    ));
    const jsx = (
      <div>
        <h1>Studio Ghibli Movies 🎬</h1>
        <div style={{display:"flex"}}>
          {movie}
        </div>
      </div>
    );
    root.render(jsx);
  });