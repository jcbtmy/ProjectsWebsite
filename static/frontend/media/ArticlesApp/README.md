<h1>Article Organizer</h1>
<h2>Built with: </h2>
    <ul>
        <li>React</li>
        <li>Django</li>
        <li>Sklearn</li>
    </ul>
<p>
   This application organizes online articles given their URL. The backend for this is built with Django using the SQLite database. It allows you to contact the server and retreive the articles stored in that database. Upon adding to the list, the url is sent backend which checks if the site is a valid url, then parses the content of the webpage to determine the category of the article. The backend uses NLP to classify the text, which was trained using the sklearn Naive Baise classifier based on <a href="https://www.kaggle.com/amananandrai/ag-news-classification-dataset">this</a> dataset from kaggle. The model is only about ~89% effective, so not too bad for my first NLP :)</p>