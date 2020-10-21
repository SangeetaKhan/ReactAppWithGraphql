This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To fetch the data from graphql

Have used Query component of react-apollo, instead of useQuery hooks, as not so hands-on yet on hooks

## Why a new server when there is a playground available ?

GraphQl is completly new tech for me to learn and implement, so before using the playground, was getting comfortable on how to play around graphql by setting a server

## Things completed

1. Buildings, Meeting Rooms and Meetings info for the selected Building will be listed.
2. Clicking on Add new Meeting, will open up a new UI to enter the date, start time and end time.
3. Upon entering the details, the list of meeting rooms that is free along with the name and floor of the particular Building will be listed.

## Couldn't complete
1. Unable to run the mutation on clicking of save button for the particular meeting room.
