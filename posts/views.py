from django.shortcuts import render
from rest_framework import serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets


from .models import Post
from .serializers import PostSerializer, POSTPostSerializer


class LatestPostList(APIView):
    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        # serializer = serializers.PostSerializer(data=request.data)
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)
        # serializer = PostSerializer(posts, many=True)

    def delete(self, request, *args, **kwargs):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            Post.objects.filter(id=request.data['id']).delete()
            return Response("Deleted")
        return Response(serializer.errors)
