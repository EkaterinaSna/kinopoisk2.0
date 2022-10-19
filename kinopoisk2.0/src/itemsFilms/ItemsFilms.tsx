import Card from 'react-bootstrap/Card';
import './ItemsFilms.css';

function BasicExample() {
    return (
        <div className='items-wrapper'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                          src="https://img.freepik.com/premium-photo/pastel-sky-beautiful-background-romantic-background-dreamy-background_130147-1276.jpg"/>
                <Card.Body>
                    <p>name</p>
                    <div className='genre-wrapper'>
                        <p className='genre'>1</p><p className='genre'>1</p><p className='genre'>1</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BasicExample;