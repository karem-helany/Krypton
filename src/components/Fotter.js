import kryptonGradien from '../images/krypton-gradient.svg'

function Fotter() {
    return (
        <div class="fotter has-background-krypton-6">
            <section class="section has-text-centered">
                <div class="header">
                    <div class="image">
                        <img src={kryptonGradien} />
                    </div>
                    <p class="title has-text-white is-3 mt-3">
                        KRYPTON
                    </p>
                    <p class="subtitle has-text-krypton">
                        Blockchain brought to another level
                    </p>
                </div>
                <p class="subtitle mt-3 mb-3 is-6 has-text-krypton">
                    &#169; november 2022 | Krypton. All Rights Reserved
                </p>
                <p class="is-inline has-text-grey-lighter">
                    Coded by
                    <a href="https://www.linkedin.com/in/karem-helany-124610254" target="_blank"
                        class="subtitle is-6 is-inline has-text-krypton-2">💙 karem helany</a>
                </p>
            </section>
        </div>
    )
}

export default Fotter