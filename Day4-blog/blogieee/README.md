# Final Project
this project is a modified version of dejwid project, you can find the original project [here](https://github.com/dejwid/mern-blog/tree/master) and you can find his youtube video building the project [here](https://www.youtube.com/watch?v=xKs2IZZya7c)

# Table of Content
- [overview](#o)
- [Task 1](#t1)
- [Task 2](#t2)
- [Task 3](#t3)
- [Task 4](#t4)
- [Task 5](#t5)
- [Task 6](#t6)
- [Task 7](#t7)
- [Task 8](#t8)
- [Task 9](#t9)
- [Task 10](#t10)
- [Solution](#s)

<a id=o></a>

## Overview

You are a junior software in a big tech company, the company is working on a new project (personal blog) the ui/ux developers have finished their work then the frontend developers have provided a great dynamic website for us.

it's your turn now as a backend engineer to make our server providing endpoints and talking with database.

you have been given a template project, so let's start working and doing the following tasks to finish our website.

<a id=t1></a>

## Task 1
what is the components of a blog?   
just 2 things:
- users
- blogs   

so our first task is to design a schema for the users ... make a new model then in a separate js file in the folder models use mongoose for that.   
the schema should include 2 main attributes (username, password) you can add more if you want.

<a id=t2></a>

## Task 2
let's use that model now we need to make our first endpoint in the server (/register) --> you will receive a post request on this endpoint with 2 parameters in the request body (username,password)
make a new user with these parameters and save it to the database then send a response   
**note:** don't forget the hashing

<a id=t3></a>

## Task 3
ok let's start with second endpoint(/login) --> you will receive a post request on this endpoint with 2 parameters in the request body (username,password) check if that user is in the database with that password if so send a response with a jwt token and document id and username if not found send a 400 response with a proper message

<a id=t4></a>

## Task 4
now what we need an end point to return the user name and user id when he sign in (/profile) --> you will receive a get request on this endpoint extract the token from the cookies and use it to return the specified username and id.

<a id=t5></a>

## Task 5
the last thing related to the user is the logout it's so simple implement and endpoint (/logout) --> you will receive a post request on this endpoint just remove the token from the cookies then return any message
<a id=t6></a>

## Task 6
let's start handling the posts like the users first task is to design the database schema make another model for the posts each post must have (title, summary, content, cover, author and timestamp) you cn add more if you want

<a id=t7></a>

## Task 7
let's make the simplest endpoint with posts (/post) --> this is a get request you should return the the most recent 20 posts from the database and populate the authors

<a id=t8></a>

## Task 8
the next endpoint we need is (/post) again :) don't get confused we need to make a get request on this endpoint but this time the post id to return a specific post.

so take the id parameter and then search in the database with it and return the result
<a id=t9></a>

## Task 9
let's make another (/post) endpoint but this time with put request to store new post in the database make sure to use the token
<a id=t10></a>

## Task 10
let's make another (/post) endpoint but this time with post request to update a post make sure to use the token

<a id=s></a>

## Solution
the template project is [here](./api/) you can try to complete it with yourself and you can find the solution [here](./api-solution/).