import React from "react";
import {Bar, Line} from "react-chartjs-2";
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import {chartExample2, chartExample4} from "variables/charts.jsx";
import axios from "axios";
import {headers, vehicles_api} from "variables/charts";
import {BeatLoader} from "react-spinners";
import {css} from "@emotion/core";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigChartData: "data1",
            visible: true,
            vehicles: '',
        };
    }

    componentDidMount() {
        axios.get(vehicles_api, headers).then(resp => {
            const vehicles = resp.data;
            this.setState({vehicles});
        })
    }

    onToggle = () => {
        this.setState({visible: !this.state.visible});
    };

    render() {
        return (
            <div className="content">
                <Row>
                    <Col lg="12">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Total Vehicles</h5>
                                <CardTitle tag="h3">
                                    <i className="tim-icons icon-bell-55 text-info"/>{" "}
                                    999,999
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={chartExample2.data}
                                        options={chartExample2.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Total Vehicles</h5>
                                <CardTitle tag="h3">
                                    <i className="tim-icons icon-bell-55 text-info"/>{" "}
                                    999,999
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={chartExample2.data}
                                        options={chartExample2.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Completed Sales</h5>
                                <CardTitle tag="h3">
                                    <i className="tim-icons icon-send text-success"/> 9,999
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Bar
                                        data={chartExample4.data}
                                        options={chartExample4.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Completed Sales</h5>
                                <CardTitle tag="h3">
                                    <i className="tim-icons icon-send text-success"/> 9,999
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={chartExample4.data}
                                        options={chartExample4.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {typeof this.state.vehicles === 'string' ?
                        <BeatLoader
                            css={css`margin: 5% auto;`}
                            size={30}
                            color="#123abc"
                        /> :
                        <Col lg="12" md="12">
                            <Card>
                                <CardHeader>Vehicles Table</CardHeader>
                                <CardBody>
                                    <Table responsive hover>
                                        <thead className="text-primary">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">VIN</th>
                                            <th scope="col">Make</th>
                                            <th scope="col">Model</th>
                                            <th scope="col">Year</th>
                                            <th scope="col">Body Style</th>
                                            <th scope="col">Mileage</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">First Date</th>
                                            <th scope="col">Duration</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.vehicles.map(vehicle =>
                                            <tr>
                                                <td>{vehicle.id} </td>
                                                <td>{vehicle.vin} </td>
                                                <td>{vehicle.make} </td>
                                                <td>{vehicle.model} </td>
                                                <td>{vehicle.year} </td>
                                                <td>{vehicle.body_style} </td>
                                                <td>{vehicle.mileage} </td>
                                                <td>{vehicle.price} </td>
                                                <td>{vehicle.first_date} </td>
                                                <td>{vehicle.duration} </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>}
                </Row>
            </div>
        );
    }
}

export default Dashboard;
