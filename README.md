📌 Project Overview

This project focuses on automatically classifying customer support tickets into predefined categories using Natural Language Processing (NLP) and machine learning. The goal is to reduce manual effort in ticket routing and improve response efficiency.

A complete end-to-end pipeline was implemented, including text preprocessing, feature extraction using TF-IDF, model training, evaluation, and result reporting.

🔗 Live Demo / Notebook Preview:
👉 https://show-my-iypn.lovable.app

🛠️ Technologies Used

Python

scikit-learn

NLTK

Jupyter Notebook

Matplotlib & Seaborn


2️⃣ Text Preprocessing

The following preprocessing steps were applied:

Converted text to lowercase

Removed punctuation and special characters

Removed stop words using NLTK

Cleaned text prepared for vectorization

3️⃣ Feature Extraction

Used TF-IDF Vectorization

Included unigrams and bigrams

Limited features to reduce noise and improve performance

4️⃣ Model Training

Trained a Linear Support Vector Machine (SVM) classifier
(simple and effective for high-dimensional text data)

Note: Logistic Regression can also be used as an alternative baseline model.

5️⃣ Model Evaluation

The model was evaluated using:

Accuracy

Precision

Recall

F1-score

Confusion Matrix

Evaluation was performed on a separate test dataset to ensure generalization.
