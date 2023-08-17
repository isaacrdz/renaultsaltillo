import React from 'react';
import Box from '@material-ui/core/Box';
import LinkIcon from 'Components/socialIcons/IconLink';


const SocialIcons = ({social,color}) => {

    return (<Box display="flex" alignItems="center" justifyContent="center">
        {social.map((sc,inx) => {
            return <LinkIcon key={`sc${inx}`} {...sc} color={color} />
        })}
    </Box>)
}

export default SocialIcons;