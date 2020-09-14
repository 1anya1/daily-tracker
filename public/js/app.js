class App extends React.Component{

    componentDidMount(){
        fetch('/tracker')
        .then(response=>response.json())
        .then(data=>
            console.log(data)
            )

    }
    render(){
        return(
            <h1>Hello there</h1>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));