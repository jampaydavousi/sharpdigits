# sharpdigits

Sharp Digits is Natural language Processing solution that classifies customers' sentiment published under Yelp reviews by utilizing a data pipeline that re-organizes, tokenizes, filters, and determines frequency and relevance of data elements; and then applies machine learning models to classify the sentiment of customer as 'positive', 'negative' or 'neutral'.

The website https://sharpdigits.herokuapp.com/ is a full-stack web application that returns the sentiment analysis for all Yelp reviews, when the merchant enters the merchant code. The table displays the conclusion by Sharp Digits, and compares it to the results by Vader Sentiment Analysis (Lexicon), and publishes the accuracy. Merchant can then explicitly check for false positives or false negatives, and see the instances where Sharp Digits did not let sarcasm, cynicism, or slang; which are interpreted literaly by Vader Sentiment Analysis, impact the true sentiment of the customers' expereince and reviews.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Python version 2.7 or higher.   You must create a separate environment on your computer for running Python applications.
Jupyter notebook.  Always switch to your Python environment before starting jupyter by typing 'jupyter notebook' on the command line.
Flask
PostgreSQL or SQLite
BeautifulSoup4
Heroku
Apache Spark by Databricks (NOTE: You do not this to run the software.  This enables you to run the Machine Learning (Natural Language Processing) code independently by loading sample database from Amazon Web Service (AWS) S3 and see how the data pipeline and ML Model is used.)

This is a full stack app so add your html, js, css, python.  The dataset is extracted from PostgreSQL to data.js using an ETL process to have a static dataset in the event that you like to reconstruct this software but do not have PostgreSQL, Apache Spark, or jupyter notebook.

## Run the application.

1. Copy all the files in this repository into a local directory on your computer.
2. Switch to the Python Environment
3. Form the PC command line or MacOS Terminal type ls, to make sure you see the app.py file in that directory.
4. Enter on the command line 'python -m http.server 5000'
5. Start another command line (terminal on MacOS) window, and repeat steps 2 and 3.
6. Enter on the command line 'python app.py'
7. Start your local browser and enter 'localhost:5000' in the URL field

Now you have launched  Sharpdigits

8.  In the 'Enter Merchant Code' enter 'TWOP' and then click 'refresh'. This displays all the reviews and the assessment by both SharpDigitis and also Vade Sentiment Analysis which is a Lexicon.  The accuracy of the machine learning model is displayed at the top left of the table.

9.  Enter 'false positive' or 'false negative' in the 'Select Result Type'  field to see where the Lexicon and Machine Learning disagreed.  As you read through the review and how each analyze the sentiment, you will notice that the lexicon missed on a few because it is unable to understand sarcasm, cynicism, or slang.




