# Generated by Django 3.2.14 on 2022-07-19 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0005_alter_todo_done_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='todo_title',
            field=models.CharField(max_length=300),
        ),
    ]
