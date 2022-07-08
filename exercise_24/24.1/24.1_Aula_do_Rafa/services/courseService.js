const { Course } = require('../models');

const createCourse = ({ // PARA A ROTA POST
    name,
    description,        // RECEBIDO DA MODELS
    creationDate,
    active,
    duration
})=> {
    return Course.create({
        name,
        description,
        creation_data: creationDate,     // O QUE SERÁ PASSADO PARA O CONTROLER
        active,
        duration
    })
}

const getCourses = () => {
    return Course.findAll ()
};

const updateCourse = (id, {
        name,
        description,
        creationDate,
        active,
        duration
}) => {
   const [qtdUpdated] =  await Course.update({
        name,
        description,
        creationDate,        // o segundo parâmetro do que será passado no update é o where
        active,
        duration
    }, {
        WHERE: {id}
    })
    return qtdUpdated > 0;
}

const deleteCourse = async (id) => {
    const qtdRemoved = await Course.destroy({
        where: {id}
    })
    return qtdRemoved > 0;
}


module.exports = {
    createCourse,
    getCourses,
    updateCourse
}