const { response, request } = require('express')
const MovieModel = require('../models/MovieModel')

const getAllMovies = async (request,response)=>{
    const movies = await MovieModel.find()
    try{
        response.status(200).json(movies)
    } 
    catch(error){
        response.send(500).json({message : error.message})
    }

}

const addAMovies = async (request,response)=>{
    const newMovie = new MovieModel({
        movieName :request.body.movieName,
        genre : request.body.genre,
        language : request.body.language,
        rating : request.body.rating,
    })
    try{
        const movie = await newMovie.save()
        response.json(movie)
    }catch(error){
        response.json({message : error.message})

    }

}

const getAMovie = (request,response)=>{
    response.send(200).json(response.movie)
}

const updateAMovies = async (request,response)=>{
    if(request.body.movieName != null){
        response.movie.movieName
    }
    if(request.body.genre != null){
        response.movie.genre
    }
    if(request.body.language != null){
        response.movie.language
    }
    if(request.body.rating != null){
        response.movie.rating
    }
    if(request.body.releasedYear != null){
        response.movie.releasedYear
    }
    try{
        const updateMovie = await response.movie.save()
        response.status(200).json(updateMovie)
    }catch(error){
        response.status(500).json({message : error.message})

    }

}

const deleteAMovies = async (request,response)=>{
    try{
        await response.movie.deleteOne()
        response.json({message:`Deleted the user ${response.movie.movieName}`})
    }
    catch(error){
        response.status(500).json({message : error.message})
    }

}

async function getMovie(request,response,next){
    let movie
    try{
        movie = await MovieModel.findById(request.params.id)
        if(movie == null)
        {
            return response.status(500).json({meesage : error.messsage})
        }
    }
    catch(error){
        return response.status(500).json({message : error.message})
    }
    response.movie = movie
    next()
}



module.exports = {getAllMovies,addAMovies,getAMovie,updateAMovies,deleteAMovies,getMovie}