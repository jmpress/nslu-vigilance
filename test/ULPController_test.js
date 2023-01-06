const { expect } = require('chai');
const request = require('supertest');

const {app} = require('../app');

const agent = request.agent(app);

before(async () =>{
    const response = await agent.post('/auth/login').set('Accept', 'application/json').send({username: 'test@test.com', password: 'abcde'});
})

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
            date_of_incident: '10-11-2020',
            staff_witnesses: 'Gilke Fnurssen',
            offending_manager: 'Kniipe Jeksl',
            incident_summary: 'I haad fuud in the fridge and Knippe 8te it all. Gilke herd him brag abot it.'
        }
        const response = await agent
                                .post('/ulp/new')
                                .set('Accept', 'application/json')
                                .send(ogUlpdata);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.status).equal(200);
        expect(response.body.offending_manager).equal('Kniipe Jeksl');
    });
    it('Does it a second time, so we have two records to test', async () => {
        const ogUlpdata2 = {
            subsec1: true,
            subsec2: false,
            subsec3: false,
            subsec4: true,
            subsec5: false,
            subsec6: false,
            subsec7: false,
            date_of_incident: '10-14-2020',
            staff_witnesses: 'Snephe Vurkl',
            offending_manager: 'Kniipe Jeksl',
            incident_summary: 'Kniipe tuuched my foot and I dont like it.'
        }
        const response = await agent
                                .post('/ulp/new')
                                .set('Accept', 'application/json')
                                .send(ogUlpdata2);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.status).equal(200);
        expect(response.body.offending_manager).equal('Kniipe Jeksl');
    });
});

describe('GET all Ulpdata', () => {
    it('returns an array of all Ulpdata in the db', async () => {
        const response = await agent
                                .get('/ulp/all');
        expect(response.status).equal(200);
        expect(response.body).to.be.an('array');     
        expect(response.body.length).equal(152);
    });
});

describe('GET all tickets that I submitted', () => {
    it('returns an array of tickets submitted by currently logged in users account', async () => {
        const response = await agent
                                .get('/ulp/mine');
        expect(response.status).equal(200);
        expect(response.body).to.be.an('array');
        for(let i = 0 ; i < response.body.length; i++){
            expect(response.body[i].submitted_by).equal(1);
        };
    });
});

describe('GET all tickets from my store', () => {
    it('returns an array of tickets relevant to the store I am a steward of', async () => {
        const response = await agent
                                .get('/ulp/mystore');
        expect(response.status).equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).equal(9);
        for(let i = 0 ; i < response.body.length; i++){
            expect(response.body[i].store_number).equal(1);
        };
    });
});

describe('GET details of one Ulpdata ticket', () => {
    it('returns status 200, with a JSON formatted Ulpdata object of id = 2', async () =>{
        const response = await agent.get('/ulp/2');
        expect(response.status).equal(200);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.body.id).equal(2);
        expect(response.body.staff_witnesses).equal('Elena Romaguera');
    });
});

describe('GET details of one Ulpdata ticket that I did NOT submit', () => {
    it('returns status 200, with a JSON formatted Ulpdata object of id = 142', async () =>{
        const response = await agent.get('/ulp/142');
        expect(response.status).equal(200);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.body.id).equal(142);
        expect(response.body.staff_witnesses).equal('Perry Huel');
    });
});

describe('DELETE one Ulpdata ticket', () => {
    it('returns status 200 and the deleted record', async () => {
        const response = await agent.delete('/ulp/2');
        expect(response.status).equal(200);
        expect(response.body.id).equal(2);

    });
    it('should have deleted the record from the database', async ()=> {
        const response = await agent.get('/ulp/2');
        expect(response.status).equal(404);
    });
})

describe('PUT method to update details of one Ulpdata ticket', () => {
    it('returns status 200', async () => {
        const responseOne = await agent.get('/ulp/3');
        const ogUlpdata3 = responseOne.body;
        expect(responseOne.status).equal(200);
        expect(responseOne.body.staff_witnesses).equal('Charlene Mraz');

        ogUlpdata3.staff_witnesses = 'Charlene Katz';
        ogUlpdata3.offending_manager = '[REDACTED]';

        const responseTwo = await agent
                                    .put('/ulp/3')
                                    .set('Accept', 'application/json')
                                    .send(ogUlpdata3);
        expect(responseTwo.status).equal(200);
  
        
        const responseThree = await agent.get('/ulp/3');
        expect(responseThree.status).equal(200);
        expect(responseThree.body.staff_witnesses).equal('Charlene Katz');
        expect(responseThree.body.offending_manager).equal('[REDACTED]');
        
    })
})