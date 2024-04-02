import { useState } from 'react'
import './styles.css'
import Header from './components/Header'
import FrontMessage from './components/FrontMessage'
import InnerMessage from './components/InnerMessage'

export default function App() {
  /* Challenge

	Kullanıcı kartın kapağına tıkladığında kart açılır ve kapanır, ancak kart şirketi daha sofistike bir kontrol yöntemi istiyor. Kullanıcının mouse ile parmağını kaydırmasını taklit eden bir yöntem. Göreviniz aşağıdaki gibi bir tane ayarlamaktır:
		
		1. "open" class'ı, 34. satırdaki className'i "cover" olan div'e yalnızca aşağıdaki koşulların tümü karşılandığında uygulanmalıdır: 
		   	
			   - Kullanıcı mouse butonunu "cover" div'inin içinde bir yerde basılı tutuyorsa.
			   
    		   - Mouse butonunu basılı tutmaya devam ederken, imleci basılı tutmaya başladığı yerin 50 piksel soluna hareket ettirir. 
		
		2. Kullanıcı daha sonra mouse'unu "cover" div'i açıkken aşağı doğru hareket ettirirse, "open" 
		   class'ı kaldırılmalı ve böylece kart kapatılmalıdır. 
		   
	Not: cardOpen state'ini, 33. satırdaki onClick olay işleyicisini ve 34. satırdaki "open" class'ının şu anda uygulanma şeklini değiştirmeniz veya düzenlemeniz gerekecektir. 
*/

  const [cardOpen, setCardOpen] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX]=useState(null)
  const [startY, setStartY]=useState(null)

const handleMouseDown = (e) =>{
  setIsMouseDown(true)
  //console.log(e)
  setStartX(e.clientX)
}

const handleMouseMove= (e) => {
if(isMouseDown){
  if (startX-e.clientX >= 50) {
    setCardOpen(true)
    setStartY(e.clientY)
    console.log(startY)
  } 
}
}

const handleMouseMoveY = (e)=>{
  if (setCardOpen && e.clientY>startY ) {
    setCardOpen(false)
  }
}

const handleMouseUp=()=>{
  setIsMouseDown(false)
  setStartX(null)
  setStartY(null)
}


  return (
    <div className='wrapper'>
      <Header />
      <div className='card' onMouseMove={handleMouseMoveY}>
        <InnerMessage />

        <div
          // onClick={() => setCardOpen((pre) => !pre)}
          className={`cover ${cardOpen && 'open'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <FrontMessage />
          <img src='./images/forLoop.png' />
        </div>
      </div>
    </div>
  )
}
