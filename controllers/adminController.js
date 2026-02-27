export const admin = (req,res) => {
  try {
    const {email,password} = req.body;

    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASS) {
      return res.json({ message: false });
    }

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS){
      return res.json({message:true});
    }    
  } catch (error) {
    res.json({message:"Not Authenticate"});
  }
}