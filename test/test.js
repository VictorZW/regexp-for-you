const chai = require('chai')
const should = chai.should()
const regTest = require('../lib/index')

describe("测试正负两位小数正则",() => {
    it('test -2.33 should equal true',() => {
        regTest.testAmount('-2.33').should.equal(true)
    })
})

describe("测试正负两位小数正则",() => {
    it('test -2.333 should equal false',() => {
        regTest.testAmount('-2.333').should.equal(false)
    })
})

describe("测试正整数",() => {
    it('test -2 should equal false',() => {
        regTest.testPIntReg('-2').should.equal(false)
    })
})

describe("测试正整数",() => {
    it('test 2 should equal true',() => {
        regTest.testPIntReg('2').should.equal(true)
    })
})

describe("测试正负整数",() => {
    it('test -2 should equal true',() => {
        regTest.testPNIntReg('-2').should.equal(true)
    })
})

describe("测试正负整数",() => {
    it('test 2 should equal true',() => {
        regTest.testPNIntReg('2').should.equal(true)
    })
})

describe("测试正负整数",() => {
    it('test 2.22 should equal false',() => {
        regTest.testPNIntReg('2.22').should.equal(false)
    })
})
