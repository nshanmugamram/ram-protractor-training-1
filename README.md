# Overview
The (in)complete workshop for picking up Protractor - end to end testing for AngularJs

## Getting started

1. Follow the install instructions.
2. Work through the [trainging materials](training-guide.md)

## Prerequisites

To set up protractor, we need to install the following tools:

**GlbalTools**

The following tools require being installed globally.

***NodeJS***

	- Protractor is a NodesJs program so make sure node and npm package manager installed on your machine. 
	- npm package manager is used to manage node installations and gets automatically installed with NodeJs.
	- "node --version", the minimum required version should be "v6.2.2".
	- "npm -version", the minimum required version should be "3.10.8"
	- https://nodejs.org/en/

***JDK*** 
	 
	 - Java development kit is required to run Selenium server.  
	 - "Java -version", the minimum versions should be "1.8.0"
	 - http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html


***Editor***

	- Visual Studio Code, Webstorm etc.
	
***Browser***

	 - Chrome, IE etc
	
**Local Tools in Project Directory**

The following tools will automatically be installed in your project directory (Ram.Series5.End2EndTests) with project installations.

	- Protractor
	- Typescript
	- Selenium Webdriver: Protractor uses Selenium server to automate the browser behavior.

## Install Instructions

1. Remove the old version of Typescript (only applies to machines with Visual Studio installed).

		a. Browse to the folder. C:\Program Files(x86)\Microsoft SDKs\TypeScript
		b. Delete any folder with a version number < 2.0 (eg 1.0)
		
2. Fork this repo

3. Clone this forked repo locally.	

4. Open the command prompt with the current directory set to the locally cloned directory.

5. type "npm install" and enter. (should install node_modules with the required dependencies in your project directory.)


## Compile Typescript and Run project

	- `npm run server`
		- Starts the Angular Test application.
			
	- `npm run e2e`
		- Run the "tsc" tool using the options defined in "tsconfig.json".
		- "tsc" is configured to watch for changes to you typescript files and recompile them.
		- Runs the tests.
		- Produce the summary report and screenshots in ./built/reports in your project directory
		- The existing screenshots and the summary removed automatically when the test runs.
			
	- `npm run tsc`
		- Compile the tests only and produce the corresponding JavaScript files in ./built/report in your project directory.
		

## Visual Studio Code Integration

**Compiling**

The task runner has been configured to run the typescript compiler using the shortcut keys: `CTRL+SHIFT+B`
This is equivalent as running "tsc" as the command line.

**Debugging**

VSC has been configured to debug the Typescript files. Set the breakpoint in the Typescript code and press the shortcut key: `F5`
