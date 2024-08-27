exports.default = function () {
    const { execSync } = require('child_process')
    console.log('VMP signing start')
    execSync('python3 -m castlabs_evs.vmp sign-pkg ./dist/win-unpacked')
    console.log('VMP signing complete')
}