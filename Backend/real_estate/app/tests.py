from selenium import webdriver
from django.test import LiveServerTestCase

class AnnonceCreationTest(LiveServerTestCase):

    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    def test_create_annonce(self):
        # Open the website
        self.browser.get(self.live_server_url)

        # Click the create announcement button
        create_annonce_button = self.browser.find_element_by_id("create-annonce-button")
        create_annonce_button.click()

        # Fill in the form to create an announcement
        categorie = self.browser.find_element_by_id("id_categorie")
        categorie.send_keys("V")

        type_bien = self.browser.find_element_by_id("id_type_bien")
        type_bien.send_keys("Appartement")

        surface = self.browser.find_element_by_id("id_surface")
        surface.send_keys("100")

        description = self.browser.find_element_by_id("id_description")
        description.send_keys("This is a test announcement")

        prix = self.browser.find_element_by_id("id_prix")
        prix.send_keys("1000")

        wilaya = self.browser.find_element_by_id("id_wilaya")
        wilaya.send_keys("16")

        commune = self.browser.find_element_by_id("id_commune")
        commune.send_keys("Alger")

        adresse = self.browser.find_element_by_id("id_adresse")
        adresse.send_keys("Some address")

        # Submit the form
        submit_button = self.browser.find_element_by_id("submit-button")
        submit_button.click()

        # Check that the announcement was created successfully
        success_message = self.browser.find_element_by_id("success-message")
        self.assertIn("Annonce créée avec succès", success_message.text)