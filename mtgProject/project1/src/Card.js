import React from 'react';

function Card(props) {
    return (
        <div className="card-container">
            <div className="card-background">
                <div className="card-frame">
                    <div className="frame-header">
                        <h1 className="name">{props.cardInfo.cardName}</h1>
                        <i className="ms ms-g" id="mana-icon"> 3 </i>
                    </div>
                    <img className="frame-art" src={props.cardInfo.imageURL} alt="Character Art" />
                    <div className="frame-type-line">
                        <h1 className="type">{props.cardInfo.cardType}</h1>
                        <img src="https://image.ibb.co/kzaLjn/OGW_R.png" id="set-icon" alt="OGW-icon" />
                    </div>
                    <div className="frame-text-box">
                        <p className="description ftb-inner-margin">{props.cardInfo.cardText1}</p> <br></br>
                        <p className="description">{props.cardInfo.cardText2}</p>
                        <p className="flavour-text">{props.cardInfo.cardQuote}</p>
                    </div>
                    <div className="frame-bottom-info inner-margin">
                        <div className="fbi-left">
                            <p>140/184 R
                            OGW &#x2022; EN </p>
                        </div>
                        <div className="fbi-center"></div>
                        <div className="fbi-right">
                            ™ & © 2019 Not A Real Card ltd.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;