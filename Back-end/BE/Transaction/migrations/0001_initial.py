# Generated by Django 4.2.3 on 2024-03-14 16:54

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GiaoDich',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('thoi_gian', models.DateTimeField(auto_now=True)),
                ('trang_thai', models.CharField(choices=[('waiting', 'Chờ xác nhận'), ('process', 'Đang tiến hành'), ('successful', 'Thành công'), ('failed', 'Thất bại')], default='waiting', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='ChiTietGiaoDich',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('ten_dich_vu', models.CharField(max_length=250)),
                ('don_gia', models.IntegerField()),
                ('thue_VAT', models.IntegerField()),
                ('phu_thu', models.IntegerField()),
                ('ma_giao_dich', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Transaction.giaodich')),
            ],
        ),
    ]