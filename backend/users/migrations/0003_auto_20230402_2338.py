# Generated by Django 2.2.28 on 2023-04-02 23:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_user_role'),
        ('users', '0002_auto_20230330_1227'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='account_id',
            field=models.ManyToManyField(blank=True, related_name='user_account_id', to='home.Bank_Account'),
        ),
        migrations.AddField(
            model_name='user',
            name='customer_id',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_customer_id', to='home.Customer'),
        ),
        migrations.AddField(
            model_name='user',
            name='mobile',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='notification_id',
            field=models.ManyToManyField(blank=True, related_name='user_notification_id', to='home.Notification'),
        ),
        migrations.AddField(
            model_name='user',
            name='review_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_review_id', to='home.Reviews'),
        ),
        migrations.AddField(
            model_name='user',
            name='role_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_role_id', to='home.User_Role'),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]
