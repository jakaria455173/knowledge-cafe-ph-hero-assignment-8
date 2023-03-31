import React from "react";
import { BiBookmark } from 'react-icons/bi';

const BlogPost = ({ blog,handleBlogReadTime }) => {
  const {author_name,title,images,tags,publish_date,read_time}=blog
  return (
    <div className="card w-100 m-auto col-md-6 mb-4">
      <div className="w-full m-auto">
        <img style={{width:'90%'}} className="h-25" src={images?images.blog_cover:''} alt="blog images" />
      </div>
      <div className="d-flex justify-content-between mt-5 align-items-center user-content">
        {/* ====user parts===== */}
        <div className="d-flex">
          <img src={images?images.author_image:''} style={{ width: '3rem' }} className="border border-4 border-dark-subtle rounded-circle" alt="user image" />
          <div className="d-flex flex-column ms-4">
            <h6 className="author-name fs-5 fw-semibold">{author_name?author_name:''}</h6>
            <p className="date fs-5">{publish_date?publish_date:''}</p>
          </div>
        </div>
        {/* ====time and icons part===== */}

        <div className="d-flex gap-4 align-items-center date-icon">
          <p className=" fw-semibold">0<span>{read_time?read_time:''}</span> min read</p>
          <p className="fs-5 icon"><BiBookmark/></p>
        </div>
      </div>
      <p className="h4 mt-2">{title?title:'Title Not Found !!!'}</p>
      <div className="d-flex gap-2">
        {tags?.map((tag,index)=><p key={index}># <span className="fw-semibold">{tag}</span></p>)}
        </div>
        <a href="#" onClick={()=>handleBlogReadTime(read_time)}>Mark as read</a>
    </div>

  );
};

export default BlogPost;