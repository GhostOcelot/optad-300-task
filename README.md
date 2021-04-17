# Set Cookies Modal

App created with plain javascript and css as a recruitment task for OptAd 360.

## Functionalities implemented:

- first the app checks if the browser already has a cookie with the identified name
- if it does then the website is available for the user to browse
- otherwise a modal pops up preventing the user from scrolling the page and the body gets blurred
- the modal contains a list of partners with their GDPR policy and corresponding checkboxes as well as buttons to accept selected partners or reject all
- the partners are fetched from an external API; the data is limited to 10 item for readability and simplicity purposes
- basic validation prevents the user from accepting without selecting any partners; at least one partner is required to be selected
- clicking Accept dismounts the modal and sets a cookie with the selected partners names and a 24 hours expiry date
- clicking Reject dismounts the modal without setting the cookie
