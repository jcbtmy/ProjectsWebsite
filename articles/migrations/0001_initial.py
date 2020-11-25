# Generated by Django 3.1.2 on 2020-11-20 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField()),
                ('category', models.CharField(max_length=8)),
                ('site', models.CharField(max_length=100)),
                ('created', models.DateField(auto_now_add=True)),
            ],
        ),
    ]