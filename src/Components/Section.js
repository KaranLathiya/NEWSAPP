import React, { Component } from 'react'
import News from './News'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
export default class Section extends Component {

    // prevpage(){

    // }
  

    constructor(props){
        super(props);
        console.log(props)
        this.state ={
            articles:[],
            loading:true,
            page:0,
            totalresult:0
        }
        document.title=this.props.category.charAt(0).toUpperCase() +this.props.category.slice(1) +" 24/7 NEWS";
    }
    updatenews =async ()=> {
     await this.setState({page:this.state.page+1},async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&category=${this.props.category}&apiKey=d36a1b487b5c487e998ae9166a29aaee`;
      await fetch(url).then(async (res)=>{
        this.props.setprogress(30);
       await res.json().then((result)=>{
        this.props.setprogress(80);
          this.setState({articles:this.state.articles.concat(result.articles),loading:false,totalresult:result.totalResults})
          console.log(this.state.page)
        })
      this.props.setprogress(100);
      });
      })
    }
    //  prevpage= async ()=>{
    //   await this.setState({loading:true,page:this.state.page-1})
    //    await this.updatenews();
    // }
    // nextpage= async ()=>{
    //   this.setState({loading:true,page:this.state.page+1},()=>{
    //     this.updatenews();
    //   })
    // }
    async componentDidMount(){
      await  this.updatenews();
      // console.log("after")
        
        // let data=await fetch(url)
        // let parsedData= await data.json();
        // // console.log(parsedData);
        // this.setState({articles: parsedData.articles})
        // console.log(this.state.articles)
    }
  render() {
    
    // console.log("before")
    let {articles,loading}=this.state;
    if(loading) return <div className="spinner-border" style={{width:"7rem",height:"7rem",marginLeft:"45%",marginTop:"20%"}} role="status">
{/* <span classNam="visually-hidden">Loading...</span> */}
</div>
    else {
    return (  
    <>
        <h1 className='text-center sec'>TRENDING {this.props.category.toUpperCase()} NEWS</h1>
        <InfiniteScroll style={{overflow:"hidden"}}
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.updatenews}
  hasMore={this.state.articles.length!==this.state.totalresult}
  loader={<Spinner />}
    >
      <div className='container'>
        <div className='row'>
           {console.log(articles)}  
        {articles.map ((element,index)=>{
           
            return  <div className="my-2 col-md-3" key={index}>
                <News author={element.author} content={element.content} description={element.description} url={element.url} urltoimage={element.urlToImage} title={element.title} sname={element.source.name}  />
            </div>
           
        })} 
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
      }
  }
}
