import React, { Component } from 'react'
import axios from 'axios';

export default class descriptions extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: null,
        }
    }
    componentDidMount(){
        var config = {
            method: 'get',
            url: `https://api.spoonacular.com/food/menuItems/${this.props.match.params.id}?apiKey=88ed1d4093da437786484784ddd84bc2`,
            headers: { }
          };
          axios(config).then((response)=> {
            this.setState({
                data:response.data,
            })
            console.log(this.state);
        }).catch(function (error) {
            console.log(error);
          });
    }
    render() {
        if(this.state.data!=null){
            return (
                <div>
                    <div className="flex flex-col">
                        <div>{this.state.data.nutrition.nutrients[0].name}</div>
                        <div>{this.state.data.nutrition.nutrients[0].amount}</div>
                        <div>{this.state.data.nutrition.nutrients[0].percentOfDailyNeeds}</div>
                    </div>

                </div>
            )
        }
        else{
            return(
                <div>Loading...</div>
            )
        }
        
    }
}
