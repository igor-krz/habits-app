process.env.NODE_ENV = 'test';

var chai = require('chai');
let should = chai.should();
var chaiHttp = require('chai-http');
var app = require('../app');
var knex = require('../habitdb/knex');



chai.use(chaiHttp);

describe('API Routes', function() {

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

    describe('GET /api/:username', function() {
        it('should return user', function(done) {
          chai.request(app)
          .get('/api/harrypotter')
          .end(function(err, res) {
            res.should.have.status(200);
            // res.should.be.json; // jshint ignore:line
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.name.should.equal('James');
            res.body.should.have.property('surname');
            res.body.surname.should.equal(' Potter');
            res.body.should.have.property('token');
            res.body.token.should.equal('Kj3s86QhVtahw26BHw+Sxw==');
            res.body.should.have.property('password_digest');
            res.body.password_digest.should.equal("$2b$10$m1i8PVUbYg/R84j2bofOO.G83VpQmfipN6JUi2WY7wZRWDPlHgE82");
            res.body.should.have.property('created_at');
            // res.body.created_at.should.equal('2020-05-18 22:46:44.720129+01');
            done();
          });
        });
      });


    describe('POST')  
    //   describe('POST /api/signup', function() {
    //     it('should add a user to database', function(done) {
    //       chai.request(app)
    //       .post('/api/signup')
    //       .send({
    //         name: "Rosie",
    //         surname: "Phelan",
    //         username: "rosiep",
    //       })
    //       .end(function(err, res) {
    //         res.should.have.status(201);
    //         res.should.be.json; // jshint ignore:line
    //         res.body.should.be.a('object');
    //         res.body.should.have.property('name');
    //         res.body.name.should.equal('Rosie');
    //         res.body.should.have.property('surname');
    //         res.body.surname.should.equal('Phelan');
    //         res.body.should.have.property('username');
    //         res.body.username.should.equal('rosiep');
    //         // res.body.should.have.property('token');
    //         // res.body.should.have.property('created_at');
    //         done();
    //       });
    //     })
    //   });


    // describe('POST /api/signin', function() {
      
    // });


    describe('PUT /:username', function(done) {
        it('should update user', function() {
            chai.request(app)
            .put('/api/harrypotter')
            .end(function (err, res) {
                res.should.have.status(200);
                
            }

            )

        })

    });

    describe('DELETE, /:username', function() {

    });

});