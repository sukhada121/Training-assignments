from django.db import models
from django.conf import settings
from django.utils import timezone


# Create your models here.
class Todo(models.Model):

    todo_title = models.CharField(max_length=300)
    task_detail = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    completion_date = models.DateTimeField(blank=True, null=True)
    done_status=models.BooleanField(default=False,null=True)


    def publish(self):
        self.created_date = timezone.now()
        self.save()
    
    def __str__(self):
        return self.todo_title