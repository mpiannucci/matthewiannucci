import logging
import flask


logging.basicConfig(level=logging.DEBUG)

app = flask.Flask(__name__)


@app.route('/')
def landing():
	return flask.render_template('landing.html')

@app.route('/portfolio')
def code():
	return flask.render_template('portfolio.html')

@app.route('/photography')
def photography():
	return flask.render_template('photography.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
    #app.run(use_reloader=False, debug=True)
