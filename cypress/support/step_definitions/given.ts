import {Given,defineStep as And } from "@badeball/cypress-cucumber-preprocessor";
Given('I open the website', () => {
cy.visit('http://www.google.com'); // Replace with your website URL 
});