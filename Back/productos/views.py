from django.shortcuts import render
from rest_framework.views import APIView
# Create your views here.
from rest_framework.response import Response
from rest_framework import viewsets

import collections 
import demoFletx.settings as settings
import os

from django.urls import path
# Models
from productos.models import producto,imagenProductos
#serializer
from productos.serializers import productoSerializer,imagenesProductosSerializer,imagenProductosSerializer
from django.http import HttpResponse
import traceback

class productoView(viewsets.ModelViewSet):
    
    queryset = producto.objects.all()
    serializer_class = productoSerializer
    


class imagenProductoView(APIView):
    
    def get(self,request,*args,**kwargs):
        
        producto = self.kwargs["producto"]

        serializer = imagenesProductosSerializer(data = {"producto" : producto})
        serializer.is_valid(raise_exception=True)

        objects = serializer.save()
        

        return Response(data=[{"id" : x.id} for x in objects])

    def post(self,request,*args,**kwargs):

        for imagen in request.data.getlist("imagen"):

            _dict ={} 
            _dict["imagen"] = imagen
            _dict["producto"] = request.data.get("producto")
            serializer = imagenProductosSerializer(data = _dict)
            serializer.is_valid(raise_exception=True)

            imagen = serializer.save()
            imagen.save()

        return Response(data={"data" : "created"})


def get_img(request,id,**kwargs):

            imagen = imagenProductos.objects.get(id = id)

            # print (imagen,settings.BASE_DIR, os.path.join(settings.BASE_DIR,"Hola a todos"))

            _imagen = imagen.imagen.url.replace("/",".")
            _imagen = _imagen.split(".")
            print(_imagen)
            _imagen = _imagen[2] + "." + _imagen[3]
            try:
                with open(os.path.join(settings.BASE_DIR,"images","images",_imagen),"rb") as f:
                    return HttpResponse(f.read(), content_type="image/{}".format(imagen.imagen.url.split(".").pop()))
            except IOError:
                print (traceback.format_exc())
                return Response(data ={"mensaje" : "recuso no encontrado"})
        
        