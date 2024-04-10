from django.db import models
import uuid
from Authentication.models import User


# Create your models here.


class Notification(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    tieu_de = models.TextField(max_length=80, blank=False)
    noi_dung = models.TextField(max_length=300, blank=False)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    route = models.TextField(max_length=70, blank=True)
    index = models.PositiveIntegerField(default=0)
    type_noti = models.TextField(max_length=50, blank=True)
    content_id = models.TextField(max_length=35,  default= "", null = True)
    da_doc = models.BooleanField(default=False)
    danhcho = models.TextField(max_length=10,default="personal",null= False)

    def __str__(self):
        return self.tieu_de

    def mark_as_read(self):
        self.is_read = True
        self.save()
