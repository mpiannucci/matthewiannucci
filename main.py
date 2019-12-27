import logging
import flask


logging.basicConfig(level=logging.DEBUG)

app = flask.Flask(__name__)


@app.route('/')
def landing():
	return flask.render_template('landing.html')

@app.route('/code')
def code():
	return flask.render_template('code.html')

@app.route('/photography')
def photography():
	return flask.render_template('photography.html')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)