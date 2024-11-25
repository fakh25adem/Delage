import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import blogs from '../../api/blogs'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col-4 ${props.blLeft}`}>
          ssss
        </div>
    )

}

export default BlogSidebar;
