from django.shortcuts import render
from .models import *

# Create your views here.


def home (request):
    return render(request, 'index.html')

def license (request):
    prod = Product.objects.all()
    dot_prod = DotProduct.objects.all()
    tool_prod = ToolProduct.objects.all()
    context = {
        'products': prod,
        'dot_products': dot_prod,
        'tool_products': tool_prod,
    }
    return render(request, 'license-procurement.html', context)