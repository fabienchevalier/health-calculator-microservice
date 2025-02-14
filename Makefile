.PHONY: clean venv run docker-up docker-down test frontend

# Custom name for the virtual environment
VENV_DIR = .venv

clean:
	rm -rf $(VENV_DIR)
	find . -type f -name '*.pyc' -delete

venv:
	python3 -m venv $(VENV_DIR)
	. $(VENV_DIR)/bin/activate && pip install -r requirements.txt

run:
	. $(VENV_DIR)/bin/activate && python run.py

docker-up:
	docker compose up -d

docker-down:
	docker compose down

test:
	. $(VENV_DIR)/bin/activate && pytest tests/

frontend:
	cd frontend && node server.js