import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { WHATSAPP_URL,FACEBOOK_URL,INSTAGRAM_URL } from 'Constants';
import { WhatsApp,Email,Facebook,Phone,Instagram } from '@material-ui/icons';
import useStyles from './styles';

const iconText = {
    whatsapp:{
        label: "WhatsApp",
        Icon: WhatsApp,
        color: '#6bb847',
        getUrl: (data) => {
            return (data.url)? data.url : `${WHATSAPP_URL}${data.number}`;
        }
    },
    facebook:{
        label: "Facebook",
        Icon: Facebook,
        color: '#FFF',
        getUrl: (data) => {
            return `${FACEBOOK_URL}${data.url}`;
        }
    },
    instagram:{
        label: "Instagram",
        Icon: Instagram,
        color: '#FFF',
        getUrl: (data) => {
            return `${INSTAGRAM_URL}${data.url}`;
        }
    },
    email:{
        label: "EMail",
        Icon: Email,
        color: '#000',
        getUrl: (data) => {
            return `mailto:${data.email}`;
        }
    }
}

const LinkIcon = ({type,data,showText=true,color}) => {
    const iconData = iconText[type];
    const classes = useStyles({color:(color)? color:iconData.color});

    const onOptionClick = () =>{
        window.open(iconData.getUrl(data), '_blank');
    }

    return (<IconButton aria-label={iconData.label} className={classes.linkIcon} onClick={onOptionClick} disableRipple>
        <iconData.Icon /> {data?.text && <label>{data.text}</label>}
    </IconButton>)
}

export default LinkIcon;