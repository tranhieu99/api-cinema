const {getUserByUserName,uploadUserAvatarModel, updateUserModel } = require("../models/user.model")
const getUserInfoController = async (req,res) =>{
    try {
        const userInfor = await getUserByUserName(req.params.user_name)
        res.send(userInfor)
    } catch (error) {
        console.log(error)
    }
}
const uploadUserAvatarController = async(req,res) => {
    const fileNameInServer = `http://localhost:5555//avatars/${req.file.filename}`
    
try {
    const uploaded = await uploadUserAvatarModel(req.body.user_name,fileNameInServer)
res.send({
    fileNameInServer
})

} catch (error) {
    console.log(error)
}
}
const updateUserController = async(req,res) =>{
   try{
        const updated = await updateUserModel( req.body)
        res.send({
            message: "success"
        })
   }catch(error){
       console.log(error)
   }
}
module.exports = {
    getUserInfoController,
    uploadUserAvatarController,
    updateUserController
}