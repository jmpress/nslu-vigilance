const { expect } = require('chai');
const request = require('supertest');

const {app} = require('../app');

const agent = request.agent(app);

before(async () =>{
    const response = await agent.post('/auth/login').set('Accept', 'application/json').send({username: 'test@test.com', password: 'abcde'});
})

describe('GET list of all users in db', () => {
    it('returns status 200 and an array of all 3022 users', async () => {
        const response = await agent.get('/admin/users/all')
        expect(response.status).equal(200);
        expect(response.body).to.be.an('array');     
        expect(response.body.length).equal(3022);
    });
});

describe('GET list of all stewards in db', () => {
    it('returns status 200 and an array of all 20 stewards', async () => {
        const response = await agent.get('/admin/users/stewards')
        expect(response.status).equal(200);
        expect(response.body).to.be.an('array');     
        expect(response.body.length).equal(20);
        for(let i = 0 ; i < response.body.length; i++){
            expect(response.body[i].role).equal('steward');
        };
    });
});