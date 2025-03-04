from flask import Flask, request, render_template_string
import csv

app = Flask(__name__)
@app.route('/submit', methods=['POST'])
def submit():
	nombre = request.form.get('nombre')
	email = request.form.get('email')
	numero = request.form.get('numero')
	asunto = request.form.get('asunto')
	texto = request.form.get('texto')
	 # Process the data (for example, print to the console or save to a file/database)
    	print(f"Received submission: Username={username}, Email={email}")
    
    	# Respond back to the client
   	 return "Thank you for your submission!"

if __name__ == '__main__':
    # Run on port 5000 so that ngrok can tunnel to it
    app.run(port=5000, debug=False)
