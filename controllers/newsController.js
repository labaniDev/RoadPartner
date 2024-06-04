const News = require("../models/news.js");

const newsController={
    getNews: async (req, res) => {
        try {
          const news = await News.find({});
          res.send(news);
        } catch (error) {
          res.send(error).send({ success: false, msg: error.message });
        }
      },

      getNewsDetails: async (req, res) => {
        try {
          let { id } = req.params;
          let resDetails = await News.find(
            { _id:id},
            {
              title: 1,
              intro:1,
              point1:1,
              point2:1,
              point3:1,
              point4:1,
              point5:1,
              content1: 1,
              content2: 1,
              content3: 1,
              content4: 1,
              content5: 1,
              image:1,
            }
          );
          res.send(resDetails);
        } catch (error) {
          res.send(error).send({ success: false, msg: error.message });
        }
      },


    
    
}

    

module.exports=newsController;
