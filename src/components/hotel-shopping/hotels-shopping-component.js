import React from 'react';
import HotelSearchForm from '../search-form/hotel-search-form'
import HotelFilters from "../filters/hotel-filters";
import HotelsSearchResults from "../hotelresults/hotels-search-results";
import {Container, Col, Row} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import ShoppingCart from "../shopping-cart/shopping-cart";
import Welcome from '../../components/welcome';

export default function HotelsShoppingComponent(props) {
    const {
        initSearch
    } = props;
    return (
        <Container fluid={true}>
            <Row>
                <HotelSearchForm {...props}/>
            </Row>
            <Row>
                <Col xs={0} sm={0} md={3} xl={0} className='d-none d-md-block'>
                    <HotelFilters/>
                </Col>
                <Col xs={12} sm={12} md={6} xl={6}>
                    <HotelsSearchResults initSearch={initSearch} />
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
