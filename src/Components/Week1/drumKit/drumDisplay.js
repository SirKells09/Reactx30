import React, { Component } from 'react';
import './drumKitCSS.css'
import { Container } from 'reactstrap'
import DrumKit from './DrumKit';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import boom from './sounds/boom.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tom from './sounds/tom.wav';
import tink from './sounds/tink.wav';


export default class drumDisplay extends Component {
    render() {
        return (
            <Container>


                <div>
                    <h1>DRUMKIT</h1>
                    <ul className="drumKitButtons">

                        <li>
                            <div className="one">
                                <DrumKit
                                    className="drumKit clap"
                                    smallText="A"
                                    bigText="clap"
                                    code={65}
                                    source={clap}
                                />
                                <DrumKit
                                    className="drumKit hihat"
                                    smallText="S"
                                    bigText="hihat"
                                    code={83}
                                    source={hihat}
                                />
                                <DrumKit
                                    className="drumKit kick"
                                    smallText="D"
                                    bigText="kick"
                                    code={68}
                                    source={kick}
                                />
                            </div>
                        </li>
                        <li>

                            <div className="two">
                                <DrumKit
                                    className="drumKit openhat"
                                    smallText="f"
                                    bigText="openhat"
                                    code={70}
                                    source={openhat}
                                />
                                <DrumKit
                                    className="drumKit boom"
                                    smallText="G"
                                    bigText="boom"
                                    code={71}
                                    source={boom}
                                />
                                <DrumKit
                                    className="drumKit ride"
                                    smallText="H"
                                    bigText="ride"
                                    code={72}
                                    source={ride}
                                />
                            </div>
                        </li>
                        <li>

                            <div className="three">
                                <DrumKit
                                    className="drumKit snare"
                                    smallText="J"
                                    bigText="snare"
                                    code={74}
                                    source={snare}
                                />
                                <DrumKit
                                    className="drumKit tom"
                                    smallText="K"
                                    bigText="tom"
                                    code={75}
                                    source={tom}
                                />
                                <DrumKit
                                    className="drumKit tink"
                                    smallText="L"
                                    bigText="tink"
                                    code={76}
                                    source={tink}
                                />
                            </div>
                        </li>
                    </ul>
                </div>

            </Container>
        );
    }
}
