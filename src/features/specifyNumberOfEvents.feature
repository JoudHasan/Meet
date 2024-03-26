Feature: Specify number of events
    Scenario: When a user hasn't specified a number, 32 events are shown by default
        Given user was presented with number of available events
        When the user doesn't change the number of shown events
        Then 32 event will be presented to the user by default
        
    Scenario: User can change the number of events displayed.
        Given user was presented with number of available events
        When the user changes the number of shown event
        Then chosen number of event will be shown