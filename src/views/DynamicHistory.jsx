import React from "react";
import axios from "axios";
import {headers, history_api} from "variables/charts.jsx"
import {CircleLoader} from "react-spinners";
import {css} from "@emotion/core";
import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";

class DynamicHistory extends React.Component {
    constructor() {
        super();
        this.state = {history: ''}
    }

    componentDidMount() {
        axios.get(history_api, headers).then(resp => {
            const history = resp.data;
            this.setState({history});
        })
    }

    render() {
        return (<div className="content">
            {typeof this.state.history === 'string' ?
                <CircleLoader
                    css={css`margin: 10% auto;`}
                    size={300}
                    color="#123abc"
                />
                :
                <Col>
                    <Row>
                        <Card>
                            <CardHeader>Dynamic History Table</CardHeader>
                            <CardBody>
                                <Table className="tablesorter table" responsive hover>
                                    <thead className="text-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>VIN</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Seller #</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.history.map(history =>
                                            <tr>
                                                <td>{history.id}</td>
                                                <td>{history.vin}</td>
                                                <td>{history.price}</td>
                                                <td>{history.date}</td>
                                                <td>{history.seller_id}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
            }
        </div>)
    }
}

export default DynamicHistory;