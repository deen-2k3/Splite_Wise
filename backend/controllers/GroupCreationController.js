import Group from "../module/GroupCreation.js";
//for create new group
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
//for update group
export const updateGroup=async(req,res)=>{
    try {
        
    const{members,groupName}=req.body;
    if(!members||!groupName){
        return res.status(401).json({
            message:"Something is missing.",
            success:true
        })
    }
   await Group.updateMany({
    groupName,
    members
   });
   return res.status(201).json({
    message:"Group Updated Successfully.",
    success:true
   })
   } catch (error) {
        console.log(error);
    }
    
};
//for delete group
 export const DeleteGroup=async(req,res)=>{
    try {
        const{groupName,members}=req.body;
        if(!groupName){
            return res.status(401).json({
                message:"Something is missing.",
                success:false
            })
        }
        const group=await Group.findOne({groupName});
        if(!group){
            return res.status(401).json({
                message:"Group is missing.",
                success:false
            })
        }
        await Group.DeleteGroup({groupName});

        return res.status(201).json({
            message:"Group Deleted Successfully.",
            success:true
        })

        
    } catch (error) {
        console.log(error);
        
    }
 }
