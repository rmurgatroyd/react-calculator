import React, {Component} from 'react';

class KeyPad extends Component {
    render() {
        return (
            <div className="calculator-keys">
              <div className="row">
                <button className="func-button" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button className="func-button" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button className="func-button" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button className="func-button" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
              </div>

              <div className="row">
                <button className="num-button" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="num-button" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="num-button" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="func-button" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
              </div>

              <div className="row">
                <button className="num-button" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="num-button" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="num-button" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="func-button" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
              </div>

              <div className="row">
                <button className="num-button" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="num-button" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="num-button" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="func-button" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
              </div>

              <div className="row">
                <button className="num-button" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="num-button" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="func-button" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                <button className="equal-button" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
              </div>
            </div>
        );
    }
}

export default KeyPad;
