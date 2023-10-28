import { PrismaClient } from '@prisma/client'
import { CheckUser } from '../Services/CheckExistingUserService.js';
import { CreateToken } from '../Services/CreateUserTokenService.js';

const SignInUser = async(req, res) => {
    var email_id  = req.body['email_id'];
    var password =  req.body['password'];

    try {
        if(!(email_id && password)){
          throw Error("Empty credentials entered !")
        }
    
        try {
              const UserExist = await CheckUser(email_id);
              if (UserExist) {
                console.log("User exists creating token for the user.");
            
                var user_toke_created = await CreateToken(email_id)
                console.log("user_toke_created : ", user_toke_created)
                
                res.send({"email_id" :email_id, "password ": password, token : user_toke_created})
                } 
              else {
                res.send("No User with this Email Id exist !")
              }
            }
            catch (error) {
              console.error(error);
              res.status(500).send("An error occurred while processing the request.");
            }
    }
    catch (error){
      console.error(error);
    }
}

export {SignInUser};