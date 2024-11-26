const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: dbcvszgdy,
			api_key: 488578281269461,
			api_secret: IsnfsMaTJw5FQQYehESnHE6mqQw,
		});
	} catch (error) {
		console.log(error);
	}
};
