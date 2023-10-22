### Prerequisite

* Install all the dependencies by using the command ``npm i``
* Create a .env file
* In .env file mention the port on which you want to run ``PORT=5000``

### Testing

After completing the above steps we can move to the test here I have written 4 test case

1. Checking the app is working or not
2. Testing for file where every row is validate as successful i.e for input2 file in input folder
3. Testing for file where some row is validate as unsuccessful i.e for input1 file in input folder
4. Testing for file which is not csv i.e for input3 file in input folder

For this run the test script by ``npm test``

### Starting the server

Now for starting the server use start script by `` npm start``. Now the server is running on the port you mentioned in .env. In my case it is port 5000

### Documentation

For documentation I use swagger after starting the server we can find it at **/docs** route

### Working

Here I use csv-parse module to parse the csv file and then check each row by a validation function which filter by variable_code you can see that validation in src/apis/valiadations/eachRowValidation.js. Here the mention the route is **/uploadCsv** with method is **POST.** This is the requirement route, here it take a file whose name is **csvFile** which has a mime type of **text/csv .** You can use the file which is mentioned in input folder in main directory. input2 file's all row is correct and whole document pass with validation but input2 will pass partially and input3 is a pdf file which not passed. You can see the output in output folder in csv.json.
