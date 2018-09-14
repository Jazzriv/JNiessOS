Django SASS
===================

Django SASS provides template tags to compile SASS into CSS from templates.
It works with both inline code and extenal files.

Installation
************

1. Add ``"sass"`` to ``INSTALLED_APPS`` setting.
2. Make sure that you have ``sass`` executable installed. See
   `SASS official site <http://sass-lang.com>`_ for details.
3. Optionally, you can specify the full path to ``sass`` executable with ``SASS_EXECUTABLE`` setting.
   By default it's set to ``sass``.

Example Usage
*************

Inline
------

::

    {% load sass %}
    
    <style>
      {% inlinesass %}
        #header {
          h1 {
            font-size: 26px;
            font-weight: bold;
          }
          p { font-size: 12px;
            a { text-decoration: none;
              &:hover { border-width: 1px }
            }
          }
        }
      {% endsass %}
    </style>

renders to

:: 

      <style>
        #header h1 {
          font-size: 26px;
          font-weight: bold;
        }
        #header p {
          font-size: 12px;
        }
        #header p a {
          text-decoration: none;
        }
        #header p a:hover {
          border-width: 1px;
        }
      </style>


External file
-------------

::

    {% load sass %}
    
    <link rel="stylesheet" href="{{ STATIC_URL}}{% sass "path/to/styles.scss" %}" />
    
renders to

::

    <link rel="stylesheet" href="/media/SASS_CACHE/path/to/styles-91ce1f66f583.css" />

Note that by default compiled files are saved into ``SASS_CACHE`` folder under your ``STATIC_ROOT`` (or ``MEDIA_ROOT`` if you have no ``STATIC_ROOT`` in your settings).
You can change this folder name with ``SASS_OUTPUT_DIR`` setting.

Note that all relative URLs in your stylesheet are converted to absolute URLs using your ``STATIC_URL`` setting.


Settings
********

``SASS_EXECUTABLE``
    Path to SASS compiler executable. Default: ``"sass"``.

``SASS_OUTPUT_DIR``
    Output directory for compiled external stylesheets. It's relative to ``STATIC_ROOT``. Default: ``"SASS_CACHE"``.
    
``SASS_USE_CACHE``
    Whether to use cache for inline styles. Default: ``True``.
    
``SASS_CACHE_TIMEOUT``
    Cache timeout for inline styles (in seconds). Default: 30 days.
    
``SASS_MTIME_DELAY``
    Cache timeout for reading the modification time of external stylesheets (in seconds). Default: 10 seconds.
