const Profile = require("../models/Profile");
const User = require("../models/User");
const Course = require('../models/Course')
const { uploadImageToCloudinary } = require("../utils/imageUploader");
// Method for updating a profile
exports.updateProfile = async (req, res) => {
	try{
	  //Fetch data
	  const {
		firstName = "",
		lastName = "",
		dateOfBirth = "",
		about = "",
		contactNumber = "",
		gender = "",
	  } = req.body
	  //Fetch UserId
	  const id=req.user.id;
	  //Finding profile
	  const userDetail = await User.findById(id);
	  const profile = await Profile.findById(userDetail.additionalDetails);
	  //Updating Profile
	  const user = await User.findByIdAndUpdate(id, {firstName, lastName})
	  await user.save()
	  profile.dateOfBirth = dateOfBirth
	  profile.about = about
	  profile.contactNumber = contactNumber
	  profile.gender = gender
	  // Save the updated profile
	  await profile.save()
  
	  const updatedUserDetails = await User.findById(id).populate("additionalDetails").exec()
	  
	  return res.status(200).json({
		success:true,
		message:"Profile Updated Successfully",
		updatedUserDetails, 
	  });
	} catch(err){
	  console.log("Error while updating profile");
	  return res.status(500).json({
		success:false,
		message:"Server Error",
	  });
	}
}

exports.deleteAccount = async (req, res) => {
	try {
		// TODO: Find More on Job Schedule
		// const job = schedule.scheduleJob("10 * * * * *", function () {
		// 	console.log("The answer to life, the universe, and everything!");
		// });
		// console.log(job);
		const id = req.user.id;
		const user = await User.findById({ _id: id });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}
		// Delete Assosiated Profile with the User
		await Profile.findByIdAndDelete({ _id: user.additionalDetails });
		// TODO: Unenroll User From All the Enrolled Courses
		// Now Delete User
		await User.findByIdAndDelete({ _id: id });
		res.status(200).json({
			success: true,
			message: "User deleted successfully",
		});
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ success: false, message: "User Cannot be deleted successfully" });
	}
};

exports.getAllUserDetails = async (req, res) => {
	try {
		const id = req.user.id;
		const userDetails = await User.findById(id)
			.populate("additionalDetails")
			.exec();
		console.log(userDetails);
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: userDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

//updateDisplayPicture
exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};
  
exports.getEnrolledCourses = async (req, res) => {
    try {
      const userId = req.user.id
      const userDetails = await User.findOne({
        _id: userId,
      })
        .populate("courses")
        .exec()
      if (!userDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find user with id: ${userDetails}`,
        })
      }
      return res.status(200).json({
        success: true,
        data: userDetails.courses,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};

exports.instructorDashboard = async (req, res) => {
	try {
	  const courseDetails = await Course.find({ instructor: req.user.id })
  
	  const courseData = courseDetails.map((course) => {
		const totalStudentsEnrolled = course.studentsEnrolled.length
		const totalAmountGenerated = totalStudentsEnrolled * course.price
  
		// Create a new object with the additional fields
		const courseDataWithStats = {
		  _id: course._id,
		  courseName: course.courseName,
		  courseDescription: course.courseDescription,
		  // Include other course properties as needed
		  totalStudentsEnrolled,
		  totalAmountGenerated,
		}
  
		return courseDataWithStats
	  })
  
	  res.status(200).json({ courses: courseData })
	} catch (error) {
	  console.error(error)
	  res.status(500).json({ message: "Server Error" })
	}
  }