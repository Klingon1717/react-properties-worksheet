var React = require('react');

module.exports = React.createClass({
	render: function() {

		return (
			<div className="card">
				<header>
					<img src= {this.props.image} className= "image"/>
					<div>
				
						<a href="#" className="name" >{this.props.name}</a>
						<div>
							<div className="time">{this.props.time}</div>
							<div className="location">{this.props.location}</div>
						</div>
					</div>
				</header>
				<p>
					Concerned Mother Quote of the Day:<br />
					&quot;Well I'm glad you're having fun with all those dogs of
					yours, whether it be chasing them around the park or trying
					to sell them on the internet&quot;
				</p>
			</div>

		);
	}
});