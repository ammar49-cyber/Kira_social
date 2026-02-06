module.exports = (req,res,next)=>{
  if(req.user.role !== "admin" && req.user.role !== "owner") {
    return res.status(403).json({msg:"Admins/Owners only"});
  }
  next();
}
