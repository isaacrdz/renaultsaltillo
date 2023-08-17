import React, { Suspense, lazy, useEffect, useState, useContext } from 'react';
import fetchData from 'Api';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StoreContext } from 'GlobalData';
import { Actions } from 'Constants';
import { LoadingDialog } from 'Components/Dialogs';
const HomePage = lazy(() => import('Pages/Home'));
const ContactPage = lazy(() => import('Pages/Contact'));
const VechiclesPage = lazy(() => import('Pages/Vehicles'));
const LegalInformation = lazy(() => import('Pages/LegalInformation'));

const Routers = () => {
    const { state, setGlobalState } = useContext(StoreContext);

    useEffect(() => {
        fetchData.json(`assets/jsons/config.json?v${window.json_cache}`).then(rsp => {
            if(!rsp.error){
               setGlobalState(Actions.SET_CONFIG,rsp);
            }
        })
    },[]);

    if(!state.ready){
        return <LoadingDialog open={true} />
    }

    return (<BrowserRouter>
        <Suspense fallback={<LoadingDialog open={true} />}>
            <Switch>
                <Route exact path={["/vehiculos/:vehicle","/vehiculos/:vehicle/:model"]}>
                    <VechiclesPage state={state} />
                </Route>
                <Route exact path="/contacto">
                    <ContactPage state={state} />
                </Route>
                <Route exact path="/avisodeprivacidad">
                    <LegalInformation />
                </Route>
                <Route path="/">
                    <HomePage state={state} />
                </Route>
            </Switch>
        </Suspense>
    </BrowserRouter>)
}

export default Routers;