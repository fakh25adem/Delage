import BlogList from '../../components/BlogList/BlogList.js'
import React, { Fragment } from 'react';

import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';

const about = (props) => {
    return (
       
          <div className='container'>
                        <ServiceSection2 hclass={' section-padding'} />
                        <BlogList    />

          </div>                             
                      
                   
            
    );
};

export default about;