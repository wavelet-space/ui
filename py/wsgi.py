
import flask
from flask import Flask, Blueprint

from wui.components import *


bp = Blueprint("a", __name__)


class Dashboard:
    def __init__(self, name, content):
        self._name = name
        self._content = content

    @property
    def name(self) -> str:
        return self._name

    @property
    def content(self):
        return self._content

    def render(self):
        return self.content.render()
    

# ######################################################################### #  

@bp.route("/")
def index():
    
    dashboard = Dashboard(name="Dashboard", 
        content=Container(components=[
            Form(components=[
                Button(),
                Label(name="Label1"), 
                Slider(), 
                Label(name="Label2"), 
                Text()
            ], classes="form-block")
        ])
    ) 
    
    return flask.render_template("index.html", dashboard=dashboard)


@bp.route("/demos")
def demos():
    return flask.render_template("demos.html")


def main():
    
    app = Flask(
       __name__,
       static_folder="static",
       template_folder="templates"
    )
    
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    
    app.register_blueprint(bp)    
    
    HOST = "127.0.0.1"
    PORT = "5000"

    app.run(host=HOST, port=PORT, debug=True)


if __name__ == "__main__":
    main()