from flask import Blueprint, request, jsonify
from .bmi import calculate_bmi
from .bmr import calculate_bmr

api_bp = Blueprint("api", __name__)


@api_bp.route("/bmi", methods=["POST"])
def bmi():
    """
    Calculate BMI (Body Mass Index).

    Expects a JSON payload with 'height' and 'weight' fields.

    Returns:
        JSON response with the calculated BMI value and HTTP status 200 if successful.
        JSON response with an error message and HTTP status 400 if data is missing.
    """
    data = request.get_json()
    height = data.get("height")
    weight = data.get("weight")
    if height and weight:
        bmi_value = calculate_bmi(height, weight)
        return jsonify({"bmi": bmi_value}), 200
    else:
        return jsonify({"error": "Missing data"}), 400


@api_bp.route("/bmr", methods=["POST"])
def bmr():
    """
    Calculate BMR (Basal Metabolic Rate).

    Expects a JSON payload with 'height', 'weight', 'age', and 'gender' fields.

    Returns:
        JSON response with the calculated BMR value and HTTP status 200 if successful.
        JSON response with an error message and HTTP status 400 if data is missing.
    """
    data = request.get_json()
    height = data.get("height")
    weight = data.get("weight")
    age = data.get("age")
    gender = data.get("gender")
    if height and weight and age and gender:
        bmr_value = calculate_bmr(height, weight, age, gender)
        return jsonify({"bmr": bmr_value}), 200
    else:
        return jsonify({"error": "Missing data"}), 400
