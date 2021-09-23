
from django.urls import path, include

from posts import views

urlpatterns = [
    path("latest-posts/", views.LatestPostList.as_view())
]
