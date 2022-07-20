from django.urls import path
from . import views

urlpatterns=[
    path('', views.todo_list,name='todo_list'),
    path('add/', views.add_todo,name='add_todo'),
    path('todo/<int:todo_pk>', views.viewtodo,name='viewtodo'),
    path('todo/<int:todo_pk>/delete', views.deletetodo,name='deletetodo'),

]