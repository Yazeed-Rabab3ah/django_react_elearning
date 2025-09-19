from django.contrib import admin
from .models import CustomUser, Courses, Enrollment, ContactMessage, Rates



admin.site.register(CustomUser)
admin.site.register(Courses)
admin.site.register(Enrollment)
admin.site.register(ContactMessage)
admin.site.register(Rates)


