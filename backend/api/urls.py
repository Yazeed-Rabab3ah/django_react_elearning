from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import EnrollCourseView, CourseListView, ContanctMessageCreateView ,RatesListView, CourseDetailsView

urlpatterns = [
    path('courses/<int:course_id>/enroll/', EnrollCourseView.as_view(), name='enroll-course'),
    path('courses/', CourseListView.as_view(), name='course-list'),
    path('courses/<int:id>/', CourseDetailsView.as_view(), name='course-detail'),
    path('contact/', ContanctMessageCreateView.as_view(), name='contact-form'),
    path('rates/',RatesListView.as_view(),name='rates'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)    