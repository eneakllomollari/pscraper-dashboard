import React from "react";
import {Bar, Line} from "react-chartjs-2";
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table,} from "reactstrap";
import {chartExample2, chartExample3, chartExample4} from "variables/charts.jsx";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigChartData: "data1"
        };
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col lg="4">
                            <Card className="card-chart">
                                <CardHeader>
                                    <h5 className="card-category">Total Shipments</h5>
                                    <CardTitle tag="h3">
                                        <i className="tim-icons icon-bell-55 text-info"/>{" "}
                                        763,215
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
                                    <h5 className="card-category">Daily Sales</h5>
                                    <CardTitle tag="h3">
                                        <i className="tim-icons icon-delivery-fast text-primary"/>{" "}
                                        3,500€
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Bar
                                            data={chartExample3.data}
                                            options={chartExample3.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card className="card-chart">
                                <CardHeader>
                                    <h5 className="card-category">Completed Tasks</h5>
                                    <CardTitle tag="h3">
                                        <i className="tim-icons icon-send text-success"/> 12,100K
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
                        <Col lg="12" md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">Mock Table</CardTitle>
                                    <p className="category">Sample mock data</p>
                                </CardHeader>
                                <CardBody>
                                    <Table className="tablesorter" responsive hover>
                                        <thead className="text-primary">
                                        <tr>
                                            <th>Listing ID</th>
                                            <th>VIN</th>
                                            <th>Make</th>
                                            <th>Model</th>
                                            <th>Trim</th>
                                            <th>Body Style</th>
                                            <th>Date First Available</th>
                                            <th>Date Last Available</th>
                                            <th>Duration</th>
                                            <th>Price</th>
                                            <th>Mileage</th>
                                            <th>Year</th>
                                            <th>Dealer</th>
                                            <th>Phone Number</th>
                                            <th>Rating</th>
                                            <th>Address</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>781239789</td>
                                            <td>5YJSA1BC5DFP10893</td>
                                            <td>Tesla</td>
                                            <td>Model S</td>
                                            <td>Base</td>
                                            <td>Sedan</td>
                                            <td>07-30-2019</td>
                                            <td>08-03-2019</td>
                                            <td>4</td>
                                            <td>$33400</td>
                                            <td>42037</td>
                                            <td>2013</td>
                                            <td>Carvana</td>
                                            <td>8882652093</td>
                                            <td>(4.3) 389 Reviews</td>
                                            <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                        </tr>
                                        <tr>
                                            <td>781239789</td>
                                            <td>5YJSA1BC5DFP10893</td>
                                            <td>Tesla</td>
                                            <td>Model S</td>
                                            <td>Base</td>
                                            <td>Sedan</td>
                                            <td>07-30-2019</td>
                                            <td>08-03-2019</td>
                                            <td>4</td>
                                            <td>$33400</td>
                                            <td>42037</td>
                                            <td>2013</td>
                                            <td>Carvana</td>
                                            <td>8882652093</td>
                                            <td>(4.3) 389 Reviews</td>
                                            <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                        </tr>
                                        <tr>
                                            <td>781239789</td>
                                            <td>5YJSA1BC5DFP10893</td>
                                            <td>Tesla</td>
                                            <td>Model S</td>
                                            <td>Base</td>
                                            <td>Sedan</td>
                                            <td>07-30-2019</td>
                                            <td>08-03-2019</td>
                                            <td>4</td>
                                            <td>$33400</td>
                                            <td>42037</td>
                                            <td>2013</td>
                                            <td>Carvana</td>
                                            <td>8882652093</td>
                                            <td>(4.3) 389 Reviews</td>
                                            <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                        </tr>
                                        <tr>
                                            <td>781239789</td>
                                            <td>5YJSA1BC5DFP10893</td>
                                            <td>Tesla</td>
                                            <td>Model S</td>
                                            <td>Base</td>
                                            <td>Sedan</td>
                                            <td>07-30-2019</td>
                                            <td>08-03-2019</td>
                                            <td>4</td>
                                            <td>$33400</td>
                                            <td>42037</td>
                                            <td>2013</td>
                                            <td>Carvana</td>
                                            <td>8882652093</td>
                                            <td>(4.3) 389 Reviews</td>
                                            <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                        </tr>
                                        <tr>
                                            <td>781239789</td>
                                            <td>5YJSA1BC5DFP10893</td>
                                            <td>Tesla</td>
                                            <td>Model S</td>
                                            <td>Base</td>
                                            <td>Sedan</td>
                                            <td>07-30-2019</td>
                                            <td>08-03-2019</td>
                                            <td>4</td>
                                            <td>$33400</td>
                                            <td>42037</td>
                                            <td>2013</td>
                                            <td>Carvana</td>
                                            <td>8882652093</td>
                                            <td>(4.3) 389 Reviews</td>
                                            <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                        </tr>
                                        <tr>
                                            <td>781239789</td>
                                            <td>5YJSA1BC5DFP10893</td>
                                            <td>Tesla</td>
                                            <td>Model S</td>
                                            <td>Base</td>
                                            <td>Sedan</td>
                                            <td>07-30-2019</td>
                                            <td>08-03-2019</td>
                                            <td>4</td>
                                            <td>$33400</td>
                                            <td>42037</td>
                                            <td>2013</td>
                                            <td>Carvana</td>
                                            <td>8882652093</td>
                                            <td>(4.3) 389 Reviews</td>
                                            <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                        </tr>
                                        <tr>
                                            <td>781239789</td>
                                            <td>5YJSA1BC5DFP10893</td>
                                            <td>Tesla</td>
                                            <td>Model S</td>
                                            <td>Base</td>
                                            <td>Sedan</td>
                                            <td>07-30-2019</td>
                                            <td>08-03-2019</td>
                                            <td>4</td>
                                            <td>$33400</td>
                                            <td>42037</td>
                                            <td>2013</td>
                                            <td>Carvana</td>
                                            <td>8882652093</td>
                                            <td>(4.3) 389 Reviews</td>
                                            <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                        </tr>
                                        <tr>
                                            <td>781239789</td>
                                            <td>5YJSA1BC5DFP10893</td>
                                            <td>Tesla</td>
                                            <td>Model S</td>
                                            <td>Base</td>
                                            <td>Sedan</td>
                                            <td>07-30-2019</td>
                                            <td>08-03-2019</td>
                                            <td>4</td>
                                            <td>$33400</td>
                                            <td>42037</td>
                                            <td>2013</td>
                                            <td>Carvana</td>
                                            <td>8882652093</td>
                                            <td>(4.3) 389 Reviews</td>
                                            <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Dashboard;
