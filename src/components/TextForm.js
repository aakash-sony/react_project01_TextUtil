import React, { useState } from 'react'

export default function TextForm(props) {
    const changeUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const changeLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        let newText = '';
        setText(newText);
    }

    const copyText = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
    }
    const onChangeCase = (event) => {
        setText(event.target.value);

    }

    const [text, setText] = useState("");
    const wordCount = text.trim().length === 0 ? 0 : text.trim().split(" ").length;
    const charCount = text.replace(/\s/g, '').length;
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onChangeCase} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={changeUpperCase} >Change to Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={changeLowerCase}>Change to Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
                <button type="button" className="btn btn-secondary" onClick={clearText} style={{ float: 'right' }}>Clear Text</button>
            </div >
            <div className="container my-2">
                <h3>Your text summary</h3>
                <p>{wordCount} words {charCount} characters</p>
            </div>
        </>
    )
}

