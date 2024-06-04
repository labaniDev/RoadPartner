
const ServiceBlog = require("../models/serviceBlog.js");

const serviceBlogController={
      getServiceBlogs: async (req, res) => {
        try {
          const serviceBlogs = await ServiceBlog.find({});
          res.send(serviceBlogs);
        } catch (error) {
          res.send(error).send({ success: false, msg: error.message });
        }
      },

    
    
}.

    

module.exports=serviceBlogController;
