import uuid
from functools import partial

from django.db import models
from Authentication.models import User,KhachHang


from ultis.helper import custom_user_image_path


class BaiTimViec(models.Model):
    custom_image_path = partial(custom_user_image_path, path="rental")

    STATUS_CHOICES = (
        ('rent', 'Đang cho thuê'),
        ('ready', 'Sẵn sàng'),
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tieu_de = models.CharField(null=False, max_length=200)
    chi_tiet = models.TextField()
    trang_thai = models.CharField(max_length=20, choices=STATUS_CHOICES, default="ready")
    location = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    sub_service = models.CharField(max_length=200)

    khach_hang = models.ForeignKey(KhachHang, on_delete=models.CASCADE)
    image_desc1 = models.ImageField(upload_to=custom_image_path, default='/')
    ngay_khoi_tao = models.DateTimeField(auto_now_add=True)


