Feature: Login
  As a user
  I want to be able to log in to the application
  So that I can access my account

  Scenario: Successful login
    Given I go to "login" page
    When I click on "btnNewUser"
    Then I should be in "register" page
    When I enter "test" in "fristName"
    And I enter "01" in "lastName"
