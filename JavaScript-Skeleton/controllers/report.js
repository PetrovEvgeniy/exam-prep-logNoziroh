const Report = require('../models').Report;

module.exports = {
    index: (req, res) => {
        let reports = Report.findAll().then(reports=>{
            res.render('report/index', {'reports':reports})
        });
    },
    createGet: (req, res) => {
        res.render('report/create');
    },
    createPost: (req, res) => {
        let arg = req.body;

        Report.create(arg).then(() => {
            res.redirect("/");
        }).catch(err => {
            console.log(err.message);
        })
    },
    detailsGet: (req, res) => {
        let id = req.params.id;
        Report.findById(id).then(report=> {
           res.render('report/details',report.dataValues);
        })
    },
    deleteGet: (req, res) => {
        let id = req.params.id;
        Report.findById(id).then(report=> {
           res.render('report/delete',report.dataValues);
        })
    },

    deletePost: (req, res) => {
        let id = req.params.id;
        Report.findById(id).then(report => {
            report.destroy().then(() => {
              res.redirect('/');
            })
        })
    }
};