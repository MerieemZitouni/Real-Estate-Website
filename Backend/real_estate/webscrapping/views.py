import requests
from bs4 import BeautifulSoup
import json

# URL of the page to be scraped
URL = "http://www.annonce-algerie.com/AnnoncesImmobilier.asp"

# Send a GET request to the URL and retrieve the content
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

# Find the table element with the class "listing"
annonces_container = soup.find("table", class_="listing")

# Check if the table was found
if annonces_container:
    annonces = annonces_container.find_all("tr")

    # Initialize an empty list to store the scraped data
    data = []

    # Loop through each row (annonce)
    for annonce in annonces:
        info = annonce.find_all("td")

        if len(info) == 6:
            # Extract the data from each cell
            category = info[0].text.strip()
            location = info[1].text.strip()
            address = info[2].text.strip()
            surface_area = info[3].text.strip()
            price = info[4].text.strip()
            inserted_on = info[5].text.strip()

            # Find the link to the annonce
            link = annonce.find("a")["href"]

            # Store the extracted data in a dictionary
            annonce_data = {
                "category": category,
                "location": location,
                "address": address,
                "surface_area": surface_area,
                "price": price,
                "inserted_on": inserted_on,
                "link": link
            }

            # Append the dictionary to the list of scraped data
            data.append(annonce_data)

    # Write the list of scraped data to a JSON file
    with open("annonces.json", "w") as file:
        json.dump(data, file)
else:
    # If the table was not found, print an error message
    print("The element with the specified attributes was not found.")
