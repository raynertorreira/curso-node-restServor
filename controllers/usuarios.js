const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    const {nombre, edad } = req.query;

    res.json({
        msg: 'get API - controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req = request, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controlador',
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controlador',
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
}