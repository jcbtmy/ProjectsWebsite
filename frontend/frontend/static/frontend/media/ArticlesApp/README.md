<h1>Article Organizer</h1>
<h2>Built with: </h2>
    <ul>
        <li>React</li>
        <li>Django</li>
        <li>Sklearn</li>
    </ul>
<p>
   This application organizes online articles given their URL. The backend for this is built with Django using the SQLite database. It allows you to contact the server and retrieve the articles stored in that database. Upon adding to the list, the URL is sent to the backend which checks if the site is a valid URL, then parses the content of the webpage to determine the category of the article. The backend uses NLP to classify the text, which was trained using the Sklearn Naive Bayse classifier based on <a href="https://www.kaggle.com/amananandrai/ag-news-classification-dataset">this</a> dataset from kaggle. The model is only about ~89% effective, so not too bad for my first NLP :)</p>