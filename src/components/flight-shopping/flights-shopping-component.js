import React from 'react';
import FlightsSearchForm from '../search-form/flight-search-form'
import Filters from "../filters/filters";
import FlightsSearchResults from "../flightresults/flights-search-results";
import ShoppingCart from "../shopping-cart/shopping-cart";
import {Container, Col, Row} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Welcome from '../../components/welcome';

export default function FlightsShoppingComponent(props) {
    const {
        initSearch
    } = props;
    return (
        <Container fluid={true}>
            <Row>
                <FlightsSearchForm {...props}/>
            </Row>
            <Row >
                <Col xs={0} sm={0} md={3} xl={0} className='d-none d-md-block'>
                    <Filters/>
                </Col>
                <Col xs={12} sm={12} md={6} xl={6}>
                    <FlightsSearchResults  initSearch={initSearch} />
                    <Welcome />
                </Col>
                <Col xs={0} sm={0} md={3} xl={3}>
                    <ShoppingCart/>
                </Col>
            </Row>

        </Container>
    )
}

const WarningNoResults = () => {
    return (
        <Alert variant="warning" className={'pt-2'}>
            <Alert.Heading>
                Sorry, we could not find any flights
                <span role='img' aria-label='sorry'> 😢</span>
            </Alert.Heading>
            <p>
                There may be no flights available for the requested origin, destination and travel dates.<br/>
            </p>
            <p className="mb-0">
                We are working hard to integrate with other partners, and more options will quickly become available,
                stay tuned!
            </p>
        </Alert>
    );
};

function searchForFlightsWithCriteria() {

}
