import React from 'react' 
import '../Contacts/Contacts.css' 
import inst from '../../components/assets/social-instagram.svg' 
import teleg from '../../components/assets/telegram.svg' 
import vk from '../../components/assets/wk.svg' 
import location from '../../components/assets/location-pin.svg' 

 
const Contacts = () => { 
  return ( 
    <div className='contacts'> 
      <div className="container">
        <div className="flex-container-contacts">
            <div className="flex">
                <h1 className="title">Kyrgyz Tourism</h1>
                <p className='text2 text-con'>Добро пожаловать в мир увлекательных<br /> приключений с компанией  "Kyrgyz  -Tourism-"! <br /> 
Мы — команда энтузиастов, объединенных общей<br /> страстью к путешествиям и стремлением создавать <br />незабываемые впечатления для каждого нашего клиента.<br /> С момента основания мы поставили перед собой цель<br /> - сделать мир доступным для каждого, открывая двери<br /> к самым захватывающим уголкам нашей планеты. </p>
            </div>
            <br />
            <br />
            <div className="flex1">
                <h1 className="title">Наши Контакты</h1>
                <p className="text2 text-con">+996 501 035 034 Айзирек</p>
                <p className="text2 text-con">+996 495 627 233 Амаль</p>
                <br /><br />
                <h2 className="title1">Социальные сети</h2>
                <div className="between">
                <img className='svg' src={inst} alt="" />
                    <p className="text2 text-con">@kyrgyz_tourism</p>
                    </div>
                <div className="between">
                <img src={teleg} alt="" className="svg" /><p className="text2 text-con">@KyrgyzTourism</p>
                </div>
                <div className="between"><img src={vk} alt="" className="svg" /><p className="text2 text-con">@kyrgyz.tourism</p>
                </div>
            </div>
            <div className="flex">
                
            </div>
        </div>
      </div>
    </div> 
  ) 
} 
 
export default Contacts