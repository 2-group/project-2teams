import React from 'react'
import Button from 'react-bootstrap/Button';
import '../components/Turs/Turs_moduls.css'
import Card from 'react-bootstrap/Card';
import isikul from '../components/assets/isikul.jpg'

const Turs = () => {
  return (
    <div>
      <div className="bg-color">
      <div className="but_text">Горящие</div>
      <div className="but_text2">Предложения </div>
      <div className="button_container">
      <Button className='button' variant="dark">Иссык-Куль</Button>
      <Button className='button' variant="dark">Ала-Арча</Button>
      <Button className='button' variant="dark">Сарычелек</Button>
      <Button className='button' variant="dark">Сон-Кол</Button>
      <Button className='button' variant="dark">Арсланбоб</Button>
      <Button className='button' variant="dark">Чатыр-Кол</Button>
      <Button className='button' variant="dark">Чон-Кемин</Button>
      <Button className='button' variant="dark">Чычкан</Button>
      </div>
      <Card className='card-item_1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={isikul} />
      <Card.Body>
        <Card.Title>Иссык-Куль</Card.Title>
        <Card.Text>
        Иссык-Куль - это крупнейшее горное озеро в Центральной Азии, расположенное в Киргизии.
        Цена за 1 Человека 80$
        </Card.Text>
        <Button variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>

    <Card className='card-item_1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={isikul} />
      <Card.Body>
        <Card.Title>Иссык-Куль</Card.Title>
        <Card.Text>
        Иссык-Куль - это крупнейшее горное озеро в Центральной Азии, расположенное в Киргизии.
        Цена за 1 Человека 80$
        </Card.Text>
        <Button variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>
    </div>

 
    </div>

    
  )
}

export default Turs
