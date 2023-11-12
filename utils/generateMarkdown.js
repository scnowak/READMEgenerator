// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](https://img.shields.io/badge/${license}-blue.svg)]`
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projName}

  ${renderLicenseSection(data.license)}

  ## Description

  ${data.description}


  ### Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation

  ${data.installInst}



  ## Usage

  ${data.usage}



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
