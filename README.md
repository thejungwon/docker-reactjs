# Radix Simple React

Sample react.js application for the Omnia Radix platform.

## Getting Started

App with one container. Reading from external open API. No storage. No secrets. Dynamic web page - including information from external API.

![Screen Shopt](images/screenshot.png?raw=true "Screen Shot")
### Deployment

Please, follow the steps in the Omnia Radix wiki page.


## Running the tests

Before you upload the app to the platform, you can test the app from your local environment.

```
git clone https://github.com/MuchasEstrellas/radix-simple-react.git
cd radix-simple-react
docker build -t radix-simple-react .
docker run -p 80:80 radix-simple-react
```
## Troubleshooting

There are mainly three cases when your deployment fails in the platform but, succeed in your local environment.
  * When 'radixconfig.yaml' is incorrect.
  * When the setting in the web-console is incorrect.
  * The platform is too busy to handle.

## Built With

* [Nginx](https://nginx.org/en/) - Web server
* [React.js](https://reactjs.org/) - The front-end framework used
* [Docker](https://www.docker.com/) -  Containerization



## Authors

* **Jungwon Seo** - *Initial work* - [MuchasEstrellas](https://github.com/MuchasEstrellas)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
