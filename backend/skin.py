
# pip install virtualenv 
# python -m venv myenv
# myenv\Scripts\activate
import pandas as pd   # data analysis
import numpy as np    
import re   # sequence of collector 
import matplotlib.pyplot as plt  #visualisation


import nltk  #natuarl language tool kit , used for text preprocessing
from sklearn.feature_extraction.text import CountVectorizer  # unsupervised data provide , convert the raw text into numerical form
from sklearn.feature_extraction.text import TfidfVectorizer   # tear  down feature extraction from the text to numerical form
from sklearn.feature_extraction.text import TfidfTransformer
# CountVectorizer+tfidfTransformer = tfidfVectorizer
from nltk.probability import FreqDist #frequency distribution, to count the frequency of words in a document
from nltk.corpus import stopwords     #stopword list(comman word used)
from nltk.stem import PorterStemmer   #to reduce word to its root form
from sklearn import metrics   #for evaluation metric
from sklearn.model_selection import train_test_split  #for splitting dataset into training and testing set
from matplotlib import cm   #colormap
from sklearn.ensemble import RandomForestClassifier  
from sklearn.metrics import accuracy_score 
from sklearn.metrics import f1_score  #f1 score is better than accuracy when there are imbalance class
from nltk.tokenize import RegexpTokenizer # tokenization using regular expression
from nltk.stem import WordNetLemmatizer #process covert word in a meaningful form 
from sklearn.metrics.pairwise import cosine_similarity #cosine similarity between two documents

from bokeh.io import show,curdoc,output_notebook,push_notebook #interactive visualization
from bokeh.plotting import figure 
from bokeh.models import ColumnDataSource,HoverTool,Select,Paragraph,TextInput #
from ipywidgets import interact #
from sklearn.metrics.pairwise import linear_kernel
import markovify     #used for generating text from given data
import string
from os import path
from PIL import Image
from wordcloud import WordCloud,STOPWORDS,ImageColorGenerator #generate word cloud image
from sklearn.pipeline import Pipeline #

from sklearn.naive_bayes import MultinomialNB  
from sklearn.linear_model import SGDClassifier
from sklearn.linear_model import LogisticRegression

import warnings; warnings.simplefilter('ignore')
nltk.download('stopwords')  
nltk.download('punkt')
nltk.download('wordnet')

from sklearn.metrics import classification_report

# df=pd.read_csv('skindataall.csv',index_col=[0])
df = pd.read_csv('skindataall.csv', index_col=[0], encoding='latin1')

print(df.head(10))

## EDA and Data Visualization

# skintone_stats=df.groupby('Skin_Tone')['Username'].count()
# skintone_stats.plot.bar(color='brown',rot=45)
# plt.show()

# skintype_stats=df.groupby('Skin_Type')['Username'].count()
# skintype_stats.plot.bar(color='darkgreen',rot=45)
# plt.show()

# eyecolor_stats=df.groupby('Eye_Color')['Username'].count()
# eyecolor_stats.plot.bar(color='darkblue',rot=45)
# plt.show()

# haircolor_stats=df.groupby('Hair_Color')['Username'].count()
# haircolor_stats.plot.bar(color='red',rot=45)
# plt.show()

# rating_stats = df.groupby('Rating_Stars')['Username'].count()
# rating_stats.plot.bar(color = 'black')
# plt.show()


def no_punc(string):
    no_punc_string=re.sub('[^\w\s]','',string)  # the regex is ignoring the words and highlights the puncutation (remove)
    return no_punc_string

df['Review']=df.apply(lambda row: no_punc(row['Review']),axis=1)
print(df['Review'].head())

text_model=markovify.NewlineText(df.Review,state_size=2)
# for i in range(10):
#     print(text_model.make_sentence(),'\n\n')


negativedf=df[df.Rating_Stars<=4]
positvedf=df[df.Rating_Stars>4]

negative=" ".join(review for review in negativedf.Review)

positive=" ".join(review for review in positvedf.Review)

stopwords=set(STOPWORDS)
stopwords.update(['read','more','product'])

def generate_wordcloud(data):
    wordcloud=WordCloud(stopwords=stopwords,background_color='white').generate(data)
    plt.imshow(wordcloud,interpolation='bilinear')
    plt.axis('off')
    plt.show()
# generate_wordcloud(negative)
df['Category'].value_counts()
moist_df=df[df.Category=='Moisturizer']
cleanse_df=df[df.Category=='Cleanser']
mask_df=df[df.Category=='Face Mask']
treat_df=df[df.Category=='Treatment']
moist=" ".join(ing for ing in moist_df.Ingredients)
cleanse=" ".join(ing for ing in cleanse_df.Ingredients)
mask=" ".join(ing for ing in mask_df.Ingredients)
treat=" ".join(ing for ing in treat_df.Ingredients)
# generate_wordcloud(moist)
# generate_wordcloud(cleanse)
# generate_wordcloud(mask)
# generate_wordcloud(treat)


x=df.Ingredients
y=df.Category


xtrain,xtest,ytrain,ytest=train_test_split(x,y,test_size=0.25,random_state=42)
categories=['Moisturizer','Cleanser','Face Mask','Treatment']

nb=Pipeline([('vect',CountVectorizer()),('tfidf',TfidfTransformer()),('clf',MultinomialNB())])
nb.fit(xtrain,ytrain)
y_pred=nb.predict(xtest)
# print('accuracy %s' %accuracy_score(y_pred,ytest))
# print(classification_report(ytest,y_pred,target_names=categories))


logreg=Pipeline([('vect',CountVectorizer()),('tfidf',TfidfTransformer()),('clf',LogisticRegression(n_jobs=1,C=1e5))])
logreg.fit(xtrain,ytrain)
y_pred=logreg.predict(xtest)
# print('accuracy %s' %accuracy_score(y_pred,ytest))
# print(classification_report(ytest,y_pred,target_names=categories))

sgd=Pipeline([('vect',CountVectorizer()),('tfidf',TfidfTransformer()),('clf',SGDClassifier(loss='hinge',penalty='l2',alpha=1e-3,random_state=42,max_iter=5))])
sgd.fit(xtrain,ytrain)
y_pred=sgd.predict(xtest)
# print('accuracy %s' %accuracy_score(y_pred,ytest))
# print(classification_report(ytest,y_pred,target_names=categories))





x1=df.Ingredients
y1=df.Good_Stuff

xtrain1,xtest1,ytrain1,ytest1=train_test_split(x1,y1,test_size=25,random_state=42)
cat=['1','0']

nb=Pipeline([('vect',CountVectorizer()),('tfidf',TfidfTransformer()),('clf',MultinomialNB())])
nb.fit(xtrain1,ytrain1)
y_pred=nb.predict(xtest1)
# print('accuracy %s' %accuracy_score(y_pred,ytest1))
# print(classification_report(ytest1,y_pred,target_names=cat))

logreg=Pipeline([('vect',CountVectorizer()),('tfidf',TfidfTransformer()),('clf',LogisticRegression(n_jobs=1,C=1e5))])
logreg.fit(xtrain1,ytrain1)
y_pred1=logreg.predict(xtest1)
# print('accuracy %s' %accuracy_score(y_pred1,ytest1))
# print(classification_report(ytest1,y_pred1))

sgd=Pipeline([('vect',CountVectorizer()),('tfidf',TfidfTransformer()),('clf',SGDClassifier(loss='hinge',penalty='l2',alpha=1e-3,random_state=42,max_iter=5))])
sgd.fit(xtrain1,ytrain1)
y_pred1=sgd.predict(xtest1)
# print('accuracy %s' %accuracy_score(y_pred1,ytest1))
# print(classification_report(ytest1,y_pred1,target_names=cat))



def recommend_products_by_user_features(skintone,eyecolor,skintype,haircolor):
    ddf=df[(df['Skin_Tone']==skintone) & (df['Eye_Color']==eyecolor) &(df['Skin_Type']==skintype) & (df['Hair_Color']==haircolor)]
    recommendations=ddf[(ddf['Rating_Stars'].notnull())][['Rating_Stars','Product_Url','Product','Price','Ing_Tfidf']]
    recommendations=recommendations.sort_values('Rating_Stars',ascending=False).head(5)
    print('Based on your features, these are the top products for you')
    return recommendations


# print(recommend_products_by_user_features("Light","Green","Combination","Brunette"))
skintone='Light'
eyecolor='Green'
skintype='Combination'
haircolor='Brunette'
# print(recommend_products_by_user_features(skintone,eyecolor,skintype,haircolor))

df_cont=df[['Product','Product_id','Ingredients','Product_Url','Ing_Tfidf','Rating','Price']]
df_cont.drop_duplicates(inplace=True)
# tf=TfidfVectorizer(analyzer='word',ngram_range=(1,2),min_df=0,stop_words='english')
# tfidf_matrix=tf.fit_transform(df_cont['Ingredients'])
tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 2), min_df=1, stop_words='english')

# Fit and transform your data
tfidf_matrix = tf.fit_transform(df_cont['Ingredients'])
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
#cosine_sim=linear_kernel(tfidf_matrix,tfidf_matrix)
df_cont.reset_index(drop=True)
titles=df_cont[['Product','Ing_Tfidf','Rating','Price','Product_Url']]
indices=pd.Series(df_cont.index,index=df_cont['Product'])


def content_recommendation(product):
    idx=indices[product]
    sim_scores=list(enumerate(cosine_sim[idx]))
    sim_scores=sorted(sim_scores,key=lambda x:x[1],reverse=True)
    sim_scores=sim_scores[1:11]
    product_indices=[i[0] for i in sim_scores]
    print(titles)
    return titles.iloc[product_indices]
    
# print(content_recommendation('The Rice Polish Foaming Enzyme Powder'))











