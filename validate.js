const Joi = require('@hapi/joi');

const validateSignUp = (body) =>{
    let date = new Date();
    const schema = Joi.object({
        first_name: Joi.string()
                       .required(),
        last_name: Joi.string()
                      .required(),
        email:Joi.string()
                 .email()
                 .required(),
        user_name: Joi.string()
                .min(6)
                .max(20)
                .required(),
        pass_word: Joi.string()
                      .min(8)
                      .required(),
        zip_code:  Joi.number()
        .min(5)
        .required(),
        address: Joi.string().required(),
        country: Joi.string().required(),
        city: Joi.string().required(),
        birthday: Joi.date().required(),
        gender: Joi.string().required(),
        role: Joi.string().required(),
        phone_number: Joi.number().required(),
        created: Joi.string()
                    .default(`${date.getDay()} - ${date.getMonth()} - ${date.getFullYear()}`)
    })
    return schema.validate(body)
}
module.exports = {
    validateSignUp
}