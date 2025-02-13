from app.bmi import calculate_bmi


def test_calculate_bmi():
    """
    Test the calculate_bmi function.

    Asserts that the BMI calculation for a height of 1.75 meters and a weight of 70 kilograms
    returns the expected value of 22.857142857142858.
    """
    assert calculate_bmi(1.75, 70) == 22.857142857142858
