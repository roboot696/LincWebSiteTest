Feature: User Authentication tests

    Background:
        Given User navigates to the application

    Scenario: Login should be success
        And User enter the username as "standard_user"
        And User enter password as "secret_sauce"
        When User click on the login button
        Then Login should be success 

    Scenario: user locked can't get login
        And User enter the username as "locked_out_user"
        And User enter password as "secret_sauce"
        And User blocked clicks on the login button
        Then User cant get access