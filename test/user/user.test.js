// const supertest = require('supertest')
// const assert = require('assert')

// const host = "http://localhost:3000"
// const request = supertest(host)
const request = require("supertest")
const app = require("../../src/app")
const db = require('../../src/database')

describe('User Component', () => {

    // beforeAll(() => {
    //     db.connect();
    // })

    //Ensure closing db connection when tests are concluded
    afterAll(() => {
        db.disconnect();
    })

    it('should create a user', async () => {
        const userData = {          
            name: 'TestUser', 
            email: 'testuser@gmail.com',
            password: '123456'            
        }

        const response = await request(app)
            .post('/auth/register')
            .send(userData)
            .set('Accept', 'application/json')
            
            expect(response.headers['Content-Type']).toMatch(/json/);
            expect(response.statusCode).toBe(200)
            expect(response.body.user).toHaveProperty('id')
    })
})