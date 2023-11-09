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
  return `# ${data.projName}
  // ${renderLicenseSection(data.license)}
  ## Project Description
  ${data.projDesc}
 ${data.descMotiv}
 ${data.desWhy}
 ${data.descSolution}
 ${data.descWhatLearn}
  ###Table of Contents
  
      - [Installation](##Installation)
      - [Usage](##Usage)
      - [Credits](##Credits)
      - [License](##License)
      - [Tests](##Tests)
      - [Contact](##Contact)


  ##Installation
  ${data.installInst}
  ##Usage
  ${data.usage}
  ##Credits
  ${data.collaborators}
  ##License
  ${renderLicenseSection(data.license)}
  ##Badges

  ##Features

  ##How to Contribute

  ##Tests



  `;
}

module.exports = {generateMarkdown};
