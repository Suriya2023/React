import React, { useState } from 'react'

export default function MyForm(props) {


    const [text, setText] = useState("InpuT Text")
    const ChangInput = (event) => {
        console.log("click")
        setText(event.target.value)
    }

    const OnclckBtn = () => {
        let UpperCase = text.toLocaleUpperCase();
        setText(UpperCase)
    }
    const OnclckBtntwo = () => {
        let UpperCase = text.toLocaleLowerCase();
        setText(UpperCase)
    }

    const OnclearBtn = () => {
        let UpperCase = " ";
        setText(UpperCase)
    }

    const SpeakSound = () => {
        let Sound = new SpeechSynthesisUtterance();
        Sound.text = text;
        window.speechSynthesis.speak(Sound);
    }

    const CopyPase = () => {
        let Coppy = document.getElementById('exampleFormControlTextarea1')
        Coppy.select();
        navigator.clipboard.writeText(Coppy.value)

    }

    const ExtraSpace = () => {
        let Space = text.split(/[ ]+/)
        setText(Space.join(" "))
    }
    return (
        <div >

            <div className= 'my-5 container'>
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className={`form-control  bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? 'dark' : 'light'}`} value={text} onChange={ChangInput} id="exampleFormControlTextarea1" rows="8"></textarea>

                <br /><br />
                <button type="button" onClick={OnclckBtn} class="btn mx-3 btn-outline-primary">toLocaleUpperCase</button>
                <button type="button" onClick={OnclckBtntwo} class="btn mx-3 btn-outline-secondary">toLocaleLowerCase</button>
                <button type="button" onClick={OnclearBtn} class="btn mx-3 btn-outline-success">OnclearBtn</button>
                <button type="button" onClick={SpeakSound} class="btn mx-3 btn-outline-danger">speak</button>
                <button type="button" onClick={CopyPase} class="btn mx-3 btn-outline-warning">CopyPast</button>
                <button type="button" onClick={ExtraSpace} class="btn mx-3 btn-outline-info">ExtraSpace</button>

                <br /><br />
                <h5>Text Summery Below</h5>
                <p>{text.split(" ").length}Words</p>
                <p>{text.length}Character</p>
                <p>{0.008 * text.split(" ").length}Timeout</p>
                <h5>Previwe</h5>
                <p>{text}</p>


            </div>
        </div>

    )
}
