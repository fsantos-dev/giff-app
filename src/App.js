import './App.css';
import { Input } from './components/input/input'
import { Category } from './components/category';
import { useEffect, useState } from 'react';
import { GifService } from './services/data.service';
function App() {

  //campo de busqueda
  let [values, setValues] = useState({
    buscar: ""
  });

  let [categories, setCategories] = useState(['One Punch']);



  function handleAdd() {
    if (values.buscar.trim().length > 2) {
      setCategories([values.buscar, ...categories])
      setValues({
        buscar: ""
      })
    }
  }

  return (
    <div className="container">
      <div>
        <h3>GIF APP</h3>
        <hr />
        <div className="box-input">
          <div className='container-input'>
            <Input  name={'buscar'} values={values} setValues={setValues}></Input>
          </div>
          <button className="btn-general" onClick={handleAdd}>Agregar</button>
        </div>
        <hr />
        <ul>
          {categories.length > 0 ?
            categories.map((item, i) =>
              <Category key={i} category={item}></Category>
            )
            :
            <li>No hay datos</li>
          }
        </ul>
      </div>

    </div>
  );
}

export default App;
