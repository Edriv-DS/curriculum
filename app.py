from flask import Flask, request, jsonify
import csv

app = Flask(__name__)
@app.route('/guardar', methods=['POST'])

def guardar_datos():
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
	app.run(debug=False)