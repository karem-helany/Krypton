import tokens from '../images/tokens.svg'
import bounty from '../images/bounty.svg'

var countDownDate = new Date("july 1, 2023 0:0:0").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demoOne").innerHTML = days + " : ";
    document.getElementById("demoTow").innerHTML = hours + " : ";
    document.getElementById("demoThree").innerHTML = minutes + " : ";
    document.getElementById("demoFour").innerHTML = seconds + " ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


function Ico() {
    return (

        <div className="ico">
            <section className="section has-background-icon">
                <div className="header has-text-centered">
                    <hr className="hr" />
                    <p className="title is-2 mt-4 is-spaced has-text-white has-text-weight-semibold">
                        Join our ICO Now
                    </p>
                    <p className="subtitle is-6 has-text-grey-lighter" style={{ maxWidth: "600px", margin: " 0 auto" }}>
                        Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore
                        detraxit.
                        Primis
                        mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus
                        quaestio
                        ex
                        mel, has ei tota homero.
                    </p>
                </div>

                <div className="in-tabs">
                    <div className="tabs is-center is-flex is-justify-content-space-between my-6">
                        <button id="icoLink">
                            <p className="karem" id="text1">
                                ICO
                            </p>
                        </button>

                        <button id="tokenLink">
                            <p id="text2">
                                TOKEN
                            </p>
                        </button>

                        <button id="profileLink">
                            <p id="text3">
                                PROFIL
                            </p>
                        </button>

                        <button id="bountyLink">
                            <p id="text4">
                                BOUNTY
                            </p>
                        </button>
                    </div>

                    <div id="Ico">
                        <div className="ico-terms my-6">
                            <div className="columns is-centered has-text-white">
                                <div className="column is-5">
                                    <div className="title is-5 has-text-white">
                                        ICO TERMS
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Bonus
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            Token sales starts on Jun 8 2021 (12:00am GMT)
                                        </p>
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Sale
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            Token sales starts on Jun 8 2021 (12:00am GMT)
                                        </p>
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Presale
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            Token sales starts on Jun 8 2021 (12:00am GMT)
                                        </p>
                                    </div>
                                </div>
                                <div className="column is-5 has-background-krypton-4">
                                    <div className="timer is-flex is-justify-content-center">
                                        <p id="demoOne"
                                            className="subtitle is-1 is-spaced has-text-white has-text-centered"></p>
                                        <p id="demoTow"
                                            className="subtitle is-1 is-spaced has-text-white has-text-centered"></p>
                                        <p id="demoThree"
                                            className="subtitle is-1 is-spaced has-text-white has-text-centered"></p>
                                        <p id="demoFour"
                                            className="subtitle is-1 is-spaced has-text-white has-text-centered"></p>
                                    </div>
                                    <progress className="progress is-primary" value="70" max="100"></progress>
                                    <div className="buttons is-centered">
                                        <button
                                            className="button is-rounded is-medium has-text-white has-background-krypton-3">
                                            Join the ICO Now
                                        </button>
                                    </div>
                                    <div className="icons has-text-centered">
                                        <div className="icon has-text-white">
                                            <i className="fa-brands fa-btc"></i>
                                        </div>
                                        <div className="icon has-text-white">
                                            <i className="fa-brands fa-ethereum"></i>
                                        </div>
                                        <div className="icon has-text-white">
                                            <i className="fa-solid fa-l"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div />


                    <div id="Profit">
                        <div className="profile my-6">
                            <div className="columns is-centered has-text-white">
                                <div className="column is-5">
                                    <div className="title is-5 has-text-white">
                                        PROFIT
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Tokens Sales
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            1 200 000 KP (22%)
                                        </p>
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Token Exchange
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            1 BTC = 2200 KP, 1 ETH = 825 KP
                                        </p>
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Transations
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC
                                        </p>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="image">
                                        <img src={bounty} style={{ maxWidth: "300px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="Token">
                        <div className="token-rates my-6">
                            <div className="columns is-centered has-text-white">
                                <div className="column is-5">
                                    <div className="title is-5 has-text-white">
                                        TOKEN RATES
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Tokens Sales
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            1 200 000 KP (22%)
                                        </p>
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Token Exchange
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            1 BTC = 2200 KP, 1 ETH = 825 KP
                                        </p>
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Transations
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC
                                        </p>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="image">
                                        <img src={tokens} style={{ maxWidth: "300px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="bounty">
                        <div className="rewards-bounties my-6">
                            <div className="columns is-centered has-text-white">
                                <div className="column is-5">
                                    <div className="title is-5 has-text-white">
                                        REWARDS & BOUNTIES
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Tokens Sales
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            1 200 000 KP (22%)
                                        </p>
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Token Exchange
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            1 BTC = 2200 KP, 1 ETH = 825 KP
                                        </p>
                                    </div>
                                    <div className="sentence">
                                        <div className="icon-text">
                                            <div className="icon has-text-krypton-2">
                                                <i className="fa-solid fa-circle"></i>
                                            </div>
                                        </div>
                                        <p className="title ml-5 is-5 has-text-white">
                                            Transations
                                        </p>
                                        <p className="subtitle ml-5 mb-3 is-6 has-text-grey-lighter">
                                            Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC
                                        </p>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="image">
                                        <img src={bounty} style={{ maxWidth: "300px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ico