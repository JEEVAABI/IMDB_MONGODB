const express = require('express')
const router = express.Router()


const {getAMovie,getAllMovies,getMovie,addAMovies,deleteAMovies,updateAMovies} = require('../controllers/MovieController')

router.route('/').get(getAllMovies).post(addAMovies)

router.route('/:id').get(getMovie,getAMovie).patch(getMovie,updateAMovies).delete(getMovie,deleteAMovies)



module.exports = router