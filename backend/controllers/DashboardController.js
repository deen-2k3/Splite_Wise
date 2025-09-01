import BalancesSettel from "../module/BalancesSettel";
import ExpenseManagement from "../module/ExpenseManagement";

export const getDashboard=async(req,res)=>{
    try {
        const{userId}=req.params;
        const totalSpent=await expense.aggregate([
            {$match:{createdBy:userId}},
            {$group:{_id:null,total:{$sum:"$amount"}}}
        ]);
        const totalowned=await BalancesSettel.aggregate([
            {$match:{from:userId}},
            {$group:{_id:null,total:{$sum:"$amount"}}}

        ]);
        const totalTocollect=await BalancesSettel.aggregate([
            {$match:{to:userId}},
            {$group:{_id:null,total:{$sum:"$amount"}}}
        ]);
         const recentExpenses = await Expense.find({
      $or: [{ createdBy: userId }, { "participants.user": userId }]
    })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      dashboard: {
        totalSpent: totalSpent[0]?.total || 0,
        totalOwed: totalOwed[0]?.total || 0,
        totalToCollect: totalToCollect[0]?.total || 0,
        recentExpenses
      }
    });
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"error.message"
        })
    }
} 