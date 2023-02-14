import Card from './components/Card/Card';
import Nav from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Nav name='Rolling Code' />
      <div className='mt-3 d-flex justify-content-center gap-3'>
        
        <Card
          title='Card 1'
          description='Esta es una descripción'
          image='https://picsum.photos/id/232/300/300'
          buttonLabel='Alquilar'
        />

        <Card
          title='Card 2'
          description='Descripción 2'
          image='https://picsum.photos/id/236/300/300'
          buttonLabel='Comprar'
        />

      </div>
    </>
  );
}

export default App;
