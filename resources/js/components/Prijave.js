import React, { Component } from "react";
import ReactDOM from "react-dom";
import Prijava from "./Prijava";

import { URL } from "./config";

export default class Prijave extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prijave: [],
            ime: "",
            naziv: "",
            terminID: this.props.terminID
        };
        this.getPrijave();
        this.naziv = this.naziv.bind(this);
        this.ime = this.ime.bind(this);
        this.dodajPrijavu = this.dodajPrijavu.bind(this);
    }

    getPrijave() {
        axios
            .get(URL + "prijave/get?termin_id=" + this.state.terminID)
            .then(res => {
                const prijave = res.data.prijave;
                this.setState({ prijave: prijave });
            });
    }
    dodajPrijavu(e) {
        e.preventDefault();
        axios
            .post(URL + "prijave/addPrijava", {
                ime_student: this.state.ime,
                naziv: this.state.naziv,
                termin_id: this.state.terminID
            })
            .then(res => {
                alert(res.data.poruka);
            });
    }

    naziv(e) {
        this.setState({ naziv: e.target.value });
    }

    ime(e) {
        this.setState({ ime: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.dodajPrijavu}>
                    <div className="row justify-content-center">
                        <div className="col">
                            <input
                                onChange={this.naziv}
                                type="text"
                                placeholder="Naziv prijave..."
                                className="form-control"
                            ></input>
                        </div>
                        <div className="col">
                            <input
                                onChange={this.ime}
                                type="text"
                                className="form-control"
                                placeholder="Ime studenta..."
                            ></input>
                        </div>
                        <div className="col">
                            <input
                                type="submit"
                                value="Submit"
                                className="form-control"
                            ></input>
                        </div>
                    </div>
                </form>
                <table className="table table-bordered">
                    <thead className=" thead-light">
                        <tr>
                            <th scope="col">Naziv</th>
                            <th scope="col">Ime studenta</th>
                            <th scope="col">Akcije </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.prijave.map(prijava => {
                            return (
                                <Prijava key={prijava.id} prijava={prijava} />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById("prijave")) {
    const propsContainer = document.getElementById("prijave");
    const terminID = propsContainer.dataset.terminid;

    ReactDOM.render(
        <Prijave terminID={terminID} />,
        document.getElementById("prijave")
    );
}
