import React, {
	Component
} from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import apiKey from '../config'

export default class FetchData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			loading: true
		};
	}
	componentDidMount() {
		//Get name from app.js with url  
		this.performSearch(this.props.match.params.name)			
	}
	componentWillReceiveProps(nextProps) {
    	this.performSearch(nextProps.match.params.name);
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
			<div className="photo-container">
				<h2>{this.props.match.params.name}</h2> 
			    <PhotoList data = {this.state.photos} />
			</div>
		);
	}

}