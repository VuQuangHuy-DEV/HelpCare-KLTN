from django.urls import path
from .views import ListCreateGiaoDichView, ListGetGiaoDichByKHIDAPIView,ThongKeAPIView

urlpatterns = [
    path('giaodich/', ListCreateGiaoDichView.as_view(), name='your-model-list'),
    path('giaodich/getByKhachHangId/<str:id>/', ListGetGiaoDichByKHIDAPIView.as_view()),
    path('thongke/', ThongKeAPIView.as_view()),

]
