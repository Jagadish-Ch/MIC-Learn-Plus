const User = require('../../models/User');

const getUserDetails = async (req, res) => {
  try {
    const { userId } = req.params;
    const UserDetails = await User.findOne({
      _id:userId,
    });
    
    if(UserDetails){
      
      const { _id, password, role ,...data} = UserDetails
      console.log(UserDetails)
      res.json({
        success: true,
        data: data,
      });
    }else{
      res.status(200).json({
        succes:false,
        message: "User Not Found...!"
      })
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = {
  getUserDetails,
}