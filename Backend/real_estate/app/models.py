from django.db import models
import os

class wilaya(models.TextChoices):
     adrar = '1'
     chlef = '2'
     laghouat = '3'
     oum_el_bouaghi = '4'
     batna = '5'
     bejaia = '6'
     biskra = '7'
     bechar = '8'
     blida = '9'
     bouira = '10'
     tamanrasset = '11'
     tebessa = '12'
     tlemcen = '13'
     tiaret = '14'
     tizi_ouzou = '15'
     alger = '16'
     djelfa = '17'
     jijel = '18'
     setif = '19'
     saida = '20'
     skikda = '21'
     sidi_bel_abbes = '22'
     annaba = '23'
     guelma = '24'
     constantine = '25'
     medea = '26'
     mostaganem = '27'
     msila = '28'
     mascara = '29'
     ouargla = '30'
     oran = '31'
     el_bayadh = '32'
     illizi = '33'
     bordj_bou_arreridj = '34'
     boumerdes = '35'
     el_taref = '36'
     tindouf = '37'
     tissemsilt = '38'
     el_oued = '39'
     khenchela = '40'
     souk_ahras = '41'
     tipaza = '42'
     mila = '43'
     ain_defla = '44'
     naama = '45'
     ain_temouchent = '46'
     ghardaia = '47'
     relizane = '48'
     timimoun = '49'
     bordj_badji_mokhtar = '50'
     ouled_djellal = '51'
     beni_abbes = '52'
     in_salah = '53'
     in_guezzam = '54'
     touggourt = '55'
     djanet = '56'
     mghair = '57'
     meniaa = '58'


   #enumerations
class Categorie(models.TextChoices):
     vente = 'V'
     echange = 'E'
     location = 'L'
     location_pour_vacances = 'LV'
    
class Type_bien(models.TextChoices):
     terrain = 'Terrain'
     terrain_agricole = 'Terrain Agricole'
     appartement = 'Appartement'
     maison = 'Maison'
     bungalow = 'Bungalow'
     villa = 'Villa'
     loft = 'Loft'
     immeuble = 'Immeuble'
     garage = 'Garage'
     hangar = 'Hangar'
     ferme = 'Ferme'
     chalet = 'Chalet'
     parking = 'Parking'
     local_commercial = 'Local commercial'
     local_industriel = 'Local industriel'



class Annonce(models.Model):

    
    idannonce = models.AutoField(db_column='idAnnonce', primary_key=True)  # Field name made lowercase.
    titre = models.TextField(blank=True, null=True)
    categorie = models.CharField(max_length=2,choices=Categorie.choices)
    type_bien = models.CharField(max_length=20,choices=Type_bien.choices)
    surface = models.FloatField()
    description = models.TextField(blank=True, null=True)
    prix = models.FloatField()
    date_depot = models.DateTimeField()
    idannonceur = models.ForeignKey('Personne', db_column='idAnnonceur',on_delete=models.CASCADE)  # Field name made lowercase.
    idlocalisation = models.ForeignKey('Localisation', db_column='idLocalisation',on_delete=models.CASCADE)  # Field name made lowercase.
    idphotos = models.ForeignKey('Photos', db_column='idPhotos', on_delete=models.PROTECT)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'annonce'


class Localisation(models.Model):
    idlocalisation = models.AutoField(primary_key=True)
    wilaya = models.CharField(max_length=2,choices=wilaya.choices)
    commune = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'localisation'

class Personne(models.Model):
    idpersonne = models.AutoField(db_column='idPersonne', primary_key=True)  # Field name made lowercase.
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    telephone = models.CharField(max_length=255)
    est_administrateur = models.IntegerField(blank=True, null=True)
    est_utilisateur = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'personne'


class Messages(models.Model):
    idmessages = models.AutoField(db_column='idMessages', primary_key=True)  # Field name made lowercase.
    expediteur = models.ForeignKey('Personne', db_column='expediteur', on_delete=models.CASCADE)  # Field name made lowercase.
    id_annonce = models.ForeignKey(Annonce, db_column='id_annonce', on_delete=models.CASCADE)  # Field name made lowercase.
    contenu_message = models.TextField()

    class Meta:
        managed = True
        db_table = 'messages'

class Photos(models.Model):
    idphotos = models.AutoField(primary_key=True)
    photo = models.ImageField(upload_to='images/')
    class Meta:
        managed = True
        db_table = 'photos'
        
        
        