// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-blue"
  } else if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/license-apache-blue"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/"
  } else if (license === "Apache 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `[License: MIT](${renderLicenseLink(license)})`;
  } else if  (license === "Apache 2.0") {
    return `[License: Apache 2.0](${renderLicenseLink(license)})`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.fileName}

  ${renderLicenseBadge}

  ## Description
  ${description}

  ## Table of Contents
  Installation
  Usage
  Contributing
  Tests
  Questions
  License
 
  ## Installation
  ${installation}

  ## Usage
  ${usage}
  
  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  My GitHub profile is: https://github.com/${githubUser}
  If you have any questions regarding my project, you can reach my at my email, ${email}
  
  ## License
  ${renderLicenseSection}
  `
  
}

module.exports = generateMarkdown;
