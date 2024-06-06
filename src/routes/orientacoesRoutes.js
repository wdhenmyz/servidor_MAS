const express = require('express');
const multer = require('multer');
const { deletarOrientacao, listarOrientacao, listarOrientacoes, rotaAdmin, rotaCadastrarOrientacoes, rotaListarOrientacoes, rotaParaSucesso, cadastrarOrientacao } = require('../controllers/orientacoesController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Rotas para páginas HTML do Admin
router.get('/admin', rotaAdmin);
router.get('/admin/cadastrar', rotaCadastrarOrientacoes);
router.get('/admin/listar', rotaListarOrientacoes);
router.get('/admin/sucesso', rotaParaSucesso);

// Rotas para operações CRUD de 'orientacoes'
router.post('/orientacao', upload.single('imagem'), cadastrarOrientacao);
router.get('/orientacoes/', listarOrientacoes);
router.get('/orientacao/:id', listarOrientacao);
router.delete('/orientacao/:id', deletarOrientacao);

module.exports = router;
