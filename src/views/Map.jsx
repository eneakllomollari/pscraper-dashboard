import React from "react";
import {headers, sellers_paginate_api} from "variables/charts.jsx"
import axios from "axios";
import {Card, CardBody, CardFooter, CardHeader, Col, Row, Table} from "reactstrap";
import {css} from "@emotion/core";
import {MoonLoader} from "react-spinners"
import ReactPaginate from 'react-paginate';


export default class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perPage: 100,
            pageCount: '',
            sellers: '',
            next: '',
            prev: '',
        }
    }

    handlePageChange = (data) => {
        const url = `${sellers_paginate_api}?limit=${this.state.perPage}&offset=${data.selected * this.state.perPage}`
        axios.get(url, headers).then(resp => {
            const sellers = resp.data.results;
            this.setState({sellers});
        })
    }

    componentDidMount() {
        axios.get(sellers_paginate_api, headers).then(resp => {
            const sellers = resp.data.results;
            const pageCount = Math.ceil(resp.data.count / this.state.perPage)
            this.setState({sellers, pageCount});
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
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader>Dealers Table</CardHeader>
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
                                        <Table className="tablesorter table" responsive hover>
                                            <thead className="text-primary">
                                            <tr>
                                                <th>#</th>
                                                <th>Dealer</th>
                                                <th>Phone Number</th>
                                                <th>Address</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.sellers.map(seller =>
                                                    <tr>
                                                        <td>{seller.id}</td>
                                                        <td>{seller.name}</td>
                                                        <td>{seller.phone_number} </td>
                                                        <td>{seller.address} </td>
                                                    </tr>
                                                )
                                            }
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
                            </Col>
                        </Row>
                    </div>
                }
            </div>
        );
    }
}
