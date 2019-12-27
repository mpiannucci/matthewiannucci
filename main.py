import logging
import flask


logging.basicConfig(level=logging.DEBUG)

app = flask.Flask(__name__)


@app.route('/')
def landing():
	return flask.render_template('landing.html')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)