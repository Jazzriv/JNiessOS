from django.conf import settings


SASS_EXECUTABLE = getattr(settings, "SASS_EXECUTABLE", "sass")
SASS_USE_CACHE = getattr(settings, "SASS_USE_CACHE", True)
SASS_CACHE_TIMEOUT = getattr(settings, "SASS_CACHE_TIMEOUT", 60 * 60 * 24 * 30) # 30 days
SASS_MTIME_DELAY = getattr(settings, "SASS_MTIME_DELAY", 10) # 10 seconds
SASS_OUTPUT_DIR = getattr(settings, "SASS_OUTPUT_DIR", "SASS_CACHE")
