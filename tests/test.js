/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);
chai.should();

// eslint-disable-next-line no-undef
describe('FreeMentor product', () => {
  it('should be signup', (done) => {
    const user = {
      firstName: 'kabera',
      lastName: 'Jean',
      email: 'kaberab@gmail.com',
      password: 'kabera123',
      address: 'kigali',
      bio: 'scientist',
      occupation: 'software development',
      expertise: 'sostware architecture',
      userType: 'user',
    };
    chai.request(server)
      .post('/api/v1/auth/signUp')
      .send(user)
      .end((error, res) => {
        res.status.should.be.equal(201);
      });
    done();
  });
  // duplicate email
  it('user should not be signup with email already exist in the database.', (done) => {
    const user = {
      firstName: 'kabera',
      lastName: 'Jean',
      email: 'ruhimbazab@gmail.com',
      password: 'bertin123',
      address: 'kigali',
      bio: 'scientist',
      occupation: 'software development',
      expertise: 'sostware architecture',
      userType: 'user',
    };
    chai.request(server)
      .post('/api/v1/auth/signUp')
      .send(user)
      .end((error, res) => {
        res.status.should.be.equal(400);
        res.should.be.an('object');
      });
    done();
  });
  // when some filled are missing
  it('should not able to sign up if some fields are not filled yet', (done) => {
    const user = {
      lastName: 'Jean',
      email: 'ruhi@gmail.com',
      password: 'bertin123',
      address: 'kigali',
      bio: 'scientist',
      occupation: 'software development',
      expertise: 'sostware architecture',
      userType: 'user',
    };
    chai.request(server)
      .post('/api/v1/auth/signUp')
      .send(user)
      .end((error, res) => {
        res.status.should.be.equal(400);
        res.should.be.an('object');
      });
    done();
  });
});
