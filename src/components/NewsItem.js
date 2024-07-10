import React, { Component } from 'react'
// import News from './News'

export default class NewsItem extends Component {
  render() {
    let {title, description, ImageUrl, newsUrl }=this.props;
    
    return (
      <div className="my-4">
       <div className="card" style={{width: "18rem"}}>
  <img src={!ImageUrl?"https://www.hindustantimes.com/ht-img/img/2024/02/16/1600x900/air_india_passenger_death_mumbai_airport_1708092845188_1708092845546.jpg":ImageUrl}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
