# Alonso

**Alonso**, a open source web registration framework built on top of the 
[Senna](https://github.com/activenetwork/senna) registration platform.

This project is built on top of the [AngularJS](http://angularjs.org/) framework.  More 
information about the [AngularJS](http://angularjs.org/) framework can be found at their
site.

_Note from the AngularJS folks: While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend hosting the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`._


## How to contribute

Follow the steps below to get your environment setup, then fork the repo, make your changes 
in a feature branch, and open a pull request back to this repository. If you're not sure what 
to do, feel free to ask anyone else on the project and coordinate efforts.

### Running the app during development

1. Install NodeJS

		Download and install NodeJS from their [download site](http://nodejs.org/download/)
		
2. Fork or clone this repository

3. Start the web server.  From the root folder:

		./scripts/web-server.js

4. Browse to the (http://localhost:8000/app/index.html).  In order to avoid the same origin
browser policy, you will need to disable web security in your browser.  You can do this in 
the Chrome browser in OSx by closing all Chrome windows and executing this command:

		open -a Google\ Chrome --args --disable-web-security

