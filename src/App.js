import Card from './components/layouts/Card';
import FullCounter from './components/FullCounter';
import Counter from './components/FullCounter';

function App() {
  return (
    <div className="app">
      <h1>Contador</h1>

      <div className="cards">
        <Card title="Contador em um componente único" color="#02044f">
          <FullCounter />
        </Card>
        <Card title="Contador componentizado" color="#0d3024">
          <Counter />
        </Card>
      </div>
    </div>
  );
}

export default App;
