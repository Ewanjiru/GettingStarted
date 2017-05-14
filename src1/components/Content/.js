// import React from "react";
// import './Content.scss';
// export default class Content extends React.Component {
// 	render() {
// 		const { activities } = this.props;
// 		return (
// 			<div className="content">
// 				<div className="line"></div>
// 				{activities.map((activity) => {
// 					return (
// 						<div className="item">
// 							<div className="avatar">
// 								<img src={activity.user.avatar} alt={activity.text} />
// 								{activity.user.name}
// 							</div>

// 							<span className="time">
// 								<h3>{activity.timestamp}</h3>
// 							</span>
// 							<p>{activity.text}</p>

// 							<div className="commentcount">
// 								<b>{activity.comments.length}</b>
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</div>

// 		);
// 	}
// }
