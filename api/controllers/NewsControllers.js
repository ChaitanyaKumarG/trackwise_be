const News = require("../models/News")

const NewsControllers = {

    getAllNews: (req, res) => {
        News.getAll((err, result) => {
            if (err)
                res.json(err)
            else
                res.json(result)
        });
    },

    addNews: (req, res) => {
        const newNews = req.body
        News.add(newNews, (err, result) => {
            if (err) res.json(err);
            else res.json({ msg: "news posted", result });
        });
    }

}

module.exports = NewsControllers