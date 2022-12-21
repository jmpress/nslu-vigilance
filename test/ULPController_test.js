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
            submitted_by: 1,
            subsec1: true,
            subsec2: false,
            subsec3: false,
            subsec4: false,
            subsec5: false,
            subsec6: false,
            subsec7: false,
            date_of_incident: '10-11-2020',
            store_number: 1,
            staff_witnesses: 'Gilke Fnurssen',
            offending_manager: 'Kniipe Jeksl',
            incident_summary: 'I haad fuud in the fridge and Knippe 8te it all. Gilke herd him brag abot it.'
        }
        const response = await agent
                                .post('/ulp/new')
                                .set('Accept', 'application/json')
                                .auth('fake@test.com', 'abcde')
                                .send(ogUlpdata);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.status).equal(200);
        expect(response.body.offending_manager).equal('Kniipe Jeksl');
    });
    it('Does it a second time, so we have two records to test', async () => {
        const ogUlpdata2 = {
            submitted_by: 1,
            subsec1: true,
            subsec2: false,
            subsec3: false,
            subsec4: true,
            subsec5: false,
            subsec6: false,
            subsec7: false,
            date_of_incident: '10-14-2020',
            store_number: 1,
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
        expect(response.body.length).equal(2);
        expect(response.body[1].offending_manager).equal('Kniipe Jeksl');
    });
});

describe('GET all tickets that I submitted', () => {
    it('returns an array of tickets submitted by currently logged in users account', async () => {
        const response = await agent
                                .get('/ulp/mine');
        expect(response.status).equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body[0].offending_manager).equal('Kniipe Jeksl');
        expect(response.body[0].submitted_by).equal(/*user ID*/)
    });
});

describe('GET all tickets from my store', () => {
    it('returns an array of tickets relevant to the store I am a steward of', async () => {
        const response = await agent
                                .get('/ulp/mystore');
        expect(response.status).equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body[0].offending_manager).equal('Kniipe Jeksl');
        //expect(response.body[0].store_number).equal(/*user store number*/);
    });
});