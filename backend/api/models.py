from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    #Custom fields
    full_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)

    email = models.EmailField(max_length=255,unique=True)
    is_active = models.BooleanField(default=True)

    balance = models.DecimalField(decimal_places=3,max_digits=7,default=1000) # set 1000 for testing purpose 

    def __str__(self):
        return self.full_name 
    
    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user


class Courses(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.DecimalField(decimal_places=3,max_digits=7)
    limit = models.IntegerField()
    available = models.BooleanField(default=True)
    launch_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="images/", max_length=255)

    def __str__(self):
        return self.title


class Enrollment(models.Model):
    student = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    course = models.ForeignKey(Courses , on_delete=models.CASCADE)
    enroll_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('student', 'course')    

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"  
    

class Rates(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    body = models.TextField()
    image = models.ImageField(upload_to="images/",max_length=255)