import Card from 'react-bootstrap/Card';
import './ItemsFilms.css';

function BasicExample() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '687438f2c7msh35642f35fbf06b9p11da9djsn421781f1d2ef',
            'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
        }
    };

    fetch('https://unogsng.p.rapidapi.com/687438f2c7msh35642f35fbf06b9p11da9djsn421781f1d2ef')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (
        <div className='items-wrapper'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                          src="https://img.freepik.com/premium-photo/pastel-sky-beautiful-background-romantic-background-dreamy-background_130147-1276.jpg"/>
                <Card.Body>
                    <p>{}</p>
                    <div className='genre-wrapper'>
                        <p className='genre'>1</p><p className='genre'>1</p><p className='genre'>1</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}


export default BasicExample;