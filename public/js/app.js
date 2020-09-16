class App extends React.Component{

    state={
        items:[]
    }
    componentDidMount(){
        fetch('/tracker')
        .then(response=>response.json())
        .then(data=>
            this.setState({
                items: data
            })
            )

    }
    render(){
        console.log(this.state)
        return(
            <div>
                <h1>My To Do </h1>
                {this.state.items.map(item=>{
                    return(
                        <div className='item'> 
                            <h4>{item.description}</h4>
                            <h4>Complete</h4>
                            <h4>X</h4>
                         </div>


                    )
                
                })}
                
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));