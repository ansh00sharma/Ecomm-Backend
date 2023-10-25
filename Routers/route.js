import express from 'express';
import {CheckController} from "../Controllers/controllers.js";
import {CreateUser} from "../Controllers/controllers.js";
const router = express.Router();


router.get('/', CheckController);

router.get('/CreateUser', CreateUser);


export default router;