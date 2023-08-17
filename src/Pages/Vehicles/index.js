import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import fetchData from 'Api';
import { LoadingDialog } from 'Components/Dialogs';
import PageWrapper from 'Components/PageWrapper';
import BannerViewer from 'Components/BannerViewer';
import Box from '@material-ui/core/Box';
import ContactForm from 'Pages/Contact/Form';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyes from './styles';
import { Fragment } from 'react';

const VersionCard = ({version,price,image,features,classes,terms,openContactForm}) =>{
    const crdImage = `/assets/images/cars/${image}.jpg`;
    return (<Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
            <CardMedia component="img" className={classes.cardMedia} image={crdImage} title={version} />
            <CardContent className="content">
                <Typography gutterBottom component="h1">{version}</Typography>
                <Typography component="h6">PRECIO INICIAL:</Typography>
                <Typography gutterBottom component="h3">${price}</Typography>
                <Typography component="h6">CARACTERÍSTICAS:</Typography>
                {features.map((ft,inx) => {
                    return <Typography key={`ft${inx}`} component="p">- {ft}</Typography>
                })}
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" onClick={openContactForm} disableElevation fullWidth>COTIZAR</Button>
            </CardActions>
            <Typography className="terms" gutterBottom component="p">{terms}</Typography>
        </Card>
    </Grid>)
}

const ExtraCard = ({title,image,texts,classes}) => {
    const crdImage = `/assets/images/extras/${image}`;
    return (<Grid item xs={12} md={4}>
        <Card className={classes.card}>
            <CardMedia component="img" className={classes.cardMedia} image={crdImage} title={title} />
            <CardContent>
                <Typography gutterBottom component="h1">{title}</Typography>
                {texts.map((txt,indx)=><Typography key={`tx${indx}`} component="p">{txt}</Typography>)}
            </CardContent>
        </Card>
    </Grid>)
}

const ExtraModule = ({classes,extras,car}) => {
    return (<Fragment>
        <Box className={classes.titles}>
        <h2>{`¿Listo para viajar a bordo del ${car}?`}</h2>
        </Box>
        <Grid container spacing={1} className={classes.gridCards} direction="row" justify="center" alignItems="stretch">
            {extras.map((extra,inx) => {
            return <ExtraCard key={`ex${inx}`} {...extra} classes={classes} />
        })}
        </Grid>
    </Fragment>)
}

const VechiclesPage = ({state}) => {
    const { vehicle,model } = useParams();
    const [carData, setCarData] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const classes = useStyes();

    useEffect(() => {
        const vid = (model)? `${vehicle}-${model}` : vehicle;
        console.log(vehicle, model);
        const carFlt = state.cars.filter(car=>{
            return car.id===vid;
        });
        if(carFlt.length>0){
            fetchData.json(`assets/jsons/${carFlt[0].id}.json`).then(rsp => {
                console.log(rsp)
                if(!rsp.error){
                    setCarData(rsp);
                }
            })
        }        
    },[vehicle]);

    const openContactForm = () =>{
        window.scrollTo({ top:0 , behavior: 'smooth'});
        setShowForm(true);
    }

    if(!carData){
        return <LoadingDialog open={true} />
    }

    return (<PageWrapper>
        <BannerViewer banners={state.banners} group={carData.group} fixed={carData.banners} />
        <Box className={classes.titles}>
            <h4>Escoge tu mejor opción</h4>
            <h3>Conoce las versiones {carData.title}</h3>
        </Box>
        {showForm && <ContactForm cars={state.cars} contact={state.contact} vehicle={carData.vehicle} />}
        <Grid container spacing={1} className={classes.gridCards} direction="row" justify="center" alignItems="stretch">
           {carData.versions.map((vehicle,inx) => {
               return <VersionCard key={`vh${inx}`} {...vehicle} classes={classes} openContactForm={openContactForm} terms={state.terms} />
           })}
        </Grid>
        {carData.extras &&  <ExtraModule extras={carData.extras} car={carData.title} classes={classes} />}
    </PageWrapper>)
}

export default VechiclesPage;