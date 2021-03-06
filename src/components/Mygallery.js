import React, { useEffect, useState } from 'react';
import '../style/Mygallery.css';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';
import SimpleReactLightbox from 'simple-react-lightbox';
import Aos from 'aos'



function Mygallery() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);


	useEffect(()=>{
        Aos.init({duration:1500 });
        },[]);
   
			/* <TagButton name="MEET" tagActive={tag === 'MEET' ? true : false} handleSetTag={setTag} /> */
		
	return (
        <SimpleReactLightbox>
		<div className="App">
			<div className="tags">
				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="TEDX" tagActive={tag === 'TEDX' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="IPR" tagActive={tag === 'IPR' ? true : false} handleSetTag={setTag} /> 
				 
				
			</div>
			<SRLWrapper  >
				<div className="container" data-aos="zoom-in-up" data-aos-delay="100">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a className ="aimage"href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
        </SimpleReactLightbox>

	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'gactive' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Mygallery;