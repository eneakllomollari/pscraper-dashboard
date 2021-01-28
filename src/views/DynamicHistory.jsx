import React from "react";
import axios from "axios";
import {headers, history_paginate_api} from "variables/charts.jsx"
import {CircleLoader} from "react-spinners";
import {css} from "@emotion/core";
import {Card, CardBody, CardFooter, CardHeader, Col, Table} from "reactstrap";
import ReactPaginate from "react-paginate";

class DynamicHistory extends React.Component {
    constructor() {
        super();
        this.state = {
            history: '',
            pageCount: '',
            perPage: 100,
        }
    }

    componentDidMount() {
        axios.get(history_paginate_api, headers).then(resp => {
            const history = resp.data;
            const pageCount = Math.ceil(history.count / this.state.perPage)
            this.setState({history, pageCount});
        })
    }

    handlePageChange = (data) => {
        const url = `${history_paginate_api}?limit=${this.state.perPage}&offset=${data.selected * this.state.perPage}`
        axios.get(url, headers).then(resp => {
            const history = resp.data;
            console.log(history)
            this.setState({history});
        })
    }

    render() {
        return (<div className="content">
            {this.state.history === '' ?
                <CircleLoader
                    css={css`margin: 10% auto;`}
                    size={300}
                    color="#123abc"
                /> : <Col>
                    <Card>
                        <CardHeader>Dynamic History Table</CardHeader>
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
                                    <th>VIN</th>
                                    <th>Price</th>
                                    <th>Mileage</th>
                                    <th>Date</th>
                                    <th>Marketplace</th>
                                    <th>Seller #</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.history.results.map(history =>
                                        <tr>
                                            <td>{history.id}</td>
                                            <td>{history.vin}</td>
                                            <td>{history.price}</td>
                                            <td>{history.mileage}</td>
                                            <td>{history.date}</td>
                                            <td>{history.marketplace}</td>
                                            <td>{history.seller}</td>
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
            }
        </div>)
    }
}

export default DynamicHistory;