const Category = require("../models/category");

const categoriesController={
    getCategories: async (req, res) => {
        try {
          const categories = await Category.find({});
          res.send(categories);
        } catch (error) {
          res.send(error).send({ success: false, msg: error.message });
        }
      },


    
    
}

    

module.exports=categoriesController;
