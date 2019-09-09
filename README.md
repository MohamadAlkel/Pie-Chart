**Volcanic JavaScript technical test**

Welcome to Volcanic's own JavaScript technical test. 

The purpose of this test is to evaluate your thought process and code quality.

Please make sure to add JSDoc / ESDoc comments above each function you write and add comments where you think it's necessary

This test will be judged based on the final result in the UI and code quality and size that lead to those results.

We appricaite beautiful UI. However the main focus here is on the functionality and code structure.

Feel free to use any framework / library to complete test.

Best of luck !

---

## Set up

1. Clone this repository to your local machine.
2. Include any Js chart generator library of your choice.

## Requirements

## Step 1

1. For this test you will be required to restructure the JSON data provided in index.js to be used to create a pieChart that outlines the sum of different **event types**.

2. The pieChart should look similar to this image:

![alt text](https://plot.ly/~PythonPlotBot/2095.png "PieChart image")

## Step 2

1. Based on what you've created for step 1, dynamically generate a pieChart for each one of the event types, and display the weight of every **event key**.

## Step 3

Based on the same datasets you will need to create a UI that will allow the user to dynamically choose which dimensions to filter by to generate a report.

1. Create a new section.
2. Create 2 dropdowns / select menus to filter results on the top. Feel free to add a submit button if you want.
3. the filters need to be "type" and "key" (e.g. a possible combination is **search** as "type" and **seo_location** as "key", this combination should display a pie a chart that shows all the "values" that match with "seo_location" and "search". Each slice of the pie will represent a value).
4. Based on the filters selected by the user, you need to display a pie chart to display the results.
5. The intention here is the presentation of the data.

## Helper references

### Chart generators

Chart.js
<http://www.chartjs.org/>
Google Charts pieChart tutorial

<https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart>

D3 charts:
<https://github.com/d3/d3>

### Documents

Documentation for Array filters from MDN:
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>

Documentation for Array filters from MDN:
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>
