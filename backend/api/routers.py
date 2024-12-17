from django.urls import path
from rest_framework.routers import DefaultRouter
from api.viewsset.userview import UserViewSet
from api.viewsset.loginandlogoutview import Login, Logout

router = DefaultRouter(use_regex_path=False)
router.register(r'users', UserViewSet, basename='users')

urlpatterns = [
    path('login',Login.as_view(),name='login'), 
    path('logout',Logout.as_view(),name='logout'), 
]

urlpatterns += router.urls