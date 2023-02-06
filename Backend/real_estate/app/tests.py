from selenium import webdriver
from django.test import LiveServerTestCase
import unittest

class AnnonceCreationTest(LiveServerTestCase):

    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    def test_create_annonce(self):
        # Open the website
        self.browser.get(self.live_server_url)

        # Click the "deposer annonce" button
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

        # Check that the "announce" was created successfully
        success_message = self.browser.find_element_by_id("success-message")
        self.assertIn("Annonce créée avec succès", success_message.text)
        

class AnnonceDeleteTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_delete_annonce(self):
        # Open the page with the AI list
        self.driver.get("http://localhost:8000/api/annonces")
        # Find the delete button for the first advertisement
        delete_button = self.driver.find_element_by_css_selector("table tr:first-child td:last-child button")
        # Click "supprimer" button
        delete_button.click()
        # Confirm the deletion
        self.driver.switch_to.alert.accept()
        # Check that the advertisement is no longer in the list
        annonces = self.driver.find_elements_by_css_selector("table tr")
        self.assertEqual(len(annonces), 0)

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()


class SearchAiTest:
    def setup_method(self):
        self.driver = webdriver.Firefox()

    def teardown_method(self):
        self.driver.quit()

    def test_search_annonce(self):
        self.driver.get("http://localhost:8000/annonces/")
        search_box = self.driver.find_element_by_id("search_box")
        search_box.send_keys("Villa")
        search_box.submit()
        assert "No results found." not in self.driver.page_source