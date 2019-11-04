import React, { Component } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import quotes from './quotes';

class App extends Component {
  //Setting up the constructor function so we can set our default state
  constructor(props) {
    super(props);
    //set up the first quote and author as our default state
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    }
  }

  //Create a function called getRandomQuote that returns a random quote from the array of quotes. Hint: You'll need to generate a random number between 0 and 1 less than the length of the array
  
  getRandomQuote() {
   const quoteIndex = Math.floor(Math.random() * quotes.length);  // selects a random quote
    return quotes[quoteIndex];  // returns the random quote
}

//Function that will be called when the new quote button on the QuoteBox component is pressed
handleClick = () => {
  //Generate a random quote
  const randomQuote = this.getRandomQuote();
  //Update our state with information from that random quote
  this.setState({
    quote: randomQuote.quote,
    author: randomQuote.author
  });
}
  

  render() {
  return (
    <div>
      <QuoteBox
        quote={this.state.quote}
        author={this.state.author}
        handleClick={this.handleClick}
         />
    </div>
   );
  }
}

export default App;
