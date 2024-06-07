
from bs4 import BeautifulSoup
import json
import requests

PARSING_DEPTH = 1

def yna_parser(cats):
    BASE_URL = "https://www.yna.co.kr"

    for cat in cats:
        for i in range(PARSING_DEPTH):
            target_url = f"{BASE_URL}/{cat}/{i}"
            res = requests.get(target_url)

            if res.status_code != 200:
                continue
            
            soup = BeautifulSoup(res.content.decode("utf-8"), "lxml")
            



def main():
    pass

if __name__ == "__main__":
    main()