const core = require('@actions/core')
const exec = require('@actions/exec')

let output = ''
let error = ''

const options = {}
options.listeners = {
  stdout: (data) => {
    output += data.toString()
  },
  stderr: (data) => {
    error += data.toString()
  }
}

const version = core.getInput('standard-version', { required: false })

async function npxStandard () {
  await exec.exec('npx', [`standard@${version}`], options)
}

npxStandard()
