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

	if not nombre or not email or not numero or not asunto or not texto:
		return jsonify({"error": "Faltan datos"}), 400
	with open("datos.csv", "a", newline="", encoding="utf-8") as archivo:
		escritor = csv.writer(archivo)
		escritor.writerow([nombre, email, numero, asunto, texto])
	return jsonify({"mensaje": "Datos guardados correctamente"}), 200

if __name__ == '__main__':
	from waitress import
	serve(app, host="0.0.0.0", port=5000)
    
