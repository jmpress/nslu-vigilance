const { expect } = require('chai');
const request = require('supertest');

const {app} = require('../app');

const agent = request.agent(app);

//user logs in
before(async () =>{
    const response = await agent.post('/auth/login').set('Accept', 'application/json').send({username: 'Rowena.Cummings67@hotmail.com', password: 'abcde'});
})

//user visits inbox to see all of their own tickets
describe('GET all tickets that I submitted', () => {
    it('returns an array of tickets submitted by currently logged in users account', async () => {
        const response = await agent
                                .get('/ulp/mine');
        expect(response.status).equal(200);
        expect(response.body).to.be.an('array');
        for(let i = 0 ; i < response.body.length; i++){
            expect(response.body[i].submitted_by).equal(874);
        };
    });
});

//user submits a new ticket to the system
describe('POST new Ulpdata to db', () => {
    it('Adds a new Ulpdata to the db and returns the db record', async () => {
        const ogUlpdata = {
            subsec1: true,
            subsec2: false,
            subsec3: false,
            subsec4: false,
            subsec5: false,
            subsec6: false,
            subsec7: false,
            date_of_incident: new Date(),
            staff_witnesses: 'Terry Crews',
            offending_manager: 'Steve Carls',
            incident_summary: 'Blagity-blah snoo-snoo pow'
        }
        const response = await agent
                                .post('/ulp/new')
                                .set('Accept', 'application/json')
                                .send(ogUlpdata);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.status).equal(200);
        expect(response.body.offending_manager).equal('Steve Carls');
    });
});

//this user should NOT be able to access this route
describe('GET all Ulpdata', () => {
    it('should fail and return status 403', async () => {
        const response = await agent
                                .get('/ulp/all');
        expect(response.status).equal(403);        
    });
});

//this user should NOT be able to access this route
describe('GET all tickets from my store', () => {
    it('should fail and return status 403.', async () => {
        const response = await agent
                                .get('/ulp/mystore');
        expect(response.status).equal(403);
    });
});

//Looks closer at one of their own tickets
describe('GET details of one Ulpdata ticket that I submitted', () => {
    it('returns status 200, with a JSON formatted Ulpdata object of id = 79', async () =>{
        const response = await agent.get('/ulp/79');
        expect(response.status).equal(200);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.body.id).equal(79);
        expect(response.body.staff_witnesses).equal('Faye Hane');
    });
});

describe('GET details of one Ulpdata ticket that I did NOT submit', () => {
    it('should fail and return status 403', async () =>{
        const response = await agent.get('/ulp/142');
        expect(response.status).equal(403);
    });
});

//This user should NOT be able to access this route
describe('DELETE one Ulpdata ticket', () => {
    it('should fail and return status 403', async () => {
        const response = await agent.delete('/ulp/79');
        expect(response.status).equal(403);
        

    });
})


describe('PUT method to update details of one Ulpdata ticket', () => {
    it('returns status 200', async () => {
        const responseOne = await agent.get('/ulp/79');
        const ogUlpdata3 = responseOne.body;
        expect(responseOne.status).equal(200);
        expect(responseOne.body.staff_witnesses).equal('Faye Hane');

        ogUlpdata3.staff_witnesses = 'Faye Katz';
        ogUlpdata3.offending_manager = '[REDACTED]';

        const responseTwo = await agent
                                    .put('/ulp/79')
                                    .set('Accept', 'application/json')
                                    .send(ogUlpdata3);
        expect(responseTwo.status).equal(200);
  
        
        const responseThree = await agent.get('/ulp/79');
        expect(responseThree.status).equal(200);
        expect(responseThree.body.staff_witnesses).equal('Faye Katz');
        expect(responseThree.body.offending_manager).equal('[REDACTED]');
        
    })
})