from django.shortcuts import render

from .models import CustomUser, Enrollment, Courses, ContactMessage, Rates
from .serializers import CustomUserSerializer,EnrollmentSerializer, CourseSerializer, ContactMessageSerializer, RateSerialzer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated,AllowAny


class UserCreateView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]

    
class EnrollCourseView(generics.CreateAPIView):
    serializer_class = EnrollmentSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        course_id = kwargs.get('course_id')
        course = Courses.objects.get(id=course_id)

        enrollment_data = {
            "student": request.user.id,  
            "course": course.id
        }

        serializer = self.get_serializer(data=enrollment_data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Enrollment successful!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class CourseListView(generics.ListAPIView):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [AllowAny]

class ContanctMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]

class RatesListView(generics.ListAPIView):
    queryset = Rates.objects.all()
    serializer_class = RateSerialzer
    permission_classes = [AllowAny]

class CourseDetailsView(generics.RetrieveAPIView):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializer
    lookup_field = 'id' 
    permission_classes = [AllowAny]
