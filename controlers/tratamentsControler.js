const { response } = require('express');
const {
    getAllTratamentsService,
    getTratamentByIdService,
    setNewTratamentService,
    deleteTratamentService,
    deleteTratamentByIdService,
    upDateTratamentService
} = require('../services/tratamentsServices');

function getTratamentsController(req, res) {
    try {
        applyService(res, getAllTratamentsService, null, null);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getTratamentByIdController(req, res) {
    try {
        applyService(res, getTratamentByIdService, null, Number(req.params.id));
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function setTratamentController(req, res) {
    try {
        applyService(res, setNewTratamentService, req.body, null);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function delTratamentController(req, res) {
    try {
        applyService(res, deleteTratamentService, null, null);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function delTratamentByIdController(req, res) {
    try {
        applyService(req, res, deleteTratamentByIdService);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function upDateTratamentController(req, res) {
    try {
        applyService(res, upDateTratamentService, req.body, Number(req.params.id));
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
//falta implementer a verificação do shape do body
function applyService(...args) {
    const [res, applyier, body, id] = [...args];

    if (id === null && body === null) {
        res.status(200);
        res.send(applyier());
    }else if (id === null && body){
        const response = applyier(body);
        res.status(201);
        res.send(response);
    }else {
        if (id) {
            const response = body ? applyier(id, body) : applyier(id);
            if (response) {
                body ? res.status(201) : res.status(200)
                res.send(response);
            } else {
                res.status(404);
                res.send('id not found..!');
            }
        } else {
            res.status(422);
            res.send('Invalid id..!');
        }
    }
}

module.exports = {
    getTratamentsController,
    getTratamentByIdController,
    setTratamentController,
    delTratamentController,
    delTratamentByIdController,
    upDateTratamentController
};

