import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/user.js';
const router = Router();
router.post('/', createUser);
router.get('/', getAllUsers);
export default router;
//# sourceMappingURL=user.js.map