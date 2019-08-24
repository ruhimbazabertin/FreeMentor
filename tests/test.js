/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);
chai.should();

// eslint-disable-next-line no-undef
describe('FreeMentor product', () =>{ 
    let adminToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3ROYW1lIjoiS2FtYmFuZGEiLCJsYXN0TmFtZSI6ImF1Z3N0aW4iLCJlbWFpbCI6ImFseXlAZ21haWwuY29tIiwiYWRkcmVzcyI6ImtpZ2FsaSIsImJpbyI6InNjaWVudGlzdCIsIm9jY3VwYXRpb24iOiJzb2Z0d2FyZSBkZXZlbG9wbWVudCIsImV4cGVydGlzZSI6InNvc3R3YXJlIGFyY2hpdGVjdHVyZSIsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE1NjY2NDcxMjB9.w4zH-gxxq1coJt2UeLxfyqIXPlBpZlk6Nft9iBfCtas';
    let userToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3ROYW1lIjoiS2FtYmFuZGEiLCJsYXN0TmFtZSI6ImF1Z3N0aW4iLCJlbWFpbCI6ImFseUBnbWFpbC5jb20iLCJhZGRyZXNzIjoia2lnYWxpIiwiYmlvIjoic2NpZW50aXN0Iiwib2NjdXBhdGlvbiI6InNvZnR3YXJlIGRldmVsb3BtZW50IiwiZXhwZXJ0aXNlIjoic29zdHdhcmUgYXJjaGl0ZWN0dXJlIiwidXNlclR5cGUiOiJ1c2VyIiwiaWF0IjoxNTY2NjYxODUxfQ.a1rvSihaENzqH5ctfayjhlk2EHVh1YH3szlvRldYp-w';
    let mentorToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZmlyc3ROYW1lIjoibmdhcmFtYmUiLCJsYXN0TmFtZSI6ImFudG9pbmV0dGUiLCJlbWFpbCI6ImFudG9pbmV0dGVAZ21haWwuY29tIiwiYWRkcmVzcyI6ImxlZ29zIiwiYmlvIjoic29tZXRoaW5nIiwib2NjdXBhdGlvbiI6Im1haW50ZW5hbmNlIiwiZXhwZXJ0aXNlIjoibWFpbnRhaW5uaW5nIHN5c3RlbXMiLCJ1c2VyVHlwZSI6Im1lbnRvciIsImlhdCI6MTU2NjY1MTMwOCwiZXhwIjoxNTY2NzM3NzA4fQ.hBxB3wFkNAqpGLv2h8HKG68bZ2HPXzBVw_rqujg_9d8';
    let wrongToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoicnVoaW1iYXphIiwibGFzdE5hbWUiOiJCZXJ0aW4iLCJlbWFpbCI6InJ1aGltYmF6YWJAZ21haWwuY29tIiwiYWRkcmVzcyI6ImtpZ2FsaSIsImJpbyI6InNjaWVudGlzdCIsIm9jY3VwYXRpb24iOiJzb2Z0d2FyZSBkZXZlbG9wbWVudCIsImV4cGVydGlzZSI6InNvc3R3YXJlIGFyY2hpdGVjdHVyZSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTU2NjU4NDI5NCwiZXhwIjoxNTY2NjcwNjk0fQ._d1DusgifybBhXNLt8U5f9edciu8_YPdwcCozfXIBhobertin';
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
        })
        done();
       });
    //admin should change user to mentor  
   it('admin should change user to mentor', (done)=>{
    chai.request(server)   
    .patch('/api/v1/auth/user/1')
    .set( 'Authorization', adminToken)
    .end((error, res)=>{
     res.body.status.should.be.equal(200);
     
 })
 done();
});
 //admin should not change a user to a mentor if he/she is not available
it('should not change user to a mentor if user is not available',(done)=>{
    chai.request(server)
    .patch('/api/v1/auth/user/50')
    .set('Authorization', adminToken)
    .end((error, res)=>{
        res.body.status.should.be.equal(404);
        res.body.error.should.be.equal('User not found or may be is a mentor');
    })
    done();
});
//You can not change a user to mentor, if you are not admin
it('You can not change a user to mentor, if you are not admin', (done)=>{
    chai.request(server)
    .patch('/api/v1/auth/user/1')
    .set('Authorization', mentorToken)
    .end((error, res)=>{
        res.body.status.should.be.equal(403);
        res.body.message.should.be.equal('Unauthorize');
    })
    done();
})
//admin or user can view all Mentors available
it('Should be able to find all mentors available',(done)=>{
    chai.request(server)
    .get('/api/v1/auth/mentors')
    .set('Authorization', userToken)
    .end((error, res)=>{
        res.body.status.should.be.equal(200);
        res.body.should.be.an('object');
    })
    done();
  });
   // You can not view all mentors if you not admin or user
    it('should not view all mentors if you not authorized', (done)=>{
         chai.request(server)
           .get('/api/v1/auth/mentors')
           .set('Authorization', mentorToken)
           .end((error, res)=>{
               res.body.status.should.be.equal(403);
               res.body.message.should.be.equal('Aunauthorized');
           })
           done();
     });
     //user can create request session to mentor
  it('should request session to mentor', (done)=>{
    const user = 
    {
        "mentorId": 2,
        "questions": "Is java high in demand?"
    }
    chai.request(server)
    .post('/api/v1/auth/sessions')
    .set('Authorization', userToken)
    .send(user)
    .end((error, res)=>{
        res.body.status.should.be.equal(200);
       // res.body.should.be.an('object');
    })
    done();
 })
      //user can not send a request if there is something went wrong in user's input
      it('should not send a request if there is something went wrong in user input', (done)=>{
        const user = 
        {
            "mentorId": 2,
            "questions": 12345,
        }
        chai.request(server)
        .post('/api/v1/auth/sessions')
        .set('Authorization', userToken)
        .send(user)
        .end((error, res)=>{
            res.body.status.should.be.equal(400);
        })
        done();
     })
 //User can not sent a request session to a mentor if there is no mantor found
  it('Should not sent a request session to a mentor if mentor does not exist', (done)=>{
   const user = 
   {
       "mentorId": -2,
       "questions": "Is java high in demand?"
   }
      chai.request(server)
      .post('/api/v1/auth/sessions')
      .set('Authorization', userToken)
      .end((error, res)=>{
          res.body.status.should.be.equal(404);
          res.body.error.should.be.equal('Mentor not found');
      })
      done();
  })
  //You can not sent a request session to a mentor if you are not a user
  it('Should not create a request session to a mentor if you are not a user', (done)=>{
   const user = 
   {
       "mentorId": 2,
       "questions": "Is java high in demand?"
   }
      chai.request(server)
      .post('/api/v1/auth/sessions')
      .set('Authorization', mentorToken)
      .end((error, res)=>{
          res.body.status.should.be.equal(403);
          res.body.message.should.be.equal('Unauthorized');
      })
      done();
  })
  //mentor can accept a request session from user
  it('should accept the request from user',(done)=>{
    chai.request(server)
    .patch('/api/v1/auth/sessions/2/accept')
    .set('Authorization', mentorToken)
    .end((error, res)=>{
        res.body.status.should.be.equal(200);
        res.body.data.sessionId.should.be.equal(2);
    })
    done();
})
//mentor can not accept a request which does not exist
it('should not accept a request which does not exist', (done)=>{
chai.request(server)
    .patch('/api/v1/auth/sessions/10/accept')
    .set('Authorization', mentorToken)
    .end((error, res)=>{
     res.body.status.should.be.equal(404);
     res.body.error.should.be.equal('Session request not found');
     })
      done();
      })
//you can not accept a request if you are not a mentor
  it('should not accept a request if you are not a mentor', (done)=>{
    chai.request(server)
    .patch('/api/v1/auth/sessions/2/accept')
    .set('Authorization', userToken)
    .end((error, res)=>{
        res.body.status.should.be.equal(403);
        res.body.message.should.be.equal('Unauthorized');
    })
    done();
}) 
  //mentor can decline a request from user
  it('should decline the request from user',(done)=>{
    chai.request(server)
    .patch('/api/v1/auth/sessions/1/reject')
    .set('Authorization', mentorToken)
    .end((error, res)=>{
        res.body.status.should.be.equal(200);
    })
    done();
})
//mentor can not decline a request which does not exist
 it('should not decline a request which does not exist', (done)=>{
  chai.request(server)
      .patch('/api/v1/auth/sessions/10/reject')
      .set('Authorization', mentorToken)
      .end((error, res)=>{
     res.body.status.should.be.equal(404);
     res.body.error.should.be.equal('Session request not found');
     })
      done();
     })
 //You can not decline a request if you are not a mentor
 it('should not decline a request from user if you are not a mentor', (done)=>{
     chai.request(server)
     .patch('/api/v1/auth/sessions/1/reject')
     .set('Authorization', userToken)
     .end((error, res)=>{
         res.body.status.should.be.equal(403);
         res.body.message.should.be.equal('Unauthorized');
     })
     done();
 })        
});
