import * as loginPage from '../../fixtures/mapping/pageObjects/loginPage';
import * as drupalPageObjects from '../../fixtures/mapping/pageObjects/durpalPageObjects.json';
import * as addUserPage from '../../fixtures/mapping/pageObjects/addUserPage.json';
import * as contactForm from '../../fixtures/mapping/pageObjects/contactForm.json'


const selectors = Object.assign(
  loginPage,
  drupalPageObjects,
  addUserPage,
  contactForm
);

module.exports = selectors;