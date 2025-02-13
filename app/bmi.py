def calculate_bmi(height, weight):
    """
    Calculate BMI (Body Mass Index).

    Args:
        height (float): The height of the individual in meters.
        weight (float): The weight of the individual in kilograms.

    Returns:
        float: The calculated BMI value.
    """
    return weight / (height**2)
