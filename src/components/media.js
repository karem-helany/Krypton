import manF from '../images/man-5.jpg'
import post1 from '../images/post1.svg'
import post2 from '../images/post2.svg'
import post3 from '../images/post3.svg'
import coin from '../images/coin.svg'
import bitit from '../images/bitit.svg'
import cryptomarket from '../images/cryptomarket.svg'

function media() {
    return (
        <div className="media">
            <section className="section">
                <div className="header has-text-centered">
                    <hr className="hr" />
                    <p className="title is-2 mt-4 is-spaced has-text-white has-text-weight-semibold">
                        Media & Partners
                    </p>
                    <p className="subtitle is-6 has-text-grey-lighter" style={{ maxWidth: "600px", margin: "0 auto" }}>
                        Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore
                        detraxit.
                        Primis
                        mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus
                        quaestio
                        ex
                        mel, has ei tota homero.
                    </p>
                </div>
                <div className="posts p-1 m-4">
                    <div className="columns has-background-krypton p-2 m-4 is-centered">
                        <div className="column is-3">
                            <div className="image">
                                <img src={post1} style={{ borderRadius: "5px", maxWidth: "100%" }} />
                            </div>
                        </div>
                        <div className="column is-6">
                            <p className="title is-inline is-4 has-text-white">
                                Blockchain for dummies
                            </p>
                            <p className="title is-inline has-text-krypton-2">
                                |
                            </p>
                            <p className="subtitle is-6 is-inline has-text-white">
                                27.05.20212
                            </p>
                            <p className="subtitle is-6 has-text-krypton">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, earum
                                tempora repudiandae et similique repellat ut odio eos blanditiis ...
                            </p>
                            <div className="rights is-flex is-align-items-center">
                                <div className="image is-inline pr-4">
                                    <img src={manF} className="is-inline is-rounded" style={{ maxWidth: "40px" }} />
                                </div>
                                <p className="title is-6 has-text-white is-inline">
                                    by karem helany
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="columns has-background-krypton p-2 m-4 is-centered">
                        <div className="column is-3">
                            <div className="image">
                                <img src={post2} style={{ borderRadius: "5px", maxWidth: "100%" }} />
                            </div>
                        </div>
                        <div className="column is-6">
                            <p className="title is-inline is-4 has-text-white">
                                The Krypton chain algorythm
                            </p>
                            <p className="title is-inline has-text-krypton-2">
                                |
                            </p>
                            <p className="subtitle is-6 is-inline has-text-white">
                                27.05.20212
                            </p>
                            <p className="subtitle is-6 has-text-krypton">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, earum
                                tempora repudiandae et similique repellat ut odio eos blanditiis ...
                            </p>
                            <div className="rights is-flex is-align-items-center">
                                <div className="image is-inline pr-4">
                                    <img src={manF} className="is-inline is-rounded" style={{ maxWidth: "40px" }} />
                                </div>
                                <p className="title is-6 has-text-white is-inline">
                                    by karem helany
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="columns has-background-krypton p-2 m-4 is-centered">
                        <div className="column is-3">
                            <div className="image">
                                <img src={post3} style={{ borderRadius: "5px", maxWidth: "100%" }} />
                            </div>
                        </div>
                        <div className="column is-6">
                            <p className="title is-inline is-4 has-text-white">
                                what is krypton meaning?
                            </p>
                            <p className="title is-inline has-text-krypton-2">
                                |
                            </p>
                            <p className="subtitle is-6 is-inline has-text-white">
                                27.05.20212
                            </p>
                            <p className="subtitle is-6 has-text-krypton">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, earum
                                tempora repudiandae et similique repellat ut odio eos blanditiis ...
                            </p>
                            <div className="rights is-flex is-align-items-center">
                                <div className="image is-inline pr-4">
                                    <img src={manF} className="is-inline is-rounded" style={{ maxWidth: "40px" }} />
                                </div>
                                <p className="title is-6 has-text-white is-inline">
                                    by fatheah om al-fotoh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons is-centered mb-5">
                    <button className="button has-text-white px-6 py-5 has-background-krypton-4">
                        More Info
                    </button>
                </div>
                <div className="container is-flex is-justify-content-center">
                    <div className="image mx-4">
                        <img src={cryptomarket} style={{ maxWidth: "150px" }} />
                    </div>
                    <div className="image mx-4">
                        <img src={bitit} style={{ maxWidth: "150px" }} />
                    </div>
                    <div className="image mx-4">
                        <img src={coin} style={{ maxWidth: "150px" }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default media