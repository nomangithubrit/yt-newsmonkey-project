import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
   let {title, description,imageurl,newsUrl} = this.props
    return (
        <div className="card" >
         <img src={!imageurl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="-blank" className="btn btn-sm btn-success">Read More</a>
        </div>
      </div>
    )
  }
}

export default Newsitem
