const fs = require('fs');
const PATH = './db/db.json'
const db = JSON.parse(fs.readFileSync(PATH));

function getAllTratamentsService() {
    return db;
}

function getTratamentByIdService(id) {
    const result = db.filter(tratament => tratament.id === id);
    return result.length ? result : false

}

function setNewTratamentService(newTratament) {
    const newTratamens = [...db, newTratament];
    fs.writeFileSync(PATH, JSON.stringify(newTratamens));
    return `Object created...!`;
}

function deleteTratamentService() {
    db.pop();
    return `Object poped...!`;
}

function deleteTratamentByIdService(id) {
    const intialLength = db.length;
    const result = db.filter(tratament => tratament.id !== id);
    fs.writeFileSync(PATH, JSON.stringify(result));
    return result.length === intialLength ? false : `Object ${id} deleted..!`;
}

function upDateTratamentService(id, tratamentUpdates) {
    const tratamentIndexToUpdate = db.findIndex(tratament => tratament.id === id);
    const tratamentUpdated = { ...db[tratamentIndexToUpdate], ...tratamentUpdates } //atualiza todos os dados correspondentes, sobrescreve os iguais e adciona os diferentes
    db[tratamentIndexToUpdate] = tratamentUpdated;
    fs.writeFileSync(PATH, JSON.stringify(db));

    return tratamentIndexToUpdate === -1 ? false
        : `Tratament id ${id} was updated with: ${JSON.stringify(tratamentUpdates)}`;
}

module.exports = {
    getAllTratamentsService,
    getTratamentByIdService,
    setNewTratamentService,
    deleteTratamentService,
    deleteTratamentByIdService,
    upDateTratamentService
}