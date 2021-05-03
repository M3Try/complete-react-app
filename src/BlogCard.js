import React from 'react';

const BlogCard = (props) => {
    console.log(props);

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default BlogCard;