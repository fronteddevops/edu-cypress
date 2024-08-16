Feature: User login functionality

  Scenario: Attempt login with incorrect credentials
    Given precondition
    When attempt login with incorrect credentials
    Then verify the error message and capture screenshot

  Scenario: Retry login with correct credentials
    Given precondition
    When retry login with correct credentials
    Then verify successful login and capture screenshot
