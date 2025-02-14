from app.bmr import calculate_bmr


def test_calculate_bmr_male():
    """
    Test the calculate_bmr function for a male.

    Asserts that the BMR calculation for a height of 175 cm, weight of 70 kg, age of 25 years,
    and gender 'male' returns the expected value.
    """
    expected_bmr = 1724.052
    calculated_bmr = calculate_bmr(175, 70, 25, "male")
    assert (
        abs(calculated_bmr - expected_bmr) < 0.01
    ), f"Expected {expected_bmr} but got {calculated_bmr}"


def test_calculate_bmr_female():
    """
    Test the calculate_bmr function for a female.

    Asserts that the BMR calculation for a height of 165 cm, weight of 60 kg, age of 25 years,
    and gender 'female' returns the expected value.
    """
    expected_bmr = 1405.333
    calculated_bmr = calculate_bmr(165, 60, 25, "female")
    assert (
        abs(calculated_bmr - expected_bmr) < 0.01
    ), f"Expected {expected_bmr} but got {calculated_bmr}"
