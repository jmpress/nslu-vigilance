const { expect } = require('chai');
const request = require('supertest');

const {app} = require('../app');

const agent = request.agent(app);

describe('register a new User via POST', () => {
    it('returns the new user record from the database', async () => {
        const newUserRegData = {
            first_name: 'Gilke',
            last_name: 'Fnurssen',
            email: 'test@fake.com',
            store_number: 12,
            user_pass_a: 'abcde',
            user_pass_b: 'abcde'
            
        }
        const response = await agent
                                .post('/auth/register')
                                .set('Accept', 'application/json')
                                .send(newUserRegData);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.status).equal(200);
        expect(response.body.id).equal(3002);
        expect(response.body.email).to.equal('test@fake.com');

    });
});

describe('log user in', () => {
    it('creates a session and returns status 302', async () => {
        
        const userLoginData = {
            username: 'test@test.com',
            password: 'abcde'
        }

        const response = await agent
                                .post('/auth/login')
                                .set('Accept', 'application/json')
                                .send(userLoginData);
        expect(response.status).equal(302);
        expect(response.body.sessionID).not.equal(null);
    });
});

describe('view user profile', () => {
    it('returns status 200', async () => {
        const response = await agent
                                .get('/auth/profile');
        expect(response.status).equal(200);                                
    })
})

describe('log user out', () => {
    it('logs out the user', async () => {
        const response = await agent
                                .post('/auth/logout');
        expect(response.status).equal(200);
    });
});