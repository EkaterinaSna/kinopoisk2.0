import Card from 'react-bootstrap/Card';
import './ItemsFilms.css';
import { Movies } from "./types";

function BasicExample(props: Movies) {
    const { category, contact } = props;

    const options  = {
        method: 'GET',
        headers: {
            // 'X-RapidAPI-Key': '687438f2c7msh35642f35fbf06b9p11da9djsn421781f1d2ef',
            // 'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
        }
    };

    fetch('http://demo.traccar.org/api/devices')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (
        <div className='items-wrapper'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                          src="https://www.kino-teatr.ru/movie/posters/big/2/50562.jpg"/>
                <Card.Body>
                    <p></p>
                    <div className='genre-wrapper'>
                        <p className='genre'>{props.contact}</p><p className='genre'>Road</p><p className='genre'></p>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                          src="https://static.kinoafisha.info/k/movie_posters/220/upload/movie_posters/5/1/3/8133315/4b303b132d347555d6fe6892895832d9.jpg"/>
                <Card.Body>
                    <p></p>
                    <div className='genre-wrapper'>
                        <p className='genre'>{props.contact}</p><p className='genre'>1+1</p><p className='genre'></p>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"
                          src="https://thumbs.dfs.ivi.ru/storage37/contents/0/d/12439b0a9fc06aba76be3c42a3b1f2.jpg"/>
                <Card.Body>
                    <p></p>
                    <div className='genre-wrapper'>
                        <p className='genre'>{props.contact}</p><p className='genre'>Чернобыль</p><p className='genre'></p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BasicExample;