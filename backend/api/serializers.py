from .models import CustomUser, Enrollment, Courses, ContactMessage, Rates
from rest_framework import serializers

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username','email','password','phone_number','full_name']
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        print(validated_data)
        user = CustomUser.objects.create_user(**validated_data)
        return user     
    

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = ['student', 'course', 'enroll_date']
        read_only_fields = ['enroll_date']

    def validate(self, data):
        student = data['student']
        course = data['course']

        # Check if the user is already enrolled
        if Enrollment.objects.filter(student=student, course=course).exists():
            raise serializers.ValidationError("You are already enrolled in this course.")

        # Check if the user has enough balance
        if student.balance < course.price:
            raise serializers.ValidationError("Insufficient balance to enroll in this course.")

        # Check if course limit is reached
        if Enrollment.objects.filter(course=course).count() >= course.limit:
            raise serializers.ValidationError("Course is full. Enrollment limit reached.")

        return data

    def create(self, validated_data):
        student = validated_data['student']
        course = validated_data['course']

        
        student.balance -= course.price
        student.save()

        return super().create(validated_data)
    
class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'


class RateSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Rates 
        fields = '__all__'