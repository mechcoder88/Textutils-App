import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpperCaseClick = () => {
        console.log(`UpperCase Button was Clicked !! & the text is "${text}" `);
        let newText = text.toUpperCase();
        setText(newText);

        // Setting Alert
        props.textFormAlert("Converted to UPPERCASE !!", "success");
    }

    const handleLowerCaseClick = () => {
        console.log(`LowerCase Button was Clicked!! & the text is "${text}" `);
        let newText = text.toLowerCase();
        setText(newText);

        // Setting Alert
        props.textFormAlert("Converted to LOWERCASE !!", "success");
    }

    const clearText = () => {
        console.log(`Clear Button was Clicked!! & the text is "${text}" `);
        setText("");

        // Setting Alert
        props.textFormAlert("Text Cleared !!", "success");
    }

    const charCount = () => {
        let count = 0;
        let ch = prompt("Enter Your Character to know its count (Case Sensitive) : ");
        for (let i = 0; i < text.length; i++) {
            // console.log(text[i]); // Checking whether a character is being returned or not!
            if (text[i] === ch) {
                count++;
            }
        }
        alert(`No of Times " ${ch} " appeared in your Text : ${count}`);

        // Setting Alert
        props.textFormAlert(`Character "${ch}" Occurrence Counted !!`, "success");
    }

    const wordCheck = () => {
        let word = prompt("Enter the Word you want to look for in the text below : ");
        if (text.includes(word)) {
            alert(`Your Word " ${word} " is PRESENT in your text !!`);
        } else {
            alert(`Your Word " ${word} " is NOT PRESENT in your text !!`);
        }

        // Setting Alert
        props.textFormAlert(`Word "${word}" Occurrence Checked !!`, "success");
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);

        props.textFormAlert(`Text Copied !!\nText Copied : "${text}"`, "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));;

        // Setting Alert
        props.textFormAlert(`Trimmed Extra Spaces !!`, "success");
    }

    const handleOnChange = (event) => {
        console.log("On Change !! ");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.theme === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-2">{props.heading}</h1>
                <div className="form-group">
                    <label htmlFor="myBox">Enter Your Text Below : </label>

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.theme === 'dark' ? '#13466e' : 'white', color: props.theme === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>

                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleUpperCaseClick} >Convert to UpperCase</button>

                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleLowerCaseClick} >Convert to LowerCase</button>

                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={clearText} >Clear Text</button>

                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={charCount} >Char Count</button>

                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={wordCheck} >Word Check</button>

                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={copyText} >Copy Text</button>

                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleExtraSpaces} >Cut ExtraSpaces</button>
                </div>
            </div>

            <div className="container my-3" style={{ color: props.theme === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>

                <p> No of Words : <b>{text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                }).length}</b> <br /> No of Characters : <b>{text.length}</b></p>

                <p>Time Required to Read the Text : <b>{0.008 * text.split(" ").filter((element) => {
                    return element.length !== 0;
                }).length} Minutes</b></p>
                <h2>Preview</h2>

                <p>{text.length > 0 ? text : "Enter Some Text to Preview it Here !!"}</p>
            </div>
        </>
    )
}
