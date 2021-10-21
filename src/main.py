from waitress import serve
from server import app
from config import *

if __name__ == "__main__":
	print(f"Server has been started on port {PORT}..")
	serve(app, host=HOST, port=PORT)