

export const requireSignIn =async (req,res,next) =>{
    try {
        const token = req.header.authorization.splite(" ")[1]
        req.user = JWT.verify(token, process.env.JWT_SECRET )
        next()
    } catch (error) {
        return res.status(401).send({
            success:false,
            message:"Not Authorized",
            error
        })
    }
}