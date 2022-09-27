const {response}=require("express")

const usuariosGet=(req, res)=>{
    const query=req.query;
    res.json({
        msg:"get API - Controlador",
        query
    })
}

const usuariosPost=(req, res)=>{

    const {edad}=req.body;
    
    res.json({
        msg:"post API -Controlador" ,
        año:edad
    })
}

const usuariosPut=(req, res)=>{

    const id=req.params.id
    
    res.json({
        msg:"put API-Controlador",
        id
    })
}

const usuariosDelete=(req, res)=>{
    res.json({
        msg:"delete API-Controlador"
    })
}

const usuariosPatch=(req, res)=>{
    res.json({
        msg:"Patch API-Controlador"
    })
}




module.exports={
usuariosGet,
usuariosDelete,
usuariosPost,
usuariosPatch,
usuariosPut
}