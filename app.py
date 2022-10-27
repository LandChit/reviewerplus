from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

#can double as a creation page
@app.route('/modification')
def create():
    return 'modification page'

@app.route('/review')
def review():
    return 'reviewing page'

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5500, debug=True)