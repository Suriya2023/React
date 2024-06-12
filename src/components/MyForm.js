import React, { useState } from 'react'

export default function MyForm(props) {

    const [setText, setMytext] = useState("Inut your text ->")

    const MyformCh = (e) => {
        console.log("Event")
        setMytext(e.target.value);
    }

    const OnUpperCase = () => {

        console.log("Click text ")
        let NewText = setText.toUpperCase();
        setMytext(NewText)

    }

    const OnLowerCasw = () => {
        let NewText = setText.toLocaleLowerCase()
        setMytext(NewText)

    }

    const OnclearText = () => {
        let NewText = " ";
        setMytext(NewText)

    }
    const SpeakerSounde = () => {
        let Sound = new SpeechSynthesisUtterance()
        Sound.text = setText;
        window.speechSynthesis.speak(Sound);


    }
    const CopyPasst = () => {

        let copytext = document.getElementById("exampleFormControlTextarea1");
        copytext.select()
        navigator.clipboard.writeText(copytext.value)


    }
    const TextSpace = () => {
        let copytext = setText.split(/[ ] + /);
        setMytext(copytext.join(" "));
    }




    return (
        <div >

            <div className="my-3 contaner">
                <label for="exampleFormControlTextarea1 " className="form-label">{props.Title}</label>
                <textarea className={`form-control bg-${props.mode} text-${props.mode === "light" ? 'black' : "light"}  `} id="exampleFormControlTextarea1" value={setText} onChange={MyformCh} rows="8">{props.input}</textarea>
            </div>

            <button className='btn mx-3 btn-primary' onClick={OnUpperCase}  >toUpperCase</button>
            <button className='btn mx-3 btn-success' onClick={OnLowerCasw} >toLowerCase</button>
            <button className='btn mx-3 btn-danger' onClick={OnclearText}>OnclearText</button>
            <button className='btn mx-3 btn-warning' onClick={SpeakerSounde} >SpeakerSounde</button>
            <button className='btn mx-3 btn-info' onClick={CopyPasst} >CopyPase</button>
            <button className="btn mx-3 bg-info" onClick={TextSpace} >TextSpace</button>

            <br /><br />
            <h4>Text Summery</h4>
            <p>{setText.split(" ").length}Words</p>
            <h5>Latter Count</h5>
            <p>{setText.length}character</p>
            <p>{setText.length}Latter</p>
            <h5>Time Out</h5>
            <p>{0.008 * setText.split("").length}Lenght</p>
            <h5>preview</h5>
            <p>{setText}text</p>

            <br /><br />

            <div className='suraj'>
                <button onClick={props.ToggleTheam1} type="button" id='btn3' class=" mx-1 my-3 btn btn-primary">blue</button>
                <button onClick={props.ToggleTheam2} type="button" id='btn3' class=" mx-1 my-3 btn btn-secondary">gray</button>
                <button onClick={props.ToggleTheam3} type="button" id='btn3' class=" mx-1 my-3 btn btn-success">bgreen</button><br />
                <button onClick={props.ToggleTheam4} type="button" id='btn3' class=" mx-1 my-3 btn btn-danger">red</button>
                <button onClick={props.ToggleTheam5} type="button" id='btn3' class=" mx-1 my-3 btn btn-warning">yellow</button>
                <button onClick={props.ToggleTheam6} type="button" id='btn3' class=" mx-1 my-3 btn btn-info">aqua</button><br />
            </div>

        </div>

    )
}
