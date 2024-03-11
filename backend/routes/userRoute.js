
const router = express.Router();
import {registerUserAndFetchAstroData , userLogin,userData,signup}  from '../controllers/userController.js';
import { authenticate } from '../utils/authenticationMiddleware.js';

//router.post('/register', registerUserAndFetchAstroData);
router.post("/signup",signup);
router.post('/login', userLogin);
router.use(authenticate);
router.get('/verify',userData);

export default router;
