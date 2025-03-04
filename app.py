from flask import Flask, request, render_template_string
import csv

app = Flask(__name__)
@app.route('/')

def index():
	return render_template_string("""
 	<!DOCTYPE html>
    	<html lang="en">
    	<head>
      		<meta charset="UTF-8">
      		<title>Local Form</title>
    	</head>
    	<body>
     	<section class = "formulario" id = "formulario">
		<h2 class = "heading">Me puedes <span>escribir en:</span></h2>
		
		<form id = "form" action="/submit" method="post">
			<div class = "input-box">
				<input type = "text" id = "nombre" name = "nombre" placeholder = "*Nombre Completo" required>
				<input type = "email" id = "email" name = "email" placeholder = "*Dirección de e-mail" required>
			</div>
			<div class = "input-box">
				<input type = "number" id = "numero" name = "numero" placeholder = "*Número de teléfono" required>
				<input type = "text" id = "asunto" name = "asunto" placeholder = "*Asunto" required>
			</div>
			<div class = "input-box">
				<textarea type = "text" id = "texto" name = "texto" cols = "30" rows = "10" placeholder = "*Tu mensaje" required></textarea>
			</div>
			
			<!------------- Botón de enviar ------------->
			<input type = "submit" value = "Enviar" class = "btn">
			<!--<input type = "submit" onclick = "enviarForm(event)" id = "enviar" value = "Enviar" class = "btn">-->
			
		</form>
		<div class="warning" id="warningMessage">
			<p>*Requerido.</p>
			<p>**Asegúrese de ingresar información válida. No será compartida.</p>
		</div>
		<br>
		<p id = "respuesta"></p>
	</section>
     """)

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
