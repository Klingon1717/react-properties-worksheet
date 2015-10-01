var React = require('react');
var ProductBoxComponent = require('./ProductBoxComponent');
var CardComponent = require('./CardComponent');
var DateComponent = require('./DateComponent');

/*
 * INSTRUCTIONS
 * 1. Customize each one of the pricing boxes to have a different image, brand,
 *    product name and price. Only change the contents of this file.
 * 2. Customize each one of the cards to show a different image, poster, time, 
 *    location and message. Only change the contents of the CardComponent.js 
 *    file.
 * 3. Customize each one of the dates to show a different month, day of the
 *    month and day of the week. You will need to change this file as well as
 *    the DateComponent.js file.
 */

module.exports = React.createClass({
	render: function() {
		return (
			<div>
			<div className="row">
			<ProductBoxComponent  image="http://us.123rf.com/450wm/eye4detail/eye4detail1210/eye4detail121000026/15545435-delicious-red-velvet-layer-cake-with-white-frosting-garnished-with-fresh-cherries-against-white-back.jpg" name="Really Beautiful Cake" price="3 viles of magic" brand="Beauty"/>
					<ProductBoxComponent image="http://us.123rf.com/450wm/belchonock/belchonock1205/belchonock120501423/13556869-chocolate-candy-poured-chocolate-isolated-on-white.jpg?ver=6" price="your head" brand="The TimeTraveler's Revenge" name="If you're going to take off my head, atleast let me eat cake first"/>
					<ProductBoxComponent image="http://us.123rf.com/450wm/grafvision/grafvision1211/grafvision121100263/16454803-teen-girl-eating-the-cake.jpg "brand="The Girl With The Most Cake" price="all of your integrity" name="Lady Cake" />
					<ProductBoxComponent image="http://us.123rf.com/450wm/bowie15/bowie151210/bowie15121000015/15662601-man-gorging-of-red-spaghetti-and-drinking-red-wine.jpg" name="Spaghett" price="2 carrier piegons" brand="Creep"/>
				</div>
				<div className="row">
					<CardComponent
						image="https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg"
						name="Sammy Earhart"
						time="18 mins"
						location="Milwaukee, WI"
						message="So many people forget this: Saying you're a leader doesn't make you a leader. Leading makes you a leader."/>
					<CardComponent
						image="http://www.morganstanley.com/assets/images/people/tiles/michael-wilson.jpg"
						name="Dewey Foerster"
						time="22 mins"
						location="Madison, WI"
						message="Just preordered a Nexus 5x. Google fi here I come!"/>
					<CardComponent
						image="https://ouishare.s3.amazonaws.com/uploads/user/image/104/Profile_Ouishare.jpg"
						name="Betty Bradford"
						time="18 mins"
						location="Madison, WI"
						message="Vote for my boss sister to help her win the Alpine Club Photo contest for this photo of the beautiful New Mexico countryside!"/>
				</div>
				<div className="row">
					<DateComponent  month="Halloween" day="875" dayOfWeek="Magic"/>
					<DateComponent  month="Thanksgiving" day="576775" dayOfWeek="The most fun time to be a vegan, I bet."/>
					<DateComponent  month="Chrimbus" day="Isn't everyday happening at once" dayOfWeek="Billy Murray"/>
					<DateComponent month="Drink,Drank,Drunk" day="errryyydayyy" dayOfWeek="Whiskey" />
				</div>
			</div>
		);
	}
});