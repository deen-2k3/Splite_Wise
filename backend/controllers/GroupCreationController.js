import Group from "../module/GroupCreation.js";

export const createGroup = async (req, res) => {
  try {
    const { groupName, members } = req.body;
  //  const userId = req.user.id; // assuming you get logged-in user from auth middleware

    if (!groupName || !members) {
      return res.status(400).json({
        message: "Group name or members missing.",
        success: false,
      });
    }

    const newGroup = await Group.create({
      groupName,
      members,
    //  createdBy: userId, // set logged-in user as creator
    });

    res.status(201).json({
      message: "Group created successfully!",
      success: true,
      group: newGroup,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
