import uuid
from django.db import models
from Authentication.models import KhachHang


class BaiThue(models.Model):
    STATUS_CHOICES = (
        ('waiting', 'Chờ báo giá'),
        ('cancel', 'Hủy bỏ'),
        ('approved', 'Đã xác nhận'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tieu_de = models.CharField(max_length=100)
    yeu_cau = models.CharField(max_length=100, blank=True)
    chi_tiet = models.TextField()
    trang_thai = models.CharField(max_length=20, choices=STATUS_CHOICES, default="waiting")
    start_date = models.DateField()
    departure = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    khach_hang = models.ForeignKey(KhachHang,default=uuid.uuid4, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.tieu_de
