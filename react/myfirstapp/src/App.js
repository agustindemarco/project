import './App.css';
import Welcome from './welcome';

const data =  {
    celular: 123415164,
    correo: 'asd@gmail.com'
}

function App() {
  return (
    <div className="App">
      <Welcome name="Agustin" age={23} data={data}/>
      <Welcome name="Tano" lastName="Micheli" age={21} data={data}/>
      <Welcome name="Ezequiel" age={22} data={data} />
    </div>
  );
}

export default App;
