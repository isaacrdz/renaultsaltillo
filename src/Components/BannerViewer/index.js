import React, { useEffect, memo, useState } from 'react';
import Box from '@material-ui/core/Box';
import { NavigateBefore,NavigateNext } from '@material-ui/icons';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const BannerItem = ({classes,index,version,type,image,url}) => {
    const [newImage,setNewImage] = useState(null);

    useEffect(()=>{
        setNewImage(null);
        const newImg = new Image;
        newImg.onload = function() {
           setNewImage(newImg);
        }
        newImg.src = `/assets/images/banners/${version}/${image}.${type}`;
        setNewImage(null);
        console.log('INDEX CHANGED', version);
    },[index]);

    if(newImage){
        return <Fade in={true} timeout={2000} ><img className={classes.bannerItem} src={newImage.src} alt={image} /></Fade>;
    }
    return <Box className={classes.loader}><CircularProgress /></Box>;
};


const BannerViewer = memo(({banners,group,fixed}) =>{
    const [activeIndex,setActiveIndex] = useState(0);
    const [bannersList,setBannersList] = useState([]);
    const [item,setItem] = useState(null);
    const classes = useStyles();

    const showNextBanner = (num) => {
        let nextActive = activeIndex + num;
        if(nextActive >= bannersList.length){
            nextActive = 0;
        }else if(nextActive < 0){
            nextActive = bannersList.length-1;
        }
        setActiveIndex(nextActive);
    }

    useEffect(()=>{
        let bnrList = [];
        if(group){
            bnrList = banners.list.filter((bnr)=>{
                bnr.version = banners.version;
                return bnr.group === group || bnr.group === "";
            })
        }else{
            bnrList = banners.list.map((bnr)=>{
                bnr.version = banners.version;
                return bnr;
            });
        }
        if(fixed){
            bnrList = [...fixed,...bnrList];
        }
        setBannersList(bnrList);
    },[]);

    useEffect(()=>{
        let interval = null;
        if(bannersList.length > 0){
            setItem({...bannersList[activeIndex],index:activeIndex});
            interval = setInterval(() => {
                showNextBanner(1);
            }, 8000);
        }
        return () => clearInterval(interval);
    },[bannersList.length,activeIndex]);

    return (<Box className={classes.banners}>
        <Box className={classes.bannersBody}>
            {item && <BannerItem {...item} classes={classes} />}
        </Box>
        <IconButton className={classes.iconButton} onClick={()=>showNextBanner(-1)} style={{left: 0}} aria-label="prev">
            <NavigateBefore />
        </IconButton>
        <IconButton className={classes.iconButton} onClick={()=>showNextBanner(1)} style={{right: 0}} aria-label="prev">
            <NavigateNext />
        </IconButton>
    </Box>)
});

export default BannerViewer;