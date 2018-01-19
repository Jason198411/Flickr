import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
	const result = props.data;
	let photos
	if(result.length>0){
		photos= result.map(
			photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} title={photo.title} key={photo.id} />
		);
	}else{
		photos=<NotFound />
	}
	return (
		<ul>
			{photos}			        	
        </ul>
	);
}
export default PhotoList;