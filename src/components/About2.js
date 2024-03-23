import React from 'react'

export default function About2(props) {
    return (
        <div className="container" style={{ backgroundColor: props.Pmode === 'dark' ? '#247b7b' : 'white', color: props.Pmode === 'dark' ? '#1c2e4a' : 'black' }}>

            <h1 className="my-3" >About Us</h1>
            <div className="container">
                <div className="accordion" id="accordionExample" >
                    <div className="card" style={{ backgroundColor: props.Pmode === 'dark' ? '#247b7b' : 'white', color: props.Pmode === 'dark' ? '#1c2e4a' : 'black' }}>
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>Analyze Your Text</strong>
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" >
                                TextUtils gives you a way to analyze your text quickly and Efficiently. Be it word count, character count, converting to uppercase or lowercase, word detection etc.
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: props.Pmode === 'dark' ? '#247b7b' : 'white', color: props.Pmode === 'dark' ? '#1c2e4a' : 'black' }}>
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong>Free To USE</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body" >
                                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: props.Pmode === 'dark' ? '#247b7b' : 'white', color: props.Pmode === 'dark' ? '#1c2e4a' : 'black' }}>
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <strong>Browser Compatible</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body" >
                                This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
