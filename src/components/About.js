import React, { useState } from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: "1px solid black",
    });

    const [btnText, setbtnText] = useState("Enable Dark Theme");

    const toggleStyle = () => {
        if (myStyle.color === "white") {
            setmyStyle({
                color: "black",
                backgroundColor: "white",
                border: "1px solid black",
            });
            setbtnText("Enable Dark Theme");
        } else {
            setmyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            });
            setbtnText("Enable Light Theme");
        }
    }


    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3" >About Us</h1>
            <div className="container">
                <div className="accordion" id="accordionExample" >
                    <div className="card" style={myStyle}>
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Collapsible Group Item #1
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" >
                                Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                            </div>
                        </div>
                    </div>
                    <div className="card" style={myStyle}>
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body" >
                                Some placeholder content for the second accordion panel. This panel is hidden by default.
                            </div>
                        </div>
                    </div>
                    <div className="card" style={myStyle}>
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body" >
                                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                {/* Dark Mode Button */}
                <button type="button" onClick={toggleStyle} className="btn btn-primary my-3 mx-3">{btnText}</button>
            </div>
        </div>
    )
}
