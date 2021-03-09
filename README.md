# Simple React

Sample React.js application for the Docker environment.

## Getting Started
![Screen Shopt](images/screenshot.png?raw=true "Screen Shot")
App with one container. Reading from external open API. No storage. No secrets. Dynamic web page - including information from external API.

### Prerequisites

Make sure you have already installed Docker Engine.
You don’t need to install Nginx or NPM, as both are provided by Docker images.

```
$ docker -v
Docker version 18.03.1-ce, build 9ee9f40
```


### Installing

```
git clone https://github.com/thejungwon/docker-reactjs.git
cd docker-reactjs
docker build -t docker-reactjs .
docker run -p 80:80 docker-reactjs

```
Go to [http://localhost](http://localhost)

## Running the tests

TBD

### Break down into end to end tests

TBD

### And coding style tests

TBD


## Built With

* [Nginx](https://nginx.org/en/) - Web server
* [React.js](https://reactjs.org/) - The front-end framework used
* [Docker](https://www.docker.com/) - Containerization
* [Materialize](https://materializecss.com/) - Front-end framework


## Authors

* **Jungwon Seo** - *Initial work* - [thejungwon](https://github.com/thejungwon)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details





