import React, { useState } from 'react'

export default function FormFile(props) {
    const [text, setText] = useState("add any text");

    const NewOnChangedText = (event) => {
        console.log("click text")
        setText(event.target.value);
    }

    const OnUPcoVerter = () => {
        let ThisOnUpper = (text.toLocaleUpperCase());
        setText(ThisOnUpper);
    }

    const OnDowcoVerter = () => {
        let abcd = (text.toLocaleLowerCase());
        setText(abcd);
    }

    const Cleartext = () => {
        let ThisONTextClear = ""
        setText(ThisONTextClear);
    }

    const SpeakText = () => {
        let ThisONSpeekBtn = new SpeechSynthesisUtterance();
        ThisONSpeekBtn.text = text;
        window.speechSynthesis.speak(ThisONSpeekBtn);
    }

    const handleCopy = () => {


        let demoText = document.getElementById("exampleFormControlTextarea1")
        demoText.select();
        navigator.clipboard.writeText(demoText.value);
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <div>

            <div className=" mx-5">
                <label for="exampleFormControlTextarea1" className="form-label">{props.FTitle}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={NewOnChangedText} value={text} rows="9"></textarea>


                <button className='btn btn-outline-success my-5' onClick={OnUPcoVerter}>
                    Upper case    Converter
                </button>
                &nbsp;&nbsp;


                <button className='btn btn-outline-primary my-5' onClick={OnDowcoVerter}>
                    Lower case  Converter
                </button>
                &nbsp;&nbsp;


                <button className='btn btn-outline-info my-5' onClick={Cleartext}>
                    Clear Text
                </button>

                &nbsp;&nbsp;
                <button className='btn btn-outline-warning my-5' onClick={SpeakText}>
                    Speak
                </button>


                &nbsp;&nbsp;
                <button className='btn btn-outline-warning my-5' onClick={handleRemoveSpace}>
                    handle Remove Space
                </button>

                &nbsp;&nbsp;
                <button className='btn btn-outline-warning my-5' onClick={handleCopy}>
                    Copy Text
                </button>
            </div>

            <div className='container'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length}Word</p>
                <p>{text.length}Character</p>
                <p>{0.008 * text.split("").length}Reading Time</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
