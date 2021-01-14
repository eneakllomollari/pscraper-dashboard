import React from "react";
import {Card, CardBody, CardFooter, CardHeader, CardTitle, Row, Table} from "reactstrap";
import {DurationChart, PriceChart} from "variables/charts.jsx";
import axios from "axios";
import {headers, makes_api, vehicle_stats_api, vehicles_paginate_api} from "variables/charts";
import {BeatLoader} from "react-spinners";
import {css} from "@emotion/core";
import ReactPaginate from "react-paginate";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigChartData: "data1",
            visible: true,
            vehicles: '',
            makes: '',
            all_stats: '',
            makes_stats: '',
            pageCount: '',
            perPage: 100,
        };
    }

    componentDidMount() {
        axios.get(vehicles_paginate_api, headers).then(resp => {
            const vehicles = resp.data;
            const pageCount = Math.ceil(vehicles.count / this.state.perPage)
            this.setState({vehicles, pageCount});
        })
        axios.get(vehicle_stats_api, headers).then(resp => {
            const all_stats = resp.data
            this.setState({all_stats})
        })
        axios.get(makes_api, headers).then(resp => {
            const makes = resp.data;
            const makes_stats = makes.map(make => axios.get(vehicle_stats_api + `?make=${make}`, headers).then(resp => {
                return resp.data;
            }))
            Promise.all(makes_stats).then((makes_stats) => {
                this.setState({makes_stats})
            })
            this.setState({makes});
        })
    }

    handlePageChange = (data) => {
        // TODO Bug
        console.log(data)
        const url = `${vehicles_paginate_api}?limit=${this.state.perPage}&offset=${data.selected * this.state.perPage}`
        axios.get(url, headers).then(resp => {
            const vehicles = resp.data;
            this.setState({vehicles});
        })
    }

    render() {
        return (
            <div className="content">
                <Row>
                    {
                        this.state.makes === '' || this.state.makes_stats === '' || this.state.all_stats === '' ?
                            <BeatLoader
                                css={css`margin: 5% auto;text-align:center;`}
                                size={30}
                                color="blue"
                            /> : <Card className="card-chart">
                                <CardHeader>
                                    <h5 className="card-category">Duration</h5>
                                    <CardTitle tag="h3">
                                        {Math.round(this.state.all_stats.duration.average).toLocaleString()} days
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <DurationChart makes={this.state.makes} stats={this.state.makes_stats}/>
                                    </div>
                                </CardBody>
                            </Card>
                    }
                </Row>
                <Row>
                    {
                        this.state.makes === '' || this.state.makes_stats === '' ? <BeatLoader
                                css={css`margin: 5% auto;text-align:center;`}
                                size={30}
                                color="blue"
                            /> :
                            <Card className="card-chart">
                                <CardHeader>
                                    <h5 className="card-category">Price</h5>
                                    <CardTitle tag="h3">
                                        ${Math.round(this.state.all_stats.price.average).toLocaleString()}
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <PriceChart makes={this.state.makes} stats={this.state.makes_stats}/>
                                    </div>
                                </CardBody>
                            </Card>
                    }
                </Row>
                <Row>
                    {typeof this.state.vehicles === 'string' ?
                        <BeatLoader
                            css={css`margin: 5% auto;`}
                            size={30}
                            color="blue"
                        /> :
                        <Card>
                            <CardHeader>Vehicles Table</CardHeader>
                            <CardFooter>
                                <ReactPaginate
                                    previousLabel={'Prev'}
                                    nextLabel={'Next'}
                                    breakLabel={'...'}
                                    pageCount={this.state.pageCount}
                                    onPageChange={this.handlePageChange}
                                    containerClassName={'pagination pointerMouse'}
                                    subContainerClassName={'pagination'}
                                    nextLinkClassName={'pointerMouse'}
                                    prevLinkClassName={'pointerMouse'}
                                />
                            </CardFooter>
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
                                    {this.state.vehicles.results.map(vehicle =>
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
                            <CardFooter>
                                <ReactPaginate
                                    previousLabel={'Prev'}
                                    nextLabel={'Next'}
                                    breakLabel={'...'}
                                    pageCount={this.state.pageCount}
                                    onPageChange={this.handlePageChange}
                                    containerClassName={'pagination pointerMouse'}
                                    subContainerClassName={'pagination'}
                                    nextLinkClassName={'pointerMouse'}
                                    prevLinkClassName={'pointerMouse'}
                                />
                            </CardFooter>
                        </Card>
                    }
                </Row>
            </div>
        );
    }
}