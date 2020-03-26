import React from 'react';

const Post = (props) => {
const {author: {name, photo, nickname}, content, image, date} = props;
    return (   
        <div className='post'>
            <div className='post_avatar' >
                <div className='post_photo' >
                    <img className='photo' src= {photo} />
                </div>
            </div>
            <div className='post_box'>
                <div className='post_title' >
                    <div className="post_name" >
                        <h2>{name}</h2>
                        <h3>{nickname}</h3>
                        <h3>{date}</h3>
                    </div>
                    <div className="post_massage" >
                        <p>{content}</p>
                    </div>
                </div>
                <div className='post_content'>
                    <img className="post_img" src={image} />
                </div>
                <div className="post_icon" >
                    
                </div>
            </div>
        </div>
    )
}

export default Post;