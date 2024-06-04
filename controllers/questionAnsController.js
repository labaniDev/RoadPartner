const QuestionAns = require("../models/questionAns.js");

const questionAnsControllerController={
    getQAs: async (req, res) => {
        try {
          const qas = await QuestionAns.find({});
          res.send(qas);
        } catch (error) {
          res.send(error).send({ success: false, msg: error.message });
        }
      },


    
    
}

    

module.exports=questionAnsControllerController;
