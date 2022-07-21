from django.shortcuts import render,redirect,get_object_or_404
from .models import Todo
from django.utils import timezone
from .forms import TodoForm
from .forms import UpdTodoForm
from django.contrib.auth.models import User


# Create your views here.
def todo_list(request):
    todos=Todo.objects.filter(created_date__lte=timezone.now()).order_by('completion_date')
    return render(request, 'todo/todo_list.html', {'todos':todos})

def add_todo(request):
    if request.method=='GET':
          return render(request,'todo/add_list.html',{'form':TodoForm()})
    else:
        # try:
        form=TodoForm(request.POST)
        tod=form.save(commit=False)
        
        tod.save()
        return redirect('todo_list')
        # except ValueError:
        #      return render(request,'register/genre.html',{'form':GenreForm(),'error':'Enter details appropriately!'})
       
def viewtodo(request,todo_pk):
    todo=get_object_or_404(Todo, pk=todo_pk)
    if request.method=='GET':
        form=UpdTodoForm(instance=todo)
        return render(request,'todo/update_todo.html',{'todo':todo,'form':form})
    else:
        try:
            form=UpdTodoForm(request.POST,instance=todo)
            form.save()
            return redirect('todo_list')
        except ValueError:
            return render(request,'todo/update_todo.html',{'todo':todo,'form':form,'error':'Bad info'})

def deletetodo(request,todo_pk):
    todo=get_object_or_404(Todo, pk=todo_pk)
    if request.method=='POST':
         todo.completion_date=timezone.now()
         todo.delete()
         return redirect('todo_list')

def completetodo(request,todo_pk):
     todo=get_object_or_404(Todo, pk=todo_pk)
     if request.method=='POST':
         todo.completion_date=timezone.now()
         todo.done_status=True;
         todo.save()
         return redirect('todo_list')