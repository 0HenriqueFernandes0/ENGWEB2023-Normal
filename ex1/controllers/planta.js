var Lista = require('../models/planta')

// Shop list
module.exports.list = (especieParam,implantParam) => {
    if (especieParam === undefined && implantParam === undefined) {
        return Lista
        .find({})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else if (especieParam === undefined){
        return Lista
        .find({Implantação:implantParam})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else if (implantParam === undefined) {
        return Lista
        .find({Espécie:especieParam},)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
    }
}

module.exports.getLista = id => {
    return Lista.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addLista = l => {
    return Lista.find({})
            .then(resposta => {
                new_id = resposta[resposta.length - 1]._id + 1
                l._id=new_id
                return Lista.create(l)
                    .then(resposta => {
                        return resposta
                    })
                    .catch(erro => {
                        return erro
                    })
            })
            .catch(erro => {
                return erro
            })
}

module.exports.updateLista = l => {
    return Lista.updateOne({_id:l._id}, l)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deleteLista = id => {
    return Lista.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.freguesia = () => {
    return Lista.find({})
        .then(resposta => {
            arr = []
            resposta.forEach(element => {
                arr.push(element['Freguesia'])
            });
            return arr
        })
        .catch(erro => {
            return erro
        })
}

module.exports.especies = () => {
    return Lista.find({},'Espécie -_id')
        .then(resposta => {
            arr = []
            resposta.forEach(element => {
                arr.push(element['Espécie'])
            });
            return arr
        })
        .catch(erro => {
            return erro
        })
}
