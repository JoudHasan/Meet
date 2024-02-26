# MEET

MEET is an application that empowers users to discover events happening in various cities. Users can filter events by city, view event details, specify the number of events to display, use the app offline, add shortcuts to the home screen, and visualize event details through charts.

## Key Features

* **Filter Events by City:**
    - *Scenario:* A user wants to find events happening in their city, They open the app, go to the events section, and select the city from the city filter dropdown. The app then displays only the events taking place in New York.

* **Show/Hide Event Details:**
    - *Scenario:* A user is browsing through the list of events and wants to see more information about a particular event without leaving the main list view. They tap on the event title or a designated button to expand the event details. After reading, they can hide the details by tapping the event again or a "hide details" button.

* **Specify Number of Events:**
    - *Scenario:* A user wants to limit the number of events displayed on their screen due to limited screen space or to reduce clutter. They access the settings or preferences section of the app and specify that they only want to see a maximum of 10 events at a time. The app then adjusts the display accordingly.

* **Use the App When Offline:**
    - *Scenario:* A user is in an area with poor or no internet connectivity but wants to check upcoming events. They open the app, which has previously stored event data locally on their device. The app loads and displays the stored events, allowing the user to browse and interact with them even without an internet connection.

* **Add an App Shortcut to the Home Screen:**
    - *Scenario:* A user frequently uses the events app and wants quick access to it from their device's home screen. They navigate to the app, find the option to add a shortcut to the home screen, and tap on it. A shortcut icon for the events app then appears on their device's home screen, allowing them to launch the app with a single tap.

* **Display Charts Visualizing Event Details:**
    - *Scenario:* A user is interested in understanding trends or patterns in the types of events available. They navigate to the "Statistics" or "Charts" section of the app, where they can see graphical representations such as pie charts or bar graphs showing the distribution of events by category, time, location, etc. This helps them make informed decisions about which events to attend based on their preferences and schedules.

These scenarios illustrate how each key feature enhances the usability and functionality of the events app for users.


## Gherkin's code

1. **Show/Hide Event Details:**
   - **Given** I am viewing a list of events,
     **When** I click on an event,
     **Then** the event details should expand, allowing me to see more information about it.

2. **Specify Number of Events:**
   - **Given** I am on the events page,
     **When** I navigate to the settings or preferences section,
     **Then** I should be able to specify the maximum number of events to display.

3. **Use the App When Offline:**
   - **Given** I have previously used the app and stored event data,
     **When** I open the app without an internet connection,
     **Then** I should still be able to view the stored event data.

4. **Add an App Shortcut to the Home Screen:**
   - **Given** I am a frequent user of the app,
     **When** I navigate to the app settings,
     **Then** I should find an option to add a shortcut to the home screen.

5. **Display Charts Visualizing Event Details:**
   - **Given** I am exploring event details,
     **When** I navigate to the charts or statistics section,
     **Then** I should be presented with visual representations of event data, such as charts illustrating distribution by category, time, and location.

