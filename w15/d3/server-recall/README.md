# Exercise: Postman Requests

Postman is used to make HTTP requests. In this exercise, you will use Postman to
make requests with different endpoints to a web server.

## Set up

Clone the server files from the repo accessed through the `Download Project`
button at the bottom of this page.

To set up the server that you will test endpoints on, `cd` inside the practice's
root directory and run `npm install`. **Do not look at the contents of the
server folder until you finish this exercise.**

To start the server, run `npm start`. This will allow you to make requests to
[http://localhost:5000] using any client (i.e., browser or Postman).

To stop the server from listening to requests, press `CTRL + c` in the terminal
where you started the server (i.e., wherever you ran `npm start`). To restart a
stopped server, run `npm start` again.

> Note: If a practice/exercise involves running a server, always make sure to
> stop the server once you have finished the practice/exercise. Leaving a server
> running may prevent servers in other practices/exercises from starting
> properly.

## Endpoints

Below is a list of endpoints for this site:

- `GET /` - Home Page
- `GET /posts` - View all Posts
- `GET /posts/:postId` - View details about a specific post
- `POST /posts` - Submit the creation of a new post
  - a post has a `title` field and a `description` field
- `PUT /posts/:postId/edit` - Submit the edit of an existing post
- `DELETE /posts/:postId/delete` - Delete a specific post

## Formulate requests on Postman

Go through each of the endpoints for this server and formulate requests to the
endpoints. Once you start your server, you can make requests in Postman with a
root URL path of [http://localhost:5000] followed by the endpoint's route.
For example, to make a request to `GET /posts` to view all the posts, the URL
path of the request should be [http://localhost:5000/posts].

Your goal is to request the following operations on the server using Postman:

- view all posts
- view one post
- create a post
- edit the post
- delete the post

Formulate the requests in Postman. Each request should be sent with all the
necessary request components. For all requests that require a body, go to the
`Headers` tab and set a `Content-Type` of `application/json`. For the body
itself, select `raw` and build your own object (`{}`) with the desired keys and
values.

Analyze the response you get back in Postman after you send the request. You
should be able to list the components of the response from the Postman UI.

If you see an error status code in the response, then there was something wrong
with the request.

After getting back a successful status code in a response, confirm that the
operation you were trying to perform in the request was successful using one or
more `GET` endpoints.

![Postman breakdown]

[http://localhost:5000]: http://localhost:5000
[http://localhost:5000/posts]: http://localhost:5000/posts
[Postman breakdown]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-08/assets/postman_visual_Basic_HTTP.png
