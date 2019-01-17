#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require('chalk')
const boxen = require('boxen')

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 5,
  margin: 5,
  borderStyle: 'double',
  float: 'center',
  borderColor: '#ff4879',
  backgroundColor: 'black'
}

// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white('         Glaucia Lemos /'),
  handle: chalk.white('glaucia_lemos86'),
  work: chalk.white('Software Developer at HackDev'),
  twitter: chalk.white('https://twitter.com/glaucia_lemos86'),
  github: chalk.white('https://github.com/glaucia86'),
  linkedin: chalk.white('https://www.linkedin.com/in/glaucialemos/'),
  web: chalk.white('https://code4coders.wordpress.com/'),
  npx: chalk.white('npx glaucia_lemos86'),
  labelWork: chalk.rgb(255, 0, 0).bold('      Work:'),
  labelTwitter: chalk.rgb(0, 255, 0).bold('   Twitter:'),
  labelGitHub: chalk.rgb(253, 245, 5).bold('    GitHub:'),
  labelLinkedIn: chalk.rgb(0, 255, 255).bold('  LinkedIn:'),
  labelWeb: chalk.rgb(191, 255, 0).bold('       Web:'),
  labelCard: chalk.rgb(240, 13, 240).bold('      Card:')
}

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar 
// o ‘boxen de maneira efetiva: 
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
