import './App.css';
import product from './product';
import Name from './Name.js';
import Price from './Price.js';
import Description from './Description.js';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


// just for the use of comments during the code

function App() {
  const firstName="Void";
  return (
    <>
      <p style={{color:"red"}}>{firstName ? ` Hello ${firstName}` : "Hello there!"}</p>
      
    <Card id='tre'>
      <Card.Body>
        <Card.Img id="imgg" variant="top" src={product.image} />
          <Name/>
          <Price/>
          <Description/>
      </Card.Body>
    </Card>
    </>
  );
};

// just for the use of comments during the code

export default App;