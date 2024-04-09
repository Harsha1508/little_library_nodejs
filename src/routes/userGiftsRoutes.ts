import express, { Request, Response, Router } from 'express';
import selectGift from '../controller/userGiftsController';

const router: Router = express.Router();

router.post('/selectGifts',(req:Request,res:Response)=>{
    selectGift(req,res);
})

export default router