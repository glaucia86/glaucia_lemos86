# Cartão Pessoal em NPX - Glaucia Lemos :floppy_disk:

<p align="center">
  <img src="https://i.imgsafe.org/00/002ed90f57.png"/>  
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

- Visual Studio Code
- Javascript
- Node.Js
- Npm
- Uso dos pacotes:
    - boxen
    - chalk
    - standard
    - commander

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
  work: chalk.white('Software Developer at HackDev'),
  twitter: chalk.cyan('https://twitter.com/glaucia_lemos86'),
  github: chalk.cyan('https://github.com/glaucia86'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/glaucialemos/'),
  web: chalk.cyan('https://code4coders.wordpress.com/'),
  npx: chalk.white('npx glaucia_lemos86'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
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
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar 
// o ‘boxen de maneira efetiva: 
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

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

![alt_image](https://i.imgsafe.org/00/002ed90f57.png)

## Agradecimentos! :smiley:

Conforme mencionado acima, esse projeto foi baseado pelo repositório do **[Tierney Cyren](@bitandbang)**. 
So, I would like to say thank you @bitandbang for your contribution in this awesome project! **[NPX Card Profile](https://github.com/bnb/bitandbang)** :star::star::star:

## Querem Propor Melhorias no Código? Façam Pull Request!!! 

Caso queiram que eu implemente algo no código, abram uma **[ISSUE](https://github.com/glaucia86/glaucia86/issues)** nesse repositório. Assim, todos poderão colaborar para o melhor desenvolvimento desse projeto. E sintam-se à vontade em fazer Pull Requests!! ❤️ ❤️ ❤️

