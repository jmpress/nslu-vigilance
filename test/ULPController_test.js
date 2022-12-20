const { expect } = require('chai');
const request = require('supertest');

const {app} = require('../app');

describe('POST new Ulpdata', () => {
    it('returns an Ulpdata object', async () => {
        const ogUlpdata = {
            submitted_by: 2,
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
        const response = await request(app)
                                .post('/ulp/new')
                                .set('Accept', 'application/json')
                                .send(ogUlpdata);
        expect(response.headers["content-type"]).match(/json/);
        expect(response.status).equal(200);
        expect(response.body.offending_manager).equal('Kniipe Jeksl');
    })
})
