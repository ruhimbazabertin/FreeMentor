import userModel from '../model/user';
class mentorController {
  // View a specific mentor
  static specificMentor(req, res) {
    if (req.user.userType === 'user') {
      const { id } = req.params;
      const foundUser = userModel.find(user => user.id === parseInt(id) && user.userType === 'mentor');
      if (foundUser) {
        return res.status(200).json({
          status: 200,
          data: foundUser,

        });
      }
      return res.status(404).json({
        status: 404,
        error: 'Mentor not found',
      });
    }
    return res.status(403).json({
      status: 403,
      error: 'Unauthorized',
    });
  }

  // all mentors
  static viewMentors(req, res) {
    if (req.user.userType === 'user' || req.user.userType === 'admin') {
      const allMenotrs = userModel.filter(mentor => mentor.userType === 'mentor');
      return res.status(200).json({
        status: 200,
        data: allMenotrs,
      });
    }
    return res.status('403').json({
      status: 403,
      message: 'Aunauthorized',
    });
  }
}

export default mentorController;
