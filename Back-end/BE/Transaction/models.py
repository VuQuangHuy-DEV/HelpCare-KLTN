from django.db import models
import uuid


class GiaoDich(models.Model):
    STATUS_CHOICES = (
        ('waiting', 'Chờ xác nhận'),
        ('process', 'Đang tiến hành'),
        ('successful', 'Thành công'),
        ('failed', 'Thất bại'),
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    thoi_gian = models.DateTimeField(auto_now=True)
    trang_thai = models.CharField(max_length=20, choices=STATUS_CHOICES, default="waiting")

    def __str__(self):
        return f'Giao dịch {self.trang_thai}'


class ChiTietGiaoDich(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    ten_dich_vu = models.CharField(max_length=250)
    don_gia = models.IntegerField()
    thue_VAT = models.IntegerField()
    phu_thu = models.IntegerField()
    ma_giao_dich = models.ForeignKey(GiaoDich, on_delete=models.CASCADE,null=False)

    def __str__(self):
        return f'{self.ten_dich_vu} có đơn gia {self.don_gia}'