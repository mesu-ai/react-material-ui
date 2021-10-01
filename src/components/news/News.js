import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Singlenews from '../singlenews/Singlenews';

const News = () => {
   const [articles,setArticles]= useState([]);
   useEffect(()=>{
       fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c839d96844524c268e81a670ce3789f4')
       .then(res=>res.json())
       .then(data=>setArticles(data.articles))

   },[]);
    return (

        <div>
            {articles.length===0 ? <Box sx={{ display: 'flex',justifyContent:'center' }}>
      <CircularProgress />
    </Box> : <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {   articles.map(article=><Grid item xs={2} sm={4} md={4}>
                <Singlenews article={article}></Singlenews>
          </Grid>)     
        }
      </Grid>
    </Box> }

        </div>


    );
};

export default News;