import React, { Component } from "react";
import Newsitem from "../Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country : 'in',
        pagesize : 5,
        category : 'general'
    }
    static propstypes = {
        country : PropTypes.string,
        // pagesize : props.number,
        category : PropTypes.string,
    }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page : 1 
    }
}
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae447ad0483c46e9b3788b3b3f203f3a&page=1&pagesize=${this.props.pagesize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading : false})
    }
    handleprevclick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae447ad0483c46e9b3788b3b3f203f3a&page=${this.props.page-1}${this.state.pagesize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page-1,
            articles : parsedData.articles,
            loading : false 
        })
    }
    handlenextclick = async ()=>{
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae447ad0483c46e9b3788b3b3f203f3a&page=${this.props.page + 1}&pageSize=20${this.state.pagesize}`;
            this.setState({loading : true})
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading : false 
            })
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center " style={{margin :'66px  0px'}}>NewsDolPhins - Top Headlines</h1>
       {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem  title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl = {element.url}/>
            </div>;
          })}
        </div>
        <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handleprevclick}> &larr; Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
