# Golf Tracker
Golf Tracker is an app that I designed, managed, and developed. Using tools like Javascript, Express, Node.JS, Bootstrap and MongoDB to create a full CRUD, user friendly application where a registered user can track their golf games and scores per game. 

<p>Link to Project: <a href="https://golf-tracker.onrender.com/">Golf Tracker</a> </p>
<p>Video Demo: https://github.com/NathanielJ14/Golf-Tracker/assets/117672031/8ab213ba-f3b7-45c7-b7c6-f502f0385dea</p>


## How It's Made
<p>On the back end, I used tools like Node, Express, and Mongoose to set up all the routes as well as create validations and handle API calls. 
I used MongoDB to store all of the users' information and their games using Joi to validate before passing data into the DB and using Passport.js to help authenticate and keep important information protected.
On the front, I used EJS to add JavaScript into HTML markup and Bootstrap with some CSS to style the project.</p>

## 🧰 Langauges and Tools
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" /> 
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
<img align="left" style="padding-right:10px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />

<br> 

## Known Issues
<p>Both this app and the Yelp Camp project run off the same Mongo Atlas DB so when you make an account on one it also makes it for the other.</p>

## Lessons Learned
<p>Don't use the same mongo atlas server for more than one project.</p>
<p>All of the holes have a default value of 0 because when the information is pushed into the DB it expects all of the holes to have a value and I couldn't figure out how to do it with them null. So I set all holes to have a default value of 0 which works and doesn't affect the game.</p>

## Future Updates
<ul>
          <li>Add better styling</li>
          <li>Compare all of a users games and show overall stats</li>
</ul>

