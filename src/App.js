import React, { Component } from 'react';

class Botao extends Component{
  render(){
    console.log(this.props);
    return( 
    <button onClick={() =>{this.props.handleClick(this.props.conteudo);}}>
  
  {this.props.conteudo}
  </button>
    );
  }
}

class Label extends Component{
  render(){ 
    // console.log(this.props);
    return(
      <h1>Botão clicado: {this.props.mensagem}</h1>
    );
  }
}

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) =>{
    this.setState({labelText});
  }
  
  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      <div className="App">
          <Label mensagem={this.state.labelText}/>
          <Botao handleClick={this.setLabelText} conteudo="BTN1"/>
          <Botao handleClick={this.setLabelText} conteudo="BTN2"/>
          <Botao handleClick={this.setLabelText} conteudo="BTN3"/>
          <Botao handleClick={this.setLabelText} conteudo="BTN4"/>
      </div>
    );
  }
}

export default App;
