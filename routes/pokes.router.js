const express = require('express');
const router = express.Router();

const teamsHttpHandler = require('./../http/pokes.http');

router
    .route('/')
    .get(teamsHttpHandler.getTeamFromUser)
    .put(teamsHttpHandler.setTeamToUser);

router
    .route('/pokemons')
    .post(teamsHttpHandler.addPokemonToTeam);

router
    .route('/pokemons/:pokeid')
    .delete(teamsHttpHandler.deletePokemonFromTeam);

exports.router = router;