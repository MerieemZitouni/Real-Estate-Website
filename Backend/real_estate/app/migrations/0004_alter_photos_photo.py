# Generated by Django 4.1.4 on 2023-01-11 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_photos_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photos',
            name='photo',
            field=models.ImageField(upload_to='images/test.jpg'),
        ),
    ]
