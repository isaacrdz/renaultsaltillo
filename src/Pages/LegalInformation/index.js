import React,{ useEffect, useState } from 'react';
import fetchData from 'Api';
import PageWrapper from 'Components/PageWrapper';

const LegalInformation = () => {
    const [legal,setLegal] = useState(null);

    useEffect(() => {
        fetchData.text('assets/htmls/legal.html').then(rsp => {
            setLegal(rsp);
        });
    },[]);

    if(legal){
        return (<PageWrapper navBar>
            <div dangerouslySetInnerHTML={{__html: legal}}></div>
        </PageWrapper>)
    }
    return null;
}

export default LegalInformation;