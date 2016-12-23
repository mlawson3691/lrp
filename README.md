# Leaf, Root, & Petal

#### A Drupal 7 eCommerce site, December 22nd, 2016

#### By Mark Lawson

## Description

This application is an eCommerce site built with Drupal 7. The site represents a personal business idea to discuss and sell natural homemade soaps and cosmetics. The Drupal Commerce module drives the business of the site, and site displays are built with the Views module. Administrators can upload products to the site, while other users can browse the store, add items to their cart, and checkout (once logged in). A custom Bootstrap sub-theme styled with SASS formats the page.

View the live site [here](http://live-leaf-root-petal.pantheonsite.io/).

## Setup/Installation Instructions

* Clone the repository
* Start a server using MAMP (on Mac)
* Open the MAMP Preferences:
  * Set the document root to the project's root directory
  * Set the Apache Port to 8888 and the MySQL Port to 8889
* Set up the database:
  * In the browser, navigate to phpMyAdmin (localhost:8888/phpMyAdmin)
  * Select the "Import" tab along the top
  * Retrieve the database from Pantheon
  * Select the "Privileges" tab along the top
  * Add a user with the proper credentials
* Retrieve the Files direction from Pantheon and add to 'sites/default' and rename to 'files'
* Navigate your browser to localhost:8888
* NOTE: Before committing again, be sure to export database and files directory to Pantheon

## Known Bugs

There are no known bugs at this time.

## Support and Contact Details

Please report any bugs or issues to mlawson3691@gmail.com.

## Languages/Technologies Used

* Drupal 7.52
* MAMP
* MySQL

### License

*This application is licensed under the MIT license.*

Copyright (c) 2016 Mark Lawson
