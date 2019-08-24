/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);
chai.should();

// eslint-disable-next-line no-undef
describe('FreeMentor product', () => {
    let emptToken = 'bertin';
    let adminToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3ROYW1lIjoiVGV0YSIsImxhc3ROYW1lIjoiQmVsbHlzZSIsImVtYWlsIjoiYmVsbHlzZWFkQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJraWdhbGkiLCJiaW8iOiJzY2llbnRpc3QiLCJvY2N1cGF0aW9uIjoic29mdHdhcmUgZGV2ZWxvcG1lbnQiLCJleHBlcnRpc2UiOiJzb3N0d2FyZSBhcmNoaXRlY3R1cmUiLCJ1c2VyVHlwZSI6ImFkbWluIiwiaWF0IjoxNTY2NDA0MjQ1fQ.pm67X0E1Ls-Nh4eR--44ITZ1xx2EneGOUI88e0MHbXc';
    let userToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoicnVoaW1iYXphIiwibGFzdE5hbWUiOiJCZXJ0aW4iLCJlbWFpbCI6InJ1aGltYmF6YWJAZ21haWwuY29tIiwiYWRkcmVzcyI6ImtpZ2FsaSIsImJpbyI6InNjaWVudGlzdCIsIm9jY3VwYXRpb24iOiJzb2Z0d2FyZSBkZXZlbG9wbWVudCIsImV4cGVydGlzZSI6InNvc3R3YXJlIGFyY2hpdGVjdHVyZSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTU2NjU4NDI5NCwiZXhwIjoxNTY2NjcwNjk0fQ._d1DusgifybBhXNLt8U5f9edciu8_YPdwcCozfXIBho';
    let mentorToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiYWhpc2hha2l5ZSIsImxhc3ROYW1lIjoiYWxpbmUiLCJlbWFpbCI6ImFsaW5lQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJOYWlyb2JpIiwiYmlvIjoicmVzZWFyY2hlciIsIm9jY3VwYXRpb24iOiJhZHZvY2FjeSIsImV4cGVydGlzZSI6InRlYWNoaW5nIiwidXNlclR5cGUiOiJtZW50b3IiLCJpYXQiOjE1NjY1ODMyODksImV4cCI6MTU2NjY2OTY4OX0.yr8aZ32IHcfCE85GL2bqVaxeFCDcakRrDm5j9Gx_n04';
    let wrongToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoicnVoaW1iYXphIiwibGFzdE5hbWUiOiJCZXJ0aW4iLCJlbWFpbCI6InJ1aGltYmF6YWJAZ21haWwuY29tIiwiYWRkcmVzcyI6ImtpZ2FsaSIsImJpbyI6InNjaWVudGlzdCIsIm9jY3VwYXRpb24iOiJzb2Z0d2FyZSBkZXZlbG9wbWVudCIsImV4cGVydGlzZSI6InNvc3R3YXJlIGFyY2hpdGVjdHVyZSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTU2NjU4NDI5NCwiZXhwIjoxNTY2NjcwNjk0fQ._d1DusgifybBhXNLt8U5f9edciu8_YPdwcCozfXIBhobertin'
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
       // res.should.be.an('object');
      });
    done();
  });
//when user login
it('should login a user', (done)=>{
    const user = 
            {
                email   : 'ruhimbazab@gmail.com',
                password: 'bertin123',
            };
            chai.request(server)
            .post('/api/v1/auth/signIn')
            .send(user)
            .end((error, res)=>{
                res.body.message.should.be.equal('Logged in as ruhimbaza');
                res.body.status.should.be.equal(200);
            });
          done(); 
        })
it('User should not be able to login if email is not found', (done)=>{
const user = 
        {
            email   : 'timbugutu@gmail.com',
            password: 'bertin123',
        };
        chai.request(server)
        .post('/api/v1/auth/signIn')  
        .send(user)
        .end((error, res)=>{
            res.body.status.should.be.equal(404);
            res.body.error.should.be.equal('User not found');
        });
      done(); 
    }) 
     it('user should not login when password is not match', (done)=>{
         const user = 
         {
          email  : 'ruhimbazab@gmail.com',
         password: '$2a$08$RZsSEmB3nSsO3O5hHBnSmOwXCNN4/bvf/wlg4DWpYKPAinMnTYj7it',
         }
         chai.request(server)
         .post('/api/v1/auth/signIn')
         .send(user)
         .end((error, res)=>{
             res.body.status.should.be.equal(404);
             res.body.should.be.an('object');
             res.body.error.should.be.equal('UserName or password not match.');
         })
         done();
     })
     //User should be able to view a specific mentor
     it('should be able to view a specific mentor', (done)=>{
        chai.request(server)
        .get('/api/v1/auth/mentors/4')
        .set('Authorization', userToken)
        .end((error, res)=>{
            res.body.status.should.be.equal(200);
        })
        done();
       });
       it('should be not able to view a specific mentor', (done)=>{
        chai.request(server)
        .get('/api/v1/auth/mentors/-1')
        .set('Authorization', userToken)
        .end((error, res)=>{
            res.body.status.should.be.equal(404);
        })
        done();
       });
       it('should not have access to view a specific mentor if you are not a user', (done)=>{
        chai.request(server)
        .get('/api/v1/auth/mentors/2')
        .set('Authorization', mentorToken)
        .end((error, res)=>{
            res.body.status.should.be.equal(403);
            res.body.error.should.be.equal('Unauthorized');
        })
        done();
       });
       //auth testing for wrong token
       it('should be not able to authenticate', (done)=>{
        chai.request(server)
        .get('/api/v1/auth/mentors/2')
        .set('Authorization', wrongToken)
        .end((error, res)=>{
            res.body.status.should.be.equal(401);
        })
        done();
       });
});
