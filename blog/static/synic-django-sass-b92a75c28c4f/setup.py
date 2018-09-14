from setuptools import setup, find_packages
import os


def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()


README = read('README.rst')
CHANGES = read('CHANGES.rst')


setup(
    name = "django-sass",
    packages = find_packages(),
    version = "0.1",
    author = "Adam Olsen",
    author_email = "arolsen@gmail.com",
    url = "https://bitbucket.org/synic/django-sass/src",
    description = "Django template tags to compile SASS into CSS",
    long_description = "\n\n".join([README, CHANGES]),
    classifiers = [
        'Development Status :: 4 - Beta',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Internet :: WWW/HTTP',
    ],
    keywords = ["sass", "css"],
)
