
class App extends React.Component{
    state={
        data:[]
    }
    componentDidMount(){
        fetch('/day')
        .then(response=>response.json())
        .then(data=>
        this.setState({
            data:data
        })
        )
    }
    deletePost=(id,index)=>{
        fetch('day/'+id,{
            method:'DELETE'
        }).then((data)=>{
            this.setState({
                data:[...this.state.data.slice(0, index), ...this.state.data.slice(index+1)]
            })
        })
    }
    handleChange=()=>{
        this.setState({ [event.target.id]: event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        fetch('/day',{
            body: JSON.stringify({note: this.state.note, date: this.state.date}),
            method: 'POST',
            headers:
            {
                'Accept': 'application/json, text/plakn, */*',
                'Content-Type': 'application/json'
            }
        })
        .then((createdItems)=>{
            return createdItems.json()
        }) 
        .then((jsonedItem)=>{
            this.setState({
                date:'',
                note:'',
                data: [jsonedItem, ...this.state.data]
            })
        })
        .catch((eroor)=>console.log(error))
    }
    render(){
        console.log(this.state.data)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Day</label>
                    <input type='text' value={this.state.note} onChange={this.handleChange} id='note' />
                    <input type='date' value ={this.state.date} onChange={this.handleChange} id='date' />
                    <input type='submit'></input>
                </form>
                {this.state.data.map((el, index)=>{
                    return(
                        <div>
                        <div>{el.note}</div>
                        <div>{el.date}</div>
                        <button onClick={()=>this.deletePost(el._id, index)}>Delete Entry</button>
                        <button>List of Things</button>
                        </div>

                    )
                    
                })}
              
            </div>

        )
    }
    
}
ReactDOM.render(<App />, document.querySelector('.container'));