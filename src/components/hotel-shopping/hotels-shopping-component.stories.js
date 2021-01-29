import React from 'react';

import HotelsShoppingComponent from "./hotels-shopping-component";

import {ProviderWrapper} from "../../redux/redux-stories-helper"
import {addDecorator} from "@storybook/react";
addDecorator(story =>  <ProviderWrapper>{story()}</ProviderWrapper>)


export default {
    title: 'Hotels shopping',
    component:HotelsShoppingComponent
};

export const Default = () => (<HotelsShoppingComponent />);

