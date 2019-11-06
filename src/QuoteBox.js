import React, { Component } from 'react';


class QuoteBox extends Component {

    render() {


        const html = document.documentElement;
        console.log(html);
        html.style.backgroundColor = this.props.color;

        console.log(this.props.color)

        return (
            <div style={{ backgroundColor: "white" }}>
            <h1 style={{ color: this.props.color }}>{this.props.quote}</h1>
            <h4 style={{color: this.props.color}}>
            -{this.props.author !== '' ? this.props.author : 'Unknown'}- 
            </h4>
            <button style={{ backgroundColor: this.props.color }} onClick={this.props.handleClick}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;
