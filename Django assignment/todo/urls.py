from django.urls import path
from . import views

urlpatterns=[
    path('', views.todo_list,name='todo_list'),
    path('add/', views.add_todo,name='add_todo'),
    path('todo/<int:todo_pk>', views.updatetodo,name='updatetodo'),
    path('todo/<int:todo_pk>/delete', views.deletetodo,name='deletetodo'),
    path('todo/<int:todo_pk>/complete', views.completetodo,name='completetodo'),

]