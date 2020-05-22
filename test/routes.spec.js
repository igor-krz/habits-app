process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var knex = require('../habitdb/knex')
var app = require('../app');

var should = chai.should();

chai.use(chaiHttp);

describe('API routes', function() {

    beforeEach(function(done) {
        knex.migrate.rollback()
        .then(function() {
          knex.migrate.latest()
          .then(function() {
            return knex.seed.run()
            .then(function() {
              done();
            });
          });
        });
      });
    
      afterEach(function(done) {
        knex.migrate.rollback()
        .then(function() {
          done();
        });
      });


    


    // habit table api tests ...
       
    describe('GET /habitapi/2', function() {
        it('should return a habit', function(done){
            chai.request(app)
            .get('/habitapi/2')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('habit_id');
                res.body[0].habit_id.should.equal(1);
                res.body[0].should.have.property('habitName');
                res.body[0].habitName.should.equal(' Sleep');
                res.body[0].should.have.property('frequency');
                res.body[0].frequency.should.equal("1");
                res.body[0].should.have.property('description');
                res.body[0].description.should.equal("sleep well");
                res.body[0].should.have.property('complete');
                res.body[0].complete.should.be.a('array');
                res.body[0].should.have.property('current_streak');
                res.body[0].current_streak.should.equal('19-05-2020-7');
                res.body[0].should.have.property('highest_streak');
                res.body[0].highest_streak.should.equal('19-05-2020-7');
                res.body[0].should.have.property('userId');
                res.body[0].userId.should.equal(2);
                res.body[0].should.have.property('created_at');
                // res.body[0].created_at.should.equal('2020-05-21T17:28:04.484Z');
                done();
            });
        });
    });

    describe('GET /habitapi/completed/:userid', function() {
        it('should return a completed habit', function(done){
            chai.request(app)
            .get('/habitapi/completed/1')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('complete');
                // res.body[0].complete.should.be.a('object');
                // res.body.complete[0].should.equal('14-04-2020')
                done();
            })
        })
    })

    describe('POST /habitapi/newhabit', function() {
        it('should post a new habit', function(done) {
            chai.request(app)
            .post('/habitapi/newhabit')
            .send({
                habitName: "Swimming",
	            frequency: "daily",
	            description: "swim in sea",
                complete: ['14-04-2020','06-05-2020','19-05-2020'],
	            current_streak: "19-05-2020-7",
	            highest_streak: "19-05-2020-7",
	            userId: 2
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json; 
                res.body.should.be.a('object');
                res.body.message.should.equal('habit submitted');
                done();
            });
        });
    });

    describe('PUT /habitapi/addtime/:habitId', function() {
        it('should update a habit with complete timestamp', function(done) {
          chai.request(app)
          .put('/habitapi/addtime/1')
          .send({
              complete: "[14-04-2020,06-05-2020,20-05-2020]"
          })
          .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json; // jshint ignore:line
            res.body.should.be.a('object');
            res.body.should.have.property('message');
            res.body.message.should.equal('Completed updated');
            done();
            })   
        });
        it('should not update if completed field not included in request', function(done) {
            chai.request(app)
            .put('/habitapi/addtime/:habitId')
            .send({
                frequency: "daily"
            })
            .end(function(err, res) {
                res.should.have.status(422);
                res.body.should.be.a('object');
                res.body.should.property('error');
                res.body.error.should.equal('You can only update complete column');
                done();
            })
        })
    });

    describe('PUT /habitapi/addStrike/:habitId', function() {
        it('should update current streak and highest', function(done) {
          chai.request(app)
          .put('/habitapi/addStrike/1')
          .send({
              current_streak: "19-05-2020-7",
              highest_streak: "19-05-2020-7"
          })
          .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json; // jshint ignore:line
            res.body.should.be.a('object');
            res.body.should.have.property('message');
            res.body.message.should.equal('streaks updated!');
            done();
            })   
        });
        it('should not update if current_streak or highest_streak field not included in request', function(done) {
            chai.request(app)
            .put('/habitapi/addstrike/1')
            .send({
                frequency: "daily"
            })
            .end(function(err, res) {
                res.should.have.status(422);
                res.body.should.be.a('object');
                res.body.should.property('error');
                res.body.error.should.equal('You can only update current streak and highest strike column');
                done();
            })
        })
    });

    describe('DELETE /habitapi/deleteapi', function(){
        it('should delete habit', function(done) {
            chai.request(app)
            .delete('/habitapi/deletehabit')
            .send({
                habit_id: 1
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.message.should.equal('Delete successful!');
                done();
            })
        })
    })


    //user routes tests...

    describe('POST /api/signup', function() {
        it('should add a new user to database', function(done){
            chai.request(app)
            .post('/api/signup')
            .send({
                name: 'rosie',
                surname: 'fatima',
                username: 'rf',
                password_digest: 'rosie'
            })
            .end(function(err, res){
                res.should.have.status(201);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.message.should.equal('Signup Complete!');
                done();
            })

        })
        it('should not accept existing username', function(done){
            chai.request(app)
            .post('/api/signup')
            .send({
                name: 'rosie',
                surname: 'fatima',
                username: 'Sport',
                password_digest: 'rosie'
            })
            .end(function(err, res){
                res.should.have.status(409);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.equal('username already present');
                done();
            })

        })
    })

    describe('POST /api/signin', function() {
        it('should not accept wrong password', function(done){
            chai.request(app)
            .post('/api/signin')
            .send({
                username: 'Sport',
                password_digest: 'sportyspice'
            })
            .end(function(err, res){
                res.should.have.status(404);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.message.should.equal('either username and password did not mach');
                done();
            })

        })
    })

    describe('PUT /api/username', function() {
        it('should not be able to update id field', function(done){
            chai.request(app)
            .put('/api/Sport')
            .send({
                userId: 3
            })
            .end(function(err, res){
                res.should.have.status(422);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.equal('You cannot update username or id field');
                done();
            })

        })
    })

    describe('DELETE /api/:username', function(){
        it('should delete user', function(done) {
            chai.request(app)
            .delete('/api/Sport')
            .send({
                habit_id: 1
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.message.should.equal('user deleted');
                done();
            })
        })
    })



});