from logging import raiseExceptions
from rest_framework import serializers
from productos.models import producto,imagenProductos

class productoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = producto
        fields = (
            "codigo","nombre", "descripcion"
        )


class imagenProductosSerializer(serializers.Serializer):

    imagen = serializers.ImageField()
    producto = serializers.CharField()

    def validate(self, attrs):
        
        if not producto.objects.filter(codigo = attrs["producto"]).exists():
            raise serializers.ValidationError('No existe la pelicula')


        attrs["producto"] = producto.objects.get(codigo = attrs["producto"]) 
        return attrs

    def create(self, validated_data):
        
        return imagenProductos(**validated_data)

class imagenesProductosSerializer(serializers.Serializer):

    producto = serializers.CharField()

    def validate(self, attrs):
        
        if not producto.objects.filter(codigo = attrs["producto"]).exists():
            raise serializers.ValidationError('No existe la pelicula')

        return attrs

    def create(self, validated_data):

        return imagenProductos.objects.filter(producto = validated_data["producto"])