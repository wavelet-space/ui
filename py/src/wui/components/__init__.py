
from string import Template


class Component:
    def __init__(self, **options):
        self.options = options

    def render(self):
        ...


class Container:
    def __init__(self, components: list[Component] = None):
            self.components = [] if components is None else components 

    def render(self):
        result = "\n".join(component.render() for component in self.components)
        print(result)
        return "<div class='container'>" + result + "</div>"


class Form:
    def __init__(self, components: list[Component] = None, classes=None):
            self.classes = classes
            self.components = [] if components is None else components 

    def render(self):
        result = "\n".join(component.render() for component in self.components)
        print(result)
        return f"<form class='{self.classes}'>" + result + "</form>"



# HTML Components

class Button(Component):
    def render(self):
        return "<button>Button</button>"

## Input Controls

class Control: # Protocol
    ...


class Label(Component):

    def __init__(self, **options):
        super().__init__(**options)

    def render(self):
        return f"<label>{self.options.get('name')}</label>"


class Input(Component):

    _type: str = None

    def __init__(self, **options):
        super().__init__(**options)

    @property
    def type(self) -> str:
        return self._type  
    
    def render(self) -> str:

        result = Template(
            f"<input id='$id' name='$name' type='{self.type}' value=$default_value />"
        )

        return result


class Text(Input):
    _type = "text"

    def __init__(self, **options):
        super().__init__(**options)        
    
    def render(self):
        return super().render().substitute(dict(id="some-id", name="some-name", default_value="default_value"))


# class Button(Input):
#     _type="button"
    

class Slider(Input):
    _type = "range" 

    def render(self):
        minimum_value = 0 
        maximum_value = 100 
        default_value = 50
        result = super().render().substitute({
            "default_value": default_value, 
            "minimum_value": minimum_value, 
            "maximum_value": maximum_value,
            "id": "some-id",
            "name": "some-name"
        })
        return result
