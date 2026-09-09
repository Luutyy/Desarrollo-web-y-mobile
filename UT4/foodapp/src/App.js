import logo from './logo.svg';
import './App.css';
import ContenedorItems from './components/contenedor/contenedorItems/ContenedorItems';
import Navbar from './components/header/Navbar';

function App() {
  const items = {
  productos: [
    {
      imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$k1XUE700/200/200/original?country=uy",
      nombre:"Hamburguesa",
      precio:"200",
      stock: 10
    },
    {
      imagen:"https://www.thefoodinmybeard.com/wp-content/uploads/2009/11/wpt10-500x500.jpg",
      nombre:"Taco",
      precio:"150",
      stock:10,
    },
    {
      imagen:"https://www.abc.com.py/resizer/v2/LNSOAWOFEFA7NAKVUWBAKTQEWQ.jpg?auth=2de0e8091cfde9cc0b28bd6b02b9b73a1980aa67fe9cc29c43c5041c59144dc0&width=400&smart=true",
      nombre:"Pancho",
      precio:"125",
      stock:2,
    },
    {
      imagen:"https://rumbameats.com/wp-content/uploads/2025/11/Thai-Beef-Cheek-Burritos.jpg",
      nombre:"Burrito",
      precio:"150",
      stock:0,
    },
    {
      imagen:"https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/941f50-splendid-table-french-fries.jpg/1280px-941f50-splendid-table-french-fries.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
      nombre:"Papas",
      precio:"100",
      stock:20,
    },
    {
      imagen:"https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/17eefccc0612317aa9f2ce1fbaae56cc/Derivates/3740e0c14b97c50890905a1961b9eb542959cc06.jpg",
      nombre:"Ramen",
      precio:"175",
      stock:7,
    }
  ]}



  return (
    <div className="pagina">
      <Navbar></Navbar>
      <div className="cuerpo">
        <ContenedorItems items={items.productos}></ContenedorItems>
        <div className="carrito">carrito jejeje</div>
      </div>
      
    </div>
  );
}

export default App;
