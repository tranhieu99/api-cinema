const {createBillModel} = require('../models/bill.models');
const shortid = require('shortid')
const creatBillController = async  (req,res) =>{
try {
    const date = new Date();
    const dataToSend = {
        bill_id : "a" + shortid.generate(10),
        created_at: date,
        bill_first_name: req.body.first_name,
        bill_last_name: req.body.last_name,
        bill_email: req.body.email,
        bill_movie_show_id: req.body.movie_show_id,
        bill_user_id: req.body.user_id,
        bill_phone_number: req.body.phone_number,
        bill_quantity: req.body.quantity,
        bill_total: req.body.quantity * 45000
    }
    const success = await createBillModel(dataToSend)
    if(success){
        res.json({
            message:"success"
        })
    }
   
} catch (error) {
    console.log(error)
}    
    
}

module.exports = {
    creatBillController
}