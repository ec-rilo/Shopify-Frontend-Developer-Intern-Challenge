<div align="center" width="100%">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled-components" />
  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />
  <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgresql" />
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="Socket.io" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" />
</div>

<h1 align="center">Fun with GPT-3</h1>

<div align="center" width="100%">
    <img src="https://i.imgur.com/8n2AyP4.png">
</div>

<h4 align="center">Have fun with the <a href="https://beta.openai.com/overview" target="_blank">OpenAI</a> API and see what others are posting.</h4>
<p align="center"> <a href="http://54.183.215.58:8080/">View Live >></a></p>

<br />


## Table of Content
- [Motivation and Story](#motivation-and-story)
- [Features](#features)
- [Getting Started](#getting-started)

<br />

## Motivation and Story
This is a project based on the Shopify Front End Developer Intern Challenge [document provided by Shopify](https://docs.google.com/document/d/1O7mCynsz_cBXkEaCFGSZAuvAOY84QVq35l20xJwjOYg/edit#). The document had a bare minumum of requirements needed but for this project that I chose to go above and beyond with by including a RESTful backend with live questions updates from all users with Socket.io. 

The project wasn't able to be submitted to Shopify in time since I found out about it right after graduation and the deadline was two days after.(graduated 05/20/2022 😊). But, that didn't stop me from trying!

So over a period of 6 days I was able to plan, mock, create and deploy this fully responsive application to AWS. Showing my skills across the full-stack.

Enjoy! :) 

**Extra Information**

- [Journal Entries](https://bow-mall-4ed.notion.site/Shopify-FEC-Journal-7b7e0e1b147647d6a8843284d7705554)
- [Figma Design](https://www.figma.com/file/ShVEeMRQNP7EvTQ3FH4Qdn/Fun-with-GPT-3?node-id=0%3A1)
- [Setup](https://bow-mall-4ed.notion.site/Shopify-Front-end-Challenge-606390a42e134ed790724992322f9aae)
- [Trello](https://trello.com/invite/b/CoLSj3Vh/af796150087882cc21203b29f369fe4e/fun-with-gpt-3)

<br />

## Features

- **Talk with OpenAI**
  - With a choice of 4 engines, users are able to communicate with AI and be able to get 4 unique responses. Feel free to ask the AI anything!

- **Live user question room**
  - Users that are logged into the application can make questions to the OpenIO API and when they make the question it will be broadcasted to everyone using the application live!
  - This was possible with Socket.io.

- **Custom User Experience**
  - With Firebase Authentication users are able to login to there custom account and be able to make unique posts to the application.

- **Demo App**
  - The same application but NOT linked to a users google account or to others users on the application. The posts you make here to OpenAI are just yours and only viewable on your device.
<br />

## Getting Started (locally)

### Step 1. Clone this repo

With SSH
```bash
$ git clone git@github.com:ec-rilo/fun-with-gpt-3.git
```

With HTTPS
```bash
$ git clone https://github.com/ec-rilo/fun-with-gpt-3.git
```

### Step 2. Create a PostgreSQL database

Log into postgres with a user of your choice that has permission to create databases (for me it's user `postgres`) and create the database `fun_with_gpt_3`

```bash
postgres=# CREATE DATABASE fun_with_gpt_3
````

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.
