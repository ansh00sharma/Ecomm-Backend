import { PrismaClient } from '@prisma/client'
import { CreatingNewUser } from '../Services/CreateNewUserService.js';
import { CheckUser } from '../Services/CheckExistingUserService.js';

const prisma = new PrismaClient()

const CheckServer = (req,res) =>{
  res.send("Express working lode");
}
const CreateNewsUser = async (req, res) => {

    var email_id = req.body['email_id'];
    var password = req.body['password'];

    console.log("email :", email_id);
    try {
        if(!(email_id && password)){
          throw Error("Empty credentials entered !")
        }
    
        try {
            // Check if the user already exists
            // const userExists = await CheckUser(email_id);
            const userExists = undefined;
        
            if (userExists) {
              res.send("User already exists.");
            } else {
              // Create a new user
              await CreatingNewUser(email_id, password);
              res.send("Created new user successfully!");
            }
          } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while processing the request.");
          }
    }
    catch (error){
      console.error(error);
    }
};	

export {CheckServer,CreateNewsUser};