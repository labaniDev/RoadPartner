const Blog = require("../models/blog");

const blogController={
    getBlogs: async (req, res) => {
        try {
          const blogs = await Blog.find({});
          res.send(blogs);
        } catch (error) {
          res.send(error).send({ success: false, msg: error.message });
        }
      },


    
    
}

    

module.exports=blogController;
