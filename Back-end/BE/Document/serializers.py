from rest_framework import serializers

from Document.models import (CompanyDoc,HopDong)



class GetCompanyDocListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyDoc
        fields = '__all__'

class HopDongSerializer(serializers.ModelSerializer):
    class Meta:
        model = HopDong
        fields = '__all__'