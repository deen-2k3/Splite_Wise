import ExpenseManagement from "../module/ExpenseManagement";
import GroupCreation from "../module/GroupCreation";
import BalancesSettel from "../module/BalancesSettel";
//import { addExpense } from "./BalancesSettleController";


export const addExpense =async(req,res)=>{
    try {
        
   
    const{title,amount,PaidBy,SplitType,GroupId}=req.body;
    const group=await group.findById(GroupId).populate("MembersInvolved");

    if(!group){
        return res.status(404).json({
            message:"Group not found.",
            success:false
        })
    }
   const expense= await expense.create({title,amount,PaidBy,SplitType,group:GroupId});

   const members=group.MembersInvolved;
   let splitAmount=amount/members.length;
   members.forEach(async(member)=> {
    if(member._id.toString() !==PaidBy){
        await BalancesSettel.create({
            group:GroupId,
            from:member._id,
            to:PaidBy,
            amount:splitAmount
        })
    }
    
   });
  return  res.status(201).json({
    message:"Expense added and Balance updated",expense,
    success:true
  }) 
   } catch (error) {
        return res.status(500).json({
            message:"Error adding Expense",error:error.message,
            success:false
        })
    }
}
export const getUserBalance=async(req,res)=>{
  try {
    const{UserID}=req.params;
    const balances=await find({
        $or:[{from:UserID},{to:UserID}],
        isSettled:false,
    }).populate("from-to");

    res.json(balances);
    
  } catch (error) {
    return res.status(500).json({
        message:"Error in fetching balance",error:error.message,
        success:false
    })
  }
}
export const settleBalance=async(req,res)=>{
    try {
        const {balanceID}=req.params;
        const balance=await BalancesSettel.findById({balanceID});
        if(!balance){
            return res.status(404).json({
                message:"Balance is not found.",
                success:false
            })  
        }
        balance.isSettled=true,
        await balance.save();

        
    } catch (error) {
        return res.status(500).json({
            message:"Error in fetching Balance",error:error.message,
            success:false,
        })
        
    }

}