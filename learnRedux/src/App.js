import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props);
  }
  handleEmail(val='2222sss'){
    console.log(val)
  }
  render(){
    const boss="123"
    return (
      <div>
        <h1>kyz {boss}</h1> 
        <App1 s="456" handleEmail={this.handleEmail.bind(this)}></App1>
        <App2 s="789" ></App2>
      </div> 
      
    )
  }
}

function App2 (porps){
  return <h3>{porps.s}</h3>
}

class App1 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      arr:['猴子','laoh','adf']
    }
  }
  componentWillMount(){
    console.log('1')
  }
  componentDidMount(){
    console.log('3')
  }
  handleVal() {
    this.props.handleEmail('328484091');
  }
  add(){
    this.props.handleEmail()
    console.log('s');
    this.setState({
      arr:[...this.state.arr,'新宾'+Math.random()]
    })
  }
  render(){
    const boss="ssss";
    console.log('2')
    return (
      <div>
        <h2 onClick={this.handleVal.bind(this)}>
          {boss} {this.props.s}
        </h2>
        <button onClick={()=>this.add()}>asdss</button>
        <ul>
          {this.state.arr.map(v=>{
              return <li key={v}>{v}</li>
            })}
        </ul>
      </div>
    
    )
  }
}
export default App;
