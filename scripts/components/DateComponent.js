var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="date">
				<header className="month">{this.props.month}</header>
				<h1 className="day">{this.props.day}</h1>
				<h2 className="dayOfWeek">{this.props.dayOfWeek}</h2>
			</div>
		);
	}
});