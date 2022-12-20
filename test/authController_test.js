const { expect } = require('chai');
const request = require('supertest');

const {app} = require('../app');

before(() =>{
    
})

describe('register a new User via POST', () => {
    it('returns the new user record from the database', async () => {
        const newUserRegData = {
            first_name: 'Gilke',
            last_name: 'Fnurssen',
            email: 'test@fake.com',
            user_pass_a: 'abcde',
            user_pass_b: 'abcde'
            
        }
        const response = await request(app)
                                .post('/auth/register')
                                .set('Accept', 'application/json')
                                .send(newUserRegData);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.status).equal(200);
        expect(response.body.id).equal(1);
        expect(response.body.email).to.equal('test@fake.com');

    });
});

describe('view user profile', () => {
    it('returns status 200', async () => {
        const response = await request(app)
                                .get('/auth/profile');
        expect(response.status).equal(200);                                
    })
})
