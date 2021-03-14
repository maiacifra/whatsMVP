import React from 'react';
import './App.css';
import Mensagem from './Mensagem'

class App extends React.Component {

  // mensagens = [{}]

  state ={
    mensagens : [ 
      {
        nome:'Astrobot:', 
        texto:'Boas vindas. Deixe sua mensagem'
      } 
    ],
    valorInputNome: '',
    valorInputTexto: ''
  }

  onChangeInputNome = (event) =>{
    this.setState({ valorInputNome: event.target.value})
  }

  onChangeInputTexto = (event) =>{
    this.setState({ valorInputTexto: event.target.value})
  }

  addMensagem = (event) => {
    const novaMensagem = {
      nome: this.state.valorInputNome +':',
      texto: this.state.valorInputTexto,
    }
    const novoMensagens = [...this.state.mensagens, novaMensagem]

    this.setState({ mensagens: novoMensagens })

    this.state.valorInputTexto = ''
  }

  onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.addMensagem();
    }
  }


  render(){

    return (
      <div className="App">
        <div className="msg-container">
            {this.state.mensagens.map((mensagem) => {
                return <div className='msg-baloon'>
                    <Mensagem
                      nome={mensagem.nome}
                      texto={mensagem.texto}
                    />
                </div>
            })}
          </div>
        <div className="form-container">
          <input
            className='a'
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={'Nome'}
          /> 
          <input
            className="b"
            value={this.state.valorInputTexto}
            onChange={this.onChangeInputTexto}
            placeholder={'Mensagem'}
            onKeyDown={this.onKeyDown}
          /> 
          <button onClick={this.addMensagem}> Mandar! </button>
        </div>
      </div>
    );
  }
}

export default App;
