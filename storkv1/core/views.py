from django.shortcuts import render, redirect
from django.contrib.auth import login


from .forms import SignUpForm,DetailForm
# Create your views here.

def index(request):
    return render(request, "core/frontpage.html")

def signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        department = DetailForm(request.POST)

        if form.is_valid() and department.is_valid():
            user = form.save()
            detay = department.save(commit=False)
            detay.user = user
            detay.save()

            login(request, user)
            return redirect("frontpage")
    else:
        form = SignUpForm()
        department = DetailForm()
    return render(request, "core/signup.html", {"form" : form, "department": department})