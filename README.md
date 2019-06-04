![Build](https://img.shields.io/travis/glaucia86/glaucia86/master.svg)
![GHTopLanguages](https://img.shields.io/github/languages/top/glaucia86/glaucia86.svg?colorB=gree)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/glaucia86/glaucia86.svg)
![RepoSize](https://img.shields.io/github/repo-size/glaucia86/glaucia86.svg?colorB=gree)
![Downloads](https://img.shields.io/npm/dt/glaucia_lemos86.svg?style=popout-square)
![Issues](https://img.shields.io/github/issues/glaucia86/glaucia86.svg)
![PullRequests](https://img.shields.io/github/issues-pr/glaucia86/glaucia86.svg)
[![HitCount](http://hits.dwyl.io/glaucia86/glaucia86.svg)](http://hits.dwyl.io/glaucia86/glaucia86)

# Cartão Pessoal em NPX - Glaucia Lemos :floppy_disk:

<p align="center">
  <img src="https://i.postimg.cc/SKF1gYHV/Screen-Shot-06-04-19-at-01-19-PM.png"/>  
</p>

Desenvolvimento de um package que simula um cartão pessoal. O exemplo desenvolvido aqui foi baseado 
no repositório do ilustre **[Tierney Cyren](https://twitter.com/bitandbang)**

No caso aqui, estou usando os meus dados para criar o meu Cartão Pessoal. O pacote, que nesse caso é o meu cartão pessoal, encontra-se disponível no site do **npmjs** pelo link: 

- Cartão Pessoal Glaucia Lemos: **[glaucia_lemos86](https://www.npmjs.com/package/glaucia_lemos86)**

Para instalar o package do meu cartão pessoal, bastam executar o seguinte comando abaixo:

```
> npm install glaucia_lemos86

```

## Recursos Utilizados: :fire:

- **[Visual Studio Code](http://bit.ly/2KoflJH)**
- Javascript
- **[Node.Js](https://nodejs.org/en/)**
- **[Npm](https://www.npmjs.com/)**
- Uso dos pacotes:
    - **[boxen](https://www.npmjs.com/package/boxen)**
    - **[chalk](https://www.npmjs.com/package/chalk)**
    - **[standard](https://www.npmjs.com/package/standard)**
    - **[commander](https://www.npmjs.com/package/commander)**

## Okay... Curti! Quero fazer o meu.. Como faço?! :rocket:

Bastam seguir os passos abaixo:

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

```
> npm install commander --save
```

3. Feito isso, agora copie o código abaixo e coloque no arquivo **card.js**: (inclua os seus dados!!)

```
#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require('chalk')
const boxen = require('boxen')

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white('Glaucia Lemos /'),
  handle: chalk.cyan('glaucia_lemos86'),
  work: chalk.white('Regional Cloud Developer at Microsoft'),
  twitter: chalk.cyan('https://twitter.com/glaucia_lemos86'),
  github: chalk.cyan('https://github.com/glaucia86'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/glaucialemos/'),
  medium: chalk.cyan('https://medium.com/@glaucia86'),
  web: chalk.cyan('https://code4coders.wordpress.com/'),
  npx: chalk.white('npx glaucia_lemos86'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelMedium: chalk.white.bold('    Medium:')
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const mediuming = `${data.labelMedium}  ${data.medium}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar 
// o ‘boxen de maneira efetiva: 
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + mediuming + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
```

4. Execute o comando abaixo para que possamos verificar a versão que possuem do **npm**:

```
> npm version major
```

5. Após verificar qual a versão do **npm** que possuem, execute o comando abaixo:

```
> npm adduser
```

6. Enfim, vamos publicar o nosso pacote para o site do npmjs. Para isso, basta executar o seguinte comando abaixo:

```
> npm publish
```

7. E finalmente... execute o comando abaixo para visualizar o seu cartão pessoal criado:

```
> npx glaucia_lemos86 
```

E vòilá! Aparecerá o seu Cartão Pessoal!! :heart_eyes:

[![Screen-Shot-06-04-19-at-01-19-PM.png](https://i.postimg.cc/SKF1gYHV/Screen-Shot-06-04-19-at-01-19-PM.png)](https://postimg.cc/Mn5YTH6j)

A versão da foto foi aprimorada. Aqui no **README.md** só estou explicando como
desenvolver de uma maneira mais simples. Fiquem à vontade para alterarem o cartão pessoal de vocês!!! 😉

## Agradecimentos! :smiley:

Conforme mencionado acima, esse projeto foi baseado pelo repositório do **[Tierney Cyren](@bitandbang)**. 
So, I would like to say thank you @bitandbang for your contribution in this awesome project! **[NPX Card Profile](https://github.com/bnb/bitandbang)** :star::star::star:

## Links & Recursos Adicionais 🌟

- **[Tutorial de Node.js no Visual Studio Code](http://bit.ly/2QJx92U)**
- **[Depurando app Node.js no Visual Studio Code](http://bit.ly/2QJoZYf)**
- **[Deploy de site Estático no Azure](http://bit.ly/2QJRkOe)**
- **[Azure para desenvolvedores de JavaScript e Node.js](http://bit.ly/2KseHuD)**
- **[E-Book Grátis: Criando Aplicativos Nativos de Nuvem com Node.js & Azure](http://bit.ly/2JVlf5y)**
- **[E-Book Grátis: Learning Node.js Development](http://bit.ly/2QST8Vr)**

## Querem Propor Melhorias no Código? Façam Pull Request!!! 

Caso queiram que eu implemente algo no código, abram uma **[ISSUE](https://github.com/glaucia86/glaucia86/issues)** nesse repositório. Assim, todos poderão colaborar para o melhor desenvolvimento desse projeto. E sintam-se à vontade em fazer Pull Requests!! ❤️ ❤️ ❤️

