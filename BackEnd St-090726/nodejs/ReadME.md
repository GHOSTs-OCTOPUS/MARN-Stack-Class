# For New Application

- Create firstly backend and frontend Folder

## To open Backend Folder

``` cd backend ```

## Initialize a Node.js project

``` npm init ```

OR To process with default package use:

``` npm init -y ```

    - it creates the package.json file in backend 

## Install dependencies

### If Using Express.js

``` npm i express ```

- it will creates the node_modules file and package-lock.json

### If Using Colors

``` npm i colors ```

- To add Colors

### To auto start Server After Any update

``` npm i nodemon ```

### To install .evn

``` npm i dotenv ```

- To store API, DB Configuration

### For creating server

``` touch server.js ```

- Create Server.js OR index.js File In Backend Folder

### For Start Server

``` npm run dev ```

    or

``` node server.js ```

### For Stop Server

``` Ctrl+c ```

- click ctrl+c to terminate or stop server

### For Database Connectivity

- Create folder as config in backend folder in that create db.js file for DataBase

- In dotenv file create one string as MONGO_URL=your Connection string.

``` MONGO_URL=mongodb+srv://<UserName>:<Password>@cluster0.-----.mongodb.net/databaseName ```

### For creating live Database

- Use MongoDB Atlas and signIn/SignUp Using Gmail or GitHub Account It create free cluster, add IP Address then you Connect it as MongoDB Compass.

### TO Download MongoDB compass

- Open chrome And Search for

``` https://www.mongodb.com/try/download/community ```

- Download  it according to your system it download MongoDB Compass on your system.

- Copy the string of your database for connectivity or you can use your cluster in your MongoDB compass for long time support

### For Use database as localhost

- In dotenv file create one string as MONGO_URL=your Connection string. it look like:

- copy localhost URL from MongoDB compass and past after MONGO_URL=``` past copied URL ```

``` MONGO_URL=mongodb://localhost:27017/backendDB ```
