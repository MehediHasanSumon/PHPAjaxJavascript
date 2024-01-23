# CRUD Project using PHP, JavaScript, and AJAX

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application using PHP, JavaScript, and AJAX. The application allows you to manage student records in a MySQL database.

## Prerequisites

1. XAMPP: Ensure that you have XAMPP installed on your machine. You can download it here.

2. Database Setup: After installing XAMPP, start the Apache and MySQL servers. Create a new database named `ajaxjqueryapi` in phpMyAdmin.

3. Table Creation: Run the following SQL query in phpMyAdmin to create the necessary `students` table:

```bash
CREATE TABLE `students` (
`id` int(11) NOT NULL,
`name` varchar(255) NOT NULL,
`roll` int(11) NOT NULL,
`department` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
```

4. Web Server: Clone this repository into the htdocs directory of your XAMPP installation.

```bash
https://github.com/MehediHasanSumon/PHPAjaxJavascript.git
```

## Project Structure

The project has the following structure:

- asset/favicon.svg: Project favicon for the website.
- css/style.css: The CSS file for styling the UI.
- js/ajaxscript.js: The JavaScript file for handling frontend logic.
- config.php: Configuration file for connecting to the database.
- index.html: The main HTML file that contains the user interface.
- insert.php: PHP script for inserting new student records.
- edit.php: PHP script for editing existing student records.
- retriev.php: PHP script for retrieving student records.
- delete.php: PHP script for deleting student records.

## Usage

1. Open your browser and navigate to http://localhost/phpAjaxJavascript.
2. The web application will display a form to manage student records.
3. You can add, edit, and delete student records using the provided interface.

## Technologies Used

- HTML: Markup language for creating the structure of the web pages.
- CSS: Styling language for enhancing the appearance of the application.
- JavaScript: Programming language for handling frontend logic.
- PHP: Server-side scripting language for processing requests.
- AJAX: Asynchronous JavaScript and XML for making dynamic requests to the server.

## Contributing

If you have any improvements or suggestions, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License.
