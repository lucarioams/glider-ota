import React from 'react';
import {
    action
} from '@storybook/addon-actions';

import {ItineraryDurationFilter} from "./itinerary-duration-filter"
import searchResults from "../storybook-utils/mock-data/sample_response_unprocessed2.json"

export default {
    title: 'Filters/Layover duration filter',
    component:ItineraryDurationFilter
};



export const Default = () => (<ItineraryDurationFilter title="Layover duration" onPredicateChanged={action("onPredicateChanged")} searchResults={searchResults} orig='YUL' dest='YVR'/>);
