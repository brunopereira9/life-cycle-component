import React, { Component } from 'react';
import Twitter from './Twitter';

class App extends Component{

  state = {
    loading: false,
    active: true,
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({loading: true});
    }, 3000)
  }

  togleActive = () => {
    this.setState({active: !this.state.active});
  }
  
  render(){
    const posts = [{
      title: "Titulo 1",
      description: "Aqui tem uma descrição 1"
    }];

    return(
      <>
        <p>Life Cycle (Component) on console</p>
        <button type="button" onClick={this.togleActive}>{(this.state.active)?"Remover":"Adicionar"} Componente</button>
        {this.state.active && (
          <Twitter posts={posts} loading={this.state.loading}/>
        )}
      </>
    );
  }
}

export default App;