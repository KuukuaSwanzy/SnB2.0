from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=False)
    description = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0.00)])
    stock = models.PositiveIntegerField(default=1)

    
    def __str__(self):
        return f"{self.name}"

    @property
    def is_in_stock(self):
        return self.stock > 0