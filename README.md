# Radix Simple React

Sample react.js application for the Omnia Radix platform.

## Getting Started

App with one container. Reading from external open API. No storage. No secrets. Dynamic web page - including information from external API.

## Running the tests

Before you upload it to the platform, you can check the application from your local machine with docker.

```
cd radix-simpl-react
docker build -t radix-simple-react .
docker run -p 80:80 radix-simple-react
```

### Deployment

Please, follow the steps in the Omnia Radix wiki page.



### Break down into end to end tests

There are mainly three cases when your deployment fails in the platform but, succeed in your local environment.
  * When 'radixconfig.yaml' is incorrect.
  * When the setting in the web-console is incorrect.
  * The platform is too busy to handle.



## Built With

* [React.js](https://reactjs.org/) - The front-end framework used
* [Docker](https://www.docker.com/) -  Containerization



## Authors

* **Jungwon Seo** - *Initial work* - [MuchasEstrellas](https://github.com/MuchasEstrellas)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
