import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardLogo } from '../cards/CardLogo';
import { kaspi_prompt_style } from '../cards/styles';

function SlideCard() {
  return (
    <Card style={{ width: '18rem' }}>
      Card
      <Card.Body>
        <CardLogo style={kaspi_prompt_style} cardNumber={1234}/>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SlideCard;