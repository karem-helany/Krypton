import play from '../images/play.svg'
import compact from '../images/compact.svg'
import stacked from '../images/stacked.svg'
import chained from '../images/chained.svg'

function Accept() {
    return (
        <div className="accept">
            <section className="section has-text-centered mt-6">
                <div className="buttons is-centered">
                    <button
                        className="button py-5 has-text-weight-semibold has-background-krypton-3 is-rounded has-text-white">
                        Buy Tokens 20% off
                    </button>
                </div>
                <p className="subtitle has-text-weight-semibold is-6 has-text-grey-light">
                    WE ACCEPT
                </p>
                <div className="icons">
                    <div className="icon is-large has-background-icon has-text-white">
                        <i className="fa-brands fa-btc"></i>
                    </div>
                    <div className="icon is-large has-background-icon has-text-white">
                        <i className="fa-brands fa-ethereum"></i>
                    </div>
                    <div className="icon is-large has-background-icon has-text-white">
                        <i className="fa-solid fa-l"></i>
                    </div>
                    <div className="icon is-large has-background-icon has-text-white">
                        <i className="fa-sharp fa-solid fa-shield-halved"></i>
                    </div>
                </div>
                <div className="images mt-6 is-flex is-justify-content-space-around">
                    <div className="columns">
                        <div className="column">
                            <div className="image p-6">
                                <img src={chained} style={{ maxWidth: "100px", margin: "0 auto" }} />
                                <p className="title my-3 is-5 has-text-white has-text-weight-semibold">
                                    Chaining
                                </p>
                                <p className="subtitle my-3 is-6 has-text-grey-light">
                                    Supercharged features to make you happy and lorem
                                    ipsum sit dolor amet
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="image p-6">
                                <img src={stacked} style={{ maxWidth: "100px", margin: "0 auto" }} />
                                <p className="title my-3 is-5 has-text-white has-text-weight-semibold">
                                    Stacking
                                </p>
                                <p className="subtitle my-3 is-6 has-text-grey-light">
                                    Supercharged features to make you happy and lorem
                                    ipsum sit dolor amet
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="image p-6">
                                <img src={compact} style={{ maxWidth: "100px", margin: "0 auto" }} />
                                <p className="title my-3 is-5 has-text-white has-text-weight-semibold">
                                    Managing
                                </p>
                                <p className="subtitle my-3 is-6 has-text-grey-light">
                                    Supercharged features to make you happy and lorem
                                    ipsum sit dolor amet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons-2 py-6 is-centered">
                    <button className="button is-large is-rounded has-background-krypton-3">
                        <img src={play} />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Accept