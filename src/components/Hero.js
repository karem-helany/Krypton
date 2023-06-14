import buildings from '../images/buildings.svg'
import cryptomarket from '../images/cryptomarket.svg'
import bitit from '../images/bitit.svg'
import coin from '../images/coin.svg'

function Hero() {
    return (
        <section className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="columns" style={{ margin: "auto", width: "85%", display: "flex", alignItem: "center" }}>
                    <div className="column is-5">
                        <p className="title has-text-white">
                            This Is Karem`s Project
                        </p>
                        <p className="subtitle has-text-grey-light">
                            This Projects Tke From My Time Maybe 60 Hour
                        </p>
                        <div className="buttons">
                            <div className="button is-borderless is-large has-background-krypton-2 has-text-white">
                                GET STARTED
                            </div>
                            <div className="button is-borderless is-large has-background-krypton-2 has-text-white mr-2">
                                LEARN MORE
                            </div>
                        </div>
                    </div>
                    <div className="column is-7">
                        <div className="image">
                            <img src={buildings} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="is-flex is-justify-content-center">
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
    )
}

export default Hero