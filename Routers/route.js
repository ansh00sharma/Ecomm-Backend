import express from 'express';
import {CheckController,CreateUser} from "../Controllers/SignUpController.js";

const router = express.Router();


router.get('/', CheckController);

router.get('/CreateUser', CreateUser);


export default router;