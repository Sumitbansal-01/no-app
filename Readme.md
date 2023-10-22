### Prerequisite

* Install all the dependencies by using the command ``npm i``
* Create a .env file
* In .env file mention the port on which you want to run ``PORT=5000``

### Starting the server

Now for starting the server use start script by `` npm start``. Now the server is running on the port you mentioned in .env. In my case it is port 5000

### Working

Here I use csv-parse module to parse the csv file and then check each row by a validation function which filter by variable_code you can see that validation in src/apis/valiadations/eachRowValidation.js. Here the mention the route is **/uploadCsv** with method is **POST.** This is the requirement route, here it take a file whose name is **csvFile** which has a mime type of **text/csv .** You can use the file which is mentioned in input folder in main directory. input2 file's all row is correct and whole document pass with validation but input2 will pass partially and input3 is a pdf file which not passed. You can see the output in output folder in csv.json. If you want to do the test here is test script which you can run ``npm test`` but it check the main route is working or not and before that we need to start the server.
