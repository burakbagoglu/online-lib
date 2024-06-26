from django.contrib.auth.decorators import login_required
from django.shortcuts import render

# Create your views here.

from .models import Room

@login_required
def rooms(request):
    rooms = Room.objects.all()

    return render(request, "rooms/rooms.html", {"rooms": rooms})

@login_required
def room(request, slug):
    room = Room.objects.get(slug=slug)
    return render(request, "rooms/room.html", {"room": room})