import React, { Component } from 'react'

export default class News extends Component {
  //  run=function () {
  //    console.log(author);
  //  }
  render() {
    let {author,description,url,urltoimage,title,sname}=this.props;
    return (
        <div className="card ab  " >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"4",left:"90%" }}>
    {sname}
  </span>
        <img src={urltoimage} className="card-img-top" alt="IMAGE HERE" height="286px" width="161px"/> 
        <div className="card-body">
          <h5 className="card-title titlee">{title.length>90?title.slice(0,90)+"...":title}</h5>
          <h6 className="card-title authorr">By: {author!==null?author:"Anonymous"}</h6>
          <p className="card-text">{description!==null?description.length>85?description.slice(0,85)+"...":description:""}</p> 
          <a href={url} target="_blank" rel="noopener noreferrer"  className='btn btn-primary'>Read More</a>
        </div>
      </div>
    )
  } 
}
