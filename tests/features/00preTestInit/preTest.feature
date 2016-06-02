Feature: 00 Prepare the Database

  As a system developer
  I want to establish test initial conditions 
  So I can test from a repeatable baseline

  @watch
  Scenario: Wipe all collections and create an admin user
    Given I have sent the database wipe command,
    And I have created user "admin" / "nosecret" with "success".
    When I log in to the API with "success",
    Then I get back a >"16" char ID and a >"40" char token to use for future logins
