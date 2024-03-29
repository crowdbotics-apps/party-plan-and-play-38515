# Generated by Django 2.2.28 on 2023-04-02 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_settings'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account_Settings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isactive', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Bank_Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('banke_name', models.TextField()),
                ('ac_name', models.TextField()),
                ('ac_no', models.IntegerField()),
                ('routing_no', models.IntegerField()),
                ('iban', models.TextField()),
                ('swift_code', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Budget',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField()),
                ('year', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('title', models.TextField()),
                ('detail', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Service_Type',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
            ],
        ),
    ]
