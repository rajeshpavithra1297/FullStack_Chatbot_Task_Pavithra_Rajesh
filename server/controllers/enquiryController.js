import Enquiry from "../models/Enquiry.js";

 export const createEnquiry = async (req, res) => {
  try {
    const {name,email,phone,userType,interest,message} = req.body;

    if(!name || !email || !phone || !userType || !interest || !message ){
     return res.status(400).json({
        message:"All fields are required"
      })
    }


    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      userType,
      interest,
      message,
    });

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Create enquiry error:", error);

    res.status(500).json({
      message: "Unable to submit enquiry",
    });
  }
};

 export const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      enquiries,
    });
  } catch (error) {
    console.error("Error fetching enquiries:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
    });
  }
};


export const updateEnquiryStatus = async (req, res) => {
  try {
    const {
     status
    } = req.body;

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      {
        status
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry updated successfully",
      enquiry,
    });
  } catch (error) {
    console.error(
      "Error updating enquiry:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to update enquiry",
    });
  }
};

export const deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(
      req.params.id
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error(
      "Error deleting enquiry:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to delete enquiry",
    });
  }
};


