import Address from '../model/addressModel.js'

export const createAddress = async (req,res) => {
  try {
    const {address} = req.body;
    if (!address) {
          return res.status(400).json({ message: "Address field are required" });
        }
    
        await Address.create({
          address
        });
    
        res.status(201).json({
          message: "Address created successfully!",
        });
     
  } catch (error) {
    res.json({message:"Something went wrong!!"})
  }
}

export const getAddress = async (req,res) => {
  try {
    const addresses = await Address.find();

    res.json({addresses});
  } catch (error) {
    res.json({message:"Something went wrong!!"})
  }
}

export const deleteAddress = async (req,res) =>{
  try {
    const {id} = req.params;
    await Address.findByIdAndDelete(id);
    res.status(200).json({
      message:'Address deleted successfully!!'
    });
  } catch (error) {
    res.json({message:"Something went wrong!!"})
  }
}