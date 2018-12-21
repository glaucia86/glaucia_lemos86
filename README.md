# Cartão Pessoal via NPX - Glaucia Lemos :clipboard:

Desenvolvimento de uma pequena aplicação que simula um cartão pessoal. Exemplo de código baseado pelo ilustre **[Tierney Cyren](@bitandbang)**

No caso aqui, estou usando os meus dados para criar o meu Cartão Pessoal, conforme segue a imagem abaixo:


## Recursos Utilizados: :fire:

- Visual Studio Code
- Javascript
- Node.Js
- Npm
- Uso de pacotes
    - boxen
    - chalk
    - standard

## Okay... Curti! Quero fazer o meu.. Como faço?! :rocket:

Basta seguir os passos abaixo:

1. Crie uma pasta do projeto de acordo com o seu nome do GitHub e siga os passos abaixo:

```
> mkdir glaucia86

> cd glaucia86

> npm init 

> mkdir bin

> touch card.js
```

2. Após criar a estrutura do projeto, execute os seguintes comandos para incluir os seguintes pacotes no arquivo **package.json**:

```
> npm install standard --save-dev
```

```
> npm install chalk --save
```

```
> npm install boxen --save
```

3. Feito isso, agora copie o código abaixo e coloque no arquivo **card.js**: (inclua os seus dados!!)

```
#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Glaucia Lemos /'),
  handle: chalk.cyan('glaucia86'),
  work: chalk.white('Software Developer at HackDev'),
  twitter: chalk.cyan('https://twitter.com/glaucia_lemos86'),
  github: chalk.cyan('https://github.com/glaucia86'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/glaucialemos/'),
  web: chalk.cyan('https://code4coders.wordpress.com/'),
  npx: chalk.white('npx glaucia86'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
```

4. Execute o comando abaixo para que possamos verificar a versão que possue do **npm**:

```
> npm version major
```

5. Após verificar qual a versão do **npm** que possue, execute o comando abaixo:

```
> npm adduser
```

6. Enfim, vamos publicar o nosso pacote para o site do npmjs. Para isso, basta executar o seguinte comando abaixo:

```
> npm publish
```

7. E finalmente... execute o comando abaixo para visualizar o seu cartão pessoal criado:

```
> npx glaucia86 
```

E vòilá! Aparecerá o seu Cartão Pessoal!! :heart_eyes:
