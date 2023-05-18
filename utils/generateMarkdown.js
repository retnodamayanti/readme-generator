// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)';       
    case 'Apache 2.0':
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-brightgreen.svg)](https://opensource.org/licenses/Apache-2.0)';  
    case 'product':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/license/gpl-3-0/)';
    default:
        return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';       
    case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';  
    case 'GPL 3.0':
        return 'https://opensource.org/license/gpl-3-0/';
    default:
        return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    [${license}](${renderLicenseLink(license)})
    ${renderLicenseBadge(license)}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
