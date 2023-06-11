import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserControler } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserControler.createUser
);

export const UserRoutes = router;
