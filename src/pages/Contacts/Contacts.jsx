import React from 'react'
import '../Contacts/Contacts_moduls.css'
import inst from '../../components/assets/inst.png'
import teleg from '../../components/assets/teleg.png'
import vk from '../../components/assets/vk.png'
import location from '../../components/assets/location.png'


const Contacts = () => {
  return (
    <div className='Contacts' style={{height:'920px'}}>
      <div style={{}} className="block368">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height:'400px', marginTop: '200px'}} className="bg_color-1">

          <ul className="gde">
            <li className='nash'>О НАШЕЙ КОМПАНИИ</li>
            <li className="li_items-container">
              Добро пожаловать в мир увлекательных
              приключений с компанией  "Kyrgyz  -Tourism-"! 
              Мы — команда энтузиастов, объединенных общей
              страстью к путешествиям и стремлением создавать 
              незабываемые впечатления для каждого нашего клиента.
              С момента основания мы поставили перед собо
              - сделать мир доступным для каждого, открывая двери
              к самым захватывающим уголкам нашей планеты.
            </li>
          </ul>

          <ul className="gde" >
            <li className="nash">НАШИ КОНТАКТЫ</li>
            <div className="cont">
            <li style={{fontSize:'20px'}}>aizirekandamal@gmail.com</li>
            <li style={{fontSize:'20px'}}>+996 709 966 808</li>
            </div>
            <div className="insta">
            <a href="https://www.instagram.com/ra.shidovich?igsh=ZXJiY2c4ZzRpbmdl"><img style={{}} title='открыть Instagram' className='inst' src={inst} alt="" /></a>
            <a href="https://t.me/rashidovichhh"><img style={{ }} className='telegram' title='открыть Telegram' src={teleg} alt="" /></a>
            <a href="https://vk.com/rashid0vich"><img style={{ borderRadius:'20px' }} title='открыть VK' className='vk' src={vk} alt="" /></a>
            </div>
          </ul>

          <ul className="gde">
            <li className="nash">ГДЕ МЫ НАХОДИМСЯ</li>
            <div className="isanova">
            <img style={{ width: '90px' }} className='location' src={location} alt="" />
            <div className="loc-text">Исанова 105/3</div>
            </div>
          </ul>

        </div>
      </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2923.775264874185!2d74.59001202595927!3d42.877587371149566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LjRgdCw0L3QvtCy0LAgMTA1LzM!5e0!3m2!1sru!2skg!4v1717492010084!5m2!1sru!2skg" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contacts
