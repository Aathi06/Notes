const Note = require("../models/Note")

exports.createNote = async (req,res,next)=>{
    try{
        const note = await Note.create({
            title: req.body.title,
            content: req.body.content,
            user: req.userId
        });
        res.status(201).json(note);
    }catch(err){
        next(err);
    }
};

exports.getNotes = async(req,res,next)=>{
    try{
        const notes = await Note.find({user:req.userId});
        res.json(notes);
    }catch(err){
        next(err);
    }
};

exports.getNote = async (req,res, next)=>{
    try{
        const note = await Note.findById(req.params.id);

        if(!note || note.user.toString() !== req.userId) {
            return res.status(404).json({message:"Note not found"});
        }

        res.json(note);
    }catch(err){
        next(err);
    }
}

exports.updateNote = async(req,res,next)=>{
    try{
        const note =  await Note.findById(req.params.id);

        if(!note || note.user.toString() !== req.userId ){
            return res.status(403).json({message:"Unauthorized"})
        }

        note.title = req.body.title;
        note.content = req.body.content;
        await note.save();

        res.json(note);
    } catch(err){
        next(err);
    }
};

exports.deleteNote = async(req,res,next)=>{
try{
    const note = await Note.findById(req.params.id);

    if(!note || note.user.toString()!== req.userId){
        return res.status(403).json({message:"Unauthorized"});
    }

    await note.deleteOne();
    res.json({message:"Note deleted"});
}catch(err){
    next(err);
}
}