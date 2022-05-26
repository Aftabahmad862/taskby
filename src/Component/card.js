import React from 'react'
import '../App.css';
import { GoCalendar, GoLocation } from 'react-icons/go';
import Modal from 'react-modal/lib/components/Modal';
import { useState } from 'react'
import ModalfromComponent from './Modal';
const Card = ({ Odata }) => {
    const [isOpen, setisopen] = useState(false);
console.log(Odata)
    return (
        <section>
            <div className="App">
    
                <img className='back' src='back.png' alt="" />
                <div className='footer'>
                    <div>
                        <img className={Odata.title} src={Odata.image} alt="" />
                    </div>
                    <div >
                        <img className='logo' src="/logo.png" alt="" />
                    </div>
                    <div>
                        <img onClick={() => setisopen(true)} className='msg' src="/msg.png" alt="" />
                    </div>
                    <div>
                        <Modal isOpen={isOpen} >
                            <ModalfromComponent setmodal={setisopen} />
                        </Modal>
                    </div>
                    <div className='bottom'>
                        <h1>Karina Kapoor</h1>
                    </div>
                    <p>Film-actress Film-Studio</p>
                    <p><GoLocation /> Mumbai <GoCalendar /> 18Apr</p>
                    <div className='gridsystem style'>
                        <div><img className='style' src="twitter.png" alt="" /></div>
                        <div><img className='style' src="tiktok.png" alt="" /></div>
                        <div><img className='style' src="messenger.png" alt="" /></div>
                        <div><img className='style' src="telegram.png" alt="" /></div>
                        <div><img className='style' src="facebook.png" alt="" /></div>
                        <div><img className='style' src="maps.png" alt="" /></div>
                        <div><img className='style' src="instagram.png" alt="" /></div>
                        <div><img className='style' src="phone.png" alt="" /></div>
                    </div>
                </div>
            </div>
            <button className='btn'>Create youe Biz card now</button>
            <p className='btn-next'>Powered by <i>Quality</i></p>
        </section>
    );
}
export default Card