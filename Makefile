.PHONY: clean venv run docker-build docker-run test frontend serve-frontend

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

docker-build:
	docker build -t health_microservice .

docker-run:
	docker run -p 80:8080 health_microservice

docker-clean:
	docker stop $(docker ps -a -q)
	docker rm $(docker ps -a -q)
	docker rmi $(docker images -q)

test:
	. $(VENV_DIR)/bin/activate && pytest tests/

frontend:
	# Serve frontend on http://localhost:8000
	python -m http.server --directory frontend 8000