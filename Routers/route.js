import express from 'express';
import {CheckServer,CreateNewsUser} from "../Controllers/SignUpController.js";
import {SignInUser} from "../Controllers/SignInController.js";

const router = express.Router();

router.get('/', CheckServer);
router.get('/SignUp', CreateNewsUser);
router.post('/SingIn', SignInUser);


export default router;