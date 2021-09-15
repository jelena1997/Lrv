import React, { Component } from "react";
import ReactDOM from "react-dom";

import { URL } from "./config";

export default class Termin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            termin: this.props.termin
        };
    }

    render() {
        let datumPocetka = new Date(this.state.termin.pocetak * 1000);
        let dan = datumPocetka.getDate();
        let mesec = datumPocetka.getMonth() + 1;
        let godina = datumPocetka.getFullYear();

        let sati = datumPocetka.getHours();
        let minuti = datumPocetka.getMinutes();

        let trajanje = this.state.termin.trajanje;

        let satiTrajanja = parseInt(trajanje / 3600);
        let minutiTrajanja = parseInt(trajanje / 60) % 60;

        return (
            <tr>
                <td>{this.state.termin.tema}</td>
                <td>{`${dan}.${mesec}.${godina} u ${sati}:${
                    minuti < 10 ? `0${minuti}` : `${minuti}`
                }`}</td>
                <td align="center">
                    `{satiTrajanja}:
                    {minutiTrajanja < 10
                        ? `0${minutiTrajanja}`
                        : `${minutiTrajanja}`}
                </td>
                <td align="center">{`${this.state.termin.broj_prijava} / ${this.state.termin.max_broj_prijava}`}</td>
                <td align="center">
                    <a
                        className="btn btn-block btn-info"
                        href={
                            URL +
                            `termin/prijave?termin_id=${this.state.termin.id}&tema=${this.state.termin.tema}`
                        }
                    >
                        Pregledaj
                    </a>
                </td>
            </tr>
        );
    }
}

if (document.getElementById("termin")) {
    ReactDOM.render(<Termin />, document.getElementById("termin"));
}
