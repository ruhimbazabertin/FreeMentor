import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import sessionModel from '../model/session';
import userModel from '../model/user';
import sessionSchema from '../helper/sessionValidation';

dotenv.config();
class sessionController {
  static createSession(req, res) {
    if (req.user.userType === 'user') {
      const { mentorId, questions } = req.body;
      const findMentor = userModel.find(mentor => mentor.id === mentorId);
      if (findMentor) {
        const idNumber = sessionModel.length + 1;
        const defaultStatus = 'pending';
        const newSession = sessionSchema.validate({
          // eslint-disable-next-line max-len
          sessionId: idNumber, mentorId, menteeId: req.user.id, menteeEmail: req.user.email, questions, status: defaultStatus,
        });
        // eslint-disable-next-line max-len
        if (newSession.error) { return res.status(400).json({ status: 400, error: newSession.error.details[0].message }); }
        sessionModel.push(newSession.value);
        return res.status(200).json({
          status: 200,
          data: newSession,
        });
      }
      return res.status(404).json({
        status: 404,
        error: 'Mentor not found',
      });
    }
    return res.status(403).json({
      status: 403,
      message: 'Unauthorized',
    });
  }
}

export default sessionController;
