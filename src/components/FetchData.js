import React, {
	Component
} from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import apiKey from '../config';


export default class FetchData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			loading: true
		};
	}
	componentDidMount() {
		//Get name from container and run performSearch  
		this.performSearch(this.props.name)			
	}
	//runing this method when updata
	componentWillReceiveProps(nextProps) {
    	this.performSearch(nextProps.name);
    	this.setState({loading : true});
 	}
	// Get photo from api by name
	performSearch = (tag ) => {				
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
			.then(response => {
				this.setState({
					photos: response.data.photos.photo,
					loading: false
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	}
	render() {
		return (
			(this.state.loading) ?
			<p>Loading...</p> :
			<div>
				<div className="photo-container">
					<h2>{this.props.name}</h2> 
			    	<PhotoList data = {this.state.photos} />
				</div>
			</div>



		);
	}

}