import { useState } from 'react';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import { i } from 'vite/dist/node/types.d-aGj9QkWt';
function App() {

  const [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [textArea, setTextArea] = useState("");
  function handlingChange(event, stateUpadater) {
    let inputValue = event.target.value;
    stateUpadater(inputValue);
  }
  function handleSubmit() {
    if (email && name && textArea) {

    }
   
  }


  return (
    <div>
      <h2>Contact Us</h2>
      <hr id='hr' style={{ color: 'teal' }}></hr>
      <h1 >Get In touch with us</h1>

      <div id="contact_us">

        <div>
          <img src='data:image/jpeg;base64,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'
            alt='Doctor image'
          />
        </div>
        <div id='image'>
          <form>
            <div>

              <input type="text" id='input' placeholder='Name'
                maxLength={30} value={name} onChange={function (event) {
                  handlingChange(event, setName);
                }} />

              <br />
              <br />
            </div>

            <div>
              <input type="email"
                id='input' placeholder='Email'
                minLength={5} maxLength={40}
                value={email}
                required
                onChange={function (event) {
                  handlingChange(event, setEmail);
                }} />
              <br />
              <br />
            </div>
            <div>
              <textarea id='text' type='text'
                placeholder='Message'
                value={textArea}
                onChange={function (event) {
                  handlingChange(event, setTextArea);
                }} />
              <br />
              <br />
            </div>
            <button type='submit' onClick={handleSubmit}> Send</button>
          </form>

        </div>
      </div>

    </div>


  );
}


export default App;
