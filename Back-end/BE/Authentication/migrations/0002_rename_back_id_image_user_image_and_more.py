# Generated by Django 4.2.3 on 2024-02-29 07:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='back_id_image',
            new_name='image',
        ),
        migrations.RemoveField(
            model_name='user',
            name='front_id_image',
        ),
    ]