import React, { useState } from 'react'

export default function MyForm(props) {

    const [setText, setMytext] = useState("Inut your text ->")

    const MyformCh = (event) => {
        console.log("Event")
        setMytext(event.target.value);
    }


    const OnUpperCase = () => {
        console.log("bhai is ka Upper case karo ")

        let OneUP = setText.toUpperCase();
        setMytext(OneUP)

    }

    const OnLowerCasw = () => {
        console.log("bhai is ka Lower case karo ")
        let OneLo = setText.toLowerCase();
        setMytext(OneLo)
    }

    const OnclearText = () => {
        let TwoCr = " "
        setMytext(TwoCr)
    }

    const SpeakerSounde = () => {
        let Sound = new SpeechSynthesisUtterance();
        Sound.text = setText;
        window.speechSynthesis.speak(Sound);
    }

    const CopyPase = () => {
        let Peda = document.getElementById("exampleFormControlTextarea1")
        Peda.select();
        navigator.clipboard.writeText(Peda.value)
    }

    const TextSpace = () => {
        let Space = setText.split(/[ ]+/)
        setMytext(Space.join(" "));
    }

    return (
        <div className='container  my-3 '>

            <div className="mb-3">
                <label for="exampleFormControlTextarea1 " className="form-label">{props.Title}</label>
                <textarea className={`form-control bg-${props.mode} text-${props.mode == "light" ? 'black' : "light"} `} id="exampleFormControlTextarea1" value={setText} onChange={MyformCh} rows="8">{props.input}</textarea>
            </div>

            <button className='btn mx-3 btn-outline-primary' onClick={OnUpperCase}  >toUpperCase</button>
            <button className='btn mx-3 btn-outline-success' onClick={OnLowerCasw} >toLowerCase</button>
            <button className='btn mx-3 btn-outline-danger' onClick={OnclearText}>OnclearText</button>
            <button className='btn mx-3 btn-outline-warning' onClick={SpeakerSounde} >SpeakerSounde</button>
            <button className='btn mx-3 btn-outline-info' onClick={CopyPase} >CopyPase</button>
            <button className='btn mx-3 btn-outline-dark' onClick={TextSpace} >TextSpace</button>

            <br /><br />
            <h4>Text Summery</h4>
            <p>{setText.split(" ").length}Words</p>
            <h5>Latter Count</h5>
            <p>{setText.length}Latter</p>
            <h5>Time Out</h5>
            <p>{0.008 * setText.split("").length}Lenght</p>
            <h5>preview</h5>
            <p>{setText}text</p>



        </div>

    )
}
