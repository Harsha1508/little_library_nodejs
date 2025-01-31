import { Router } from 'express';
import { validateAdmin } from '../middleware/validators/adminSignUpValidation';
import adminSignUpController from '../controller/adminSignUpController';

const router = Router();

router.post('/signup', adminSignUpController.adminSignUp);

export default router;
