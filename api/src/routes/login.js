const router = require('express').Router();
const { User } = require('../db');

const admins = [
    { id: 1, name: 'Hugo', email: 'hugo@mail.com', password: '1234' },
    { id: 2, name: 'Toni', email: 'Toni@mail.com', password: '1234' },
    { id: 3, name: 'yo', email: 'max@mail.com', password: '1234' },
    { id: 4, name: 'Maxi', email: 'maxibc94@gmail.com', password: '1234' }
]

router.post('/admin', (req, res) => {
    let { email, password } = req.body;
    let logAdmin = admins.find(admin => admin.email === email && admin.password === password);
    res.json(logAdmin)
});
router.post('/register', async (req, res) => {
    let { email, password, name } = req.body;
    try {
        let foundUser = await User.findOne({
            where: { email }
        })
        if (foundUser) {
            res.send('the email was already used, try another')
        }
        else {
          let newUser =await User.create({email, password, name })
          res.json(newUser)

        }
    } catch (e) {
        res.status(505).send(e)
    }
});
router.post('/', async (req, res) => {
    let { email, password } = req.body;
    try {
        let logUser = await User.findOne({
            where: { email,password }
        })
        res.json(logUser)
    } catch (e) {
        res.status(505).send(e)
    }
})
module.exports = router;