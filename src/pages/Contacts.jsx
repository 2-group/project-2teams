import React from 'react'
import '../components/Contacts/Contacts_moduls.css'
import inst from '../components/assets/inst.png'
import teleg from '../components/assets/teleg.png'
import vk from '../components/assets/vk.png'
import location from '../components/assets/location.png'
import locImg from '../components/assets/locImg.jpg'

const Contacts = () => {
  return (
    <div>
      <div className="bg_color-container">
        <div className="bg_color-1">
          
        </div>
      </div>
      
            <li className='About-us'>О НАШЕЙ КОМПАНИИ
            <li>НАШИ КОНТАКТЫ</li>
            <li>ГДЕ МЫ НАХОДИМСЯ</li>
            </li>
           
         
            <li className="li_items-container">
Добро пожаловать в мир увлекательных<br /> приключений с компанией  "Kyrgyz  -Tourism-"! <br />
Мы — команда энтузиастов, объединенных общей<br /> страстью к путешествиям и стремлением создавать <br />незабываемые впечатления для каждого нашего клиента.<br /> С момента основания мы поставили перед собой цель<br /> - сделать мир доступным для каждого, открывая двери<br /> к самым захватывающим уголкам нашей планеты.
              </li>

              <div className='contacts-item_container'>
                <li>aizirekandamal@gmail.com</li>
              <a href="#"><img className='inst' src={inst} alt="" /></a> 
              <a href="#"><img className='teleg' src={teleg} alt="" /></a> 
              <a href="#"><img className='vk' src={vk} alt="" /></a> 
              <li className='number-contacts'>+996 709 966 808</li>
              </div>
              
              <div className="location">
                <img className='location' src={location} alt="" />
                
              </div>
              <div className="loc-text">Исанова 105/3</div>
              <a href="https://maps.app.goo.gl/yWqs7nbjD1AE7Fab6"><img className='locImg' src={locImg} alt=""/></a>            

    </div>
  )
}

export default Contacts
