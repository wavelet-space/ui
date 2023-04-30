from setuptools import setup, find_packages

setup(
    name="wui",
    version="0.1.0",
    description="Simple web UI library",
    package_dir={".": "src"},
    packages=find_packages(),
    install_requires=[
        "flask"
    ]
)