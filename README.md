
  # README.md GENERATOR


  ## Description

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

  ### Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation

  First, you will want to make sure that your repo includes a 
  package.json with the required dependencies. You can create
  one by running 'npm init' from the terminal when you first 
  set up the project, before installing any dependencies.

  Then you will install 'inquirer' by entering 'npm i inquirer@8.2.4'
  in your terminal.

  Once installed, the application will be invoked by using the
  following command:

    'node index.js'



  ## Usage


 If you need some guidance, here is some information from 
 [The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
 on creating a professional README.md file.

 A professional README file describes and explains what the application can do. The bare necessities of a README must include a TITLE, a SHORT DESCRIPTION explaining the what, why, and how of the project.

 The following questions will be asked and prompts the user to answer...

    What is your project title?
    What is the description of your project?
    What are the installation instructions that the user will need to use the app?
    What usage information does the user need to get started? Such as User Story or Acceptance Criteria?
    List any collaborator GitHub profile.
    Pick a license that the application is covered under.
    What info do you want to include for your demo/tests?
    What is your GitHub username?
    What is your Email address?


    Here are some additonal questions you might use in your README.md file as a guide:

    What was your motivation?
    Why did you build this project?
    What problem does it solve?
    What did you learn?
    What makes your project stand out?


Your README might also describe some of the challenges you faced, as well as the features you plan to implement in the future. And if your project is deployed, make sure to include a link to the deployed application so people can see it in action!

For example:



  ## Contributing

  ${data.collaborators}



  ## License

  ${renderLicenseSection(data.license)}



  ## Tests

  ${data.tests}


  ## Questions
  If you have any further questions about the application, please
  use the contact information below:

  - GitHub: ${data.github}


  - Email: ${data.email}

 
  `;
}

module.exports = generateMarkdown;

