from flask import Flask, request, jsonify, render_template, redirect, url_for, session, flash
from skin import recommend_products_by_user_features, content_recommendation
from flask_cors import CORS
from flask_wtf import FlaskForm # helps in build and validation of form
from wtforms import StringField, PasswordField, SubmitField, EmailField
from wtforms.validators import DataRequired, Email, ValidationError
import bcrypt
from flask_mysqldb import MySQL



app = Flask(__name__)

#MySQL configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'mydatabase'
app.secret_key = 'your_secret_key_here'

mysql = MySQL(app)

CORS(app)

class RegisterForm(FlaskForm):
    name = StringField("Name",validators=[DataRequired()])
    email = EmailField("Email",validators=[DataRequired(),Email()])
    password = PasswordField("Password",validators=[DataRequired()])
    submit = SubmitField("Register")

    def validate_email(self,field):
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM users WHERE email=%s",(field.data,))
        user = cursor.fetchone()
        cursor.close()
        if user:
            raise ValidationError('Email is already in use!!')

class LoginForm(FlaskForm):
    email = EmailField("Email",validators=[DataRequired(),Email()])
    password = PasswordField("Password",validators=[DataRequired()])
    submit = SubmitField("Login")

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/signuppage',methods=['GET','POST'])
# def signuppage():
#     form = RegisterForm()
#     if form.validate_on_submit():
#         name = form.name.data
#         email = form.email.data
#         password = form.password.data

#         hashed_password = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
        
#         # store in database
#         cursor = mysql.connection.cursor()
#         cursor.execute("INSERT INTO users (name,email,password) VALUES (%s,%s,%s) ", (name,email,hashed_password))
#         mysql.connection.commit()
#         cursor.close()

#         return redirect(url_for('loginpage'))

#     return render_template('signuppage.html',form=form)
@app.route('/signuppage', methods=['GET', 'POST'])
def signuppage():
    if request.method == 'POST':
        data = request.json
        name = data['name']
        email = data['email']
        password = data['password']
        print(name, email, password)

        # # Check if email already exists in the database
        # cursor = mysql.connection.cursor()
        # cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        # user = cursor.fetchone()
        # cursor.close()

        # if user:
        #     return jsonify({'error': 'Email is already in use!'}), 400
            # return redirect(url_for('loginpage'))  # Redirect to login page on error

            # If email is not in use, proceed with insertion
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, hashed_password))
        mysql.connection.commit()
        cursor.close()

        flash('You have successfully signed up!', 'success')
        return redirect(url_for('loginpage'))  # Redirect to login page after successful signup

    return jsonify({'message': 'Please submit the form data via POST request.'})

@app.route('/loginpage',methods=['GET','POST'])
def loginpage():
    form = LoginForm()
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data

        # store in database
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM users WHERE email = %s ", (email,)) # getting details of user based on the email
        user = cursor.fetchone() # ek email se ek hi user can register
        cursor.close()
        if user and bcrypt.checkpw(password.encode('utf-8'),user[3].encode('utf-8')): # checking the password if user exist & 3rd column is for user
            session['user_id'] = user[0]
            return redirect(url_for('dashboard'))
        else:
            flash('Login failed!! Please check your email and password!') # flash only displays once if refresh then goes away
            return redirect(url_for('loginpage'))

    return render_template('loginpage.html',form=form)

@app.route('/dashboard')
def dashboard(): # checking if uer id is of required session
    if 'user_id' in session:
        user_id = session['user_id']

        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM users WHERE id = %s",(user_id,))
        user = cursor.fetchone()
        cursor.close()

        if user:
            return render_template('dashboard.html',user=user)
    
    return redirect(url_for('loginpage'))

@app.route('/logout') 
def logout():
    session.pop('user_id',None) # as we are storing user_id in session
    flash('You have been successfully logout!! Do visit again')
    return redirect(url_for('loginpage'))


@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    skintone = str(data['skinColor'])
    eyecolor = str(data['eyeColor'])
    skintype = str(data['skinType'])
    haircolor = str(data['hairColor'])

    print(skintone, eyecolor, skintype, haircolor)
    user_recommendations = recommend_products_by_user_features(skintone,eyecolor,skintype,haircolor)
    print(user_recommendations)
    # print()
    # print()
    print(recommend_products_by_user_features(skintone,eyecolor,skintype,haircolor))
    # print(recommend_products_by_user_features("Light","Green","Combination","Brunette"))
    #content_recommendation_data = content_recommendation('The Rice Polish Foaming Enzyme Powder')

    return jsonify({
        'user_recommendations': recommend_products_by_user_features(skintone,eyecolor,skintype,haircolor).to_dict(orient='records'),
        # 'content_recommendation': content_recommendation_data.to_dict(orient='records')
    })





@app.route('/content_recommend', methods=['POST'])
def content_recommend():
    data1 = request.get_json()
    productitem = data1['product']
  

    print(productitem)
  

    #content_recommendation_data = content_recommendation('The Rice Polish Foaming Enzyme Powder')
    content_recommendation_data = content_recommendation(productitem)
    return jsonify({
        'content_recommendation': content_recommendation_data.to_dict(orient='records')
    })

if __name__ == '__main__':
    app.run(debug=True)










