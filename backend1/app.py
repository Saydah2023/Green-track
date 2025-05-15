from flask import Flask, request, jsonify

app = Flask(__name__)
data = []

@app.route("/api/emissions", methods=["GET", "POST"])
def emissions():
    if request.method == "POST":
        new_data = request.json
        data.append(new_data)
        return jsonify({"message": "Data added", "data": new_data}), 201
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
