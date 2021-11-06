import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";
import axios from "axios";
import { Component } from "react";
import banner from "../images/banner.png"

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:null,
        }
    }
  componentDidMount() {
    var config = {
      method: "get",
      url: "https://api.spoonacular.com/food/menuItems/search?query=a&apiKey=88ed1d4093da437786484784ddd84bc2",
      headers: {},
    };
    axios(config)
      .then((response) => {
          this.setState({data:response.data});
        // console.log(JSON.stringify(response.data));
        console.log(this.state);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
      if(this.state.data!=null){
        return (
            
            <div>
              <div className="relative">
              <Hero />
              <img src='https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80' className="w-full bg-cover h-4/5" />
              </div>
              <div className='px-20 mx-auto'>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-3 w-full">
              {
                  this.state.data.menuItems.map((item)=>{
                      return <Content key={item.id} data={item}></Content>
                  })
              }
              </div>
              </div>
            </div>
          );
      }else{
          return <div>Loading</div>
      }
  }
}
