import React from 'react';
class DecrIncre extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
        this.handleClick = this.handleClick.bind(this);
        this.decre = this.decre.bind(this);

    }
    handleClick(){
        this.setState({count: this.state.count +1});
    }
    decre(){
        this.setState({count: this.state.count -1});
    }
    render(){
        return(

            <div>
            
                <p>Count : {this.state.count}</p>
                <button id="inc" onClick={this.decre}>Decrease</button>
                <button id="inc" onClick={this.handleClick}>Increase</button>
            </div>
        );
    }
    }
    export default DecrIncre;

