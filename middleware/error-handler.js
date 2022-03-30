const errorHandlerMiddleware = (err,rerq,res,next) =>{
    console.log(err);
    res.status(500).json({msg: 'There was an error'})
}

export default errorHandlerMiddleware