const axios = require('axios');
const Dev = require("../models/Dev");
module.exports = {
    async index(req,res){
        const {user} = req.headers;
        
        const loggedDev = await Dev.findByid(user);

        const users = await Dev.find({
            $and:[
                {_id:{$ne:user}}, //users nao existe
                {_id:{$nin:loggedDev.likes}},
                {_id:{$nin:loggedDev.deslikes}}//users nao likes
            ],
        })
        return res.json(users)
    },

     async store(req,res){

        const {username} = req.body;
        const userExists = await Dev.findOne({user:username});
        if(userExists){
            return res.json(userExists);
        }
        const response = await axios.get(`https://api.github.com/users/${username}`);

        const {name,bio,avatar_url:avatar} = response.data;
       const dev = await Dev.create({
            name,
            user:username,
            bio,
            avatar
        });      
        return res.json(dev);

     }
}