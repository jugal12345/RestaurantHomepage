import React from 'react'
import { withRouter } from "react-router-dom";
import { Component } from 'react'
import '../index.css'
class Content extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props);
    }
    handleClick = () => {
        this.props.history.push(`/details/${this.props.data.id}`);
    }
    render() {
        return (
            // <div className="list">
            //     <img src={this.props.data.image}  alt="."/>
            //     <div className="flex flex-col justify-center items-center">
            //         <h2 className="text-2xl mb-2">{this.props.data.title}</h2>
            //         <p className="mb-2">Some Description</p>
            //         <span>Rs. 100</span>
            //         <button onClick={this.handleClick}>Check Out More</button>
            //     </div>
            // </div>
            <div className="flex flex-col w-full items-center border-2 py-5 px-0 pb-15 rounded-3xl border-gray-100 ">
            <div
                className="h-60 object-contain w-full bg-cover" style={{ backgroundImage: `url(${this.props.data.image})` }}
            ></div>
            <div className="my-4">
                <span className="name text-2xl">{this.props.data.title}</span>
            </div>
            <div className="flex flex-row justify-between w-60">
                <div className="flex flex-col">
                    <span className="text-gray-400">Price</span>
                    <span className="tracking-wider font-bold">$100</span>
                </div>
                <button onClick={this.handleClick} className="font-medium border-2 py-2 px-4 rounded-xl hover:bg-black hover:text-white">Know More</button>
            </div>
        </div>
        )
    }
}
export default withRouter(Content)



