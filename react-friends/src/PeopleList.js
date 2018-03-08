import React from "react";
import "./plist.css";

const PeopleList = props => {
	return (
		<div className="list">
			{props.people.map(person => {
				return (
					<div className="people" key={person.id}>
						<p id="names">
							{person.first_name} {person.last_name}
						</p>
						<p>{person.email}</p>
					</div>
				);
			})}
		</div>
	);
};

export default PeopleList;
