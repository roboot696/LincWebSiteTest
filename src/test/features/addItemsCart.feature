Feature: user can add items, remove items from the cart and sort the products

    Background:
        Given User navigates to the application

    Scenario: Add items to cart
        And User enter the username as "standard_user"
        And User enter password as "secret_sauce"
        And User click on the login button
        When User add items on the cart
        Then The cart should to show the number of items added

    Scenario: get in shopping cart badge
        And User enter the username as "standard_user"
        And User enter password as "secret_sauce"
        And User click on the login button
        When User add items on the cart
        Then The cart should to show the number of items added
        When User goes to the cart
        And User validates products added

    Scenario: user can remove products from the cart 
        And User enter the username as "standard_user"
        And User enter password as "secret_sauce"
        And User click on the login button
        When User add items on the cart
        Then The cart should to show the number of items added
        When User goes to the cart
        And User wants to remove a product from the cart

    Scenario: user can sort the products by name A to Z
        And User enter the username as "standard_user"
        And User enter password as "secret_sauce"
        And User click on the login button
        When User sorts the products by Name A to Z
        Then User sorts the products by name Z to A 

    Scenario: user can sort the products by name Z to A
        And User enter the username as "standard_user"
        And User enter password as "secret_sauce"
        And User click on the login button
        Then User sorts the products by name Z to A 

     Scenario: user can sort the products by price low to high
        And User enter the username as "standard_user"
        And User enter password as "secret_sauce"
        And User click on the login button
        Then User sorts the products by price low to high

    Scenario: user can sort the products by price high to low
        And User enter the username as "standard_user"
        And User enter password as "secret_sauce"
        And User click on the login button
        Then User can see the details of each product
        And User can back to products

    Scenario Outline: user can complete a purchase
        And User enter the username as "standard_user"
        And User enter password as "secret_sauce"
        And User click on the login button
        When User add items on the cart
        Then The cart should to show the number of items added
        When User goes to the cart
        And user wants to checkout
        And User fills the form with name "<name>", lastname "<lastName>" and zipcode "<zipCode>"
        When User can finish the order
      
       Examples:
      | name    | lastName | zipCode |
      | John    | Doe      | 12345   |


    