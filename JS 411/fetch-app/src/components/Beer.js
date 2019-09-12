

class Beer extends Component{
        render(){
            return(
                <p>{this.props.beer.id}</p>
                <p>{this.props.beer.name}</p>
            )
        }
}