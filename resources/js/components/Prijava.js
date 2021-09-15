import React, { Component } from "react";
import ReactDOM from "react-dom";

import { URL } from "./config";

export default class Termin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prijava: this.props.prijava,
            formaImeStudenta: false,
            novoImeStudenta: ""
        };

        this.obrisiPrijavu = this.obrisiPrijavu.bind(this);
        this.izmeniPrijavu = this.izmeniPrijavu.bind(this);
        this.novoIme = this.novoIme.bind(this);
        this.promeniIme = this.promeniIme.bind(this);
    }

    obrisiPrijavu() {
        axios
            .delete(URL + "prijave/deletePrijava?id=" + this.state.prijava.id)
            .then(res => {
                this.setState({
                    prijava: {
                        naziv: "obrisana prijava",
                        ime_student: "obrisana prijava"
                    }
                });
            });
    }
    prikaziFormuZaIzmenuImena() {
        this.setState({ formaImeStudenta: !this.state.formaImeStudenta });
    }

    izmeniPrijavu() {
        this.prikaziFormuZaIzmenuImena();
    }
    novoIme(e) {
        this.setState({ novoImeStudenta: e.target.value });
    }

    formaImeStudenta() {
        if (this.state.formaImeStudenta) {
            return (
                <form onSubmit={this.promeniIme}>
                    <input
                        onChange={this.novoIme}
                        className=""
                        type="text"
                    ></input>
                    <input hidden={true} type="submit"></input>
                </form>
            );
        } else return this.state.prijava.ime_student;
    }

    promeniIme(e) {
        e.preventDefault();
        axios
            .put(URL + "prijava/editPrijava", {
                ime_student: this.state.novoImeStudenta,
                id: this.state.prijava.id
            })
            .then(res => {
                alert(res.data.poruka);
            });
        this.setState({ formaImeStudenta: !this.state.formaImeStudenta });
    }

    render() {
        return (
            <tr>
                <td>{this.state.prijava.naziv}</td>
                <td>{this.formaImeStudenta()}</td>
                <td>
                    <button
                        className="btn btn-danger btn-block"
                        onClick={this.obrisiPrijavu}
                    >
                        Obrisi
                    </button>
                    <button
                        className="btn btn-secondary btn-block"
                        onClick={this.izmeniPrijavu}
                    >
                        Izmeni
                    </button>
                </td>
            </tr>
        );
    }
}
if (document.getElementById("prijava")) {
    ReactDOM.render(<Prijava />, document.getElementById("prijava"));
}
