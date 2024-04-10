# Generated by Django 4.2.3 on 2024-02-28 16:02

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Demand',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.TextField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('division_type', models.TextField(blank=True, max_length=50)),
                ('name', models.TextField(max_length=50)),
                ('image_url', models.ImageField(upload_to='assets/location')),
                ('position', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.TextField(max_length=50)),
                ('image_url', models.ImageField(upload_to='assets/car_type')),
                ('position', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='VehicleStatus',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('status', models.TextField(max_length=50)),
                ('position', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='VersionRelease',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('version_ios', models.CharField(default='1.0.1', max_length=10)),
                ('version_apk', models.CharField(default='1.0.1', max_length=10)),
                ('url_ios', models.CharField(default='templink', max_length=200)),
                ('url_apk', models.CharField(default='templink', max_length=200)),
            ],
        ),
    ]
