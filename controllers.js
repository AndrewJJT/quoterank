var Authors = require('./model')

var controllers = {
    getallauthors: function(req, res){
        Authors.find()
        .then(data=> res.json({message:"success", allauthors:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    getauthor: function(req,res){
        Authors.find({_id:req.params.id})
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    addauthor: function addauthor(req,res){
        Authors.create(req.body)
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    updateauthor: function updateauthor(req, res){
        Authors.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    
    deleteauthor: function deleteauthor(req,res){
        Authors.findByIdAndDelete({_id:req.params.id})
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },



    addquote: function addquote(req,res){
        Authors.findOneAndUpdate({_id:req.params.id}, {$push:{quotes: req.body}})
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    updatevote: function updatevote(req,res){
        Authors.findOneAndUpdate(
            {"_id":req.params.id, "quotes._id":req.params.qid},
            {
                "$set":{"quotes.$.votes":req.body.votes}
            }
        )       
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    deletequote: function deletequote(req,res){
        Authors.findOneAndUpdate(
            {_id:req.params.id},
            {$pull: {quotes:{_id:req.params.qid}}}
            )
      
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    }

}

module.exports = controllers;