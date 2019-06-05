#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require("chalk");
const boxen = require("boxen");

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 7,
  margin: 7,
  borderStyle: "double",
  float: "center",
  borderColor: "#ff4879",
  backgroundColor: "black"
};

// Inclusão do texto e mais as definições do ‘chalk’ e cores:
const data = {
  name: chalk.white("             Glaucia Lemos /"),
  openSource: chalk.white("Node.Js Foundation | React Community"),
  handle: chalk.white("glaucia_lemos86"),
  work: chalk.white("Regional Cloud Developer at Microsoft"),
  twitter: chalk.white("https://twitter.com/glaucia_lemos86"),
  github: chalk.white("https://github.com/glaucia86"),
  linkedin: chalk.white("https://www.linkedin.com/in/glaucialemos/"),
  youtube: chalk.white("https://www.youtube.com/user/l32759"),
  twitch: chalk.white("https://www.twitch.tv/glaucia_lemos86"),
  instagram: chalk.white("https://www.instagram.com/glaucia.lemos.dev/"),
  medium: chalk.white("https://medium.com/@glaucia86"),
  web: chalk.white("https://code4coders.wordpress.com/"),
  npx: chalk.white("npx glaucia_lemos86"),

  labelOpenSource: chalk.rgb(128, 255, 128).bold("Open Source:"),
  labelWork: chalk.rgb(255, 0, 0).bold("       Work:"),
  labelTwitter: chalk.rgb(51, 51, 255).bold("    Twitter:"),
  labelGitHub: chalk.rgb(253, 245, 5).bold("     GitHub:"),
  labelLinkedIn: chalk.rgb(0, 255, 255).bold("   LinkedIn:"),
  labelYoutube: chalk.rgb(255, 25, 25).bold("    Youtube:"),
  labelTwitch: chalk.rgb(153, 102, 204).bold("  Twitch.tv:"),
  labelInstagram: chalk.rgb(191, 255, 179).bold("  Instagram:"),
  labelMedium: chalk.rgb(102, 51, 0).bold("     Medium:"),
  labelWeb: chalk.rgb(255, 136, 77).bold("        Web:"),
  labelCard: chalk.rgb(240, 13, 240).bold("       Card:")
};

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const opensourcing = `${data.labelOpenSource}  ${data.openSource}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const youtubening = `${data.labelYoutube}  ${data.youtube}`;
const twitching = `${data.labelTwitch}  ${data.twitch}`;
const instagraming = `${data.labelInstagram}  ${data.instagram}`;
const mediuming = `${data.labelMedium}  ${data.medium}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar
// o ‘boxen de maneira efetiva:
const output = [
  heading,
  newline,
  opensourcing,
  working,
  twittering,
  githubing,
  linkedining,
  youtubening,
  twitching,
  instagraming,
  mediuming,
  webing,
  newline,
  carding
].join(newline);

console.log(chalk.green(boxen(output, options)));
