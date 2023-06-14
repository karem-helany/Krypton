import bitbanner from '../images/bitbanner.svg'
import token from '../images/token.svg'
import blockchain from '../images/blockchain-blocks.svg'
import bitnetwork from '../images/bitnetwork.svg'
import bitmining from '../images/bitmining.svg'
import cryptoMining from '../images/crypto-mining.svg'

function Decentralized() {
    return (
        <div className="decentraliz">
            <section className="section">
                <div className="header mb-6 has-text-centered pb-6">
                    <p className="title is-2 mt-5 is-spaced has-text-white">
                        Decentralized Exchange
                    </p>
                    <p className="subtitle has-text-grey-lighter is-6" style={{ maxWidth: "600px", margin: "0 auto" }}>
                        Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore
                        detraxit.
                        Primis
                        mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus
                        quaestio
                        ex
                        mel, has ei tota homero.
                    </p>
                </div>
                <div className="columns is-centered">
                    <div className="column is-5 my-2">
                        <div className="content">
                            <div className="image is-inline-block is-48x48">
                                <img src={bitbanner} />
                            </div>
                            <p className="title ml-3 is-3 has-text-white is-inline">
                                Token Building
                            </p>

                            <br class="hr-2" />

                            <div className="subtitle has-text-grey-lighter">
                                Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no
                                sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu
                                impetus perfecto sit, nosea labore detraxit.
                            </div>
                            <button className="button has-background-krypton-2 has-text-white has-text-weight-semibold">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                    <div className="column is-6 my-2" id="karem-1">
                        <div className="image">
                            <img src={token} />
                        </div>
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-6 my-2" id="karem-2">
                        <div className="image">
                            <img src={blockchain} />
                        </div>
                    </div>
                    <div className="column is-5 my-2">
                        <div className="content">
                            <div className="image is-inline-block is-48x48">
                                <img src={bitnetwork} />
                            </div>
                            <p className="title ml-3 is-3 has-text-white is-inline">
                                cading Block
                            </p>

                            <br class="hr-2" />

                            <div className="subtitle has-text-grey-lighter">
                                Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no
                                sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu
                                impetus perfecto sit, nosea labore detraxit.
                            </div>
                            <button className="button has-background-krypton-2 has-text-white has-text-weight-semibold">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-5 my-2">
                        <div className="content">
                            <div className="image is-inline-block is-48x48">
                                <img src={bitmining} />
                            </div>
                            <p className="title ml-3 is-3 has-text-white is-inline">
                                Crypto Farming
                            </p>

                            <br class="hr-2" />

                            <div className="subtitle has-text-grey-lighter">
                                Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no
                                sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu
                                impetus perfecto sit, nosea labore detraxit.
                            </div>
                            <button className="button has-background-krypton-2 has-text-white has-text-weight-semibold">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                    <div className="column is-6 my-2" id="karem-3">
                        <div className="image">
                            <img src={cryptoMining} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Decentralized