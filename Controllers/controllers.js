import { PrismaClient } from '@prisma/client'
import { newUser } from '../Services/CreateNewUserService.js';
import { checkuser } from '../Services/CheckExistingUserService.js';

const prisma = new PrismaClient()

const CheckController = (req, res) => {

	res.send('Hello World!');
};

const CreateUser = async (req, res) => {

    var email_id = req.body['email_id'];
    var password = req.body['password'];
    var token = req.body['token'];

    console.log("email :", email_id);

    try {
        // Check if the user already exists
        const userExists = await checkuser(email_id);
    
        if (userExists) {
          res.send("User already exists.");
        } else {
          // Create a new user
          await newUser(email_id, password, token);
          res.send("Created new user successfully!");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing the request.");
      }
};	

export {CheckController ,CreateUser};