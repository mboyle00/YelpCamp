var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
		description: "In Beautiful, ocean is Asian clam elktoe, cardinalfish deep heelsplitter foxface, with crazy Manta ray catshark shaking filefish. Neon goby banded grunt kelp snowcrab, fingernail clam stingray colorful gold damsel. Breathing heavily pipefish, cold and smiling mandarinfish, peaclam slicing water fingernail clam, i."
	},
	{
		name: "Vantime",
		image: "https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Swimming sea grape rock lobster at Indian ocean. Breathing heavily pipefish, cold and smiling mandarinfish, peaclam slicing water fingernail clam, is swimming sea grape rock lobster at Indian ocean. Frogfish spot hogfis."
	},
	{
		name: "Other Place",
		image: "https://i.imgur.com/oM8m4i7.jpg",
		description: "Rabbitfish spotted sweetlips swim, peppered moray creature jumped. Batfish bonnethead tilefish Banana wrasse papershell coral hogfish. In seahorse banded eel, butter hamlet are butterflyfish blue tang, wabash pigtoe sea coral king crab heelsplitter, in painted comber Banded eel bicolor blenny. Mystery snail lionfis."
	},
]

function seedDB(){
	Campground.remove({}, function(err){
	if(err){
		console.log(err);
	}
	console.log("removed campgrounds!")
		//add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err)
				} else {
					console.log("added a campground");
					//create a comment
					Comment.create(
						{
							text: "This place is great",
							author: "Homer"
						}, function(err, comment){
							if(err){
								console.log(err);
							} else {
							campground.comments.push(comment);
							campground.save();
							console.log("Created new comment")
						}
						});
				}
			});
		});
	});
}

	//add a few comments

module.exports = seedDB;