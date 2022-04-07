import React, { Component } from 'react';

class Twitter extends Component{

  state = {
    time: new Date()
  }

  componentDidMount(){
    console.log("componentDidMount: ", this.props);
  }
  
  componentDidUpdate(prevProps){
    const { loading } = this.props;
    if(this.props.loading !== prevProps.loading)
      console.log("componentDidUpdate: Loading", loading);
  }

  componentWillUnmount(){
    console.log('componentWillUnmount-> componente removido');
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.time !== nextState.time || this.props.loading !== nextProps.loading){
      console.log('shouldComponentUpdate: vai re-renderizar');
      return true;
    }else{
      console.log('shouldComponentUpdate: não vai re-renderizar');
      return false;
    }
  }

  handleTime = () => {
    this.setState({time: new Date()})
  }

  render(){
    console.log('iniciou render()');
    return (
      <div>
        <button type="button" onClick={this.handleTime}>Re-Render</button>
      </div>
    );
  }
}

export default Twitter;