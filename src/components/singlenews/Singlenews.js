import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const Singlenews = (props) => {
    const {author,title,urlToImage,publishedAt,description} =props.article;


    return (

            <Card sx={{ maxWidth: 345, height: '100%',boxShadow:3,backgroundColor:'#e3f2fd',color:'black'}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    author={author}
                    title={title}
                    subheader={publishedAt}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={urlToImage}
                    alt=""
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                </CardContent>
                
                </Card>
            
    );
};

export default Singlenews;