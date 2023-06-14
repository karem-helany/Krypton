import phone from '../images/phone.svg'
import mail from '../images/mail.svg'
import telegram from '../images/telegram.svg'

const Form = () => {
    return (
        <div className="form">
            <section className="section">
                <div className="header has-text-centered">
                    <hr className="hr" />
                    <p className="title is-2 mt-4 is-spaced has-text-white has-text-weight-semibold">
                        Get in Touch
                    </p>
                    <p className="subtitle is-6 has-text-grey-lighter" style={{ maxWidth: "600px", margin: "0 auto" }}>
                        Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore
                        detraxit.
                        mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus
                        quaestio
                        ex
                        mel, has ei tota homero.
                    </p>
                </div>
                <div className="columns is-centered">
                    <div className="column is-6">
                        <div className="buttons is-flex is-justify-content-space-between py-6">
                            <button className="button is-large is-rounded has-background-krypton-3">
                                <img src={phone} className="play" />
                            </button>
                            <button className="button is-large is-rounded has-background-krypton-3">
                                <img src={mail} className="play" />
                            </button>
                            <button className="button is-large is-rounded has-background-krypton-3">
                                <img src={telegram} className="play" />
                            </button>
                        </div>
                    </div>
                </div>
                <form className="has-text-centered">

                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="message" placeholder="Message" required />

                    <div className="buttons is-centered m-6">
                        <button
                            className="button has-text-white mb-6 px-4 py-5 has-background-krypton-4 has-text-weight-semibold">
                            SEND MASSAGE
                        </button>
                    </div>
                </form>
            </section>
        </div>



    )
}

export default Form