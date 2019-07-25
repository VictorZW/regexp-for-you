import * as REG from './reg'

export function testAmount(str) {
    return REG.AmountReg.test(str)
}

export function testPIntReg(str) {
    return REG.PIntReg.test(str)
}

export function testPNIntReg(str) {
    return REG.PNIntReg.test(str)
}
