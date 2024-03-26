Feature: Show and hide events details
 Scenario: An event element is collapsed by default.
  Given user was presented with the list of events taking place in a chosen city
  When the user scrolls and examines given results
  Then only basic information is visible as all event element is collapsed by default

 Scenario: User can expand an event to see details
  Given user was presented with the list of events taking place in a chosen city
  When the user is interested in one of the shown event
  Then more information about chosen event would be visible by clicking on Show Details button
  
 Scenario: User can collapse an event to hide details
  Given user saw event details and got all the needed information
  When a user has no more interest in seeing event details
  Then user can collapse an event by clicking on Hide Details button