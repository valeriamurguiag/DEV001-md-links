# Markdown Links

## Content

* [1. Markdown](#1-markdown)
* [2. Developing Process](#2-developing-process)
* [3. Usage Instructions](#3-usage-instructions)
* [4. Dependencies](#4-dependencies)

***

## 1. Markdown

[Markdown](https://es.wikipedia.org/wiki/Markdown) is a markup language very popular among developers. It is used in many platforms that
they handle plain text (GitHub, forums, blogs, ...) and it is very common to find multiple files in that format in any kind of repository
(starting with the traditional `README.md`). These `Markdown` files normally contain links that are often broken or are no longer valid and that greatly impacts the value of the information that is to be shared.

Within an open source community, I have been proposed to create a tool using [Node.js](https://nodejs.org/), that reads and analyzes files in `Markdown` format, to verify the links they contain and report some statistics.


## 2. Developing Process

In this project I created a command line tool (CLI) as well as my own library in JavaScript, which is executed using Node.

[Node.js](https://nodejs.org/en/) is a runtime environment for JavaScript built with the [Chrome V8 JavaScript Engine](https://developers.google.com/v8/). This will allow us to execute JavaScript in the environment of the operating system, be it your machine or a server, which opens the doors for us to be able to interact with the system itself, files, networks...

Flowchart: 

[![flowchart-md-links.png](https://i.postimg.cc/L5z4mrKK/flowchart-md-links.png)](https://postimg.cc/dZVcBNV4)

## 3. Usage Instructions

### 1) Installing package

```sh
npm install githubname/reponame
```

### 2) Using package in CLI (Command Line Interface)

Our application executable should be able to run as follows through the **terminal**:

`md-links <path-to-file> [options]`

The default behavior should not validate if the URLs respond ok or not, it should only identify the markdown file (from the path it receives as an argument), analyze the Markdown file and print the links it finds, along with the path of the markdown file where it appears and the text inside the link.

#### Options

##### `--validate`

If we pass the `--validate` option, the module should make an HTTP request to find out if the link works or not. If the link results in a redirect to a URL that responds ok, then we will consider the link as ok.

For example:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link to something
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 Some document
./some/example.md http://google.com/ ok 301 Google
```

We see that the _output_ in this case includes the word `ok` or `fail` after the URL, as well as the status of the response received to the HTTP request to that URL.

##### `--stats`

If we pass the `--stats` option the output will be a text with basic statistics about the links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

We can also combine `--stats` and `--validate` to get statistics that need the validation results.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

### 2) Using package in API (Application Programming Interface)

For using this package as an API, you have to use require (CommonJS) for the mdLinks(path, options) module after installing it.

Note that this API is a pending promise, so you have to use .then and .catch after the module to resolve it.


## 4. Dependencies

- Node.js: used to develop library.
- NPM: used for managing dependencies
- Chalk: used for styles and colors.
- Fetch: used for HTTP requests.
- Jest: used for unit tests.
