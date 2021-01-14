import React from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap"
import { headers, sellers_api } from "variables/charts.jsx"
import axios from "axios";
import { css } from "@emotion/core";
import { MoonLoader } from "react-spinners"

const MapWrapper = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: 38.9947059, lng: -106.6715692 }}
        >{
                props.sellers.map(seller => {
                    const onClick = props.onClick.bind(this, seller.name);
                    return <Marker
                        position={{ lat: seller.latitude, lng: seller.longitude }}
                        onClick={onClick}
                    />
                })
            }
        </GoogleMap>
    ))
);

class Map extends React.Component {
    constructor() {
        super();
        this.state = { selectedSeller: false, sellers: '' }
    }

    handleClick = (seller, event) => {
        this.setState({ selectedSeller: seller })
    };

    componentDidMount() {
        axios.get(sellers_api, headers).then(resp => {
            const sellers = resp.data;
            this.setState({ sellers });
        })
    }

    render() {
        return (
            <div className="content">
                {typeof this.state.sellers === 'string' ?
                    <MoonLoader
                        css={css`margin: 10% auto;`}
                        size={150}
                        color="#123abc"
                    /> :
                    <Col>
                        <Row>
                            <Card>
                                <CardHeader>Dealers Map</CardHeader>
                                <CardBody>
                                    <div id="map" className="map" style={{ position: "relative", overflow: "hidden" }}>
                                        <MapWrapper
                                            sellers={this.state.sellers}
                                            selectedSeller={this.state.selectedSeller}
                                            onClick={this.handleClick}
                                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_CpXJHBVmSqzpbFQ3pMlOJV1VMmPql2E"
                                            loadingElement={<div style={{ height: `100%` }} />}
                                            containerElement={<div style={{ height: `100%` }} />}
                                            mapElement={<div style={{ height: `100%` }} />}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
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
                        </Row>
                    </Col>
                }
            </div>
        );
    }
}

export default Map;
