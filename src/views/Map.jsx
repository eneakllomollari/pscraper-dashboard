import React from "react";
import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap"
import {headers, sellers_api} from "variables/charts.jsx"
import axios from "axios";
import { css } from "@emotion/core";
import { MoonLoader } from "react-spinners"

export default class MyMap extends React.Component {
    constructor() {
        super();
        this.state = { selectedSeller: false, sellers: '' }
    }

    handleClick = (seller) => {
        this.setState({selectedSeller: seller})
    };

    componentDidMount() {
        axios.get(sellers_api, headers).then(resp => {
            const sellers = resp.data;
            this.setState({ sellers });
        })
    }

    render() {
        return (<div className="content">
                {this.state.sellers === '' ?
                    <MoonLoader
                        css={css`margin: 10% auto;`}
                        size={150}
                        color="#123abc"
                    /> :
                    <div>
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader>Dealers Map</CardHeader>
                                    <CardBody>
                                        <div id="map">
                                            Leaflet here
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardHeader>
                                        Header Here
                                    </CardHeader>
                                    <CardBody>
                                        Body Here
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader>Dealers Table</CardHeader>
                                    <CardBody>
                                        <Table className="tablesorter table" responsive hover>
                                            <thead className="text-primary">
                                            <tr>
                                                <th>Dealer</th>
                                                <th>Phone Number</th>
                                                <th>Address</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.sellers.map(seller =>
                                                    <tr>
                                                        <td>{seller.name}</td>
                                                        <td>{seller.phone_number} </td>
                                                        <td>{seller.address} </td>
                                                    </tr>
                                                )
                                            }
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                }
            </div>
        );
    }
}
