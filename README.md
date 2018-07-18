# Radix Simple React

Sample react.js application for the Omnia Radix platform.

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
git clone https://github.com/MuchasEstrellas/radix-reactjs-scenario3.git
cd radix-scenario3-reactjs
docker build -t radix-scenario3-reactjs .
docker run -p 80:80 radix-scenario3-reactjs
```

## Running the tests

TBD

### Break down into end to end tests

TBD

### And coding style tests

TBD

### Deployment

Please, follow the steps in the Omnia Radix wiki page.


## Built With

* [Nginx](https://nginx.org/en/) - Web server
* [React.js](https://reactjs.org/) - The front-end framework used
* [Docker](https://www.docker.com/) - Containerization
* [Materialize](https://materializecss.com/) - Front-end framework


## Authors

* **Jungwon Seo** - *Initial work* - [MuchasEstrellas](https://github.com/MuchasEstrellas)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
