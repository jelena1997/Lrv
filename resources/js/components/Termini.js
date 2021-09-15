import React, { Component } from "react";
import ReactDOM from "react-dom";
import Termin from "./Termin";

import { URL } from "./config";

export default class Termini extends Component {
    constructor(props) {
        super(props);

        this.state = {
            termini: []
        };

        this.sviTermini();
    }

    sviTermini() {
        axios.get(URL + "termini/getSvi").then(res => {
            const termini = res.data.termini;
            this.setState({ termini: termini });
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead className=" thead-light">
                        <tr>
                            <th scope="col">Tema</th>
                            <th scope="col">Pocetak</th>
                            <th scope="col">Trajanje</th>
                            <th scope="col">Prijave</th>
                            <th scope="col">Pregled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.termini.map(termin => {
                            return <Termin key={termin.id} termin={termin} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById("termini")) {
    ReactDOM.render(<Termini />, document.getElementById("termini"));
}
