
from django.urls import path

urlpatterns = [


    path("posts/", RentalListAPIView.as_view()),
]
