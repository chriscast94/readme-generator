// Function that returns a license badge based on which license is passed in
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

// Function that returns the license link
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

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `[MIT](${renderLicenseLink(license)})`;
  } else if (license === "Apache 2.0") {
    return `[Apache 2.0](${renderLicenseLink(license)})`
  } else {
    return ""
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.fileName}

  ![badge](${renderLicenseBadge(data.license)})

  ## License
  This project is licensed under the ${renderLicenseSection(data.license)} license.


  ## Description
  ${data.description}

  ## Table of Contents
  
  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Contributing](#Contributing)

  * [Tests](#Tests)

  * [Questions](#Questions)

  * [License](#License)
 
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  My GitHub profile is: https://github.com/${data.githubUser}
  If you have any questions regarding my project, you can reach my at my email, ${data.email}
  
  `

}

module.exports = generateMarkdown;
