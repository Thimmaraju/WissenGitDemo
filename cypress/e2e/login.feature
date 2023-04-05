Feature: Verify Login functionality
    login func positive and negative tests

Background: launch app
   Given  User Launch Application

    @smoke
    Scenario: verify login valid creds
        When   User enter username as "Admin" and Password as "admin123"
        And    User click on login button
        Then   User should be navigated to dashboard page

    @regression
    Scenario Outline: verify login invalid creds
        When   User enter username as '<username>' and Password as '<password>'
        And    User click on login button
        Then   User should get error message

        Examples:
            | username  | password       |
            | Admin     | k.fdnnjd       |
            | fehbjnkqj | admin123       |
            | fehbjnkqj | admigvjbkjn123 |