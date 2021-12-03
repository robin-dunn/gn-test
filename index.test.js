const app = require('./server')
const supertest = require('supertest')
const request = supertest(app)

it(`It returns 'G' from GET /:input endpoint when input is divisible by 3`, async (done) => {
    const res = await request.get(`/${3}`)
    expect(res.body.result).toBe('G')
    done()
})

it(`It returns 'N' from GET /:input endpoint when input is divisible by 5`, async (done) => {
    const res = await request.get(`/${5}`)
    expect(res.body.result).toBe('N')
    done()
})

it(`It returns 'GN' from GET /:input endpoint when input is divisible by both 3 and 5`, async (done) => {
    const res = await request.get(`/${15}`)
    expect(res.body.result).toBe('GN')
    done()
})

it(`It returns the input from GET /:input endpoint when input is not divisble by 3 or 5`, async (done) => {
    const res = await request.get(`/${1}`)
    expect(res.body.result).toBe('1')
    done()
})