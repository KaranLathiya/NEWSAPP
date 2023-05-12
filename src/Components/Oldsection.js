import React, { Component } from 'react'
import News from './News'
export default class Section extends Component {

    // prevpage(){

    // }
  

    constructor(props){
        super(props);
        this.state ={
            articles:[],
            loading:true,
            page:1,
        }
        document.title=this.props.category.charAt(0).toUpperCase() +this.props.category.slice(1) +" 24/7 NEWS";
    }
    async updatenews  (){
      let url=`https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&category=${this.props.category}&apiKey=7df9390332d14bac98374c77d70df1e9`;
      await fetch(url).then((res)=>{
        res.json().then((result)=>{
          this.setState({articles:result.articles,loading:false,totalresult:result.totalResults})
          console.log(url)
        })
      });
    }
     prevpage= async ()=>{
      await this.setState({loading:true,page:this.state.page-1})
       await this.updatenews();
    }
    nextpage= async ()=>{
      this.setState({loading:true,page:this.state.page+1},()=>{
        this.updatenews();
      })
    }
    async componentDidMount(){
        this.updatenews();
      // console.log("after")
        
        // let data=await fetch(url)
        // let parsedData= await data.json();
        // // console.log(parsedData);
        // this.setState({articles: parsedData.articles})
        // console.log(this.state.articles)
    }
  render() {
    
    // console.log("before")
    let {articles,loading,page}=this.state;
    if(loading) return <div className="spinner-border" style={{width:"7rem",height:"7rem",marginLeft:"45%",marginTop:"20%"}} role="status">
{/* <span classNam="visually-hidden">Loading...</span> */}
</div>
    else {
    return (  
    <div className='container sec'>
        <h1 className='mid my-2'>TRENDING {this.props.category.toUpperCase()} NEWS</h1>
        <div className='row'>
           {console.log(articles)}  
        {articles.map ((element)=>{
           
            return  <div className="my-2 col-md-3" key={element.url}>
                <News author={element.author} content={element.content} description={element.description} url={element.url} urltoimage={element.urlToImage} title={element.title} sname={element.source.name}  />
            </div>
           
        })}
        <div className="d-flex justify-content-between my-3">
        <div><button type="button" disabled={page<1.1} className="btn btn-success" onClick={this.prevpage}>&larr;Previous</button></div>
        <div><button type="button" disabled={page>=Math.ceil(this.state.totalresult/20)} className="btn btn-success mx-2" onClick={this.nextpage}>Next&rarr;</button></div>
      </div>
        </div>
      </div>
    )
      }
  }
}
