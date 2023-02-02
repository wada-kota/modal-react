import { useState } from 'react';
import './App.css';

function App() {

  const [show, setShow] = useState(false);

  const onClickShow = () => {
    setShow(true);
  }

  const onClickHide = () => {
    setShow(false);
  }

  return (
    <>
      <button onClick={onClickShow}>click!</button>
      
        {show && (
        <div className='overlay'>
          <div className='modalWrap'>
            <p>モーダルウィンドウです。</p>
            <button onClick={onClickHide}>close</button>
          </div>
        </div>
        )}
    </>
  );
}

export default App;
