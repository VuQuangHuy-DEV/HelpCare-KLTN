
from django.contrib import admin
from .models import NhanVien,KhachHang,User
# Đăng ký model vào trang quản trị
admin.site.register(KhachHang)
admin.site.register(NhanVien)
admin.site.register(User)
