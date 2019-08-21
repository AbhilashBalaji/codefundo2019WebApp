from argparse import ArgumentParser

import flask
from flask import Flask, request, render_template, session, redirect, url_for
import json
import os
app = Flask(__name__)

@app.route('/verify')
def base():
    context = {
        'context' : 'context'
    }
    template = 'publicHome.html'
    return render_template(template, context=context)

@app.route('/add')
def add():
    context = {
        'context' : 'context'
    }
    template = 'addVote.html'
    return render_template(template, context=context)

@app.route('/test')
def test():
    context = {
        'context' : 'context'
    }
    template = 'test.html'
    return render_template(template, context=context)

if __name__ == '__main__':
    app.secret_key = os.urandom(12)
    parser = ArgumentParser()
    parser.add_argument(
        '-p',
        '--port',
        default=5000,
        type=int,
        help='port to listen on'
    )
    parser.add_argument(
        '-ht',
        '--host',
        default='127.0.0.1',
        type=str,
        help='peer\'s host'
    )
    args = parser.parse_args()

    port = args.port
    host = args.host

    address = f'{host}:{port}'

    app.run(host=host, port=port, debug=True)