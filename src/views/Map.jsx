import React from "react";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";

const MapWrapper = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: 37.9730027, lng: -121.3719168}}
            defaultOptions={{
                // scrollwheel: false,
            }}
        >
            <Marker position={{lat: 40.748817, lng: -73.985428}}/>
        </GoogleMap>
    ))
);

class Map extends React.Component {
    render() {
        return (
            <div className="content">
                <Col>
                    <Row>
                        <Card className="card-plain">
                            <CardHeader>Dealers Map</CardHeader>
                            <CardBody>
                                <div
                                    id="map"
                                    className="map"
                                    style={{position: "relative", overflow: "hidden"}}
                                >
                                    <MapWrapper
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_CpXJHBVmSqzpbFQ3pMlOJV1VMmPql2E"
                                        loadingElement={<div style={{height: `100%`}}/>}
                                        containerElement={<div style={{height: `100%`}}/>}
                                        mapElement={<div style={{height: `100%`}}/>}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="card-plain">
                            <CardHeader>Dealers Table</CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive hover>
                                    <thead className="text-primary">
                                    <tr>
                                        <th>Dealer</th>
                                        <th>Phone Number</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Carvana</td>
                                        <td>8882652093</td>
                                        <td>(4.3) 389 Reviews</td>
                                        <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                    </tr>
                                    <tr>
                                        <td>Carvana</td>
                                        <td>8882652093</td>
                                        <td>(4.3) 389 Reviews</td>
                                        <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                    </tr>
                                    <tr>
                                        <td>Carvana</td>
                                        <td>8882652093</td>
                                        <td>(4.3) 389 Reviews</td>
                                        <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                    </tr>
                                    <tr>
                                        <td>Carvana</td>
                                        <td>8882652093</td>
                                        <td>(4.3) 389 Reviews</td>
                                        <td>ONLINE ONLY - No Retail Location,Sacramento,CA</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Map;
