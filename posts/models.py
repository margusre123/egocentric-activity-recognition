from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    # slug = models.SlugField()

    # class Meta:
    #     verbose_name = _("")
    #     verbose_name_plural = _("s")

    def __str__(self):
        return self.title

    # def get_absolute_url(self):
    #     return f'/{self.slug}/'
