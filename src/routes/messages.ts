import { Router } from 'express';
const router = Router();
import {
  getMessages,
  createMessage,
  getMessagesByUserId,
} from '../controllers/messages.js';

router.get('/users/:userId', getMessagesByUserId);
router.get('/', getMessages);
router.post('/', createMessage);

export default router;
