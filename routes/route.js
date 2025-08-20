import express  from 'express'
const route = express.Router();
import {createCollege,registerUser} from '../controllers/collegeController.js'
import {createIntern,getCollegeDetails} from '../controllers/internController.js'

route.post('/functionup/colleges', createCollege);

route.post('interns/functionup/',createIntern);

route.get('/functionup/collegeDetails', getCollegeDetails);

route.post('/register', registerUser);





export default route
