const router = require('express').Router();

const { Hacker } = require('../db');
// Fetch a list of hacker from the database and sort them alphabetically, using a REST API.
router.get('/', async (req, res) => {
    let { sort, page } = req.query
    console.log(page,sort)
    try {
        if (page>0) {
            switch (sort) {
                case "AtoZ":
                    return res.json(await Hacker.findAll({
                        order: [['name', 'ASC']],
                        limit: 10,
                        offset: 10 * (page - 1)
                    }))
                case "ZtoA":
                    return res.json(await Hacker.findAll({
                        order: [['name', 'DESC']],
                        limit: 10,
                        offset: 10 * (page - 1)
                    }))
                default:
                    return res.json(await Hacker.findAll({
                        limit: 10,
                        offset: 10 * (page - 1)
                    }))
            }
        } else {
            return res.json(await Hacker.findAll({
                order: [['name', 'DESC']]
            }))
        }

    } catch (e) {
        res.status(505).send(e)
    }

})
router.get('/mytop', async (req, res) => {
    try {
        return res.json(await Hacker.findAll({
            order: [['myRank', 'DESC']],
            limit: 3,
        }))
    } catch (e) {
        res.status(505).send(e)
    }


})
// Fetch top 3 hacker, using a REST API.
router.get('/top', async (req, res) => {
    try {
        return res.json(await Hacker.findAll({
            order: [['overallRank', 'DESC']],
            limit: 3,
        }))
    } catch (e) {

    }
})
// Fetch details of a hacker from the database, using a REST API.
router.get('/uuid/:uuid', async (req, res) => {
    let { uuid } = req.params
    console.log (uuid)
    try {
        let detail = await Hacker.findByPk(uuid)
        !detail ? res.sendStatus(404) : res.json(detail);
    } catch (e) {
        res.status(505).send(e)
    }
})
// Formulate a Ranking system for hacker and implement it in the backend.

router.post('/createdb', async (req, res) => {


    try {
        await Promise.all(req.body.map(async (hacker) => {
            let {
                name, profileLink, pictureLink, location, challengersSolved, solutionsSubmited, solutionsAccepted, overallRank, followers, following, noOfVotes, timestamp, deviceType, dataStructures, algorithms, cpp, java, python, html, javascript
            } = hacker
            await Hacker.create(
                {
                    name,
                    profileLink,
                    pictureLink,
                    location,
                    challengersSolved,
                    solutionsSubmited,
                    solutionsAccepted,
                    overallRank,
                    followers,
                    following,
                    noOfVotes,
                    timestamp,
                    deviceType,
                    dataStructures,
                    algorithms,
                    cpp,
                    java,
                    python,
                    html,
                    javascript,
                    myRank: (javascript + algorithms) / 200,


                })
        }))
        res.send("base de datos creada")
    } catch (e) {
        res.status(505).send(e)
    }

})

module.exports = router;
// Create a page to display the following statistics (preferably using charts/graphs):
// 1. Percentile in C++, sorted in descending order.

// 2. Total number of registered and active users.

// 3. Most recently updated hacker’s details (maximum 10 results)

// 4. Distribution of devices (laptop/tablet/phone) from which user had registered.

// 5. List of Ranking of Hacker (Top 10)

