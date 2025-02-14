def calculate_bmr(height, weight, age, gender):
    """
    Calculate BMR (Basal Metabolic Rate).

    Args:
        height (float): The height of the individual in centimeters.
        weight (float): The weight of the individual in kilograms.
        age (int): The age of the individual in years.
        gender (str): The gender of the individual ('male' or 'female').

    Returns:
        float: The calculated BMR value.

    Raises:
        ValueError: If the gender is not 'male' or 'female'.
    """
    if gender.lower() == "male":
        return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    elif gender.lower() == "female":
        return 447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age)
    else:
        raise ValueError("Gender should be 'male' or 'female'")
