import React from 'react';
import './App.css';




class App extends React.Component {

   constructor(props) {
      super(props);
    
      this.state = {
         chosenNumber: 0,
         numberOneList: [],
         numberTwoList: [],
         result: [],
         finalResult: 0,
         showFinalResult: false,
         phase: 'ONE',
         op: ''
      }

      this.setNumberTo = this.setNumberTo.bind(this);
      this.setOperation = this.setOperation.bind(this);
      this.getResult = this.getResult.bind(this);
      this.reset = this.reset.bind(this);
      this.softReset = this.softReset.bind(this);
      this.returnBack = this.returnBack.bind(this);

   }

   setNumberTo(num) {
      this.setState({chosenNumber: num, showFinalResult: false});
      if(this.state.phase === 'ONE') {
         this.setState({
           numberOneList: [...this.state.numberOneList, num], result: [...this.state.result, num]
         });
      } else if(this.state.phase === 'TWO') {
         this.setState({
           numberTwoList: [...this.state.numberTwoList, num], result: [...this.state.result, num]
         });
      }
   }

   setOperation(op) {
    if (this.state.phase === 'ONE') {
      this.setState({phase: 'TWO', op: op, result: [op]});
    } else if (this.state.phase === 'TWO') {
      this.setState({numberOneList: this.state.finalResult.toString().split(''), op: op, result: [op]});
    }
   }

   reset() {
      this.setState({showFinalResult: false, result: [], phase: 'ONE', numberOneList: [], numberTwoList: [], op: ''});
   }

   softReset() {
      this.setState({result: [], numberOneList: [], numberTwoList: [], op: ''});
   }

   returnBack() {
      if(this.state.phase === 'ONE') {
         this.setState({
           numberOneList: this.state.numberOneList.slice(0,-1), result: this.state.result.slice(0,-1)
         });
      } else if(this.state.phase === 'TWO') {
         this.setState({
           numberTwoList: this.state.numberTwoList.slice(0,-1), result: this.state.result.slice(0,-1)
         });
      }
   }

   getResult() {
      switch(this.state.op) {
         case '+': {
            const resPlus = parseFloat(this.state.numberOneList.join('')) + parseFloat(this.state.numberTwoList.join(''));
            this.setState({showFinalResult: true, finalResult: resPlus});
            this.softReset();
            break;
         }
         case '-': {
            const resMinus = parseFloat(this.state.numberOneList.join('')) - parseFloat(this.state.numberTwoList.join(''));
            this.setState({showFinalResult: true, finalResult: resMinus});
            this.softReset();
            break;
         }
         case '*': {
            const resTimes = parseFloat(this.state.numberOneList.join('')) * parseFloat(this.state.numberTwoList.join(''));
            this.setState({showFinalResult: true, finalResult: resTimes});
            this.softReset();
            break;
         }
         case '/': {
            const resDivBy = parseFloat(this.state.numberOneList.join('')) / parseFloat(this.state.numberTwoList.join(''));
            this.setState({showFinalResult: true, finalResult: resDivBy});
            this.softReset();
            break;
         }
         default: {
            console.log('There is no such operation!');
            
        }
      }
   }


   



   render() {


      return (
         <div>
             <div className="container">
               <br />
              <div className="columns">
                <div className="column is-12">
                  <a className="button is-fullwidth color">
                    <span>{(this.state.result.length === 0 && !this.state.showFinalResult) ? '0' : ''}</span>
                    <span>{this.state.showFinalResult ? this.state.finalResult : this.state.result.join('')}</span>
                  </a>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(7)}>
                    7
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(8)}>
                    8
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(9)}>
                    9
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setOperation('/')}>
                    /
                  </a>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(4)}>
                    4
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(5)}>
                    5
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(6)}>
                    6
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setOperation('*')}>
                    *
                  </a>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(1)}>
                    1
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(2)}>
                    2
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(3)}>
                    3
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setOperation('-')}>
                    -
                  </a>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={this.reset}>
                    RESET
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo(0)}>
                    0
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setNumberTo('.')}>
                    .
                  </a>
                </div>
                <div className="column is-3">
                  <a className="button is-info is-fullwidth" onClick={() => this.setOperation('+')}>
                    +
                  </a>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-6">
                  <a className="button is-info is-fullwidth" onClick={this.getResult}>
                    =
                  </a>
                </div>
                <div className="column is-6">
                  <a className="button is-info is-fullwidth" onClick={this.returnBack}>
                    RETURN
                  </a>
                </div>
              </div>
             </div>
         </div>
         );
   }
}




export default App;
