import React from 'react';
import Card from './Card';

const CardList = (props) => {
	return(
		<div>
  			{
  				props.robots.map((robot) => (
						<Card 
							key={robot.id}
							id={robot.id.toString()} 
							name={robot.name} 
							email={robot.email} />
						))
  			}
		</div>
	)
}
			
			

CardList.propTypes = {
	robots: React.PropTypes.array.isRequired
}
export default CardList;