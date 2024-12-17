
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-p#^qsee1b#344&)vl&q3dvvj1g9cvn&7s%v7do!$lf+is%%0t('

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['tiendacaninosds.onrender.com', 'localhost', '127.0.0.1']


# Application definition

INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'rest_framework_simplejwt',
    #'rest_framework.authtoken',
    'api',
    'rest_framework_simplejwt.token_blacklist',
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.security.SecurityMiddleware', # MEGAMENTE Requerido!!
    #'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware', # Para esta app no es necesario, pero es mejor manterlo por seguridad, implementar CSRF_TRUSTED_ORIGINS 
    #'django.contrib.auth.middleware.AuthenticationMiddleware', #Definitivamente este no va, pero toca hacer uno bien solido.
    'django.middleware.clickjacking.XFrameOptionsMiddleware', # Backend no usa iframes, pero es buena practica, configurarlo como SAMEORIGIN
]

CORS_ALLOW_ALL_ORIGINS = True

REST_FRAMEWORK = {
    #'DEFAULT_AUTHENTICATION_CLASSES': [
    #    'rest_framework_simplejwt.authentication.JWTAuthentication',  # Usar JWT como método de autenticación
    #],
    # 'DEFAULT_PERMISSION_CLASSES': [
    #     'rest_framework.permissions.IsAuthenticated',  # Requiere autenticación para las vistas
    # ],
}

X_FRAME_OPTIONS = 'SAMEORIGIN'

ROOT_URLCONF = 'TiendaCaninosds.urls'

WSGI_APPLICATION = 'TiendaCaninosds.wsgi.application'

#  if is need change the autentications shapes, change the authentication backends 


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'sebas',
        'HOST': 'localhost',
        'PORT': '5432',
        'OPTIONS':{
            'options': '-c search_path=mascotadb,public'
        }
    }}

AUTH_USER_MODEL = 'api.Usuario'

# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
