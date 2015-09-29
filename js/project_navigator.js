
var PROJECTS_ARRAY = [
	{
		name: 'Ballot',
		description: "Ballot is an application that allows users to become educated and take action on legistlation that matters to them. When users sign up they enter their interests and we will their feed page with a feed of bills relevant to these interests. Users also have the ability to vote on bills. Their votes are then relayed to their state representatives.<br /><br />Ballot was awarded 1st place at <a href='http://www.up.co/communities/usa/annarbor/startup-weekend/4549' target='_blank'>Startup Weekend Ann Arbor 2015</a>, a finalist in the University of Michigan's competition <a href='http://cfe.umich.edu/2015/09/02/the-startup-competition/' target='_blank'>'The Startup'</a>, and winner of the <a href='http://recess.is/2015-spring/pitch/' target='_blank'>Recess Pitch Competition</a> in LA.",
		status: 'Active',
		img_path: 'ballot-chrome.png',
		link: 'http://ballotapp.co',
		link_text: 'ballotapp.co'
	},
	{
		name: 'Connect to Cars',
		description: "Connect to Cars or c2cars.com was an early stage startup that I joined after my Freshman year. Over the course of the summer we built a car search engine (like autotrader.com) that focused on qualitive search in addition to quantitative search. This meant that users could search by describing the car they want. An example would be, 'I want a car with high mpg, safe in winter, and fits a family'.<br /><br />I joined as the lead developer on the project and built the front and backend of the application. In order to create the C2Cars engine we had to create an intelligent set of algorithms that could take search terms and convert them into a set of car attributes. We then returned the cars that fit these attributes or criteria to the user.<br /><br />Connect to Cars came to an end after the original cofounders accepted full-time jobs in different states. The beta site is no longer online and because I do not own the code I cannot host it for show. Sadface.",
		status: 'Not Active',
		img_path: 'c2c.png',
		link: '',
		link_text: ''
	},{
		name: 'BlueExchange',
		description: "BlueExchange was started at MHack IV as a project to help students at the University of Michigan. We started by building a web, iOS, and Android app that allowed students to find other students selling textbooks that they needed. We did some nifty stuff using the UMICH class API so that students could search/post for books based on the class they were taking. <br /><br />After building the textbook exchange platform in a weekend we started to build out a class reviews part of the application. We did it, but by the time we finished we were all starting to get invloved in there projects. Currently no one is developing or promoting BlueExchange.",
		status: 'Not Active',
		img_path: 'blueexchange.png',
		link: 'http://blueexchangeapp.com',
		link_text: 'blueexchangeapp.com'
	},{
		name: 'My Blog',
		description: "I've recently started a blog. I think it will be a good place for people to get to know me. I don't have any planned content or theme. There will probably be a fair amount about web dev, books, and life. Because those are where most of my time is spent.",
		img_path: 'blog-chrome.png',
		link: 'http://cocarson.github.io',
		link_text: 'blog.carsoncovell.com'
	}
];

var MAX_INDEX = PROJECTS_ARRAY.length;

$(document).ready(function() {

	var index = 0;
	$mainSection = $('.pr--main-section');
	$title = $('.pr--title');
	$description = $('.pr--description');
	$image = $('.pr--image-element');
	$link = $('.pr--link');

	$backButton = $('.back-button');
	$nextButton = $('.next-button');

	$pageDots = $('.pr--page-dots');

	$title.text(PROJECTS_ARRAY[index].name);
	$description.html(PROJECTS_ARRAY[index].description);
	$image.attr('src', '../img/' + PROJECTS_ARRAY[index].img_path);
	$link.attr('href', PROJECTS_ARRAY[index].link);
	$link.text(PROJECTS_ARRAY[index].link_text);

	$('.pr--nav-button').on('click', function() {
		$this = $(this);
		$this.hasClass('back') ? index-- : index++;

		if (index <= 0) {
			$backButton.hide();
		} else if (index >= MAX_INDEX) {
			$nextButton.hide();
		} else {
			$backButton.show();
			$nextButton.show()
		}

		$('.pr--page-dot.active').removeClass('active');
		$($pageDots.children()[index]).addClass('active');

		$mainSection.addClass('hide');
		setTimeout(function() {
			$title.text(PROJECTS_ARRAY[index].name);
			$description.html(PROJECTS_ARRAY[index].description);
			$image.attr('src', '../img/' + PROJECTS_ARRAY[index].img_path);
			$link.attr('href', PROJECTS_ARRAY[index].link);
			$link.text(PROJECTS_ARRAY[index].link_text);
		}, 325);

		setTimeout(function() {
			$mainSection.removeClass('hide');
		}, 500);

	});

});