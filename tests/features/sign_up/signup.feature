Feature: Sign Up a New User

  As a remote user

  @watch
  Scenario: Sign up for ToDo
    Given I have visited the ToDo page
    And I have clicked on "Sign in"
    And I have clicked on "Create account"
    And I enter username : "plok", password : "plokplok" and repeat password : "plokplok"
    When I click the "Create account" button
    Then I should see user link "plok"




