

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {

  constructor(){
    super();
    this.state={
     articles: [],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8054cf125b454d2987011e3b893ce341&page=1&pageSize=6";
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata= await data.json();
    this.setState({articles:parseddata.articles,
    loading:false})
  }

  handleprev= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8054cf125b454d2987011e3b893ce341&page=${this.state.page -1}&pageSize=6`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata= await data.json();
    this.setState({
      page:this.state.page-1,
      articles:parseddata.articles,
      loading:false
    })
  }
  handlenext=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8054cf125b454d2987011e3b893ce341&page=${this.state.page +1}&pageSize=6`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata= await data.json();
    this.setState({
      page:this.state.page+1,
      articles:parseddata.articles,
      loading:false
    })
  }
  render() {
    
    return (
        
        <div className="container my-3">
      <center>  <h2>News monkey-Top Headlines</h2></center>
     {this.state.loading&&<Spinner/>}
      <div className="row">
      {!this.state.loading && this.state.articles.map((element)=>{
         
         return <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} ImageUrl={element.urlToImage} newsUrl={element.url}/>

        </div>
        
      })}
      <div className="container d-flex justify-content-between">
        <button type="button" onClick={this.handleprev} className="btn btn-dark">&larr;Previous</button>
        <button type="button"onClick={this.handlenext} className="btn btn-dark">Next&rarr;</button>

        </div>

         
            
            
           
    
    
  </div>
  </div>
    )
  }
}

export default News
