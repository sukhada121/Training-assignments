from django import forms
from todo.models import Todo
from django.forms import ModelForm


class TodoForm(ModelForm):
    class Meta:
        model=Todo
        fields=['todo_title','task_detail','completion_date']


class UpdTodoForm(ModelForm):
    class Meta:
        model=Todo
        fields=['todo_title','task_detail','completion_date','done_status']