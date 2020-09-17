
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
    deleteItem = (id, index)=>{
        fetch('tracker/' + id,{
            method: 'DELETE'
        }).then((data)=>{
            this.setState({
                items: [...this.state.items.slice(0, index), ...this.state.items.slice(index+1)]
            })
        })
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <h1>My To Do </h1>
                {this.state.items.map((item, index)=>{
                    return(
                        <div className='item'> 
                            <h4>{item.description}</h4>
                            <h4>Complete</h4>
                            <h4 onClick={()=> this.deleteItem(item._id, index)}>X</h4>
                         </div>


                    )
                
                })}
                
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));