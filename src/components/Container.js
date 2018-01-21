import React from 'react';
import FetchData from './FetchData';
import MainNav from './MainNav';
import SearchForm from './SearchForm';
export default class Container extends React.Component {

    render() {
     	return (
	    	<div>
	    		<SearchForm />
	    		<MainNav />
	    		{/* get name from url and pass it to FetchData  */} 	    		
	    		<FetchData name = {this.props.match.params.name} /> 
	    	</div>  
    	);
   }
}