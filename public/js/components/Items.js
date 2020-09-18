
class Items extends React.Component{

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
    handleChange=(event)=>{
        this.setState({ [event.target.id]: event.target.value});

    }
    handleSubmit=(event)=>{
        event.preventDefault();
        fetch('/tracker',{
            body:JSON.stringify({description: this.state.description}),
            method: 'POST',
            headers:
            {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
        })
        .then((createdItem)=>{
            return createdItem.json();
        })
        .then((jsonedItem)=>{
            this.setState({
                description:'',
                items: [jsonedItem, ...this.state.items]
            })
        })
        .catch((error)=>console.log(error));
    }

    updateItem = (item) => {
        item.complete = !item.complete;
        fetch('tracker/'+ item._id, {
         body: JSON.stringify(item),
            method: 'PUT',
            headers:
            {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }

         })
        .then((updateItem)=>updateItem.json())
        .then((jsonedItem)=>{
            fetch('/tracker').then((response)=>response.json()).then((items)=>{
                this.setState({
                    items: items,
                    
            })
        })
    })
    }

    render(){
      
        return(
            <div>
                <h1>My To Do </h1>
                <form onSubmit={this.handleSubmit}>
                            <label>Description</label>
                            <input type='text' value={this.state.description} onChange={this.handleChange} id='description' />
                            < input type='submit' />
                        </form>
                {this.state.items.map((item, index)=>{
                    return(
                        <div className='item'> 
                            <h4 className={item.complete ? 'completed' : 'notCompleted'}>{item.description}</h4>
                            <h4 onClick={() => this.updateItem(item)}>
                             {item.complete ? '' : 'completed'}</h4>
                            <h4 onClick={()=> this.deleteItem(item._id, index)}>X</h4>
                            
                         </div>


                    )
                
                })}
                
            </div>
        )
    }
}
export default Items