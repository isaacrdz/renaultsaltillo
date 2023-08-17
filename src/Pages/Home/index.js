import React from 'react';
// import { Link } from "react-router-dom";
import PageWrapper from 'Components/PageWrapper';
import BannerViewer from 'Components/BannerViewer';
import CarsGrid from 'Components/CarsGrid';
import ServicesBoxes from 'Components/ServicesBoxes';
import CotizaButton from 'Components/CotizaButton';

const HomePage = ({state}) => {
    return (<PageWrapper navBar>
        <BannerViewer banners={state.banners} />
        <CarsGrid cars={state.cars} />
        <ServicesBoxes services={state.services} />
        <CotizaButton />
    </PageWrapper>)
}

export default HomePage;