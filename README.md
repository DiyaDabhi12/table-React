Student Data Table

Project Description

A React JS Student Data Table project that displays student marks in a table and provides pagination.

Features

Display student data in a table

Show ID, Name, Maths, DSA, Networking, DBMS and Total Marks

Select how many rows to display per page

Options for 5, 10 and 20 rows

Previous and Next pagination buttons

Page number is automatically calculated

Student data is fetched from json-server

Technologies Used

React JS

JavaScript

Bootstrap

JSON Server

API

The project uses:

http://localhost:3000/students

Pagination Logic

The number of pages is calculated using:

Math.ceil(total students / rows per page)

For example, if there are 80 students and 20 rows are selected:

Page 1 of 4

How to Run

1. Install dependencies

npm install

2. Start JSON Server

npx json-server --watch db.json --port 3000

3. Start React project

npm run dev

Project Structure

App.jsx - Main React component

db.json - Student data

README.md - Project information
## Screenshot

<div>
<img src="./Screenshot%20(140).png" width="100%">
</div>

## Video

https://drive.google.com/file/d/1G6YPqhfqQHsS8GX5VGxta1zv-O4xjKob/view?usp=sharing
"# table-React" 
